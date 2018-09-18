package com.escola.api.controller;

import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.escola.api.model.Aluno;
import com.escola.api.repository.AlunoRepository;
import com.escola.api.repository.filter.AlunoFilter;

@RestController
@RequestMapping("/aluno")
public class AlunoController {
	
	@Autowired
	private AlunoRepository alunoRepository;
	
	@GetMapping
	public Page<Aluno> listarAlunos(AlunoFilter alunoFilter, Pageable pageable){
		return this.alunoRepository.filtrar(alunoFilter, pageable);
	}
	
	@GetMapping("/{matricula}")
	public ResponseEntity<Aluno> listarAlunoPorMatricula(@Valid @PathVariable Long matricula){
		Optional<Aluno> aluno = this.alunoRepository.findById(matricula);
		return aluno.isPresent() ? ResponseEntity.ok(aluno.get()) : ResponseEntity.noContent().build();
	}
	
	@PostMapping
	public ResponseEntity<Aluno> salvarAluno(@Valid @RequestBody Aluno aluno){
		Aluno alunoSalvo = this.alunoRepository.save(aluno);
		return ResponseEntity.status(HttpStatus.CREATED).body(alunoSalvo);
	}
	
	@DeleteMapping("/{matricula}")
	public void deletarAluno(@Valid @PathVariable Long matricula) {
		this.alunoRepository.deleteById(matricula);
	}
	
	@PutMapping("/{matricula}")
	public ResponseEntity<Aluno> atualizarAluno(@PathVariable Long matricula, @Valid @RequestBody Aluno alunoReq){
		
		Optional<Aluno> alunoOpt = this.alunoRepository.findById(matricula);		
		BeanUtils.copyProperties(alunoReq, alunoOpt.get(), "matricula");
		Aluno alunoDepois =  alunoRepository.save(alunoOpt.get());
		
		return ResponseEntity.ok(alunoDepois);
	}

}
