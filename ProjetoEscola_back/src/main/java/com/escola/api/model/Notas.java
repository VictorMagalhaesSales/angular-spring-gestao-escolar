package com.escola.api.model;

import java.io.Serializable;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "notas")
public class Notas implements Serializable{
	
	@EmbeddedId
	private NotasId notasid;
	
	private Double nota;

	public NotasId getNotasid() {
		return notasid;
	}

	public void setNotasid(NotasId notasid) {
		this.notasid = notasid;
	}

	public Double getNota() {
		return nota;
	}

	public void setNota(Double nota) {
		this.nota = nota;
	}

	
	
	
}
