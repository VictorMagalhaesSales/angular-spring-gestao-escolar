package com.escola.api.repository.filter;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.util.StringUtils;

import com.escola.api.model.Aluno;

public class AlunoRepositoryImpl implements AlunoRepositoryQuery{

	@PersistenceContext
	private EntityManager manager;
	
	@Override
	public Page<Aluno> filtrar(AlunoFilter alunoFilter, Pageable pageable) {
		CriteriaBuilder builder = manager.getCriteriaBuilder();
		CriteriaQuery<Aluno> criteria = builder.createQuery(Aluno.class);
		Root<Aluno> root = criteria.from(Aluno.class);
		
		Predicate[] predicates = criarRestricoes(alunoFilter, builder, root);
		criteria.where(predicates);
		
		TypedQuery<Aluno> query = manager.createQuery(criteria);
		adicionarRestricoesDePaginacao(query, pageable);
		
		return new PageImpl<>(query.getResultList(), pageable, total(alunoFilter));
		//return query.getResultList();
	}

	private Predicate[] criarRestricoes(AlunoFilter alunoFilter, CriteriaBuilder builder, Root<Aluno> root) {
		
		List<Predicate> predicates = new ArrayList<>();
		
		if(alunoFilter.getNome() != null) {
			predicates.add( builder.like( builder.lower(root.get("nome")), "%" + alunoFilter.getNome() + "%" ) );
			
		}
		
		if(alunoFilter.getSobrenome() != null) {
			predicates.add( builder.like( builder.lower(root.get("sobrenome")), "%" + alunoFilter.getSobrenome() + "%" ) );
			
		}
		
		if(alunoFilter.getNascimento() != null) {
			predicates.add( builder.greaterThanOrEqualTo( builder.lower(root.get("nascimento")), "%" + alunoFilter.getNascimento() + "%" ) );
			
		}
		
		if(alunoFilter.getEmail() != null) {
			predicates.add( builder.like( builder.lower(root.get("email")), "%" + alunoFilter.getEmail() + "%" ) );
			
		}
		
		if(alunoFilter.getTelefone() != null) {
			predicates.add( builder.like( builder.lower(root.get("telefone")), "%" + alunoFilter.getTelefone() + "%" ) );
			
		}
		return predicates.toArray(new Predicate[predicates.size()]);
	}

	private void adicionarRestricoesDePaginacao(TypedQuery<Aluno> query, Pageable pageable) {
		int paginaAtual = pageable.getPageNumber();
		int totalRegistrosPorPagina = pageable.getPageSize();
		int primeiroRegistroDaPagina = paginaAtual * totalRegistrosPorPagina;
		
		query.setFirstResult(primeiroRegistroDaPagina); // PRIMEIRO REGISTRO
		query.setMaxResults(totalRegistrosPorPagina); // TOTAL DE REGISTROS
	}

	private Long total(AlunoFilter alunoFilter) {
		CriteriaBuilder builder = manager.getCriteriaBuilder();
		CriteriaQuery<Long> criteria = builder.createQuery(Long.class);
		Root<Aluno> root = criteria.from(Aluno.class);
		
		Predicate[] predicates = criarRestricoes(alunoFilter, builder, root);
		criteria.where(predicates);
		
		criteria.select(builder.count(root));
		return manager.createQuery(criteria).getSingleResult();
	}


}


// CRITERIA: PERMITE CONSTRUIR CONSULTAS ESTRUTURADAS COM O JAVA
// ALÉM DISSO, O CRITERIA PODE FAZER RESTRIÇÕES NA HORA DE RETORNAR OS OBJETOS ATRAVÉS DO MÉTODO 'add()';