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

const routes: Routes = [
  {path:'',redirectTo:"/home",pathMatch:"full"},
  {path:"home",component:HomeComponent,children:[{path:'',component:FooterComponent}]},
  {path:"exam",component:QuestionComponent},
  {path:"infinitExam",component:QuestionInfinitComponent},
  {path:"infinitListeningExam",component:InfiniteQuestionsListeningComponent},
  {path:"result",component:ResultsComponent},
  {path:"register",component:LoginComponent},
  {path:"signup",component:SignupComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
