import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { CursosService } from './cursos.service';
import { CursoDialogComponent } from './comoponets/curso-dialog/curso-dialog.component';


@NgModule({
  declarations: [
    CursosComponent,
    CursoDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: 'cursos',
        component: CursosComponent
      }
    ])
    
  ],
  providers:[CursosService],
})
export class CursosModule { }
