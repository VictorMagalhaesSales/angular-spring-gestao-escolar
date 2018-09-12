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
import com.escola.api.repository.AlunoRepository;

@Service
public class AppUserDetailsService implements UserDetailsService{
	
	@Autowired
	private AlunoRepository alunoRepository;

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		Optional<Aluno> alunoOpt = this.alunoRepository.findByEmail(email);
		Aluno aluno = alunoOpt.orElseThrow(() -> new UsernameNotFoundException("Email e/ou senha incorreto(s)"));
		return new User(email, aluno.getSenha(), getPermissoes(aluno));
	}

	private Collection<? extends GrantedAuthority> getPermissoes(Aluno aluno) {
		Set<SimpleGrantedAuthority> authorities = new HashSet<>();
		aluno.getPermissoes().forEach(p -> authorities.add(new SimpleGrantedAuthority(p.getDescricao().toUpperCase())));
		return authorities;
	}

}