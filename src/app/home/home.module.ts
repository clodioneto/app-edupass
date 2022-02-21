import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CardComponent } from './components/card/card.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { LayoutComponent } from './components/layout/layout.component';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogDetailsCursoComponent } from './components/dialog-details-curso/dialog-details-curso.component';


@NgModule({
  declarations: [
    HomeComponent,
    CardComponent,
    PaginaComponent,
    LayoutComponent,
    DialogDetailsCursoComponent,
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeModule { }
