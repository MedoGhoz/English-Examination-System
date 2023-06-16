import { Component, OnInit } from '@angular/core';
import { Question } from '../_models/quesiton'
import { VocabDemoService } from '../services/VocabDemo.service';
import { VocabDemoRequest } from '../_models/VocabDemoRequest';

@Component({
  selector: 'app-VocabDemo',
  templateUrl: './VocabDemo.component.html',
  styleUrls: ['./VocabDemo.component.css', '../_themes/minty-bootstrap.min.css']
})
export class VocabDemoComponent implements OnInit {

  questions: Question[] = [];
  isLoading = false;

  selectedLevel: string = "";
  constructor(private VocabDemoService: VocabDemoService) { }
  ngOnInit() {
  }

  generate(sentence: string, level: string): void {

    if (!sentence) { return; }

    let req = new VocabDemoRequest()
    req.sentence = sentence.trim()
    req.level = level

    this.questions = []
    this.isLoading = true;
    this.VocabDemoService.generate(req)
      .subscribe(questions => {
        this.isLoading = false;
        this.questions = []
        for (let i = 0; i < questions.length; i++) {
          const questionJson = questions[i];
          this.questions.push(JSON.parse(JSON.stringify(questionJson)))
        }
      });
  }

  checkAnswer(quesiton: Question, answer: string) {
    return quesiton.answer == answer
  }
}
