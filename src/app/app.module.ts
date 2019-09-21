import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { LogServiceService } from './logs/log-service.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DeshboardComponent } from './deshboard/deshboard.component';
import { AppRoutingModule } from './app-routing.module';
import { LogsComponent } from './logs/logs.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    DeshboardComponent,
    LogsComponent,
    LoginComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
