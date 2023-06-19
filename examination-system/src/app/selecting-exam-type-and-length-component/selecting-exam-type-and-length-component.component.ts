import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-selecting-exam-type-and-length-component',
  templateUrl: './selecting-exam-type-and-length-component.component.html',
  styleUrls: ['./selecting-exam-type-and-length-component.component.css']
})
export class SelectingExamTypeAndLengthComponentComponent implements OnInit {
  examType!: string;
  examLength!: number;

  ngOnInit(): void {
  }
  constructor(private router: Router,private questionservice:QuestionService) {}

  selectExamType(type: string) {
    this.examType = type;
    this.questionservice.setCategory(type);
  }

  selectExamLength(length: number) {
    this.examLength=length;
    if (this.examType.toLocaleLowerCase()=='listening'){
      if (length==5)this.questionservice.setExamDurationInMinutes(Math.floor(5));
      if (length==10)this.questionservice.setExamDurationInMinutes(Math.floor(10));
      if (length==15)this.questionservice.setExamDurationInMinutes(Math.floor(15));

    }
    if (this.examType.toLocaleLowerCase()=='reading'){
      if (length==5)this.questionservice.setExamDurationInMinutes(Math.floor(1));
      if (length==10)this.questionservice.setExamDurationInMinutes(Math.floor(2));
      if (length==15)this.questionservice.setExamDurationInMinutes(Math.floor(3));

    }
    else{
      this.questionservice.setExamDurationInMinutes(Math.floor(this.examLength));
    }
    if (this.examType=="Listening")
    this.router.navigate(['/testlistening']);
    else{
    this.router.navigate(['/test']);}

  }
}
