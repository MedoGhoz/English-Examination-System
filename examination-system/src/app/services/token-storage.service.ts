import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const USER_EMAIL = '';
const LEVEL = 'none';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }
  isAuthenticated(){
    return this.getToken();
  }
  signOut(): void {
    window.sessionStorage.clear();


  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);


  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }


  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }
  public saveEmail(email: string): void {
    window.sessionStorage.setItem(USER_EMAIL, email);
  }
  public getEmail(): string | null {
    return window.sessionStorage.getItem(USER_EMAIL);
  }
  public saveLevel(level: string): void {
    window.sessionStorage.setItem(LEVEL, level);
  }
  public getLevel(): string  | null {
    return window.sessionStorage.getItem(LEVEL);
  }

}
