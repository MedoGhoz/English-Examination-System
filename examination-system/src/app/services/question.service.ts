import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  answers: any[] = [""];

  questions!:any[];
  constructor(private http: HttpClient) {
    
  }

  getQuestions():Observable<any> {
    
    return this.http.get('http://localhost:4040/questions/vocabulary');
  }
  setAnswers(answer: any) {
    this.answers = answer;
  }
  getAnswers() {
    return this.answers;
  }










  
}
