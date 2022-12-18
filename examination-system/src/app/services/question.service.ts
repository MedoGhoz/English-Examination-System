import { HttpClient } from '@angular/common/http';
import { outputAst } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  answers: any[] = [""];
  questions!:any[];
  category:any='';
  constructor(private http: HttpClient) {
    
  }

  getAudioQuestion():Observable<any>{
  
  return this.http.get(`http://localhost:4040/audio`);
  }

  getQuestions():Observable<any> {
    return this.http.get(`http://localhost:4040/questions/${this.category}`);
  }
  setAnswers(answer: any) {
    this.answers = answer;
  }
  getAnswers() {
    return this.answers;
  }
  setCategory(category: string='') {
    this.category = category;
  }
  getCategory() {
    return this.answers;
  }










  
}
