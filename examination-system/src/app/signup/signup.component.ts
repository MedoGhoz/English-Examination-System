import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
export interface User {
  firstName: string,
  email: string,
  password: string,
};
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  form: any = {
    firstName: null,
    email: null,
    password: null
  };
  user={}
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { firstName, email, password } = this.form;

    
    const user : User = {
      firstName:firstName,
      email:email,
      password:password
    };

    this.authService.register(user).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        console.log(err);
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
}}
