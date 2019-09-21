import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { Logs } from './LogsModel';

@Injectable({
  providedIn: 'root'
})
export class LogServiceService {

  public constructor(
    private _http: HttpClient,
  ) { }
  
  private baseURL = 'http://localhost:52349/api/values';
  private _baseURL = 'https://api.notesworld.in/api.values';
  public getLogs(): Observable<Logs[]>{
    return this._http.get<Logs[]>(this.baseURL);
  }
  getLogsById(id): Observable<Logs[]>{
    return this._http.get<Logs[]>(this.baseURL+'//'+id);
  }

  GetListOfIndex():Observable<number[]>{
    return this._http.get<number[]>(this.baseURL+"/GetListOfIndex");
  }
}



