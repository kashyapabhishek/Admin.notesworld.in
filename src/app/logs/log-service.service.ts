import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { Logs } from './LogsModel';


const httpOptions = {
  headers: new HttpHeaders({
    'Accept': 'application/json',  
    'Authorization': 'bearer '+localStorage.getItem("token")
})

};
@Injectable({
  providedIn: 'root'
})
export class LogServiceService {

  public constructor(
    private _http: HttpClient,
  ) { }
  
  private _baseURL = 'http://localhost:52349/api/values';
  private baseURL = 'https://api.notesworld.in/api.values';
  public getLogs(): Observable<Logs[]>{
    return this._http.get<Logs[]>(this.baseURL,httpOptions);
 
  }
  getLogsById(id): Observable<Logs[]>{
    return this._http.get<Logs[]>(this.baseURL+'//'+id,httpOptions);
  }

  GetListOfIndex():Observable<number[]>{
    return this._http.get<number[]>(this.baseURL+"/GetListOfIndex",httpOptions);
  }
}



