import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
export class AuthService{

    private isLoggedInSubject = new BehaviorSubject<boolean>(this.isAuthenticated());
    isLoggedIn$ = this.isLoggedInSubject.asObservable();
    
    constructor(private router: Router) {
    }

    login(){
      localStorage.setItem('token', 'fake-token');
      this.isLoggedInSubject.next(true); 
      this.router.navigate(['/albums']);
    }
  
    logout() {
      localStorage.removeItem('token');
      this.isLoggedInSubject.next(false);
      this.router.navigate(['/login']);
    }
  
    isAuthenticated(): boolean {
      return !!localStorage.getItem('token');
    }
}