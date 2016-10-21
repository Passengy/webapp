import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent, PasswordMatcher } from './login.component';
import { LoginRoutingModule } from './login-routing.module';

//
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule,
    MaterialModule.forRoot()
  ],
  declarations: [LoginComponent, PasswordMatcher],
  entryComponents: [LoginComponent]
})
export class LoginModule { } 
