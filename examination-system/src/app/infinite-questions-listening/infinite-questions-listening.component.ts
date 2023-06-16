import { transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-infinite-questions-listening',
  templateUrl: './infinite-questions-listening.component.html',
  styleUrls: ['./infinite-questions-listening.component.css']
})
export class InfiniteQuestionsListeningComponent implements OnInit {
  width: number = 0;
  answer: string = "";
  text: string = "";
  submitted: boolean = false;
  questions: any[] = [];
  apiQuestions!: any[];
  unorderRightAnswerArr:string[]=[];
  display: string = "block";
  showParagraph: boolean = true;
  logoPath!: string;
  type!: string;
  answers: any[] = [];
  iframeMarkup!: string;
  color!:string;
  fileSource: any = 'http://localhost:4040/generateListeningQuestion/audio/getAudio';

  constructor(private questionService: QuestionService, private router: Router) { }

  ngOnInit(): void {
    if(this.router.url.split("/").length == 3){
      this.questionService.level = this.router.url.split("/")[2]
    }else{
      this.questionService.level == "A1"
    }
    setTimeout(() => {
      this.questionService.getAudioQuestion().subscribe({
        next: (data: any) => {
          console.log(data);
          this.text = data.text;
        }
      });

    });
    this.getSelection();
    this.changelogo();
  }

  getSelection() {

  }

  // showQuestion() {
  //   if (this.questions[this.width].category.toLocaleLowerCase() === "grammar" || this.questions[0].category.toLocaleLowerCase() === "vocabulary") {
  //     this.display = "none";
  //   } else {
  //     this.display = "block";
  //   }
  // }

  changelogo() {
    // this.type = this.questions[this.width].category;
    this.type = "listening";
    this.logoPath = "assets/headphone.png";
    if (this.type.toLocaleLowerCase() == "grammar") {
      this.logoPath = "assets/quote.png"
    }
    else if (this.type.toLocaleLowerCase() == "vocabulary") {
      this.logoPath = "assets/block.png"
    }
    else if (this.type.toLocaleLowerCase() == "listening") {
      this.logoPath = "assets/headphone.png";
    }
    else if (this.type.toLocaleLowerCase() == "reading") {
      this.logoPath = "assets/open-book.png"
    }
  }

  nextQuestion() {
    location.reload();
    setTimeout(() => {
      this.questionService.getAudioQuestion().subscribe({
        next: (data: any) => {
        }
      });

    }, 300);
  }
  submitQuestion() {
    console.log('submitted');
    this.submitted = true;
    this.answer = this.answer.toLocaleLowerCase();
    this.answer = this.answer.replace(".","");
    this.answer = this.answer.replace(","," ");
    this.answer = this.answer.replace(";"," ");
    let answerArr = this.answer.split(" ");
    this.text = this.text.toLocaleLowerCase()
    this.text = this.text.replace(".","")
    this.text = this.text.replace(","," ")
    this.text = this.text.replace(";"," ")
    let textArr = this.text.split(" ");    
    const result = document.getElementById("result");
    for (let i = 0; i < answerArr.length; i++) {
      if (textArr.includes(answerArr[i])){
        this.unorderRightAnswerArr.push(answerArr[i]);
      }
    }
    for (let i = 0; i < textArr.length; i++) {
      if (result != null) {
        if (textArr[i].toLocaleLowerCase() == answerArr[i]) {
          result.innerHTML += `<span class="correct" style="color:green"> ${answerArr[i]} </span>`
        }
        else {

          if(this.unorderRightAnswerArr.includes(textArr[i].toLocaleLowerCase())){
            this.color='green'
          }
          else{
            this.color='red'
          }

          result.innerHTML += `<span class="wrong" style="color:${this.color}"> ${textArr[i]} </span>`
        }
      }
    }

  }
}