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
     const isRedirected_1 = previousUrl?.endsWith('/testSelection');
     const isRedirected_2 = previousUrl?.endsWith('/home');

     if (isRedirected_1 || isRedirected_2) {
       return true;
     } else {
       // Redirect to a specific URL if the previous URL is not from the specific component
       return this.router.parseUrl('/testSelection');
     }
  }

}
