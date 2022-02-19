export class CursoType {
    campus!: {
        cidade: string,
        instituicao: {
            imagem: string,
            instituicao: string,
        }
        
    };
    curso_detalhe!: {
        categoria_especifica: string,
        curso: {
            curso: string,               
        }           
    };
    desconto!: number;
    duracao!: number;
    duracao_tipo!: string;
    id?: number;
    modalidade!:{
        modalidade: string    
    };
    turno!: string;
    valor_original!: string;

}