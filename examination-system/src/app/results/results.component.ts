import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  answers!:any[];
  questions!: any[];
  result:number = 0;

  constructor(private questionService:QuestionService) { }

  ngOnInit(): void {
    this.answers = this.questionService.getAnswers();
    this.questions = this.questionService.getQuestions();
    for(let i =0; i < this.answers.length; i++){
      if(this.answers[i] == this.questions[i].answer){
        this.result++;
      }
    }    
  }

}
