import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private auth:AuthService, 
    private router:Router
  ) { }

  ngOnInit() {
  }

  login(e){
    e.preventDefault();
    //console.log(e);
    
    var username = e.target.elements[0].value;
    var passaword = e.target.elements[1].value;

    this.auth.Login(username, passaword);
    if (this.auth.isAuthenticaded()){
      this.router.navigate(['dashboard']);
    }
  }
}
