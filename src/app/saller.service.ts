import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { OrdersForSaller } from './model/orders-for-saller.model';
import { OrderForSallerDetail } from './model/oders-for-saller-detail.model';
const httpOptions = {
  headers: new HttpHeaders({
    'Accept': 'application/json',  
    'Authorization': 'bearer '+localStorage.getItem("token")
})};

@Injectable({
  providedIn: 'root'
})
export class SallerService {
  private baseURL = 'https://api.notesworld.in/api/Saller';
  constructor(
    private _http: HttpClient
  ) { }

  getOrders():Observable<OrdersForSaller[]>{
    return this._http.get<OrdersForSaller[]>(this.baseURL+'/GetOrders',httpOptions).pipe();
  }

  getOrdersByOrderId(orderid):Observable<OrderForSallerDetail[]>{
    return this._http.get<OrderForSallerDetail[]>(this.baseURL+'/GetListOfIndex/'+orderid,httpOptions).pipe();
  }
}
