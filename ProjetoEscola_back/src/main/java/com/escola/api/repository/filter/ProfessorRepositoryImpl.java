package com.escola.api.repository.filter;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.beans.factory.annotation.Autowired;

import com.escola.api.model.Professor;

public class ProfessorRepositoryImpl implements ProfessorRepositoryQuery{
	
	@Autowired
	private EntityManager manager;

	@Override
	public List<Professor> filtrar(ProfessorFilter professorFIlter) {
		CriteriaBuilder builder = manager.getCriteriaBuilder();
		CriteriaQuery<Professor> criteria = builder.createQuery(Professor.class);
		Root<Professor> root = criteria.from(Professor.class);
		
		Predicate[] predicates = criarRestricoes(professorFIlter, builder, root);
		criteria.where(predicates);
		
		TypedQuery<Professor> query = manager.createQuery(criteria);

		return query.getResultList();
	}

	private Predicate[] criarRestricoes(ProfessorFilter professorFIlter, CriteriaBuilder builder, Root<Professor> root) {
List<Predicate> predicates = new ArrayList<>();
		
		
		if(professorFIlter.getNome() != null) {
			predicates.add( builder.like( builder.lower(root.get("nome")), "%" + professorFIlter.getNome() + "%" ) );
			
		}
		
		if(professorFIlter.getSobrenome() != null) {
			predicates.add( builder.like( builder.lower(root.get("sobrenome")), "%" + professorFIlter.getSobrenome() + "%" ) );
			
		}
		
		if(professorFIlter.getLogin() != null) {
			predicates.add( builder.like( builder.lower(root.get("login")), "%" + professorFIlter.getLogin() + "%" ) );
			
		}
		
		if(professorFIlter.getNascimento() != null) {
			predicates.add( builder.like( builder.lower(root.get("nascimento")), "%" + professorFIlter.getNascimento() + "%" ) );
			
		}
		
		if(professorFIlter.getEmail() != null) {
			predicates.add( builder.like( builder.lower(root.get("email")), "%" + professorFIlter.getEmail() + "%" ) );
			
		}
		
		if(professorFIlter.getTelefone() != null) {
			predicates.add( builder.like( builder.lower(root.get("telefone")), "%" + professorFIlter.getTelefone() + "%" ) );
			
		}
		return predicates.toArray(new Predicate[predicates.size()]);
	}

}
