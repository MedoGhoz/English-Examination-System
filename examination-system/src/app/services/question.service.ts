import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { outputAst } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  answers: any[] = [""];
  questions!:any[];
  category!:any;
  examDurationInMinutes:number = 5;
  data:any={};
  testId!:string;
  listeningLevel: string = "A1";
  placementTestScore!:number;
  level!:string;
  constructor(private http: HttpClient,private TokenStorageService:TokenStorageService) {

  }
//practice questions  Section of our website.
  getAudioQuestion():Observable<any>{

  return this.http.get(`http://localhost:4040/generateListeningQuestion/${this.listeningLevel}`);
  }

  getCheckErrorQuestions():Observable<any>{
    return this.http.get(`http://localhost:4040/checkErrors/wrongSentence`);
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
  setQuestions(questions: any) {
    this.questions = questions;
  }
  getterQuestions() {
    return this.questions;
  }
  setCategory(category: string='') {
    this.category = category;
  }
  getCategory() {
    return this.category;
  }
  setExamDurationInMinutes(examDurationInMinutes: number=10) {
    this.examDurationInMinutes = examDurationInMinutes;
  }
  getExamDurationInMinutes() {
    return this.examDurationInMinutes;
  }
  settestId(testId: string='') {
    this.testId = testId;
  }
  gettestId() {
    return this.testId;
  }

//Methods for real exams section of the website
getExamQuestions():Observable<any> {
  this.data['category'] = this.getCategory();
  this.data['level'] = 'B1'
  this.data['email'] = this.TokenStorageService.getEmail();
  this.data['size'] = this.getExamDurationInMinutes();
  // let params = new HttpParams();
  //   Object.keys(this.data).forEach((key) => {
  //     params = params.append(key, this.data[key]);
  //   });

    // const headers = { 'Content-Type': 'application/json' };
    // const options = {
    //   headers: headers,
    //   params: new HttpParams().set('data', JSON.stringify(this.data))
    // };
    // alert(`http://localhost:4040/tests/create/${this.TokenStorageService.getEmail()}/${this.getCategory()}/B2/${this.getExamDurationInMinutes()}`);
  return this.http.get(`http://localhost:4040/tests/create/${this.TokenStorageService.getEmail()}/${this.category}/B1/${this.examDurationInMinutes}`);
  // return this.http.get(`http://localhost:4040/tests/create/afretoucher@gmail.com/Grammar/A2/5`);

}
getScore():Observable<any>{
  let data = JSON.stringify({
    testId: this.testId,
    answers: this.answers
  });
  console.log(data);
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  return this.http.post(`http://localhost:4040/tests/submit`,data,httpOptions);

}
getPlacementTestScore(){
  return this.placementTestScore;

}
setPlacementTestScore(score:number){
  this.placementTestScore = score;
}
getPlacementTest():Observable<any> {
  return this.http.get(`http://localhost:4040/tests/placement/all`);
}

getUserTakenExams():Observable<any> {
  return this.http.get(`http://localhost:4040/tests/${this.TokenStorageService.getEmail()}`);
}


setLevel(value: string) {
  this.level = value;
  this.TokenStorageService.saveLevel(value);
}

getLevel(): string | null {
  return this.TokenStorageService.getLevel();
}


}
