import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-home-page-with-two-buttons',
  templateUrl: './home-page-with-two-buttons.component.html',
  styleUrls: ['./home-page-with-two-buttons.component.css']
})
export class HomePageWithTwoButtonsComponent implements OnInit {

  constructor(private QuestionServie:QuestionService) { }

  ngOnInit(): void {
    if(!(this.QuestionServie.getLevel() == 'A1' || this.QuestionServie.getLevel()== 'A2'|| this.QuestionServie.getLevel()== 'B1'|| this.QuestionServie.getLevel()== 'B2'|| this.QuestionServie.getLevel()== 'C1' || this.QuestionServie.getLevel()== 'C2'))
    {this.QuestionServie.setLevel('');}
    console.log(this.QuestionServie.getLevel()=='')
    let rightButton = document.getElementsByClassName('button-right')[0];
    let leftButton = document.getElementsByClassName('button-left')[0];
    let rightrightbutton = document.getElementsByClassName('button-right-right')[0];
    if (this.QuestionServie.getLevel()==''){
      rightButton.classList.add('nd');
      leftButton.classList.add('nd');
      console.log(leftButton)
      console.log(rightButton)
      const div = document.createElement('div')
      div.innerHTML ="<p style = 'color:black; font-weight:thin;font-size: small;'>PS: You need to take the Placement Test to have \n access to the training material </p>";
      let buttonContainer = document.getElementsByClassName('button-container')[0];
      buttonContainer.appendChild(div)
    }
    else{
      rightButton.classList.remove('nd');
      leftButton.classList.remove('nd');
      rightrightbutton.classList.add('nd')
    }
  }
 placementTest():void{
  this.QuestionServie.setCategory('placement');
 }
}
