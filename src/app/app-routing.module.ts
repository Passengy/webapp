import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { CanDeactivateGuard } from './can-deactivate-guard.service';


@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '**', component: PagenotfoundComponent }
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CanDeactivateGuard
  ]
})
export class ApplicationRoutingModule { }
