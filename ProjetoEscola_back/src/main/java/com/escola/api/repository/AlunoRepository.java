package com.escola.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.escola.api.model.Aluno;

public interface AlunoRepository extends JpaRepository<Aluno, Long>{

}
