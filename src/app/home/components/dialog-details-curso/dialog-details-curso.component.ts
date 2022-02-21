import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

interface Icurso{
    
  nomeCurso: string;
  valor: number;
  bolsa: number;
  periodo: string;
  valorOriginal: string;
  modalidade: string;
  categoria_especifica: string;
  duracao: number;
  duracao_tipo: string;
  instituicao: string;
  cidade: string;
  turno: string;

  }

@Component({
  selector: 'app-dialog-details-curso',
  templateUrl: './dialog-details-curso.component.html',
  styleUrls: ['./dialog-details-curso.component.scss']
})
export class DialogDetailsCursoComponent implements OnInit {

  cursoDetail: Icurso = {
    nomeCurso: '',
    valor: 0,
    bolsa: 0,
    periodo: '',
    valorOriginal: '',
    modalidade: '',
    categoria_especifica: '',
    duracao: 0,
    duracao_tipo: '',
    instituicao: '',
    cidade: '',
    turno: '',
    }

  //Recebendo os dados do componente pai
  constructor(@Inject(MAT_DIALOG_DATA) public data: Icurso) { }

  ngOnInit(): void {

   //Atribuindo os dados a variável
   this.cursoDetail = this.data;
  }

}
