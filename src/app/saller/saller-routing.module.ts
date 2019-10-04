import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SallerComponent} from './saller.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  {
    path: '', component: SallerComponent, children: [
      {
        path: 'Content/:id', component: ContentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SallerRoutingModule { }
