package com.escola.api.controller;

import java.awt.List;
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
import com.escola.api.model.Faltas;
import com.escola.api.model.FaltasId;
import com.escola.api.model.Notas;
import com.escola.api.model.NotasId;
import com.escola.api.model.Professor;
import com.escola.api.repository.AlunoRepository;
import com.escola.api.repository.FaltasRepository;
import com.escola.api.repository.NotasRepository;
import com.escola.api.repository.ProfessorRepository;
import com.escola.api.repository.filter.AlunoFilter;

@RestController
@RequestMapping("/aluno")
public class AlunoController {
	
	@Autowired
	private AlunoRepository alunoRepository;
	
	@Autowired
	private ProfessorRepository professorRepository;
	
	@Autowired
	private NotasRepository notasRepository;
	
	@Autowired
	private FaltasRepository faltasRepository;
	
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
		
		Notas n1 = notaJava(alunoSalvo.getMatricula());
		this.notasRepository.save(n1);
		Notas n2 = notaPHP(alunoSalvo.getMatricula());
		this.notasRepository.save(n2);
		Notas n3 = notaJavaScript(alunoSalvo.getMatricula());
		this.notasRepository.save(n3);
		Notas n4 = notaC(alunoSalvo.getMatricula());
		this.notasRepository.save(n4);
		Notas n5 = notaAngular(alunoSalvo.getMatricula());
		this.notasRepository.save(n5);
		Notas n6 = notaSpring(alunoSalvo.getMatricula());
		this.notasRepository.save(n6);
		Notas n7 = notaTypeScript(alunoSalvo.getMatricula());
		this.notasRepository.save(n7);
		Notas n8 = notaReact(alunoSalvo.getMatricula());
		this.notasRepository.save(n8);
		Notas n9 = notaMySql(alunoSalvo.getMatricula());
		this.notasRepository.save(n9);
		
		Faltas f1 = faltaJava(alunoSalvo.getMatricula());
		this.faltasRepository.save(f1);
		Faltas f2 = faltaPHP(alunoSalvo.getMatricula());
		this.faltasRepository.save(f2);
		Faltas f3 = faltaJavaScript(alunoSalvo.getMatricula());
		this.faltasRepository.save(f3);
		Faltas f4 = faltaC(alunoSalvo.getMatricula());
		this.faltasRepository.save(f4);
		Faltas f5 = faltaAngular(alunoSalvo.getMatricula());
		this.faltasRepository.save(f5);
		Faltas f6 = faltaSpring(alunoSalvo.getMatricula());
		this.faltasRepository.save(f6);
		Faltas f7 = faltaTypeScript(alunoSalvo.getMatricula());
		this.faltasRepository.save(f7);
		Faltas f8 = faltaReact(alunoSalvo.getMatricula());
		this.faltasRepository.save(f8);
		Faltas f9 = faltaMySql(alunoSalvo.getMatricula());
		this.faltasRepository.save(f9);
		
		return ResponseEntity.status(HttpStatus.CREATED).body(alunoSalvo);		
	}

	@DeleteMapping("/{matricula}")
	@PreAuthorize("hasAuthority('ROLE_DELETAR_ALUNO')")
	public void deletarAluno(@Valid @PathVariable Long matricula) {
		for(Notas nota : this.notasRepository.findAll()) {
			if(nota.getNotasid().getAluno() == matricula) {
				NotasId id = new NotasId();
				id.setAluno(matricula);
				id.setMateria(nota.getNotasid().getMateria());
				this.notasRepository.delete(id);
			}
		}
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
	
	private Notas notaJava(Long matricula) {
		Notas nJava = new Notas();
		nJava.setNota1(null);
		nJava.setNota2(null);
		nJava.setNota3(null);
		nJava.setNota4(null);
		NotasId nId = new NotasId();
		nId.setAluno(matricula);
		nId.setMateria("Java");
		nJava.setNotasid(nId);
		return nJava;
	}
	
	private Notas notaPHP(Long matricula) {
		Notas nJava = new Notas();
		nJava.setNota1(null);
		nJava.setNota2(null);
		nJava.setNota3(null);
		nJava.setNota4(null);
		NotasId nId = new NotasId();
		nId.setAluno(matricula);
		nId.setMateria("PHP");
		nJava.setNotasid(nId);
		return nJava;
	}
	
	private Notas notaJavaScript(Long matricula) {
		Notas nJava = new Notas();
		nJava.setNota1(null);
		nJava.setNota2(null);
		nJava.setNota3(null);
		nJava.setNota4(null);
		NotasId nId = new NotasId();
		nId.setAluno(matricula);
		nId.setMateria("JavaScript");
		nJava.setNotasid(nId);
		return nJava;
	}
	
	private Notas notaC(Long matricula) {
		Notas nJava = new Notas();
		nJava.setNota1(null);
		nJava.setNota2(null);
		nJava.setNota3(null);
		nJava.setNota4(null);
		NotasId nId = new NotasId();
		nId.setAluno(matricula);
		nId.setMateria("C++");
		nJava.setNotasid(nId);
		return nJava;
	}
	
	private Notas notaAngular(Long matricula) {
		Notas nJava = new Notas();
		nJava.setNota1(null);
		nJava.setNota2(null);
		nJava.setNota3(null);
		nJava.setNota4(null);
		NotasId nId = new NotasId();
		nId.setAluno(matricula);
		nId.setMateria("Angular");
		nJava.setNotasid(nId);
		return nJava;
	}
	
	private Notas notaSpring(Long matricula) {
		Notas nJava = new Notas();
		nJava.setNota1(null);
		nJava.setNota2(null);
		nJava.setNota3(null);
		nJava.setNota4(null);
		NotasId nId = new NotasId();
		nId.setAluno(matricula);
		nId.setMateria("Spring");
		nJava.setNotasid(nId);
		return nJava;
	}
	
	private Notas notaTypeScript(Long matricula) {
		Notas nJava = new Notas();
		nJava.setNota1(null);
		nJava.setNota2(null);
		nJava.setNota3(null);
		nJava.setNota4(null);
		NotasId nId = new NotasId();
		nId.setAluno(matricula);
		nId.setMateria("TypeScript");
		nJava.setNotasid(nId);
		return nJava;
	}
	
	private Notas notaReact(Long matricula) {
		Notas nJava = new Notas();
		nJava.setNota1(null);
		nJava.setNota2(null);
		nJava.setNota3(null);
		nJava.setNota4(null);
		NotasId nId = new NotasId();
		nId.setAluno(matricula);
		nId.setMateria("React");
		nJava.setNotasid(nId);
		return nJava;
	}
	
	private Notas notaMySql(Long matricula) {
		Notas nJava = new Notas();
		nJava.setNota1(null);
		nJava.setNota2(null);
		nJava.setNota3(null);
		nJava.setNota4(null);
		NotasId nId = new NotasId();
		nId.setAluno(matricula);
		nId.setMateria("MySql");
		nJava.setNotasid(nId);
		return nJava;
	}

	private Faltas faltaJava(Long matricula) {
		Faltas nJava = new Faltas();
		nJava.setNumero1(0l);
		nJava.setNumero2(0l);
		nJava.setNumero3(0l);
		nJava.setNumero4(0l);
		FaltasId nId = new FaltasId();
		nId.setAluno(matricula);
		nId.setMateria("Java");
		nJava.setFaltasid(nId);
		return nJava;
	}
	
	private Faltas faltaPHP(Long matricula) {
		Faltas nJava = new Faltas();
		nJava.setNumero1(0l);
		nJava.setNumero2(0l);
		nJava.setNumero3(0l);
		nJava.setNumero4(0l);
		FaltasId nId = new FaltasId();
		nId.setAluno(matricula);
		nId.setMateria("PHP");
		nJava.setFaltasid(nId);
		return nJava;
	}
	
	private Faltas faltaJavaScript(Long matricula) {
		Faltas nJava = new Faltas();
		nJava.setNumero1(0l);
		nJava.setNumero2(0l);
		nJava.setNumero3(0l);
		nJava.setNumero4(0l);
		FaltasId nId = new FaltasId();
		nId.setAluno(matricula);
		nId.setMateria("JavaScript");
		nJava.setFaltasid(nId);
		return nJava;
	}
	
	private Faltas faltaC(Long matricula) {
		Faltas nJava = new Faltas();
		nJava.setNumero1(0l);
		nJava.setNumero2(0l);
		nJava.setNumero3(0l);
		nJava.setNumero4(0l);
		FaltasId nId = new FaltasId();
		nId.setAluno(matricula);
		nId.setMateria("C++");
		nJava.setFaltasid(nId);
		return nJava;
	}
	
	private Faltas faltaAngular(Long matricula) {
		Faltas nJava = new Faltas();
		nJava.setNumero1(0l);
		nJava.setNumero2(0l);
		nJava.setNumero3(0l);
		nJava.setNumero4(0l);
		FaltasId nId = new FaltasId();
		nId.setAluno(matricula);
		nId.setMateria("Angular");
		nJava.setFaltasid(nId);
		return nJava;
	}
	
	private Faltas faltaSpring(Long matricula) {
		Faltas nJava = new Faltas();
		nJava.setNumero1(0l);
		nJava.setNumero2(0l);
		nJava.setNumero3(0l);
		nJava.setNumero4(0l);
		FaltasId nId = new FaltasId();
		nId.setAluno(matricula);
		nId.setMateria("Spring");
		nJava.setFaltasid(nId);
		return nJava;
	}
	
	private Faltas faltaTypeScript(Long matricula) {
		Faltas nJava = new Faltas();
		nJava.setNumero1(0l);
		nJava.setNumero2(0l);
		nJava.setNumero3(0l);
		nJava.setNumero4(0l);
		FaltasId nId = new FaltasId();
		nId.setAluno(matricula);
		nId.setMateria("TypeScript");
		nJava.setFaltasid(nId);
		return nJava;
	}
	
	private Faltas faltaReact(Long matricula) {
		Faltas nJava = new Faltas();
		nJava.setNumero1(0l);
		nJava.setNumero2(0l);
		nJava.setNumero3(0l);
		nJava.setNumero4(0l);
		FaltasId nId = new FaltasId();
		nId.setAluno(matricula);
		nId.setMateria("React");
		nJava.setFaltasid(nId);
		return nJava;
	}

	private Faltas faltaMySql(Long matricula) {
		Faltas nJava = new Faltas();
		nJava.setNumero1(null);
		nJava.setNumero2(null);
		nJava.setNumero3(null);
		nJava.setNumero4(null);
		FaltasId nId = new FaltasId();
		nId.setAluno(matricula);
		nId.setMateria("MySql");
		nJava.setFaltasid(nId);
		return nJava;
	}
	
}
