package com.escola.api.repository.filter;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.escola.api.model.Aluno;

public interface AlunoRepositoryQuery  {
	
	public Page<Aluno> filtrar(AlunoFilter alunoFilter, Pageable pageable);
}
