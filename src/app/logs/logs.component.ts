import { Component, OnInit } from '@angular/core';
import { LogServiceService } from './log-service.service';
import { Logs } from './LogsModel';

declare var $:any

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {

  constructor(private service: LogServiceService) {
    this.getLogsFromService();
    this.getIndexValue();
    this.ngOnInit();
   }
  logs : Logs[];
  logMessage:string;
  title:string;
  mainlogs: Logs[]
  index = 1;
  indexList: number[];

  ngOnInit() {
  }
  showModel(logMessage,title){
    console.log(logMessage);
    this.logMessage = logMessage;
    this.title = title;
    $('#exampleModalCenter').modal('show')
  }

  async getLogsFromService(){
    await this.service.getLogs().subscribe(a=> this.logs=a);
  }

  async getIndexValue(){
    await  this.service.GetListOfIndex().subscribe(a=> this.indexList = a);
  }

  async getIndex(index){
  
    if(index === -1){
      this.index += 1;
      await this.service.getLogsById(this.index).subscribe(a=> this.logs=a);
    }else{
      this.index = index;
      await this.service.getLogsById(index).subscribe(a=> this.logs=a);
    }
    
  }
}
