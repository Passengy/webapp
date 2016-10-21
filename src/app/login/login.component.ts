import { Component, Directive, ViewChild, ViewContainerRef  }   from '@angular/core';
import {MdSidenav, MdDialog, MdDialogConfig} from "@angular/material";
import { Router, NavigationExtras }      from '@angular/router';
import { AuthService } from '../auth.service';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';

function passwordMatcher(c: AbstractControl){
  if (!c.get('password') || !c.get('confirm')) return null;
  return c.get('password').value === c.get('confirm').value ? null : {'nomatch': true}
}

@Directive({
    selector: '[password-matcher]',
    providers: [
      {provide: NG_VALIDATORS, multi: true, useValue: passwordMatcher}
    ]
})
export class PasswordMatcher{}

@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  isDisabled: false;

  loginForm = {email: '', password: ''}
  registerForm = {email: '', password: '', confirm: '', lastname: '', firstname: '', phone: '', }

  submit(registerForm){
  }

  

  // const control = new FormControl();
  // control.setValue({'Value'});
  // control.reset();

  // control.disable();

  // control.value
  // control.status
  // control.valid
  // control.pristine
  // control.touched

  // const form = new FormGroup({
  //   street: new FormControl('', Validators.required),
  //   city: new FormControl('')
  // })
  // form.value
  // form.status
  // form.setValue({street: '123 Pine', city: 'San Francisco'})

  message: string;
  constructor(public authService: AuthService, public router: Router) {
    this.setMessage();
  }
  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }
  login() {
    this.message = 'Trying to log in ...';
    this.authService.login().subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/';
        // Redirect the user
        // Set our navigation extras object
        // that passes on our global query params and fragment
        let navigationExtras: NavigationExtras = {
          preserveQueryParams: true,
          preserveFragment: true
        };

        // Redirect the user
        this.router.navigate([redirect], navigationExtras);

      }
    });
  }


}
