import { Component, OnInit } from '@angular/core';
import { LevelClassificationService } from '../services/level-classification.service'

@Component({
  selector: 'app-level-classification',
  templateUrl: './level-classification.component.html',
  styleUrls: ['./level-classification.component.css', '../_themes/minty-bootstrap.min.css']
})
export class LevelClassificationComponent implements OnInit {

  level!:string;

  constructor(private levelClassification:LevelClassificationService) { }

  ngOnInit(): void {
  }

  checkLevel(sentence:string): void {
    
    this.levelClassification.run(sentence).subscribe((data)=>{
        this.level = data.level;
    });
  }

}
