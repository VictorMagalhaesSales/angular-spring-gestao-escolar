package com.escola.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.escola.api.model.Notas;
import com.escola.api.model.NotasId;

public interface NotasRepository extends JpaRepository<Notas, NotasId>{

}
