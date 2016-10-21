import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { AdminComponent }           from './admin.component';
import { AdminDashboardComponent }  from './admin-dashboard.component';
import { InboxComponent }    from './inbox.component';
import { ProfileComponent }    from './profile.component';
import { AccountComponent }    from './account.component';
import { ManageComponent }  from './manage.component';

//
import { MaterialModule } from '@angular/material';

import { AdminRoutingModule }       from './admin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule.forRoot()
  ],
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    ProfileComponent,
    AccountComponent,
    InboxComponent,
    ManageComponent
  ]
})
export class AdminModule {}
