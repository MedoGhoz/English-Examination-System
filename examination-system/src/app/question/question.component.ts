import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  public width:number = 0;
  minutes:number = 10;
  seconds:number = 0;
  timeLeft:number = 600;
  interval:any;
  questions:any;
  question:any;
  display:string = "block";
  logoPath!:string;
  type!:string;
  answers:any[] =[];
  constructor(private questionService:QuestionService, private router:Router) {

   }

  ngOnInit(): void {
    this.startTimer();
    this.questions = this.questionService.getQuestions();
    this.showQuestion();
    this.changelogo();
  }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
        this.minutes = Math.floor((this.timeLeft / 60));
        this.seconds = (this.timeLeft % 60);
      } else {
        this.width = 0;
        this.router.navigate(['/result']);
      }
    },1000)
  }

   getSelection() { 
    let nextButton = document.querySelector(".nextButton");
    let checkRadio = document.querySelector('input[name="selection"]:checked');
    if(checkRadio == null){
      this.answers.push("");
    }
    else{
      this.answers.push(checkRadio?.getAttribute("id"));
    }
    if(nextButton?.getAttribute("value") == "finish"){
      this.questionService.setAnswers(this.answers);
      this.router.navigate(['/result']);
    }
    if(this.width < 9){
      if(checkRadio == this.questions[this.width].answer) {
        
      }
      else {

      }
      this.width++;
      this.showQuestion();
      this.changelogo();
    }
    if(this.width == 9){
      nextButton?.setAttribute("value","finish");
    }
  }
  
  showQuestion(){
    if(this.questions[this.width].category === "Grammar" || this.questions[0].category === "vocabulary"){
      this.display = "none";
    }else{
      this.display = "block";
    }
  }

  changelogo(){
    this.type = this.questions[this.width].category;
    if(this.type.toLocaleLowerCase() == "grammar"){
      this.logoPath = "assets/quote.png"
    }
    else if(this.type.toLocaleLowerCase() == "vocabulary"){
      this.logoPath = "assets/block.png"
    }
    else if(this.type.toLocaleLowerCase() == "listening"){
      this.logoPath = "assets/headphone.png"
    }
    else if(this.type.toLocaleLowerCase() == "reading"){
      this.logoPath = "assets/open-book.png"
    }
  }
  
}
