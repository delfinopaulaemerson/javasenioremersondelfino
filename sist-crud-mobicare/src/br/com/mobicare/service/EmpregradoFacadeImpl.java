package br.com.mobicare.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.mobicare.dao.EmpregradoDao;
import br.com.mobicare.model.Empregado;

@Component("empregradoFacadeImpl")
public class EmpregradoFacadeImpl implements EmpregradoFacade {
	
	@Autowired
	private EmpregradoDao dao;

	@Override
	public void saveEmpregado(Empregado empregado) throws Exception {
		this.dao.saveEmpregado(empregado);
		
	}

	@Override
	public List<Empregado> findAllByEmpregados() throws Exception {
		
		return this.dao.findAllByEmpregados();
	}
	
	@Override
	public void updateEmpregado(Empregado empregado) throws Exception {
		this.dao.updateEmpregado(empregado);
		
	}
	
	@Override
	public boolean findByMatricula(Empregado empregado) throws Exception {
		
		return this.dao.findByMatricula(empregado);
	}
	
	@Override
	public void deletarEmpregado(Empregado e) throws Exception {
		this.dao.deletarEmpregado(e);
		
	}
	
	public void setDao(EmpregradoDao dao) {
		this.dao = dao;
	}




	
}
