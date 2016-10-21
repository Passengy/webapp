import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { HomeComponent } from './home.component';

import { HomeService } from './home.service';
import { RoomDetaiComponent } from './rooms-detail.component';
import { RoomListComponent } from './rooms-list.component';

import { HomeRoutingModule } from './home-routing.module'

//
import { MaterialModule } from '@angular/material';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    MaterialModule.forRoot()
  ],
  declarations: [HomeComponent, RoomDetaiComponent, RoomListComponent],
  providers: [HomeService]
})
export class HomeModule { }
