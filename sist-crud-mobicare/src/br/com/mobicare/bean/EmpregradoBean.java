package br.com.mobicare.bean;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ViewScoped;
import javax.faces.context.FacesContext;
import javax.faces.model.DataModel;
import javax.faces.model.ListDataModel;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
/**
 * 
 * @author Emerson delfino
 *
 */

import br.com.mobicare.model.Departamento;
import br.com.mobicare.model.Empregado;
import br.com.mobicare.service.DepartamentoFacade;
import br.com.mobicare.service.EmpregradoFacade;
@Component("empregradoBean")
@ManagedBean(name = "empregradoBean")
@ViewScoped
public class EmpregradoBean {
	
	private static Logger logger = Logger.getLogger(EmpregradoBean.class);
	
	private static Long ZERO = new Long(0);
	
	private Empregado empregado;
	
	private Departamento departamento;
	
	private Long opcDepartamento;
	
	private List<Departamento> departamentos;
	
	private List<Empregado> empregados;
	
	private DataModel<Empregado> datamodel;
	
	@Autowired
	private DepartamentoFacade departamentoFacade;
	
	@Autowired
	private EmpregradoFacade empregadoFacade;
	
	
	@PostConstruct
	public void init(){
		this.empregado = new Empregado();
		this.departamentos = new ArrayList<Departamento>();
		this.empregados = new ArrayList<Empregado>();
		this.departamento = new Departamento();
	}
	
	/**
	 * metodo responsavel pela limpeza dos componentes
	 */
	public void clearComponent(){	
		this.empregado = new Empregado();
		this.departamento = new Departamento();
		this.setOpcDepartamento(null);
		this.departamentos.removeAll(departamentos);
		this.empregados.removeAll(this.empregados);
	}
	
	/**
	 * responsavel pela requisicao do formulario de cadastro
	 * @return String
	 */
	public String doCadastro(){
		try {
			this.clearComponent();
			this.departamentos = this.departamentoFacade.findAllByDepartamento();
		} catch (Exception e) {
			logger.error("br.com.mobicare.bean.empregradoBean.doCadastro" + e.getMessage());
			FacesMessage error = new FacesMessage(FacesMessage.SEVERITY_ERROR, "", "Favor contactar o administrador");
			FacesContext.getCurrentInstance().addMessage(null, error);
			return "/begin/begin";
		}
		return "/empregado/cadastro";
	}
	
	/**
	 * metodo responsavel pelo cadastro e atualizacao de empregado
	 * @return String
	 */
	public String cadastrarEmpregado(){
		try{
				
			boolean ok  = this.empregadoFacade.findByMatricula(this.empregado);
			
			if((ok)&&(this.empregado.getId().equals(ZERO))){
				FacesMessage error = new FacesMessage(FacesMessage.SEVERITY_ERROR, "", "Matrícula do empregado já existe!");
				FacesContext.getCurrentInstance().addMessage(null, error);
			}
			
			if(!ok){
				this.empregado.setDepartamento_pk(getOpcDepartamento());
				this.departamento = this.departamentoFacade.findDepartamentoById(getOpcDepartamento());
				
				if(getOpcDepartamento() > ZERO)
					this.empregado.setNomeDepartamento(this.departamento.getNomeDepartamento());
				
				if(this.empregado.getId().equals(ZERO))
					this.empregadoFacade.saveEmpregado(this.empregado);
				
				if(this.empregado.getId() > ZERO)
					this.empregadoFacade.updateEmpregado(this.empregado);
				
				FacesMessage sucesso = new FacesMessage(FacesMessage.SEVERITY_INFO, "",
						"Empregado foi cadastrado com sucesso!");
				FacesContext.getCurrentInstance().addMessage(null, sucesso);				
			}
			
		} catch (Exception e) {
			logger.error("br.com.mobicare.bean.empregradoBean.cadastrarEmpregado" + e.getMessage());
			FacesMessage error = new FacesMessage(FacesMessage.SEVERITY_ERROR, "", "Favor contactar o administrador");
			FacesContext.getCurrentInstance().addMessage(null, error);
			return "/empregado/cadastro";
		}
		return "/begin/begin";
	}
	
	/**
	 * metodo responsavel pela requisicao do 
	 * formulario de edicao
	 * @return String
	 */
	public String doEdicao(){
		try {
			
			this.clearComponent();
			
			this.empregados = this.empregadoFacade.findAllByEmpregados();
			
			this.datamodel = new ListDataModel<Empregado>(this.empregados);
			
		} catch (Exception e) {
			logger.error("br.com.mobicare.bean.empregradoBean.doEdicao" + e.getMessage());
			FacesMessage error = new FacesMessage(FacesMessage.SEVERITY_ERROR, "", "Favor contactar o administrador");
			FacesContext.getCurrentInstance().addMessage(null, error);
			return "/begin/begin";
		}
		
		return "/empregado/edicao";
	}
	
	public String deletar(Empregado e){
		try {
			
			this.empregadoFacade.deletarEmpregado(e);
			
			FacesMessage sucesso = new FacesMessage(FacesMessage.SEVERITY_INFO, "",
					"Empregado foi excluido com sucesso!");
			FacesContext.getCurrentInstance().addMessage(null, sucesso);	
			
		}  catch (Exception ex) {
			logger.error("br.com.mobicare.bean.empregradoBean.deletar" + ex.getMessage());
			FacesMessage error = new FacesMessage(FacesMessage.SEVERITY_ERROR, "", "Favor contactar o administrador");
			FacesContext.getCurrentInstance().addMessage(null, error);
			return "/empregado/edicao";
		}
		
		return "/begin/begin";
		
	}
	
	
	/**
	 * metodo responsavel pela requisicao do formulario
	 * begin
	 * @return
	 */
	public String doVoltar(){
	 try {
		this.clearComponent();
	 } catch (Exception e) {
			logger.error("br.com.mobicare.bean.empregradoBean.doEdicao" + e.getMessage());
			FacesMessage error = new FacesMessage(FacesMessage.SEVERITY_ERROR, "", "Favor contactar o administrador");
			FacesContext.getCurrentInstance().addMessage(null, error);
			return "/empregado/edicao";
		}
	 
		return"/begin/begin";
	}
	
	/**
	 * logout do sistema
	 * @return String
	 */
	public String sair(){
		
		return "/index";
	}
	
	/**
	 * metodo que efetua a requisicao para o formulario de 
	 * edicao de empregado
	 * @param e
	 * @return String
	 */
	public String edicao(Empregado e){
		try {
			this.empregado = e;
			this.setOpcDepartamento(e.getDepartamento_pk());
			this.departamentos = this.departamentoFacade.findAllByDepartamento();
		} catch (Exception ex) {
			logger.error("br.com.mobicare.bean.empregradoBean.edicao" + ex.getMessage());
			FacesMessage error = new FacesMessage(FacesMessage.SEVERITY_ERROR, "", "Favor contactar o administrador");
			FacesContext.getCurrentInstance().addMessage(null, error);
			return "/empregado/edicao";
		}
		
		return "/empregado/cadastro";
	}
	
	


	
	public Empregado getEmpregado() {
		return empregado;
	}


	public void setEmpregado(Empregado empregado) {
		this.empregado = empregado;
	}


	public Long getOpcDepartamento() {
		return opcDepartamento;
	}


	public void setOpcDepartamento(Long opcDepartamento) {
		this.opcDepartamento = opcDepartamento;
	}


	public void setDepartamentos(List<Departamento> departamentos) {
		this.departamentos = departamentos;
	}


	public List<Departamento> getDepartamentos() {
		return departamentos;
	}


	public void setEmpregadoFacade(EmpregradoFacade empregadoFacade) {
		this.empregadoFacade = empregadoFacade;
	}

	public DataModel<Empregado> getDatamodel() {
		return datamodel;
	}

	public void setDatamodel(DataModel<Empregado> datamodel) {
		this.datamodel = datamodel;
	}

	public List<Empregado> getEmpregados() {
		return empregados;
	}

	public void setEmpregados(List<Empregado> empregados) {
		this.empregados = empregados;
	}
	
}
