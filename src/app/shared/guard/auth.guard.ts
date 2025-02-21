import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "../service/auth.service";

@Injectable({
    providedIn: 'root'
  })
  export class AuthGuard implements CanActivate {
    constructor(private router: Router, private auth: AuthService) {}
  
    canActivate(): boolean {
      const token = this.auth.isAuthenticated()
      if (token) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    }
  }