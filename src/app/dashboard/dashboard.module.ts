import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPaymentComponent } from './dashboard-payment.component';
import { DashboardConfirmComponent } from './dashboard-confirm.component';
import { ActivatePost } from './dashboard-confirm.component';
//
import { MaterialModule } from '@angular/material';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
    MaterialModule.forRoot()
  ],
  declarations: [DashboardComponent, DashboardPaymentComponent, DashboardConfirmComponent, ActivatePost],
  entryComponents: [ActivatePost, DashboardConfirmComponent, DashboardPaymentComponent, DashboardComponent, DashboardPaymentComponent]
})
export class DashboardModule { }
