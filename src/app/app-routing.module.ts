import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./layouts/dashboard/dashboard.component";
import { AuthComponent } from "./layouts/auth/auth.component";
import { UserComponent } from "./layouts/dashboard/pages/user/user.component";
import { CursosComponent } from "./layouts/dashboard/pages/cursos/cursos.component";
import { HomeComponent } from "./layouts/dashboard/pages/home/home.component";
import { ErrorComponent } from "./layouts/dashboard/pages/error/error.component";
import { authGuard } from "./core/guards/auth.guard";
 

const routes: Routes = [
    {
        path: 'dashboard',
        canActivate:[authGuard],
        component: DashboardComponent,
        loadChildren:()=>import('./layouts/dashboard/dashboard.module').then((m)=>(m.DashboardModule))
    },
    {
        path: 'auth',
        component: AuthComponent,
        loadChildren:()=>import('./layouts/auth/auth.module').then((m)=>(m.AuthModule))
    },
    {
        path: '404',
        component: ErrorComponent
    },
    {
        path: '**',
        redirectTo: '/dashboard'
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})
export class appRoutinModule { }