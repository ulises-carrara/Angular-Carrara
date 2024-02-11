import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { cursoModels } from "./models";

let cursos: cursoModels[] = [
    {
        id:1,
        nombre:'JavaScript',
        fechainicio: new Date(),
        duracion: '3 meses'
    },
    {
        id:2,
        nombre:'React',
        fechainicio: new Date(),
        duracion: '4 meses'
    },
    {
        id:3,
        nombre:'Angular',
        fechainicio: new Date(),
        duracion: '3 meses'
    },
]

@Injectable()
export class CursosService {



    getCursos() {
        return of(cursos)
    }

    deleteCursos(id: number){
        cursos = cursos.filter((el)=> el.id != id)
        return of(cursos)
    }

    createCurso(data: any){
        cursos = [...cursos, {...data, id: cursos.length+1}]
        return this.getCursos()

    }

    updateCurso(id: number, data: cursoModels){
        cursos = cursos.map((el)=>(el.id === id ? {...el, ...data} : el))
        return this.getCursos()
    }
    
}