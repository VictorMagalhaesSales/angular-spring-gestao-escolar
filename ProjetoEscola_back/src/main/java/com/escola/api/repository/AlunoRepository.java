package com.escola.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.escola.api.model.Aluno;
import com.escola.api.repository.filter.AlunoRepositoryQuery;

public interface AlunoRepository extends JpaRepository<Aluno, Long>, AlunoRepositoryQuery{

}
