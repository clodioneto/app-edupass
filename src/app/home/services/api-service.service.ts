import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CursoType } from 'src/app/shared/types/curso.type';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private url: string = "http://localhost:3000/cursos";

  constructor(private http: HttpClient) { }

  get listAllCursos():Observable<CursoType[]>{
    return this.http.get<CursoType[]>(this.url);
  }
}

