package br.com.mobicare.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.mobicare.dao.DepartamentoDao;
import br.com.mobicare.model.Departamento;

@Component("departamentoFacadeImpl")
public class DepartamentoFacadeImpl implements DepartamentoFacade{

	@Autowired
	private DepartamentoDao dao;
	
	@Override
	public void saveDepartamento(Departamento departamento)throws Exception {
		this.dao.saveDepartamento(departamento);
		
	}
	
	@Override
	public List<Departamento> findAllByDepartamento() throws Exception {
		
		return this.dao.findAllByDepartamento();
	}
	

	public void setDao(DepartamentoDao dao) {
		this.dao = dao;
	}

	@Override
	public void updateDepartamento(Departamento departamento) throws Exception {
		this.dao.updateDepartamento(departamento);
		
	}

	@Override
	public boolean isExisteCodigoDepartamento(String codigoDoDepartamento) throws Exception {
		
		return this.dao.isExisteCodigoDepartamento(codigoDoDepartamento);
	}
	
	@Override
	public Departamento findDepartamentoById(Long opcDepartamento) throws Exception {
		return this.dao.findDepartamentoById(opcDepartamento);
	}
	
	@Override
	public void deleteDepartamento(Departamento d) throws Exception {
		this.dao.deleteDepartamento(d);
		
	}






}
