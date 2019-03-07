package com.escola.api.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
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
		return ResponseEntity.ok(falta);
	}
	
	@DeleteMapping("/{aluno}/{materia}")
	@PreAuthorize("hasAuthority('ROLE_DELETAR_FALTA')")
	public void deletarFalta(@PathVariable("aluno") Long aluno, @PathVariable("materia") String materia) {
		FaltasId faltasid = new FaltasId();
		faltasid.setAluno(aluno);
		faltasid.setMateria(materia);
		this.faltasRepository.delete(faltasid);
	}
	
	@PutMapping("/{aluno}/{materia}")
	@PreAuthorize("hasAuthority('ROLE_EDITAR_FALTA')")
	public ResponseEntity<Faltas> atualizarFaltas(@PathVariable("aluno") Long aluno, @PathVariable("materia") String materia,@Valid @RequestBody Faltas faltasMod) {
		FaltasId faltasid = new FaltasId();
		faltasid.setAluno(aluno);
		faltasid.setMateria(materia);
			
		Faltas faltas = this.faltasRepository.findOne(faltasid);
		
		BeanUtils.copyProperties(faltasMod, faltas, "faltasId");
		
		//this.notasRepository.deleteById(notasid);
		Faltas faltaDepois = this.faltasRepository.save(faltas);
		
		
		return ResponseEntity.ok(faltaDepois);
	}
}
