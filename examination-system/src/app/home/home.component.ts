import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.questionService.setCategory('');
  }

  set_category(cat:string){
    this.questionService.setCategory(cat);
  }
}
