export class ProfessorFiltro {
    nome: string;
    sobrenome: string;
    disciplina: string;
    email: string;
    telefone: string;
    constructor(nome: string, sobrenome: string, disciplina: string, email: string,  telefone: string){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.telefone = telefone;
        this.disciplina = disciplina;
    }
  }