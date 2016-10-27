import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {

  constructor(public af: AngularFire) {
    let users$: FirebaseListObservable<any> = af.database.list('users');
    }

  isLoggedIn: boolean;

  // // store the URL so we can redirect after logging in
  // redirectUrl: string;

  // login(): Observable<boolean> {
  //   return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
  // }

  // logout(): void {
  //   this.isLoggedIn = false;
  // }
  // allowed: boolean;

  loginWithGoogle(){
     return this.af.auth.login({
        provider: AuthProviders.Google,
        method: AuthMethods.Redirect
    })
  }

  loginWithFacebook(){
     return this.af.auth.login({
        provider: AuthProviders.Facebook,
        method: AuthMethods.Redirect
    })
  }

  // isLoggedIn: boolean = false;
  // // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(email, password){
   return this.af.auth.login({email, password},
                      {provider: AuthProviders.Password, method: AuthMethods.Password})
  }

  logout(): void {
   return this.af.auth.logout();
  }

  // addUser(){
  //   this.users$.push({ 
  //     age: this.age,
  //     email: this.email,
  //     firstname: this.firstname,
  //     lastname: this.lastname,
  //     password: this.password,
  //     phone: this.phone,
  //     imageUrl: this.imageUrl
  //    });
  // }
}
