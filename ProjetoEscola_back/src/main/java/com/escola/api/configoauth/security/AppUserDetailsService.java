package com.escola.api.configoauth.security;

import java.util.Collection;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.escola.api.model.Aluno;
import com.escola.api.model.Professor;
import com.escola.api.repository.AlunoRepository;
import com.escola.api.repository.ProfessorRepository;

@Service
public class AppUserDetailsService implements UserDetailsService{
	
	@Autowired
	private AlunoRepository alunoRepository;
	
	@Autowired
	private ProfessorRepository professorRepository;

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		Optional<Aluno> alunoOpt = this.alunoRepository.findByEmail(email);
		Optional<Professor> professorOpt = this.professorRepository.findByEmail(email);
		if(alunoOpt.isPresent()) {
			Aluno aluno = alunoOpt.orElseThrow(() -> new UsernameNotFoundException("Email e/ou senha incorreto(s)"));
			return new User(email, aluno.getSenha(), getPermissoes(aluno));
			
		}else if(professorOpt.isPresent()){
			Professor professor = professorOpt.orElseThrow(() -> new UsernameNotFoundException("Email e/ou senha incorreto(s)"));
			return new User(email, professor.getSenha(), getPermissoes(professor));
		}
		return new User(null,null,null);
		
	}

	private Collection<? extends GrantedAuthority> getPermissoes(Aluno aluno) {
		Set<SimpleGrantedAuthority> authorities = new HashSet<>();
		aluno.getPermissoes().forEach(p -> authorities.add(new SimpleGrantedAuthority(p.getDescricao().toUpperCase())));
		return authorities;
	}

	private Collection<? extends GrantedAuthority> getPermissoes(Professor professor) {
		Set<SimpleGrantedAuthority> authorities = new HashSet<>();
		professor.getPermissoes().forEach(p -> authorities.add(new SimpleGrantedAuthority(p.getDescricao().toUpperCase())));
		return authorities;
	}

}
