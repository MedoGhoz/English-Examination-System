import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../services/question.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-placement-test',
  templateUrl: './placement-test.component.html',
  styleUrls: ['./placement-test.component.css']
})
export class PlacementTestComponent implements OnInit {

  NoOfQuestions:number=0;
  width: number = 0;
  minutes: number = 30;
  seconds: number = 0;
  timeLeft: number = this.minutes * 60;
  interval: any;
  questions: any[] = [];
  apiQuestions!: any[];
  display: string = "block";
  showParagraph: boolean = false;
  logoPath!: string;
  type!: string;
  answers: any[] = [];
  arrayOfAnswers: any[] = [];
  score:number=0;
  iframeMarkup!: string;
  level!:string;
  constructor(private questionService: QuestionService, private router: Router) {
  }
  ngOnDestroy(): void {
    this.questionService.category=undefined;
  }
  ngOnInit(): void {
    this.questionService.setCategory('placement')
    this.startTimer();
    this.questionService.getPlacementTest().subscribe({next:(data:any)=>{
      let audio = new Audio(data);
      audio.play()
      console.log(data);
      this.apiQuestions = data;
      // this.questionService.settestId(data._id);
      // if (this.apiQuestions.length==0){
      //   alert('no questions left : )')
      // }
      console.log(this.apiQuestions);

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
        this.router.navigate(['/testresult']);
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
        let currentQuestionAnswer = checkRadio?.getAttribute("id")
        this.answers.push(currentQuestionAnswer);

      }
      if (nextButton?.getAttribute("value") == "finish") {
        console.log(this.arrayOfAnswers);
        this.questionService.setAnswers(this.arrayOfAnswers);
        this.checkscore();
        this.router.navigate(['/testresult']);
      }
      if (this.width < this.NoOfQuestions-1) {
        this.width++;
        this.showQuestion();
        this.logoPath = "assets/quote.png"
      }
      if (this.width == this.NoOfQuestions-1) {
        nextButton?.setAttribute("value", "finish");
        nextButton?.classList.add('redButton');
      }
      this.arrayOfAnswers.push(this.answers);
      this.answers=[];

  }

  showQuestion() {
    // if (this.questions[this.width].category.toLocaleLowerCase() === "grammar" || this.questions[0].category.toLocaleLowerCase() === "vocabulary") {
      this.display = "none";
    // } else {
    //   this.display = "block";
    // }
  }

  formatQuestions(){

    for (let i = 0; i < this.apiQuestions.length; i++) {
        this.questions.push(this.apiQuestions[i]);
        this.NoOfQuestions=this.apiQuestions.length;
        // console.log(this.questions);
    }
    console.log(this.questions);
    this.questionService.setQuestions(this.questions);
  }


  changelogo() {
    this.type = this.questionService.getCategory();
    console.log(this.type);
      this.logoPath = "assets/quote.png"
  }


  getId(url: string) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return (match && match[2].length === 11)
      ? match[2]
      : null;
  }
checkscore(){

  for (let i = 0;i<this.arrayOfAnswers.length;i++){
    if (this.arrayOfAnswers[i] == this.apiQuestions[i]['answer']){
      this.score++;
    }
  }
  this.questionService.setPlacementTestScore(this.score);


switch (true) {
  case this.score >= 0 && this.score <= 18:
    this.level = 'A1';
    console.log('Outcomes Elementary');
    break;
  case this.score >= 19 && this.score <= 25:
    this.level = 'A2';
    console.log('Outcomes Pre-Intermediate');
    break;
  case this.score >= 26 && this.score <= 32:
    this.level = 'B1';
    console.log('Outcomes Intermediate');
    break;
  case this.score >= 33 && this.score <= 39:
    this.level = 'B2';
    console.log('Outcomes Upper Intermediate');
    break;
  case this.score >= 40 && this.score <= 46:
    this.level = 'C1';
    console.log('Outcomes Advanced');
    break;
  case this.score >= 47 && this.score <= 50:
    this.level = 'C2';
    console.log('Higher level series recommended.');
    break;
  default:
    console.log('Invalid this.score');
    break;
}
this.questionService.setLevel(this.level);
}


}
