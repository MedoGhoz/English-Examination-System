import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { distractorsDemoRequest } from '../_models/distractorsDemoRequest';

@Injectable({
  providedIn: 'root'
})
export class distractorsDemoService {

  private distractorsDemoUrl = 'http://localhost:4040/generateDistractors';  // URL to web api
  // private distractorsDemoUrl = 'api/heroes';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  /** POST: add a new hero to the server */
  generate(req: distractorsDemoRequest): Observable<any> {
    return this.http.post<any>(this.distractorsDemoUrl, req, this.httpOptions).pipe(
      // catchError(this.handleError<Hero>('addHero'))
    );
  }

}
