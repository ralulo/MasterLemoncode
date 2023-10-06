import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BasePublicComponent} from './layout/base-public/base-public.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { CrudComponent } from './crud/crud.component';
import { ProfileComponent } from './profile/profile.component';
import { Guard } from './services/guard.service';

const routes: Routes = [{

  path: '',component: HomeComponent,
},
{
  path: 'login', component: LoginComponent,
},
{
  path: 'about',component:AboutComponent,
},
{
  path:'dashboard', component:DashboardComponent,canActivate: [Guard],
},
{
  path:'galeria', component:GaleriaComponent,canActivate: [Guard],
},
{
  path:'crud', component:CrudComponent,canActivate: [Guard],
},
{
  path:'profile', component:ProfileComponent,canActivate: [Guard],
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
