package com.escola.api.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.escola.api.model.Faltas;
import com.escola.api.model.FaltasId;
import com.escola.api.repository.FaltasRepository;

@RestController
@RequestMapping("/faltas")
public class FaltasController {

	@Autowired
	private FaltasRepository faltasRepository;
	
	@GetMapping
	@PreAuthorize("hasAuthority('ROLE_LISTAR_FALTAS')")
	public List<Faltas> listarFaltas(){
		return this.faltasRepository.findAll();
	}
	
	@PostMapping
	@PreAuthorize("hasAuthority('ROLE_LISTAR_FALTA')")
	public ResponseEntity<Faltas> adicionarFalta(@Valid @RequestBody Faltas falta){
		Faltas faltaok = this.faltasRepository.save(falta);
		return ResponseEntity.ok(falta);
	}
	
	@DeleteMapping("/{aluno}/{bimestre}/{materia}")
	@PreAuthorize("hasAuthority('ROLE_DELETAR_FALTA')")
	public void deletarFalta(@PathVariable("aluno") Long aluno, @PathVariable("bimestre") Long bimestre, @PathVariable("materia") String materia) {
		FaltasId faltasid = new FaltasId();
		faltasid.setAluno(aluno);
		faltasid.setBimestre(bimestre);
		faltasid.setMateria(materia);
		this.faltasRepository.delete(faltasid);
	}
}
