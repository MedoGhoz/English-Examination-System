import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { UserDataService } from '../services/user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  toggleNavbar = true;
  isLoggedIn!:boolean;
  token!:any;
  userEmail!:string;
  userFirstName!:string;

  constructor(private TokenStorageService:TokenStorageService,private UserDataService:UserDataService,private router:Router) { }

  ngOnInit(): void {
  this.token = this.TokenStorageService.getToken();
  (this.token == null)? this.isLoggedIn=false:this.isLoggedIn=true;
  this.UserDataService.getUserData().subscribe({next:(data:any)=>{
    console.log(data);
    this.userFirstName = data.user.firstName;
    this.userEmail=data.user.email;
    console.log(this.userFirstName);
  }})
  }
  logout():void{
    this.TokenStorageService.signOut();
    this.router.navigate(['\home']);
    setTimeout(()=>{window.location.reload()},30);

  }

}
