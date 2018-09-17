package com.escola.api.model;

import java.io.Serializable;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="faltas")
public class Faltas implements Serializable{
	
	@EmbeddedId
	private FaltasId faltasid;
	
	@NotNull(message="O campo número não pode estar vazio!")
	private Long numero;

	public FaltasId getFaltasid() {
		return faltasid;
	}

	public void setFaltasid(FaltasId faltasid) {
		this.faltasid = faltasid;
	}

	public Long getNumero() {
		return numero;
	}

	public void setNumero(Long numero) {
		this.numero = numero;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((faltasid == null) ? 0 : faltasid.hashCode());
		result = prime * result + ((numero == null) ? 0 : numero.hashCode());
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
		Faltas other = (Faltas) obj;
		if (faltasid == null) {
			if (other.faltasid != null)
				return false;
		} else if (!faltasid.equals(other.faltasid))
			return false;
		if (numero == null) {
			if (other.numero != null)
				return false;
		} else if (!numero.equals(other.numero))
			return false;
		return true;
	}
	
	

}
