import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { cursoModels } from '../../models';


@Component({
  selector: 'app-curso-dialog',
  templateUrl: './curso-dialog.component.html',
  styleUrls: ['./curso-dialog.component.scss']
})
export class CursoDialogComponent {
cursosForm: FormGroup

constructor( private fb: FormBuilder, 
  private dialogRef: MatDialogRef<CursoDialogComponent>,
  @Inject(MAT_DIALOG_DATA) private editignCurso?: cursoModels,

  ){
  this.cursosForm = this.fb.group({
    nombre : this.fb.control('', Validators.required),
    fechainicio: this.fb.control('', Validators.required),
    duracion: this.fb.control('', Validators.required)
  })

  if (editignCurso) {
    this.cursosForm.patchValue(editignCurso)
    
  }
}

onSave(): void{
  if (this.cursosForm.invalid) {
    this.cursosForm.markAllAsTouched
  }else{
    this.dialogRef.close(this.cursosForm.value)
  }

}
}
