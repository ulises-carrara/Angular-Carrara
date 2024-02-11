import { Component } from '@angular/core';
import { CursosService } from './cursos.service';
import { cursoModels } from './models';
import { MatDialog } from '@angular/material/dialog';
import { CursoDialogComponent } from './comoponets/curso-dialog/curso-dialog.component';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent {

  displayedColumns: string[] = ['id', 'nombre', 'fecha', 'duracion', 'acciones']

  cursos: cursoModels[] = []

  constructor(private cursosService: CursosService, public dialog: MatDialog ) {

    this.cursosService.getCursos().subscribe({
      next: (cursos) => {
        this.cursos = cursos
      }
    })

  }
  onDelete(id: number) {
    if (confirm('Seguro que quiere eliminar')) {
          this.cursosService.deleteCursos(id).subscribe({
      next: (cursos) =>{
        this.cursos = cursos
      }
    })
    }
  }

  onCreate(): void{
    this.dialog.open(CursoDialogComponent).afterClosed().subscribe({
      next: (resultado)=> {
        if (resultado) {
          this.cursosService.createCurso(resultado).subscribe({
            next: (cursos) => (this.cursos = cursos)
          })
        }
      }
      
    })
  }

  onEdit(curso: cursoModels){
    this.dialog.open(CursoDialogComponent,{
      data: curso,
    })
    .afterClosed().subscribe({
      next: (result)=>{
        if (result) {
          this.cursosService.updateCurso(curso.id, result).subscribe({
            next: (curso) => (this.cursos = curso)
          })
        }
      }
    })
  }
}
