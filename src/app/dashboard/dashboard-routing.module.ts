import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { DashboardPaymentComponent } from './dashboard-payment.component';
import { DashboardConfirmComponent } from './dashboard-confirm.component'

import { AuthGuard }                from '../auth-guard.service';


@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'dashboard', 
        component: DashboardComponent,
        canActivate: [AuthGuard],
        // canLoad: [AuthGuard]
      },
      {
        path: 'dashboard/payment',
        component: DashboardPaymentComponent,
        canActivate: [AuthGuard],
        // canLoad: [AuthGuard]
      },
      {
        path: 'dashboard/confirm',
        component: DashboardConfirmComponent,
        canActivate: [AuthGuard],
        // canLoad: [AuthGuard]
      }
    ])
  ],
  exports: [RouterModule], 
})
export class DashboardRoutingModule { }
