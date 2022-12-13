import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  width: number = 0;

  minutes: number = 5;
  seconds: number = 0;
  timeLeft: number = 300;
  interval: any;

  questions: any[] = [];
  apiQuestions!: any[];

  display: string = "block";
  showParagraph: boolean = false;
  logoPath!: string;
  type!: string;
  answers: any[] = [];
  iframeMarkup!: string;

  constructor(private questionService: QuestionService, private router: Router) {

  }

  ngOnInit(): void {
    this.startTimer();
    this.questionService.getQuestions().subscribe({next:(data:any)=>{
      console.log(data);
      this.apiQuestions = data.questions;
      
      this.formatQuestions()
      this.showQuestion();
      this.changelogo();
    }})
    
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
        this.minutes = Math.floor((this.timeLeft / 60));
        this.seconds = (this.timeLeft % 60);
      } else {
        this.width = 0;
        this.router.navigate(['/result']);
      }
    }, 1000)
  }

  getSelection() {
    let nextButton = document.querySelector(".nextButton");
    let checkRadio = document.querySelector('input[name="selection"]:checked');
    if (checkRadio == null) {
      this.answers.push("");
    }
    else {
      this.answers.push(checkRadio?.getAttribute("id"));
    }
    if (nextButton?.getAttribute("value") == "finish") {
      console.log(this.answers);

      this.questionService.setAnswers(this.answers);
      this.router.navigate(['/result']);
    }
    if (this.width < 9) {
      if (checkRadio == this.questions[this.width].answer) {

      }
      else {

      }
      this.width++;
      this.showQuestion();
      this.changelogo();
    }
    if (this.width == 9) {
      nextButton?.setAttribute("value", "finish");
      nextButton?.classList.add('redButton');
    }
  }

  showQuestion() {
    if (this.questions[this.width].category.toLocaleLowerCase() === "grammar" || this.questions[0].category.toLocaleLowerCase() === "vocabulary") {
      this.display = "none";
    } else {
      this.display = "block";
    }
  }

  formatQuestions(){
    for (let i = 0; i < 10; i++) {
      if ("questions" in this.apiQuestions[i]) {
        for (let j = 0; j < this.apiQuestions[i].questions.length; j++) {
          let obj = JSON.parse(JSON.stringify(this.apiQuestions[i]));
          obj.question = this.apiQuestions[i].questions[j].question;
          obj.choices = this.apiQuestions[i].questions[j].choices;
          obj.answer = this.apiQuestions[i].questions[j].answer;
          obj.type = this.apiQuestions[i].questions[j].type;
          this.questions.push(obj);
        }
      } else {
        this.questions.push(this.apiQuestions[i]);
      }
    }
  }


  changelogo() {
    this.type = this.questions[this.width].category;
    if (this.type.toLocaleLowerCase() == "grammar") {
      this.logoPath = "assets/quote.png"
    }
    else if (this.type.toLocaleLowerCase() == "vocabulary") {
      this.logoPath = "assets/block.png"
    }
    else if (this.type.toLocaleLowerCase() == "listening") {
      this.logoPath = "assets/headphone.png";
      /*convert the youtube link to iframe and do not reload it in every question*/
      if (this.width == 0 || this.questions[this.width].header != this.questions[this.width - 1].header) {

        const videoId = this.getId(this.questions[this.width].header);
        this.iframeMarkup = '<iframe width="100%" height="250" src="//www.youtube.com/embed/'
          + videoId + '" frameborder="0" allowfullscreen></iframe>';
        let node = document.getElementById("audio");
        node!.innerHTML = this.iframeMarkup;
      }
    }
    else if (this.type.toLocaleLowerCase() == "reading") {
      this.logoPath = "assets/open-book.png"
    }
  }


  getId(url: string) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return (match && match[2].length === 11)
      ? match[2]
      : null;
  }

  
}
