package com.escola.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.escola.api.model.Notas;
import com.escola.api.repository.NotasRepository;

@RestController
@RequestMapping("notas")
public class NotasController {

	@Autowired
	private NotasRepository notasRepository;
	
	@GetMapping
	public List<Notas> listarNotas(){
		return this.notasRepository.findAll();
	}
	
	@PostMapping
	public ResponseEntity<Notas> salvarNota(@RequestBody Notas nota){
		Notas n = this.notasRepository.save(nota);
		return ResponseEntity.status(HttpStatus.CREATED).body(n);
	}
	
}
