import { Component, OnInit } from '@angular/core';
import { SallerService } from '../saller.service';
import { OrdersForSaller } from '../model/orders-for-saller.model';

@Component({
  selector: 'app-saller',
  templateUrl: './saller.component.html',
  styleUrls: ['./saller.component.css']
})
export class SallerComponent implements OnInit {

  _OrdersForSaller: OrdersForSaller[]

  constructor(
    private Saller: SallerService,

  ) { 
    this.getOrder();
    this.ngOnInit();
  }
 
  ngOnInit() {
    
  }

  async getOrder(){
    await this.Saller.getOrders().subscribe(a=>this._OrdersForSaller = a);
  }

}
