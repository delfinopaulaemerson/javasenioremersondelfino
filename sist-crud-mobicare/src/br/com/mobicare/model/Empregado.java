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
@Table(name="Empregado")
public class Empregado implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -5585095015687859822L;
	
	
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="SEQ_USER")
	@SequenceGenerator(name="SEQ_USER", sequenceName="id", allocationSize=1)
	@Column(name="id")
	private Long id;
	
	@Column(name="nome")
	private String nome;
	
	@Column(name="sobreNome")
	private String sobreNome;
	
	@Column(name="idade")
	private Integer idade;
	
	@Column(name="matricula")
	private String matricula;
	
	@Column(name="departamento_pk")
	private Long departamento_pk;
	
	@Column(name="nomeDepartamento")
	private String nomeDepartamento;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getSobreNome() {
		return sobreNome;
	}

	public void setSobreNome(String sobreNome) {
		this.sobreNome = sobreNome;
	}

	public Integer getIdade() {
		return idade;
	}

	public void setIdade(Integer idade) {
		this.idade = idade;
	}

	public Long getDepartamento_pk() {
		return departamento_pk;
	}

	public void setDepartamento_pk(Long departamento_pk) {
		this.departamento_pk = departamento_pk;
	}

	public String getNomeDepartamento() {
		return nomeDepartamento;
	}

	public void setNomeDepartamento(String nomeDepartamento) {
		this.nomeDepartamento = nomeDepartamento;
	}

	public String getMatricula() {
		return matricula;
	}

	public void setMatricula(String matricula) {
		this.matricula = matricula;
	}

}
