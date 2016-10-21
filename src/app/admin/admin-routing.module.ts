import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { AdminComponent }           from './admin.component';
import { AdminDashboardComponent }  from './admin-dashboard.component';
import { InboxComponent }    from './inbox.component';
import { ProfileComponent }    from './profile.component';
import { AccountComponent }    from './account.component';
import { ManageComponent }    from './manage.component';

import { AuthGuard }                from '../auth-guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { 
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        canLoad: [AuthGuard],
        children: [
          {
            path: '',
            canActivateChild: [AuthGuard],
            children: [
              { path: 'inbox', component: InboxComponent },
              { path: 'profile', component: ProfileComponent },
              { path: 'account', component: AccountComponent },
              { path: 'manage', component: ManageComponent },
              { path: '', component: AdminDashboardComponent }
            ]
          }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {}
