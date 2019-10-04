import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DeshboardComponent} from './deshboard/deshboard.component';
import {LogsComponent} from './logs/logs.component';
import {LoginComponent} from './login/login.component';
import { OrdersComponent } from './orders/orders.component';

import { from } from 'rxjs';
const routes:  Routes = [
  { path: 'deshboard', component: DeshboardComponent },
  { path: 'logs', component: LogsComponent},
  { path: '', component: LoginComponent},
  { path: 'orders', component: OrdersComponent},
  { path: 'saller', loadChildren: () => import('./saller/saller.module').then(m => m.SallerModule) }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
