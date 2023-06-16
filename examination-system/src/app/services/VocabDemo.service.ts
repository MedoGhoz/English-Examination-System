import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VocabDemoRequest } from '../_models/VocabDemoRequest';

@Injectable({
  providedIn: 'root'
})
export class VocabDemoService {

  private VocabDemoUrl = 'http://localhost:4040/generateVocabQuestion';  // URL to web api
  // private VocabDemoUrl = 'api/heroes';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  /** POST: add a new hero to the server */
  generate(req: VocabDemoRequest): Observable<any> {
    return this.http.post<any>(this.VocabDemoUrl, req, this.httpOptions).pipe(
      // catchError(this.handleError<Hero>('addHero'))
    );
  }

}
