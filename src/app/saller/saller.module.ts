import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SallerRoutingModule } from './saller-routing.module';
import { SallerComponent} from './saller.component';
import { ContentComponent } from './content/content.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    SallerComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    SallerRoutingModule
  ]
})
export class SallerModule { }
