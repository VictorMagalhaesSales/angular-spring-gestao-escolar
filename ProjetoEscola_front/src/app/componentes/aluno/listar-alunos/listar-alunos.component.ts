import { AlunoService } from './../../../servicos/aluno.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-alunos',
  templateUrl: './listar-alunos.component.html',
  styleUrls: ['./listar-alunos.component.scss']
})
export class ListarAlunosComponent implements OnInit {

  alunos = [];
  
  lancamentos = [
    { tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: '30/06/2017',
      dataPagamento: null, valor: 4.55, pessoa: 'Padaria do José' },
    { tipo: 'RECEITA', descricao: 'Venda de software', dataVencimento: '10/06/2017',
      dataPagamento: '09/06/2017', valor: 80000, pessoa: 'Atacado Brasil' },
    { tipo: 'DESPESA', descricao: 'Impostos', dataVencimento: '20/07/2017',
      dataPagamento: null, valor: 14312, pessoa: 'Ministério da Fazenda' },
    { tipo: 'DESPESA', descricao: 'Mensalidade de escola', dataVencimento: '05/06/2017',
      dataPagamento: '30/05/2017', valor: 800, pessoa: 'Escola Abelha Rainha' },
    { tipo: 'RECEITA', descricao: 'Venda de carro', dataVencimento: '18/08/2017',
      dataPagamento: null, valor: 55000, pessoa: 'Sebastião Souza' },
    { tipo: 'DESPESA', descricao: 'Aluguel', dataVencimento: '10/07/2017',
      dataPagamento: '09/07/2017', valor: 1750, pessoa: 'Casa Nova Imóveis' },
    { tipo: 'DESPESA', descricao: 'Mensalidade musculação', dataVencimento: '13/07/2017',
      dataPagamento: null, valor: 180, pessoa: 'Academia Top' }
  ];

  cols = [
    { field: 'vin', header: 'Vin' },
    { field: 'year', header: 'Year' },
    { field: 'brand', header: 'Brand' },
    { field: 'color', header: 'Color' }
];

cars = [
  {asd: "asd1a",adsd: "1asda",asdg: "asd1a",asmd: "asd1a"},
  {asd: "asd2a",adsd: "asda",asdg: "asda",asmd: "asda"},
  {asd: "asd3",adsd: "asda",asdg: "asda",asmd: "asda"},
  {asd: "as5da",adsd: "asda",asdg: "asda",asmd: "asda"},
  {asd: "as4da",adsd: "asda",asdg: "asda",asmd: "asda"},
  {asd: "as6da",adsd: "asda",asdg: "asda",asmd: "asda"},
  {asd: "as7da",adsd: "asda",asdg: "asda",asmd: "asda"},
  {asd: "as9da",adsd: "asda",asdg: "asda",asmd: "asda"},
  {asd: "as8da",adsd: "asda",asdg: "asda",asmd: "asda"},
  {asd: "as0da",adsd: "asda",asdg: "asda",asmd: "asda"},
  {asd: "asd-a",adsd: "asda",asdg: "asda",asmd: "asda"},
  {asd: "asd=a",adsd: "asda",asdg: "asda",asmd: "asda"},
  {asd: "ada",adsd: "asda",asdg: "asda",asmd: "asda"}
];

  constructor(private alunoService: AlunoService) { }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar(){
    
    this.alunoService.pesquisarAlunos()
      .then( alunos => this.alunos = alunos );
  }

}
