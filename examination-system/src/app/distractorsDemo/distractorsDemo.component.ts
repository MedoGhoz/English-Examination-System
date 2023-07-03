import { Component, OnInit } from '@angular/core';
import { distractorsDemoService } from '../services/distractorsDemo.service';
import { distractorsDemoRequest } from '../_models/distractorsDemoRequest';

@Component({
  selector: 'app-distractorsDemo',
  templateUrl: './distractorsDemo.component.html',
  styleUrls: ['./distractorsDemo.component.css', '../_themes/minty-bootstrap.min.css']
})
export class distractorsDemoComponent implements OnInit {

  isLoading = false;
  mcq: string[] = [];
  constructor(private distractorsDemoService: distractorsDemoService) { }
  ngOnInit() {
  }

  generate(word: string, n: string): void {

    if (!word) { return; }

    let req = new distractorsDemoRequest()
    req.word = word.trim()
    req.n = Number(n) + 1

    this.isLoading = true;
    this.distractorsDemoService.generate(req)
      .subscribe(data => {
        this.isLoading = false;
        this.mcq = data
        // console.log(this.mcq)
      },
        error => {
          this.isLoading = false;
        });
  }
}
