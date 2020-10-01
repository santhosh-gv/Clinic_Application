import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  username:string
  password:string

  constructor() { }

  ngOnInit(): void {
    console.log('HI')
  }

}
