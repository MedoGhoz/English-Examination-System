import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from '../services/question.service';
import {saveAs} from 'file-saver';

@Component({
  selector: 'app-question-infinit',
  templateUrl: './question-infinit.component.html',
  styleUrls: ['./question-infinit.component.css']
})
export class QuestionInfinitComponent implements OnInit {
  width: number = 0;


  questions: any[] = [];
  apiQuestions!: any[];

  display: string = "block";
  showParagraph: boolean = true;
  logoPath!: string;
  type!: string;
  answers: any[] = [];
  iframeMarkup!: string;
  fileSource:any = 'http://localhost:4040/audio';

  constructor(private questionService: QuestionService, private router: Router) { }

  ngOnInit(): void {
    this.questionService.getAudioQuestion().subscribe({next:(data:any)=>{
      console.log(data);
      
    }});

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

}
