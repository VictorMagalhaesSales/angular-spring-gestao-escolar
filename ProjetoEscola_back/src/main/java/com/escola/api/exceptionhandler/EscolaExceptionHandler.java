package com.escola.api.exceptionhandler;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.validation.ConstraintViolationException;

import org.apache.tomcat.util.ExceptionUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class EscolaExceptionHandler extends ResponseEntityExceptionHandler{
	
	@Autowired
	private MessageSource messageSource;
	
	@Override
	protected ResponseEntity<Object> handleHttpMessageNotReadable(HttpMessageNotReadableException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
		String mensagemParaOUsuario = "Mensagem enviada ilegível!";
		String mensagemParaODesenvolvedor = ex.getCause().toString();
		List<Erro> erros = Arrays.asList(new Erro(mensagemParaOUsuario, mensagemParaODesenvolvedor));
		return handleExceptionInternal(ex, new Erro(mensagemParaOUsuario, mensagemParaODesenvolvedor), headers, HttpStatus.BAD_REQUEST, request);
	}
	
	@Override
	protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
		List<Erro> erros = criarListaDeErros(ex.getBindingResult());
		return handleExceptionInternal(ex, erros, headers, HttpStatus.BAD_REQUEST, request);
	}
	
	@ExceptionHandler({ DataIntegrityViolationException.class } )
	public ResponseEntity<Object> handleDataIntegrityViolationException(DataIntegrityViolationException ex, WebRequest request) {
		String mensagemParaOUsuario = "Entidade requerida não encontrada";
		String mensagemParaODesenvolvedor = ex.toString();
		List<Erro> erros = Arrays.asList(new Erro(mensagemParaOUsuario, mensagemParaODesenvolvedor));
		return handleExceptionInternal(ex, erros, new HttpHeaders(), HttpStatus.BAD_REQUEST, request);
	}
	
	@ExceptionHandler({EmptyResultDataAccessException.class})
	public ResponseEntity<Object> handleEmptyResultDataAccessException(EmptyResultDataAccessException ex, WebRequest request){
		String mensagemParaOUsuario = "Entidade requerida não encontrada";
		String mensagemParaODesenvolvedor = ex.toString();
		List<Erro> erros = Arrays.asList(new Erro(mensagemParaOUsuario, mensagemParaODesenvolvedor));
		return handleExceptionInternal(ex, erros, new HttpHeaders(), HttpStatus.BAD_REQUEST, request);
	}
		
	
	
	
	
	// -----------------------===========================---------------------==============================-----------------------------
	
	private List<Erro> criarListaDeErros(BindingResult binding){
		List<Erro> erros = new ArrayList<>();
		
		for(FieldError fieldError : binding.getFieldErrors() ) {
			String mensagemParaOUsuario =  messageSource.getMessage(fieldError, LocaleContextHolder.getLocale());
			String mensagemParaODesenvolvedor = fieldError.toString();
			erros.add(new Erro(mensagemParaOUsuario,mensagemParaODesenvolvedor));
		}
		
		return erros;
	}
	
	public static class Erro {
		public String mensagemParaOUsuario;
		public String mensagemParaODesenvolvedor;
		
		public Erro(String mensagemParaOUsuario, String mensagemParaODesenvolvedor) {
			this.mensagemParaODesenvolvedor = mensagemParaODesenvolvedor;
			this.mensagemParaOUsuario = mensagemParaOUsuario;
		}

		public String getMensagemParaOUsuario() {
			return mensagemParaOUsuario;
		}

		public String getMensagemParaODesenvolvedor() {
			return mensagemParaODesenvolvedor;
		}
		
	}
}
