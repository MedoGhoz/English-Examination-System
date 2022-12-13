import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  answers!: any[];
  questions: any[] = [];
  apiQuestions!: any[];
  result: number = 0;
  iframeMarkup!: string;

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.questionService.getQuestions().subscribe({
      next: (data: any) => {
        this.apiQuestions = data.questions;
        this.formatQuestions();
        this.answers = this.questionService.getAnswers();
        for (let i = 0; i < this.answers.length; i++) {
          if (this.answers[i] == this.questions[i].answer) {
            this.result++;
          }
        }
        setTimeout(() => {
          this.showAudio();
        }, 0);
      }
    });
  }



  formatQuestions() {
    for (let i = 0; i < 10; i++) {
      if ("questions" in this.apiQuestions[i]) {
        for (let j = 0; j < this.apiQuestions[i].questions.length; j++) {
          let obj = JSON.parse(JSON.stringify(this.apiQuestions[i]));
          if (j == 0) {
            obj.first = true;
          } else {
            obj.first = false;
          }
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
    console.log(this.questions);

  }

  showAudio() {
    let j = 0;
    for (let i = 0; i < this.questions.length; i++) {
      if (this.questions[i].category.toLocaleLowerCase() == 'listening') {
        if (i == 0 || this.questions[i].header != this.questions[i - 1].header) {
          /*convert the youtube link to iframe*/
          const videoId = this.getId(this.questions[i].header);
          console.log(this.questions[i].header);

          this.iframeMarkup = '<iframe width="100%" height="250" src="//www.youtube.com/embed/'
            + videoId + '" frameborder="0" allowfullscreen></iframe>';
          console.log(String(i));
          if (document.getElementsByClassName('video')[j] != undefined) {

            document.getElementsByClassName('video')[j].innerHTML = this.iframeMarkup;
            console.log(document.getElementsByClassName('video')[i]);
            j++;
          }
        }
      }
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
