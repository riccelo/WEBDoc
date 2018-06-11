import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  _isAuthenticaded:boolean;
  _userName:string;
  _password:string;

  constructor() { }

  Login(username:string, password:string) {
    console.log(username, password);
    if (username=="admin" && password == "admin"){
      this._userName = username;
      this._password = password;
      this._isAuthenticaded = true;
    }
  }

  isAuthenticaded(){
    return this._isAuthenticaded;
  }
}
