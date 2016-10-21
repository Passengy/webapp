import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './app.component';
import { AdminModule }     from './admin/admin.module';
import { HomeModule }   from './home/home.module';
import { LoginModule }   from './login/login.module';
import { PagenotfoundModule }   from './pagenotfound/pagenotfound.module';
import { AboutModule } from './about/about.module';
import { DashboardModule }         from './dashboard/dashboard.module';
import { CrisisCenterModule }   from './crisis-center/crisis-center.module';

//
import { MaterialModule } from '@angular/material';

//
import { ApplicationRoutingModule } from './app-routing.module';

import { DialogService }        from './dialog.service';
import { AppService } from './app.service';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { CanDeactivateGuard } from './can-deactivate-guard.service'


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DashboardModule,
    CrisisCenterModule,
    HomeModule,
    AdminModule, 
    LoginModule,
    PagenotfoundModule,
    AboutModule,
    ApplicationRoutingModule,
    MaterialModule.forRoot()
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    DialogService, AppService, AuthGuard, AuthService, CanDeactivateGuard 
  ],
  bootstrap: [ AppComponent ],
  entryComponents: [AppComponent]
})
export class AppModule {
}
