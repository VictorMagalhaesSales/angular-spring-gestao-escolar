package com.escola.api.configoauth.security.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.escola.api.repository.AlunoRepository;

public class GeradorSenha {

	@Autowired
	private AlunoRepository alunoRepository;
	
	public static void main(String[] args) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		System.out.println(encoder.encode("123"));
	}
	
}
