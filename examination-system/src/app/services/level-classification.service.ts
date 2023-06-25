import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LevelClassificationService {
  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Access-Control-Allow-Origin':"*"})
  // };

  constructor(private http: HttpClient) { }

  run(sentence: string):Observable<any>{
    return this.http.get<any>(`http://localhost:4040/sentence/level/${sentence}`).pipe(
      // catchError(this.handleError<Hero>('addHero'))
    );
  }
}
