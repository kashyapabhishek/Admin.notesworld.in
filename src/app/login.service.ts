import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
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

  private baseURL = 'http://localhost:52349/token';

  getToken(username, password): Observable<returnAccess>{
   let loginmodel_ = new loginmodel();
   loginmodel_.username = username;
   loginmodel_.password = password;
   loginmodel_.grant_type = "password";
    return this._http.post<returnAccess>(this.baseURL,loginmodel_).pipe();
  }


}
