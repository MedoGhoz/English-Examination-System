import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../services/question.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listening-infinite',
  templateUrl: './listening-infinite.component.html',
  styleUrls: ['./listening-infinite.component.css']
})
export class ListeningInfiniteComponent implements OnInit {

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
  answers: any[] = []; //the model answers
  arrayOfAnswers: any[] = [];
  listeningAnswer!:string;

  fileSource!:string;
  fileNames:any[] = []; //the questions

  iframeMarkup!: string;
  audioLoaded:boolean=false;


  constructor(private questionService: QuestionService, private router: Router) {
  }

  ngOnInit(): void {

    this.changelogo();
    this.type = this.questionService.getCategory();
      console.log('Listening quesiton')
      this.questionService.getExamQuestions().subscribe({next:(data:any)=>{
        console.log(data._id)
        this.changelogo();
        this.startTimer();
        this.NoOfQuestions = data.questions.length;
        for(let i = 0;i<this.NoOfQuestions;i++){
        console.log(data);
        this.fileNames.push(data.questions[i].question);
        this.answers.push(data.questions[i].answer);
        console.log(this.fileNames)
      }
        this.apiQuestions = data.questions;
        this.questionService.settestId(data._id);
        if (this.apiQuestions.length==0){
          alert('no questions left : )')
          setTimeout(()=>{this.router.navigate(['/testSelection']);},40)
        }
        console.log(this.apiQuestions);
        this.showQuestion();
        this.questionService.setQuestions(this.apiQuestions);
      }})
      this.questionService.setCategory('listening')
  }
  startTimer() {
    this.timeLeft = this.questionService.examDurationInMinutes*60*5;
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
    console.log(this.listeningAnswer)
    let userInput = (document.getElementsByClassName('answer')[0] as HTMLInputElement).value;
    let nextButton = document.querySelector(".nextButton");
    // let checkRadio = document.querySelector('input[name="selection"]:checked');
    if (this.width == this.NoOfQuestions-1) {
      nextButton?.setAttribute("value", "finish");
      nextButton?.classList.add('redButton');
    }
      // console.log(userInput)
      // console.log(userInput.textContent)
      this.arrayOfAnswers.push(userInput);

    if (nextButton?.getAttribute("value") == "finish") {
      let arr:string[][] = [];
      let k = 0;
      for (let i = 0; i < this.apiQuestions.length; i++) {
        let tmp:string[] = [];
        tmp.push(this.arrayOfAnswers[k]);
        console.log(tmp)
        k=k+1;
        arr.push(tmp);
      }

      console.log(this.arrayOfAnswers);
      console.log(arr);

      this.questionService.setAnswers(arr);
      this.router.navigate(['/testresult']);
    }
    if (this.width < this.NoOfQuestions-1) {
      this.width++;
      this.showQuestion();
    }

    // this.arrayOfAnswers.push(this.answers);


  }

  showQuestion() {
    let fileName=this.fileNames[this.width].split(' ').join('_');
       console.log(fileName)
        this.fileSource = `http://localhost:4040/generateListeningQuestion/audio/${fileName}`;
        let audioDiv = document.getElementsByClassName('audioInsert')[0]
        audioDiv.innerHTML=``;
        audioDiv.innerHTML=`<audio controls><source src=${this.fileSource} type="audio/mp3"></audio>`
        console.log(audioDiv)
        this.display = "block";
  }




  changelogo() {
      this.logoPath = "assets/headphone.png"
  }

}
