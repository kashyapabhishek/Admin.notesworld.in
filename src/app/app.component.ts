import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Admin Notesworld';
  loginButtonValue = 'Login';

  constructor(
    private router: Router
  ) { }
  ngOnInit() {
    // if (localStorage.getItem('is-login') === 'true') {
    //   this.loginButtonValue = 'Logout';
    //   this.router.navigateByUrl("/deshboard");
    // }else{
    //   this.router.navigateByUrl("/login");
    // }
  }

  logout(){
    localStorage.removeItem('is-login');
    this.loginButtonValue = "Login";
    this.router.navigateByUrl("/login");
    this.ngOnInit();
  }
}
