package br.com.mobicare.service;

import java.util.List;

import org.springframework.stereotype.Component;

import br.com.mobicare.model.Empregado;

@Component("empregradoFacade")
public interface EmpregradoFacade {

	void saveEmpregado(Empregado empregado)throws Exception;

	List<Empregado> findAllByEmpregados()throws Exception;

	void updateEmpregado(Empregado empregado)throws Exception;

	boolean findByMatricula(Empregado empregado)throws Exception;

	void deletarEmpregado(Empregado e)throws Exception;

}
