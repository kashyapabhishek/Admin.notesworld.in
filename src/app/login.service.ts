import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',   'Content-Type': 'application/x-www-form-urlencoded',
      
  })

};

export class loginmodel{
  username:string;
  password:string;
  grant_type:string;
}

export class returnAccess{
  access_token:string;
  token_type:string;
  expires_in:number;
  userName:string;
  issued: string;
  expires:string;
}

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private _http: HttpClient) { }

  private baseURL = 'https://api.notesworld.in/token';

  getToken1(username, password): Observable<returnAccess>{
   var data = "?username="+username+"&password="+password;
    return this._http.get<returnAccess>(this.baseURL+data).pipe();
  }

  getToken(username, password): Observable<returnAccess>{
    var data = "username="+username+"&password="+password+"&grant_type=password";
     return this._http.post<returnAccess>(this.baseURL,data,httpOptions).pipe();
   }
}
