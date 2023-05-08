import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../services/token-storage.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private TokenStorageService: TokenStorageService, private router: Router){};
  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot):any{
      console.log('CanActivate called');
    let isLoggedIn = this.TokenStorageService.isAuthenticated();
    if (isLoggedIn){
      return true
    } else {
      this.router.navigate(['/register']);
    }
  }

}
