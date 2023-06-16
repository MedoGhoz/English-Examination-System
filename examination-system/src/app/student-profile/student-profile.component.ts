import { Component, OnInit } from '@angular/core';
import { faTurkishLiraSign } from '@fortawesome/free-solid-svg-icons';
import { QuestionService } from '../services/question.service';
import { TokenStorageService } from '../services/token-storage.service';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {
  level!:any;
  email!:any;
  user!:any;
  takenExams!:any;
  constructor(private questionService:QuestionService,private UserDataService:UserDataService) { }

  ngOnInit(): void {
    this.level = this.questionService.getLevel();
    // this.email = this.tokenizationService.getEmail();
    // this.user = this.tokenizationService.();
    console.log(this.user)
    this.UserDataService.getUserData().subscribe({next:(data:any)=>{
      console.log(data);
      this.user = data.user.firstName;
      this.email=data.user.email;
      console.log(this.user);
    }})
    this.questionService.getUserTakenExams().subscribe({next:(data:any)=>{
      let audio = new Audio(data);
      // audio.play()
      console.log(data);
      this.takenExams = data;
      // this.questionService.settestId(data._id);
      // if (this.apiQuestions.length==0){
      //   alert('no questions left : )')
      // }
      console.log(this.takenExams);

      // this.formatQuestions()
      // this.showQuestion();
      // this.changelogo();
    }})
  }

}
