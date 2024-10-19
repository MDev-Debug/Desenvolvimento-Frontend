import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from './components/views/button/button.component';
import { IconComponent } from './components/views/icon/icon.component';
import { LoginComponent } from './components/views/login/login.component';
import { CadastroComponent } from './components/views/cadastro/cadastro.component';

const routes: Routes = [
  { path: "", component: ButtonComponent },
  { path: "login", component: LoginComponent },
  { path: "cadastro", component: CadastroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
