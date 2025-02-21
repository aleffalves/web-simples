import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  logout() {
    this.auth.logout();
  }

}
