import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { QuestionComponent } from './question/question.component';
import { ResultsComponent } from './results/results.component';
import { QuestionInfinitComponent } from './question-infinit/question-infinit.component';
import { FormsModule } from '@angular/forms';
import { InfiniteQuestionsListeningComponent } from './infinite-questions-listening/infinite-questions-listening.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomePageWithTwoButtonsComponent } from './home-page-with-two-buttons/home-page-with-two-buttons.component';
import { SelectingExamTypeAndLengthComponentComponent } from './selecting-exam-type-and-length-component/selecting-exam-type-and-length-component.component';

import { QuestionGenerationComponent } from './question-generation/question-generation.component';
import { GrammarDemoComponent } from './grammar-Demo/grammar-Demo.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { ExamQuestionsComponent } from './exam-questions/exam-questions.component';
import { TestResultComponent } from './test-result/test-result.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    QuestionComponent,
    ResultsComponent,
    QuestionInfinitComponent,
    InfiniteQuestionsListeningComponent,
    LoginComponent,
    SignupComponent,
    HomePageWithTwoButtonsComponent,
    SelectingExamTypeAndLengthComponentComponent,
    QuestionGenerationComponent,
    StudentProfileComponent,
    ExamQuestionsComponent,
    TestResultComponent,
    GrammarDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
