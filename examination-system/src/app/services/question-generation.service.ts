//made by abdelrahman-abdelaziz
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { questionGenerationRequest } from '../_models/questionGenerationRequest';

@Injectable({
  providedIn: 'root'
})
export class QuestionGenerationService {

  private questionGenerationUrl = 'http://164.92.176.13/mcq';  // URL to web api
  // private questionGenerationUrl = 'api/heroes';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor( private http: HttpClient ) { }

  /** POST: add a new hero to the server */
  generate(req: questionGenerationRequest): Observable<any> {
    return this.http.post<any>(this.questionGenerationUrl, req, this.httpOptions).pipe(
      // catchError(this.handleError<Hero>('addHero'))
    );
  }

}
