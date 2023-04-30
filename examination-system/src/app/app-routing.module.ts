import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { InfiniteQuestionsListeningComponent } from './infinite-questions-listening/infinite-questions-listening.component';
import { QuestionInfinitComponent } from './question-infinit/question-infinit.component';
import { QuestionComponent } from './question/question.component';
import { ResultsComponent } from './results/results.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomePageWithTwoButtonsComponent } from './home-page-with-two-buttons/home-page-with-two-buttons.component';
import { SelectingExamTypeAndLengthComponentComponent } from './selecting-exam-type-and-length-component/selecting-exam-type-and-length-component.component';
import {QuestionGenerationComponent} from './question-generation/question-generation.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';

const routes: Routes = [
  {path:'',redirectTo:"/home",pathMatch:"full"},
  {path:"exercise",component:HomeComponent,children:[{path:'',component:FooterComponent}]},
  {path:"exam",component:QuestionComponent},
  {path:"infinitExam",component:QuestionInfinitComponent},
  {path:"infinitListeningExam",component:InfiniteQuestionsListeningComponent},
  {path:"result",component:ResultsComponent},
  {path:"register",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"home",component:HomePageWithTwoButtonsComponent,children:[{path:'',component:FooterComponent}]},
  {path:"testSelection",component:SelectingExamTypeAndLengthComponentComponent,children:[{path:'',component:FooterComponent}]},
  {path: 'generate', component: QuestionGenerationComponent},
  {path: 'profile', component: StudentProfileComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
