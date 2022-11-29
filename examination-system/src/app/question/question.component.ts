import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  public width:number = 0;
  minutes:number = 0;
  seconds:number = 0;
  timeLeft:number = 600;
  interval:any;
  questions:any;
  question:any;
  display:string = "block";
  cardWidth:number = 50;
  constructor(private questionService:QuestionService) {

   }

  ngOnInit(): void {
    this.startTimer();
    this.questions = this.questionService.getQuestions();
    this.showQuestion();
  }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
        this.minutes = Math.floor((this.timeLeft / 60));
        this.seconds = (this.timeLeft % 60);
      } else {
        this.width = 0;
      }
    },1000)
  }

   getSelection() { 
     let checkRadio = document.querySelector('input[name="selection"]:checked');
     console.log(checkRadio?.getAttribute("id"));
      
    if(checkRadio != null) {
            
    }
    else {

    }

  }
  
  showQuestion(){
    if(this.questions[0].category === "Grammar" || this.questions[0].category === "vocabulary"){
      console.log(this.questions[0].category)
      this.display = "none";
    }else{
      this.display = "block";
    }
  }
  
}
