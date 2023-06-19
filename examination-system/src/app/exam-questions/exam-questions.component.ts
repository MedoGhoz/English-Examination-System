import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-exam-questions',
  templateUrl: './exam-questions.component.html',
  styleUrls: ['./exam-questions.component.css']
})
export class ExamQuestionsComponent implements OnInit,OnDestroy{
  NoOfQuestions:number=0;
  width: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  timeLeft: number = this.minutes * 60;
  interval: any;
  questions: any[] = [];
  apiQuestions!: any[];
  display: string = "block";
  showParagraph: boolean = false;
  logoPath!: string;
  type: string = 'listening';
  answers: any[] = [];
  arrayOfAnswers: any[] = [];
  listeningAnswer:string=''

  fileSource!:string;
  fileName!:string;

  iframeMarkup!: string;
  audioLoaded:boolean=false;
  constructor(private questionService: QuestionService, private router: Router) {
  }
  ngOnDestroy(): void {
    // this.questionService.category=undefined;
  }
  ngOnInit(): void {
    this.type = this.questionService.getCategory();
    if (this.type.toLocaleLowerCase() == 'listening'){
      console.log('Listening quesiton')
      this.questionService.getExamQuestions().subscribe({next:(data:any)=>{
        console.log(data);
        this.fileName = data.questions[0].question;
      console.log(this.fileName)

        this.fileName=this.fileName.split(' ').join('_');

        // this.fileName =this.fileName.split('/')[-1];
      console.log(this.fileName)

        this.fileSource = `http://localhost:4040/generateListeningQuestion/audio/${this.fileName}`;
        let audioElement = document.createElement('audio')
        let audioDiv = document.getElementsByClassName('audioInsert')[0]
        // audioElement.setAttribute('src',this.fileSource);
        // audioElement.innerHTML=`<source src=${this.fileSource} type="audio/mp3">`;
        // audioDiv?.appendChild(audioElement);
        audioDiv.innerHTML=`<audio controls><source src=${this.fileSource} type="audio/mp3"></audio>`
        console.log(audioDiv)
        // this.audioLoaded = true;
        // let audio = new Audio(data);
        // audio.play()
      //   let inputForm = document.getElementsByClassName('card-body')[1]
      //   inputForm.innerHTML=`<form *ngIf="type.toLocaleLowerCase() != 'listening'">

      //   <div class="card-header">
      //     <input
      //       type="text"
      //       placeholder="enter what you hear"
      //       class="answer"
      //       [(ngModel)]="listeningAnswer"
      //     />
      //   </div>
      //   <input
      //     type="button"
      //     (click)="getSelection()"
      //     value="next"
      //     class="nextButton"
      //   />
      // </form>`


        this.apiQuestions = data.questions;
        this.questionService.settestId(data._id);
        if (this.apiQuestions.length==0){
          alert('no questions left : )')
          setTimeout(()=>{this.router.navigate(['/testSelection']);},40)
        }
        console.log(this.apiQuestions);
        this.changelogo();
        this.startTimer();
        // this.formatQuestions()
        // this.showQuestion();
      }})


    }
    else{
    this.questionService.getExamQuestions().subscribe({next:(data:any)=>{
      let audio = new Audio(data);
      audio.play()
      console.log(data);
      this.apiQuestions = data.questions;
      this.questionService.settestId(data._id);
      if (this.apiQuestions.length==0){
        alert('no questions left : )')
        setTimeout(()=>{this.router.navigate(['/testSelection']);},40)
      }
      console.log(this.apiQuestions);
      this.changelogo();
      this.startTimer();
      this.formatQuestions()
      this.showQuestion();

    }})
  }
  }
  startTimer() {
    if (this.type.toLocaleLowerCase()=='reading' || this.type.toLocaleLowerCase()=='listening'){
      this.timeLeft = this.questionService.examDurationInMinutes*60*5;
    }else{
    this.timeLeft = this.questionService.examDurationInMinutes*60;}
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
    console.log('clicked')
    let nextButton = document.querySelector(".nextButton");
    let checkRadio = document.querySelector('input[name="selection"]:checked');
    if (this.type.toLocaleLowerCase() == "reading" || this.type.toLocaleLowerCase() == "listening"){

    if (checkRadio == null) {
      this.answers.push("");
    }
    else {
      this.answers.push(checkRadio?.getAttribute("id"));
    }
    if (nextButton?.getAttribute("value") == "finish") {
      let k = 0;
      for (let i = 0; i < this.apiQuestions.length; i++) {
        let tmp = [];
        // let x=0;
        for (let j = 0; j < this.apiQuestions[i].subQuestions.length; j++) {

          tmp.push(this.answers[k+j]);


        }
        k=k+this.apiQuestions[i].subQuestions.length;
        this.arrayOfAnswers.push(tmp);
      }
      console.log(this.arrayOfAnswers);
      this.questionService.setAnswers(this.arrayOfAnswers);
      this.router.navigate(['/testresult']);
    }
    if (this.width < this.NoOfQuestions-1) {
      this.width++;
      this.showQuestion();
      this.changelogo();
    }
    if (this.width == this.NoOfQuestions-1) {
      nextButton?.setAttribute("value", "finish");
      nextButton?.classList.add('redButton');
    }
    // this.arrayOfAnswers.push(this.answers);
  }
    else{

      if (checkRadio == null) {
        this.answers.push("");
      }
      else {
        this.answers.push(checkRadio?.getAttribute("id"));
      }
      if (nextButton?.getAttribute("value") == "finish") {
        console.log(this.answers);
        this.questionService.setAnswers(this.arrayOfAnswers);
        // this.questionService.setCategory()
        this.router.navigate(['/testresult']);
      }
      if (this.width < this.NoOfQuestions-1) {
        this.width++;
        this.showQuestion();
        this.changelogo();
      }
      if (this.width == this.NoOfQuestions-1) {
        nextButton?.setAttribute("value", "finish");
        nextButton?.classList.add('redButton');
      }
      this.arrayOfAnswers.push(this.answers);
      this.answers=[];
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

    for (let i = 0; i < this.apiQuestions.length; i++) {
      if (this.questionService.getCategory().toLocaleLowerCase()=='reading' || this.questionService.getCategory().toLocaleLowerCase()=='listening') {
        let paragraph = this.apiQuestions[i].question;;
        for (let j = 0; j < this.apiQuestions[i].subQuestions.length; j++) {
          let obj = JSON.parse(JSON.stringify(this.apiQuestions[i]));
          obj.paragraph=paragraph;
          obj.question = this.apiQuestions[i].subQuestions[j].question;
          obj.choices = this.apiQuestions[i].subQuestions[j].choices;
          obj.answer = this.apiQuestions[i].subQuestions[j].answer;
          obj.type = this.apiQuestions[i].subQuestions[j].type;
          this.questions.push(obj);
          this.NoOfQuestions = this.questions.length;

          console.log(this.questions);
        }
      }else if(this.questionService.getCategory().toLocaleLowerCase()=='listening'){
        let paragraph = this.apiQuestions[i].question;;
        for (let j = 0; j < this.apiQuestions[i].subQuestions.length; j++) {
          let obj = JSON.parse(JSON.stringify(this.apiQuestions[i]));
          obj.paragraph=paragraph;
          obj.question = this.apiQuestions[i].subQuestions[j].question;
          obj.choices = this.apiQuestions[i].subQuestions[j].choices;
          obj.answer = this.apiQuestions[i].subQuestions[j].answer;
          obj.type = this.apiQuestions[i].subQuestions[j].type;
          this.questions.push(obj);

          console.log(this.questions);
        }
        this.NoOfQuestions = this.questions.length;

      } else {
        this.questions.push(this.apiQuestions[i]);
        this.NoOfQuestions=this.apiQuestions.length;

        // console.log(this.questions);
      }
    }
    console.log(this.questions);
    this.questionService.setQuestions(this.questions);

  }


  changelogo() {
    this.type = this.questionService.getCategory();
    console.log(this.type);
    if (this.type.toLocaleLowerCase() == "grammar") {
      this.logoPath = "assets/quote.png"
    }
    else if (this.type.toLocaleLowerCase() == "vocabulary") {
      this.logoPath = "assets/block.png"
    }
    else if (this.type.toLocaleLowerCase() == "listening") {
      this.logoPath = "assets/headphone.png"
      /*convert the youtube link to iframe and do not reload it in every question*/
      // if (this.width == 0 || this.questions[this.width].paragraph != this.questions[this.width - 1].paragraph) {

      //   const videoId = this.getId(this.questions[this.width].paragraph);
      //   this.iframeMarkup = '<iframe width="100%" height="250" src="//www.youtube.com/embed/'
      //     + videoId + '" frameborder="0" allowfullscreen></iframe>';
      //   let node = document.getElementById("audio");
      //   node!.innerHTML = this.iframeMarkup;
      // }
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

