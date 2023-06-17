import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SpeechService {

  private speechUrl = 'http://localhost:4040/speech2text';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  generate(req: string): Observable<any> {
    return this.http.get<any>(this.speechUrl + `?level=${req}`, this.httpOptions);
  }

  sendAudioToServer(data: any) {
    return this.http.post<any>(this.speechUrl, 
        data,
        this.httpOptions
    )
} 
}
