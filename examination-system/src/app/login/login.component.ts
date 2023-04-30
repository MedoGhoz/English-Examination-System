import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { TokenStorageService } from '../services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  form: any = {
    email: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = ['student','teacher','admin'];

  constructor(private authService: AuthenticationService, private tokenStorage: TokenStorageService,private router:Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    const { email, password } = this.form;

    this.authService.login(email, password).subscribe({
      next: data => {
        console.log("hello");
        console.log(data);
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveEmail(email);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        alert('logged in successfully');
        this.router.navigate(['\home']);
        setTimeout(()=>{window.location.reload()},30);

      },
      error: err => {
        console.log(err);
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        alert('Logging Failed')
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }

}
