import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class examGuard implements CanActivate {
  constructor(private router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     // Check if the previous URL is from a specific component
     const previousUrl = this.router.getCurrentNavigation()?.previousNavigation?.finalUrl?.toString();
     const isRedirected = previousUrl?.endsWith('/testSelection');

     if (isRedirected) {
       return true;
     } else {
       // Redirect to a specific URL if the previous URL is not from the specific component
       return this.router.parseUrl('/testSelection');
     }
  }

}
