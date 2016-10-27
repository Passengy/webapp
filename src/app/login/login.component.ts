import { Component, Directive, ViewChild, ViewContainerRef  }   from '@angular/core';
import {MdSidenav, MdDialog, MdDialogConfig} from "@angular/material";
import { Router, NavigationExtras }      from '@angular/router';
import { AuthService } from '../auth.service';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable, AuthProviders, AuthMethods } from 'angularfire2';

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
  

  constructor(public authService: AuthService, public router: Router, private af: AngularFire) {

    var user = firebase.auth().currentUser;
    if (user) {
        var getUserInfo = firebase.database().ref('webapp/admins/'+user.uid);
        getUserInfo.once('value', function(snapshot) {
          console.log(snapshot.val()); //returns net_worth, etc
        });
    }

    // this.items = af.database.list('/webapp/admins');
    // // this.setMessage();
    // // this.users$ = af.database.list('users/');
    // let log = this.af.auth.subscribe((user) => {
    //   user = user
    // if(user !== null){
    //     let user = firebase.auth().currentUser;
    //     this.item = this.af.database.object('/webapp/admins');
    //     return console.log(this.lastname);
    //   }
      
    // })

  }

  isDisabled: false;
  lastname;
  posts : FirebaseListObservable<any>
  items: FirebaseListObservable<any>;
  item: FirebaseObjectObservable<any>;

  existLogin = {email: '', password: ''}
  newLogin = {email: '', password: '', lastname: '', firstname: '', phone: ''}

  alert: boolean = false;
  message: string;
  // setMessage() {
  //   this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  // }
//   login() {
//     const email = this.existLogin.email;
//     const password = this.existLogin.password;
//     let login = this.authService.login(email, password);
//     this.authService.login(email, password).subscribe(() => {
// setMessage() {
//     this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
//   }
  login() {
    const email = this.existLogin.email;
    const password = this.existLogin.password;
    this.authService.login(email, password);
    if(this.authService.login){
       let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/';

       let navigationExtras: NavigationExtras = {
          preserveQueryParams: true,
          preserveFragment: true
        };
        // Redirect the user
        this.router.navigate([redirect], navigationExtras);
        return console.log("You are logged");
        
    }
  }  
    // this.message = 'Trying to log in ...';
    // this.authService.login().subscribe(() => {
    //   this.setMessage();
    //   if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        // let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/';
        // // Redirect the user
        // this.router.navigate([redirect]);
    //   }
    // });
  loginWithFacebook(){
    this.authService.loginWithFacebook();
  }
  loginWithGoogle(){
    this.authService.loginWithGoogle();
  }
  logout() {
    this.authService.logout();
    return console.log("You are logged out");
    
  }
  
  private users$: FirebaseListObservable<any>;

  createUser(){
    const email = this.newLogin.email;
    const password = this.newLogin.password;
    const firstname = this.newLogin.firstname;
    const lastname = this.newLogin.lastname;
    const phone = this.newLogin.phone;

    // register password and email for authentication
    let userCreate = this.af.auth.createUser({email, password});

    // add info to database
    this.users$.push({ 
      email: email,
      firstname: firstname,
      lastname: lastname,
      password: password,
      phone: phone,
     });
     if(userCreate){
       this.router.navigate(['/']);
     }
  }
}
