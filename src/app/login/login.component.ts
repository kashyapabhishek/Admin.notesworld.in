import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';

export class Login{
  username: string;
  passwrod: string;
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('', Validators.required)
  });

  login = new Login();
  submit = false;
  
  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    if(this.loginForm.valid){
      this.submit = true;
      this.login.username = this.loginForm.get('username').value;
      this.login.passwrod = this.loginForm.get('password').value;
      if(!this.checkValidUser()){
      this.loginForm.setErrors({ 'invalid': true });        
      }else{
        localStorage.setItem('is-login','true');
        this.router.navigateByUrl("/deshboard");
      }
    }
  }

  getFormControl(name) {
    return this.loginForm.get(name);
}

checkValidUser(){
  if(this.login != null){
    if(this.login.username === 'abhishek' && this.login.passwrod === 'kashyap'){
      return true;
    }
  }
  return false;
}

}
