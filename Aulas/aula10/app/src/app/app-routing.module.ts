import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { ConsultarCepComponent } from './components/views/consultar-cep/consultar-cep.component';
import { UsersComponent } from './components/views/users/users.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'consultar-cep', component: ConsultarCepComponent },
  { path: 'users', component: UsersComponent },
  { path: '**', redirectTo: '' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
