import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selecting-exam-type-and-length-component',
  templateUrl: './selecting-exam-type-and-length-component.component.html',
  styleUrls: ['./selecting-exam-type-and-length-component.component.css']
})
export class SelectingExamTypeAndLengthComponentComponent implements OnInit {
  examType!: string;
  examLength!: string;

  ngOnInit(): void {
  }
  constructor(private router: Router) {}

  selectExamType(type: string) {
    this.examType = type;
  }

  selectExamLength(length: string) {
    this.examLength = length;
    this.router.navigate(['/exam', this.examType, this.examLength]);
  }
}
