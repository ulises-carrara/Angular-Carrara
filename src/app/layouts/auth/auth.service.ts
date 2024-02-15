import { Injectable } from "@angular/core";
import { User } from "../dashboard/pages/user/models";
import { Router } from "@angular/router";
import { map, of } from "rxjs";

interface loginData{
    email: null | string,
    contraseña: null | string
}

@Injectable({providedIn: 'root'})
export class AuthService{

    AutUser: User | null = null

    constructor(private router: Router){}

    login(data: loginData): void{
        
        const MOCKuser ={
            id: 12,
            nombre: 'fakenombre',
            apellido: 'fakeapellido',
            email: 'fake@gmail.com',
            contraseña: '123456',
            curso: ''
        }
        if (data.email === MOCKuser.email && data.contraseña === MOCKuser.contraseña) {
            this.AutUser = MOCKuser
            this.router.navigate(['dashboard'])
            localStorage.setItem('token', '7utrygr8thuqiyfheg3984uifhvegwe4ryfut')
        }
        
        
        
    }
    logout():void{
        this.AutUser = null
        this.router.navigate(['auth', 'login'])
        localStorage.removeItem('token')
        
        
    }

    verifyToken(){
        return of(localStorage.getItem('token')).pipe(map((Response) => !!Response))
    }

}