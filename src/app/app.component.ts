import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'web-simples';

  isLoggedIn: boolean = false;
  constructor(private authService: AuthService) {
    this.checkLoginStatus();
  }
  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
    });
  }

  checkLoginStatus() {
    this.isLoggedIn = !!localStorage.getItem('token');
  }

  onLoggedIn(loggedIn: any) {
    this.isLoggedIn = loggedIn;
  }
}
