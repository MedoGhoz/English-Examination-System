import { transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-question-infinit',
  templateUrl: './question-infinit.component.html',
  styleUrls: ['./question-infinit.component.css']
})
export class QuestionInfinitComponent implements OnInit {
  width: number = 0;
  answer: string = "";
  text: string = "";
  submitted: boolean = false;
  questions: any[] = [];
  apiQuestions!: any[];

  display: string = "block";
  showParagraph: boolean = true;
  logoPath!: string;
  type!: string;
  answers: any[] = [];
  iframeMarkup!: string;
  fileSource: any = 'http://localhost:4040/audio';

  constructor(private questionService: QuestionService, private router: Router) { }

  ngOnInit(): void {

    setTimeout(() => {
      this.questionService.getAudioQuestion().subscribe({
        next: (data: any) => {
          console.log(data);
          this.text = data.text;
        }
      });

    }, 300);
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
          console.log(data);

        }
      });

    }, 300);
  }

  submitQuestion() {
    this.submitted = true;
    let answerArr = this.answer.split(" ");
    const textLowerCase = this.text.toLocaleLowerCase();
    const textLowerCase2 = textLowerCase.slice(0,-3);
    let textArr = textLowerCase2.split(" ");
    console.log(textArr);
    
    const result = document.getElementById("result");
    console.log(answerArr);
    for (let i = 0; i < answerArr.length; i++) {
      if (result != null) {
        console.log(answerArr[i].toLocaleLowerCase());
        
        if (textArr.includes(answerArr[i].toLocaleLowerCase())) {
          result.innerHTML += `<span class="correct" style="color:green"> ${answerArr[i]} </span>`
        } else {
          result.innerHTML += `<span class="wrong" style="color:red"> ${answerArr[i]} </span>`
        }
      }
    }

  }
}
