import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {}
  constructor() { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.model)
  }
  loginForm= new FormGroup({

    email: new FormControl('',Validators.required)
  })
}
