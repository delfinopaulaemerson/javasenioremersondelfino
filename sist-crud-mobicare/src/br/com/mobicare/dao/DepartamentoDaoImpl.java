package br.com.mobicare.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import br.com.mobicare.model.Departamento;

@Component("departamentoDaoImpl")
public class DepartamentoDaoImpl implements DepartamentoDao {

	@PersistenceContext
	private EntityManager entityManager;

	@Override
	@Transactional(propagation = Propagation.REQUIRED, rollbackFor = { Exception.class })
	public void saveDepartamento(Departamento departamento) throws Exception {

		Departamento d = new Departamento();
		d.setNomeDepartamento(departamento.getNomeDepartamento());
		d.setCodigoDoDepartamento(departamento.getCodigoDoDepartamento());

		this.entityManager.persist(d);
		this.entityManager.flush();
		this.entityManager.clear();

	}

	@Override
	@Transactional(propagation = Propagation.REQUIRED, rollbackFor = { Exception.class })
	public List<Departamento> findAllByDepartamento() throws Exception {
		Query query = null;

		query = this.entityManager.createQuery(" FROM Departamento ORDER BY nomeDepartamento ");

		return query.getResultList();
	}

	@Override
	@Transactional(propagation = Propagation.REQUIRED, rollbackFor = { Exception.class })
	public void updateDepartamento(Departamento departamento) throws Exception {

		Departamento d = this.entityManager.find(Departamento.class, departamento.getId());

		d.setNomeDepartamento(departamento.getNomeDepartamento());
		d.setCodigoDoDepartamento(departamento.getCodigoDoDepartamento());

		this.entityManager.persist(d);
		this.entityManager.flush();
		this.entityManager.clear();

	}

	@Override
	@Transactional(propagation = Propagation.REQUIRED, rollbackFor = { Exception.class })
	public void deleteDepartamento(Departamento d) throws Exception {

		Departamento departamento = this.entityManager.find(Departamento.class, d.getId());

		this.entityManager.remove(departamento);
		this.entityManager.flush();
		this.entityManager.clear();

	}

	@Override
	@Transactional(propagation = Propagation.REQUIRED, rollbackFor = { Exception.class })
	public boolean isExisteCodigoDepartamento(String codigoDoDepartamento) throws Exception {
		Query query = null;
		boolean ok = false;
		try {

			query = this.entityManager
					.createQuery(" FROM Departamento d WHERE d.codigoDoDepartamento=:codigoDoDepartamento ");
			query.setParameter("codigoDoDepartamento", codigoDoDepartamento);

			Departamento d = (Departamento) query.getSingleResult();

			if (d == null)
				ok = false;

			if (d != null)
				ok = true;

		} catch (Exception e) {
			return ok = false;
		}

		return ok;
	}

	@Override
	@Transactional(propagation = Propagation.REQUIRED, rollbackFor = { Exception.class })
	public Departamento findDepartamentoById(Long opcDepartamento) throws Exception {
		
		return this.entityManager.find(Departamento.class, opcDepartamento);
	}
	
	public void setEntityManager(EntityManager entityManager) {
		this.entityManager = entityManager;
	}


}
