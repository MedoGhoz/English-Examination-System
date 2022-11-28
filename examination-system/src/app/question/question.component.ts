import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  public width:number = 0;
  minutes:number = 0;
  seconds:number = 0;
  timeLeft:number = 600;
  interval:any;
  constructor() { }

  ngOnInit(): void {
    this.startTimer()
  }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
        this.minutes = Math.floor((this.timeLeft / 60));
        this.seconds = (this.timeLeft % 60);
      } else {
        this.width = 0;
      }
    },1000)
  }



}
