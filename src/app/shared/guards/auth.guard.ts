import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor() {}

  canActivate() {
    return true;
    /**
    // If a token
    if (this.settings.token) {
      return true; // logged in and has apiUrl so set true
    }
    this.auth.logOut(AuthState.sessionExpired);
    return false;
     */
  }
}
