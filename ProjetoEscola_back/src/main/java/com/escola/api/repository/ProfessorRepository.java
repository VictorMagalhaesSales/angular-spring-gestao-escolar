package com.escola.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.escola.api.model.Professor;

public interface ProfessorRepository extends JpaRepository<Professor, Long> {

}
