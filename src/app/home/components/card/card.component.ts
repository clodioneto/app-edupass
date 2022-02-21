import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CursoType } from 'src/app/shared/types/curso.type';
import { ApiServiceService } from '../../services/api-service.service';
import { DialogDetailsCursoComponent } from '../dialog-details-curso/dialog-details-curso.component';

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
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})


export class CardComponent implements OnInit {


  listaCursos: Icurso[] = [];

  constructor(private apiService: ApiServiceService, private dialog: MatDialog) {
   }

  ngOnInit(): void {

    //Recebimento dos dados a partir do serviço
    //Recebimento do resultado do método e atribuição a variável
    this.apiService.listAllCursos.subscribe(data => {
      this.listaCursos = this.getDetailCursos(data);
    }
      );
    
  }

  //Método de mapeamento das propriedades
  getDetailCursos(listaCursos: CursoType[]){
    const listasCursos: Icurso[] = [];
    let lCursos = listaCursos
    lCursos.forEach(curso => {
      const lc: Icurso = {
        nomeCurso: '',
        valor: 0,
        bolsa: 100,
        periodo: 'Até o fim do curso',
        valorOriginal: '',
        modalidade: '',
        categoria_especifica: '',
        duracao: 0,
        duracao_tipo: '',
        instituicao: '',
        cidade: '',
        turno: '',
      }
        lc.nomeCurso = curso.curso_detalhe.curso.curso;
        lc.valorOriginal = curso.valor_original;
        lc.turno = curso.turno;
        lc.duracao = curso.duracao; 
        lc.modalidade = curso.modalidade.modalidade;
        lc.categoria_especifica = curso.curso_detalhe.categoria_especifica;
        lc.cidade = curso.campus.cidade;
        lc.instituicao = curso.campus.instituicao.instituicao;
        lc.duracao_tipo = curso.duracao_tipo;
        listasCursos.push(lc);
    });
    
    return listasCursos;

  }

  //Método de chamada da caixa de diálogo e configurações
  openDialog(curso: Icurso): void {
      this.dialog.open(DialogDetailsCursoComponent, {
      width: '450px',
      height: 'auto',
      //Envio dos dados para o componente filho
      data: { 
        nomeCurso: curso.nomeCurso,
        valor: 0,
        bolsa: 100,
        periodo: 'Até o fim do curso',
        valorOriginal: curso.valorOriginal,
        modalidade: curso.modalidade,
        categoria_especifica: curso.categoria_especifica,
        duracao: curso.duracao,
        duracao_tipo: curso.duracao_tipo,
        instituicao: curso.instituicao,
        cidade: curso.cidade,
        turno: curso.turno
      }
    });
    
  }

}
