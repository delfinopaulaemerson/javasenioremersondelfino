package br.com.mobicare.service;

import java.util.List;

import org.springframework.stereotype.Component;

import br.com.mobicare.model.Departamento;

@Component("departamentoFacade")
public interface DepartamentoFacade {

	void saveDepartamento(Departamento departamento)throws Exception;

	List<Departamento> findAllByDepartamento() throws Exception;

	void updateDepartamento(Departamento departamento)throws Exception;

	void deleteDepartamento(Departamento d)throws Exception;

	boolean isExisteCodigoDepartamento(String codigoDoDepartamento)throws Exception;

	Departamento findDepartamentoById(Long opcDepartamento)throws Exception;


}