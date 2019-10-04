import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SallerService } from '../../saller.service';
import { switchMap } from 'rxjs/operators';
import { OrderForSallerDetail } from '../../model/oders-for-saller-detail.model';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  orderforsell:OrderForSallerDetail[]
  hero$:string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sallerservice: SallerService
  ) {
    this.getrought()
    this.ngOnInit();
  }

  ngOnInit() {
    
}
 getrought(){
  this.route.paramMap.subscribe((params: ParamMap) =>  {
    this.getdata(params.get('id'));
 });
}
  async getdata(id){
    await this.sallerservice.getOrdersByOrderId(id).subscribe(a=> this.orderforsell = a);
  }
  



}
