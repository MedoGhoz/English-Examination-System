import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http: HttpClient,private tokenstorageservice:TokenStorageService) { }
  getUserData():Observable<any>{
    return this.http.get(`http://localhost:4040/users/${this.tokenstorageservice.getEmail()}`);
  }

}
