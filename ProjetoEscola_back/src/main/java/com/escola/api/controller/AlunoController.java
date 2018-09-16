package com.escola.api.controller;

import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.escola.api.model.Aluno;
import com.escola.api.model.Professor;
import com.escola.api.repository.AlunoRepository;
import com.escola.api.repository.ProfessorRepository;
import com.escola.api.repository.filter.AlunoFilter;

@RestController
@RequestMapping("/aluno")
public class AlunoController {
	
	@Autowired
	private AlunoRepository alunoRepository;
	
	@Autowired
	private ProfessorRepository professorRepository;
	
	BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
	
	@GetMapping
	@PreAuthorize("hasAuthority('ROLE_LISTAR_ALUNOS')")
	public Page<Aluno> listarAlunos(AlunoFilter alunoFilter, Pageable pageable){
		return this.alunoRepository.filtrar(alunoFilter, pageable);
	}
	
	@GetMapping("/{matricula}")
	@PreAuthorize("hasAuthority('ROLE_LISTAR_ALUNO')")
	public ResponseEntity<Aluno> listarAlunoPorMatricula(@Valid @PathVariable Long matricula){
		Aluno aluno = this.alunoRepository.findOne(matricula);
		return aluno != null ? ResponseEntity.ok(aluno) : ResponseEntity.noContent().build();
	}
	
	@PostMapping
	@PreAuthorize("hasAuthority('ROLE_SALVAR_ALUNO')")
	public ResponseEntity<Aluno> salvarAluno(@Valid @RequestBody Aluno aluno) throws Exception{
		for (Professor professor: this.professorRepository.findAll()) {
			if(professor.getEmail().equalsIgnoreCase(aluno.getEmail())) {
				throw new DataIntegrityViolationException("Email já cadastrado");
			}
		}
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		aluno.setSenha( encoder.encode(aluno.getSenha()) );
		Aluno alunoSalvo = this.alunoRepository.save(aluno);
		return ResponseEntity.status(HttpStatus.CREATED).body(alunoSalvo);		
	}
	
	@DeleteMapping("/{matricula}")
	@PreAuthorize("hasAuthority('ROLE_DELETAR_ALUNO')")
	public void deletarAluno(@Valid @PathVariable Long matricula) {
		this.alunoRepository.delete(matricula);
	}
	
	@PutMapping("/{matricula}")
	@PreAuthorize("hasAuthority('ROLE_EDITAR_ALUNO')")
	public ResponseEntity<Aluno> atualizarAluno(@PathVariable Long matricula, @Valid @RequestBody Aluno alunoReq){
		for (Professor professor: this.professorRepository.findAll()) {
			if(professor.getEmail().equalsIgnoreCase(alunoReq.getEmail())) {
				throw new DataIntegrityViolationException("Email já cadastrado");
			}
		}
		alunoReq.setSenha(encoder.encode(alunoReq.getSenha()));
		Aluno alunoOpt = this.alunoRepository.findOne(matricula);		
		BeanUtils.copyProperties(alunoReq, alunoOpt, "matricula");
		Aluno alunoDepois =  alunoRepository.save(alunoOpt);
		
		return ResponseEntity.ok(alunoDepois);
	}

}
