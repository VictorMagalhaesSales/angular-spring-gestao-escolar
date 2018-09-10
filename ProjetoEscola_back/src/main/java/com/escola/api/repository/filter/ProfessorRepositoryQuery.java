package com.escola.api.repository.filter;

import java.util.List;

import com.escola.api.model.Professor;

public interface ProfessorRepositoryQuery {

	public List<Professor> filtrar(ProfessorFilter professorFIlter);
}
