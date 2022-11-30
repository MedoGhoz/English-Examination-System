import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  public width:number = 0; //Number of Questions
  /*Timer Variables*/
  minutes:number = 10;
  seconds:number = 0;
  timeLeft:number = 600;
  interval:any;
  /*Questions related Variables */
  questions:any;
  question:any;
  display:string = "block"; //Display of the left Block of the Question
  logoPath!:string; //Question Type
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
/*Handles the Timer of the Exam*/
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
/*
Decides what to view next
pushes the answers of the student to the answer array in the service
*/
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
    //decide what to show in all Question
    if(this.width < 9){
      if(checkRadio == this.questions[this.width].answer) {
        
      }
      else {

      }
      this.width++;
      this.showQuestion();
      this.changelogo();
    }
    //Last Question
    if(this.width == 9){
      nextButton?.setAttribute("value","finish");
    }
  }
  //decides based on the question type to show the left section of the question or not
  showQuestion(){
    if(this.questions[this.width].category === "Grammar" || this.questions[0].category === "vocabulary"){
      this.display = "none";
    }else{
      this.display = "block";
    }
  }
//changes logo
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
