import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RoomDetaiComponent } from './rooms-detail.component';
import { RoomListComponent } from './rooms-list.component';
import { HomeComponent } from './home.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
      },
      { path: 'rooms',  component: RoomListComponent },
      { path: 'rooms/:id', component: RoomDetaiComponent }
    ])
  ],
  exports: [RouterModule],
})
export class HomeRoutingModule { }
