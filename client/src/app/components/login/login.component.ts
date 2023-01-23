import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public username: string = '';
  public password: string = '';

  constructor() {
  }

  public login() {
    console.log("login button pressed!");
  }
}
