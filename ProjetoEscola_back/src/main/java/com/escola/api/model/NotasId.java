package com.escola.api.model;

import java.io.Serializable;

import javax.persistence.Embeddable;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Embeddable
public class NotasId implements Serializable{
	
	@NotNull(message="O campo matéria não pode ficar vazio")
	private String materia;
	
	@NotNull(message="O campo bimestre não pode ficar vazio")
	@Size(max = 4, message = "Só existem 4 bimestres!")
	private Long bimestre;
	
	@NotNull(message="O campo alunp não pode ficar vazio")
	private Long aluno;
	
	public NotasId() {
		
	}
	
	public Long getAluno() {
		return aluno;
	}



	public void setAluno(Long aluno) {
		this.aluno = aluno;
	}



	public String getMateria() {
		return materia;
	}

	public void setMateria(String materia) {
		this.materia = materia;
	}

	public Long getBimestre() {
		return bimestre;
	}

	public void setBimestre(Long bimestre) {
		this.bimestre = bimestre;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((aluno == null) ? 0 : aluno.hashCode());
		result = prime * result + ((bimestre == null) ? 0 : bimestre.hashCode());
		result = prime * result + ((materia == null) ? 0 : materia.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		NotasId other = (NotasId) obj;
		if (aluno == null) {
			if (other.aluno != null)
				return false;
		} else if (!aluno.equals(other.aluno))
			return false;
		if (bimestre == null) {
			if (other.bimestre != null)
				return false;
		} else if (!bimestre.equals(other.bimestre))
			return false;
		if (materia == null) {
			if (other.materia != null)
				return false;
		} else if (!materia.equals(other.materia))
			return false;
		return true;
	}

	
	
	
}
