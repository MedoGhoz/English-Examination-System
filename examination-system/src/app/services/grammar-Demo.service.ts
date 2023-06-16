import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GrammarDemoRequest } from '../_models/GrammarDemoRequest';

@Injectable({
  providedIn: 'root'
})
export class GrammarDemoService {

  private GrammarDemoUrl = 'http://localhost:4040/generateGrammarQuestion';  // URL to web api
  // private GrammarDemoUrl = 'api/heroes';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  /** POST: add a new hero to the server */
  generate(req: GrammarDemoRequest): Observable<any> {
    return this.http.post<any>(this.GrammarDemoUrl, req, this.httpOptions).pipe(
      // catchError(this.handleError<Hero>('addHero'))
    );
  }

}
