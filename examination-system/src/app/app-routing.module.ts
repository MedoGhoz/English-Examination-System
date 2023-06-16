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
import { QuestionGenerationComponent } from './question-generation/question-generation.component';
import { GrammarDemoComponent } from './grammar-Demo/grammar-Demo.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { AuthGuard } from './auth/auth.guard';
import { ExamQuestionsComponent } from './exam-questions/exam-questions.component';
import { examGuard } from './auth.guard';
import { TestResultComponent } from './test-result/test-result.component';
import { PlacementTestComponent } from './placement-test/placement-test.component';
import { AboutComponent } from './about/about.component';
import { VocabDemoComponent } from './VocabDemo/VocabDemo.component';

const routes: Routes = [
  { path: '', redirectTo: "/home", pathMatch: "full" },
  { path: "exercise", component: HomeComponent, children: [{ path: '', component: FooterComponent }], canActivate: [AuthGuard] },
  { path: "exam", component: QuestionComponent, canActivate: [AuthGuard] },
  { path: "infinitExam", component: QuestionInfinitComponent, canActivate: [AuthGuard] },
  { path: "infinitListeningExam", component: InfiniteQuestionsListeningComponent, canActivate: [AuthGuard] },
  { path: "result", component: ResultsComponent, canActivate: [AuthGuard] },
  { path: "register", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "home", component: HomePageWithTwoButtonsComponent, children: [{ path: '', component: FooterComponent }], canActivate: [AuthGuard] },
  { path: "testSelection", component: SelectingExamTypeAndLengthComponentComponent, children: [{ path: '', component: FooterComponent }], canActivate: [AuthGuard] },
  { path: 'profile', component: StudentProfileComponent, canActivate: [AuthGuard] },
  { path: 'test', component: ExamQuestionsComponent, canActivate: [AuthGuard, examGuard] },
  { path: "testresult", component: TestResultComponent, canActivate: [AuthGuard] },
  {path:"generateListeningDemo/:level",component:InfiniteQuestionsListeningComponent,canActivate:[AuthGuard]},
  { path: "placementtest", component: PlacementTestComponent, canActivate: [AuthGuard] },
  { path: "about", component: AboutComponent },
  { path: "grammarDemo", component: GrammarDemoComponent, canActivate: [AuthGuard] },
  { path: 'readingDemo', component: QuestionGenerationComponent, canActivate: [AuthGuard] },
  { path: 'vocabDemo', component: VocabDemoComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
