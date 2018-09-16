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
	
	private Long numero1;
	
	private Long numero2;
	
	private Long numero3;
	
	private Long numero4;

	public FaltasId getFaltasid() {
		return faltasid;
	}

	public void setFaltasid(FaltasId faltasid) {
		this.faltasid = faltasid;
	}
	
	

	public Long getNumero1() {
		return numero1;
	}

	public void setNumero1(Long numero1) {
		this.numero1 = numero1;
	}

	public Long getNumero2() {
		return numero2;
	}

	public void setNumero2(Long numero2) {
		this.numero2 = numero2;
	}

	public Long getNumero3() {
		return numero3;
	}

	public void setNumero3(Long numero3) {
		this.numero3 = numero3;
	}

	public Long getNumero4() {
		return numero4;
	}

	public void setNumero4(Long numero4) {
		this.numero4 = numero4;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((faltasid == null) ? 0 : faltasid.hashCode());
		result = prime * result + ((numero1 == null) ? 0 : numero1.hashCode());
		result = prime * result + ((numero2 == null) ? 0 : numero2.hashCode());
		result = prime * result + ((numero3 == null) ? 0 : numero3.hashCode());
		result = prime * result + ((numero4 == null) ? 0 : numero4.hashCode());
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
		if (numero1 == null) {
			if (other.numero1 != null)
				return false;
		} else if (!numero1.equals(other.numero1))
			return false;
		if (numero2 == null) {
			if (other.numero2 != null)
				return false;
		} else if (!numero2.equals(other.numero2))
			return false;
		if (numero3 == null) {
			if (other.numero3 != null)
				return false;
		} else if (!numero3.equals(other.numero3))
			return false;
		if (numero4 == null) {
			if (other.numero4 != null)
				return false;
		} else if (!numero4.equals(other.numero4))
			return false;
		return true;
	}

	
	
	

}
