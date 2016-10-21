import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisCenterRoutingModule } from './crisis-center-routing.module';

import { CrisisCenterHomeComponent } from './crisis-center-home.component';
import { CrisisListComponent }       from './crisis-list.component';
import { CrisisDetailComponent }     from './crisis-detail.component';

import { CrisisService }     from './crisis.service';
import { CrisisDetailResolve }     from './crisis-detail-resolve.service';
//
import { MaterialModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CrisisCenterRoutingModule,

    MaterialModule.forRoot()
  ], 
  declarations: [
    CrisisCenterComponent, 
   CrisisCenterHomeComponent, 
   CrisisListComponent,
   CrisisDetailComponent
   ],
  providers: [CrisisService, CrisisDetailResolve]
})
export class CrisisCenterModule { }
