import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { UserModule } from './pages/user/user.module';
import { appRoutinModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import {MatListModule} from '@angular/material/list';
import { CursosModule } from './pages/cursos/cursos.module';
@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    UserModule, 
    MatListModule,
    CursosModule,
    RouterModule.forChild([

      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'user',
        component: UserComponent
      },
      {
        path: 'cursos',
        component: CursosComponent,
        loadChildren:()=>import('./pages/cursos/cursos.module').then((m)=>(m.CursosModule))
      },


    ])
  ],
  exports: [
    DashboardComponent
  ],
})
export class DashboardModule {

}
