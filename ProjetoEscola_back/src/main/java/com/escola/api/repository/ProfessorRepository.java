package com.escola.api.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.escola.api.model.Professor;
import com.escola.api.repository.filter.ProfessorRepositoryQuery;

public interface ProfessorRepository extends JpaRepository<Professor, Long>, ProfessorRepositoryQuery{

	public Optional<Professor> findByEmail(String email);

}
