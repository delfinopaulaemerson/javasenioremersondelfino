package br.com.mobicare.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;


@Entity
@Table(name="Departamento")
public class Departamento implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1565023160861474146L;
	
	
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="SEQ_USER")
	@SequenceGenerator(name="SEQ_USER", sequenceName="id", allocationSize=1)
	@Column(name="id")
	private Long id;
	
	@Column(name="codigoDoDepartamento")
	private String codigoDoDepartamento;
	
	@Column(name="nomeDepartamento")
	private String nomeDepartamento;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCodigoDoDepartamento() {
		return codigoDoDepartamento;
	}

	public void setCodigoDoDepartamento(String codigoDoDepartamento) {
		this.codigoDoDepartamento = codigoDoDepartamento;
	}

	public String getNomeDepartamento() {
		return nomeDepartamento;
	}

	public void setNomeDepartamento(String nomeDepartamento) {
		this.nomeDepartamento = nomeDepartamento;
	}
	
}
