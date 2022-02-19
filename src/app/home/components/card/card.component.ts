import { Component, OnInit } from '@angular/core';
import { CursoType } from 'src/app/shared/types/curso.type';
import { ApiServiceService } from '../../services/api-service.service';

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
  

  listaCursos: CursoType[] = [];

  detailCursos: Icurso[] = [];

  constructor(private apiService: ApiServiceService) {
   }

  ngOnInit(): void {
    this.apiService.listAllCursos.subscribe(data => {
      this.detailCursos = this.getDetailCursos(data);
      console.log(this.detailCursos);
    }
      );
    
  }

  getDetailCursos(listaCursos: CursoType[]){
    const listasCursos: Icurso[] = [];
    let lCursos = listaCursos.map(curso => curso)
    console.log(lCursos);
    
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
    
    console.log(listasCursos)
    return listasCursos;

}
}
