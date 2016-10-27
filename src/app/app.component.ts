import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth-guard.service';
import { Router, NavigationExtras }      from '@angular/router';
import { AuthService } from './auth.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(public authService: AuthService, public router: Router, private af: AngularFire) {}
  logout() {
    this.authService.logout();
  }
}
