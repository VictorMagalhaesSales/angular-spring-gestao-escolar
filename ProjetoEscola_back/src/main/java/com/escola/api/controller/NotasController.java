package com.escola.api.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.escola.api.model.Notas;
import com.escola.api.model.NotasId;
import com.escola.api.repository.NotasRepository;

@RestController
@RequestMapping("notas")
public class NotasController {

	@Autowired
	private NotasRepository notasRepository;
	
	@GetMapping
	@PreAuthorize("hasAuthority('ROLE_LISTAR_NOTAS')")
	public List<Notas> listarNotas(){
		return this.notasRepository.findAll();
	}
	
	@PostMapping
	@PreAuthorize("hasAuthority('ROLE_SALVAR_NOTA')")
	public ResponseEntity<Notas> salvarNota(@Valid @RequestBody Notas nota){
		Notas n = this.notasRepository.save(nota);
		return ResponseEntity.status(HttpStatus.CREATED).body(n);
	}
	
	@DeleteMapping("/{aluno}/{bimestre}/{materia}")
	@PreAuthorize("hasAuthority('ROLE_DELETAR_NOTA')")
	public void deletarNota(@PathVariable("aluno") Long aluno, @PathVariable("bimestre") Long bimestre, @PathVariable("materia") String materia) {
		NotasId notasid = new NotasId();
		notasid.setAluno(aluno);
		notasid.setBimestre(bimestre);
		notasid.setMateria(materia);
		this.notasRepository.delete(notasid);
	}
	
	@PutMapping("/{aluno}/{bimestre}/{materia}")
	@PreAuthorize("hasAuthority('ROLE_EDITAR_FALTA')")
	public ResponseEntity<Notas> atualizarNota(@PathVariable("aluno") Long aluno, @PathVariable("bimestre") Long bimestre, @PathVariable("materia") String materia,@Valid @RequestBody Notas notaMod) {
		NotasId notasid = new NotasId();
		notasid.setAluno(aluno);
		notasid.setBimestre(bimestre);
		notasid.setMateria(materia);
			
		Notas notas = this.notasRepository.findOne(notasid);
		
		BeanUtils.copyProperties(notaMod, notas, "notasId");
		
		//this.notasRepository.deleteById(notasid);
		Notas notaDepois = this.notasRepository.save(notas);
		
		
		return ResponseEntity.ok(notaDepois);
	}
}






















