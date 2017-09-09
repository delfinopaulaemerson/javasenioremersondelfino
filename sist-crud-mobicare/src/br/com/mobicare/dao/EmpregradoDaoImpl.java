package br.com.mobicare.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import br.com.mobicare.model.Empregado;

@Component("empregradoDaoImpl")
public class EmpregradoDaoImpl implements EmpregradoDao{
	
	@PersistenceContext
	private EntityManager entityManager;

	@Override
	@Transactional(propagation = Propagation.REQUIRED, rollbackFor = { Exception.class })
	public void saveEmpregado(Empregado empregado) throws Exception {
		Empregado e = new Empregado();
		
		e.setNome(empregado.getNome());
		e.setSobreNome(empregado.getSobreNome());
		e.setIdade(empregado.getIdade());
		e.setMatricula(empregado.getMatricula());
		e.setDepartamento_pk(empregado.getDepartamento_pk());
		e.setNomeDepartamento(empregado.getNomeDepartamento());
		
		this.entityManager.persist(e);
		this.entityManager.flush();
		this.entityManager.clear();
		
	}

	@Override
	@Transactional(propagation = Propagation.REQUIRED, rollbackFor = { Exception.class })
	public List<Empregado> findAllByEmpregados() throws Exception {
		Query query = null;
		
		query = this.entityManager.createQuery("FROM Empregado ORDER BY nome");
		
		return query.getResultList();
	}
	
	@Override
	@Transactional(propagation = Propagation.REQUIRED, rollbackFor = { Exception.class })
	public void updateEmpregado(Empregado empregado) throws Exception {
		
	 Empregado e = this.entityManager.find(Empregado.class, empregado.getId());
	 
	    e.setNome(empregado.getNome());
		e.setSobreNome(empregado.getSobreNome());
		e.setIdade(empregado.getIdade());
		e.setMatricula(empregado.getMatricula());
		e.setDepartamento_pk(empregado.getDepartamento_pk());
		e.setNomeDepartamento(empregado.getNomeDepartamento());
		
		this.entityManager.persist(e);
		this.entityManager.flush();
		this.entityManager.clear();
		
	}
	
	
	@Override
	@Transactional(propagation = Propagation.REQUIRED, rollbackFor = { Exception.class })
	public boolean findByMatricula(Empregado empregado) throws Exception {
		Query query = null;
		boolean ok = false;
		try {
			query = this.entityManager.createQuery("SELECT e FROM Empregado e WHERE e.matricula=:matricula ");
			
			Empregado e =(Empregado) query.getSingleResult();
			
			if(e == null)
				ok = false;
			
			if(e != null)
				ok = true;
				
			
		} catch (Exception e) {
			return ok;
		}
		
		return ok;
	}
	
	
	@Override
	@Transactional(propagation = Propagation.REQUIRED, rollbackFor = { Exception.class })
	public void deletarEmpregado(Empregado e) throws Exception {
		
		Empregado empregado = this.entityManager.find(Empregado.class, e.getId());
		
		this.entityManager.remove(empregado);
		this.entityManager.flush();
		this.entityManager.clear();
		
	}
	
	public void setEntityManager(EntityManager entityManager) {
		this.entityManager = entityManager;
	}
	
}
