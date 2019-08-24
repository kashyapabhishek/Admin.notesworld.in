import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DeshboardComponent} from './deshboard/deshboard.component';
import {LogsComponent} from './logs/logs.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  { path: 'deshboard', component: DeshboardComponent },
  { path: 'logs', component: LogsComponent},
  { path: 'login', component: LoginComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
