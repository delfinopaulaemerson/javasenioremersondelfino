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

import br.com.mobicare.model.Departamento;
import br.com.mobicare.service.DepartamentoFacade;

/**
 * 
 * @author Emerson Delfino
 *
 */
@Component("departamentoBean")
@ManagedBean(name = "departamentoBean")
@ViewScoped
public class DepartamentoBean {

	private static Logger logger = Logger.getLogger(DepartamentoBean.class);

	private static Long ZERO = new Long(0);

	private Departamento departamento;

	@Autowired
	private DepartamentoFacade facade;

	private List<Departamento> departamentos;

	private DataModel<Departamento> datamodel;

	@PostConstruct
	public void init() {

		this.departamento = new Departamento();
		this.departamentos = new ArrayList<Departamento>();

	}

	/**
	 * metodo responsavel pelo limpeza dos componentes
	 */
	public void clearComponent() {
		this.departamento = new Departamento();
		this.departamentos.removeAll(this.departamentos);

	}

	/**
	 * metodo responsavel pela requisicao do formulario de cadastro ou
	 * atualizacao do departamento
	 * 
	 * @return String
	 */
	public String doCadastroDepartamento() {

		try {
			this.clearComponent();
		} catch (Exception e) {
			logger.error("br.com.mobicare.bean.departamentoBean.doCadastroDepartamento " + e.getMessage());
			FacesMessage error = new FacesMessage(FacesMessage.SEVERITY_ERROR, "", "Favor contactar o administrador");
			FacesContext.getCurrentInstance().addMessage(null, error);

			return "/begin/begin";
		}
		return "/departamento/cadastro";
	}

	/**
	 * metodo responsavel pelo cadastro ou atualizacao dos departamentos
	 * 
	 * @return String
	 */
	public String cadastrarDepartamento() {
		try {

			boolean ok = this.facade.isExisteCodigoDepartamento(this.departamento.getCodigoDoDepartamento());

			if((ok)&&(this.departamento.getId().equals(ZERO))){
				FacesMessage error = new FacesMessage(FacesMessage.SEVERITY_ERROR, "", "Código do departamento já existe!");
				FacesContext.getCurrentInstance().addMessage(null, error);
				return "/begin/begin";
				
			}else{

				if (this.departamento.getId().equals(ZERO))
					this.facade.saveDepartamento(this.departamento);

				if (this.departamento.getId() > ZERO)
					this.facade.updateDepartamento(this.departamento);

				FacesMessage sucesso = new FacesMessage(FacesMessage.SEVERITY_INFO, "",
						"Departamento foi cadastrado com sucesso!");
				FacesContext.getCurrentInstance().addMessage(null, sucesso);
			}
			

		} catch (Exception e) {
			logger.error("br.com.mobicare.bean.departamentoBean.cadastrarDepartamento " + e.getMessage());
			FacesMessage error = new FacesMessage(FacesMessage.SEVERITY_ERROR, "", "Favor contactar o administrador");
			FacesContext.getCurrentInstance().addMessage(null, error);
			
			return "/departamento/cadastro";
		}

		return "/begin/begin";
	}

	/**
	 * metodo responsavel pela exclusao do departamento
	 * 
	 * @param d
	 * @return String
	 */
	public String deletar(Departamento d) {
		try {

			this.facade.deleteDepartamento(d);

			FacesMessage sucesso = new FacesMessage(FacesMessage.SEVERITY_INFO, "",
					"Departamento foi excluido com sucesso!");
			FacesContext.getCurrentInstance().addMessage(null, sucesso);

		} catch (Exception e) {
			logger.error("br.com.mobicare.bean.departamentoBean.deletar " + e.getMessage());
			FacesMessage error = new FacesMessage(FacesMessage.SEVERITY_ERROR, "", "Favor contactar o administrador");
			FacesContext.getCurrentInstance().addMessage(null, error);

			return "/departamento/edicao";
		}

		return "/begin/begin";
	}

	/**
	 * metodo responsavel pela requisicao do formulario de edicao
	 * 
	 * @return String
	 */
	public String doEdicao() {
		try {
			this.clearComponent();

			this.departamentos = this.facade.findAllByDepartamento();

			this.datamodel = new ListDataModel<Departamento>(this.departamentos);

		} catch (Exception e) {
			logger.error("br.com.mobicare.bean.departamentoBean.doEdicao " + e.getMessage());
			FacesMessage sucesso = new FacesMessage(FacesMessage.SEVERITY_ERROR, "", "Favor contactar o administrador");
			FacesContext.getCurrentInstance().addMessage(null, sucesso);

			return "/departamento/edicao";
		}
		return "/departamento/edicao";
	}

	public String edicao(Departamento d) {
		try {

			this.departamento = d;

		} catch (Exception e) {
			logger.error("br.com.mobicare.bean.departamentoBean.edicao " + e.getMessage());
			FacesMessage sucesso = new FacesMessage(FacesMessage.SEVERITY_ERROR, "", "Favor contactar o administrador");
			FacesContext.getCurrentInstance().addMessage(null, sucesso);

			return "/departamento/edicao";
		}

		return "/departamento/cadastro";
	}

	/**
	 * metodo responsavel pelo link voltar
	 * 
	 * @return
	 */
	public String doVoltar() {

		return "/begin/begin";
	}
	
	/**
	 * logout do sistema
	 * @return String
	 */
	public String sair(){
		
		return "/index";
	}

	public Departamento getDepartamento() {
		return departamento;
	}

	public void setDepartamento(Departamento departamento) {
		this.departamento = departamento;
	}

	public List<Departamento> getDepartamentos() {
		return departamentos;
	}

	public void setDepartamentos(List<Departamento> departamentos) {
		this.departamentos = departamentos;
	}

	public DataModel<Departamento> getDatamodel() {
		return datamodel;
	}

	public void setDatamodel(DataModel<Departamento> datamodel) {
		this.datamodel = datamodel;
	}

}
