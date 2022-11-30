import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { QuestionComponent } from './question/question.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  {path:'',redirectTo:"/home",pathMatch:"full"},
  {path:"home",component:HomeComponent,children:[{path:'',component:FooterComponent}]},
  {path:"exam",component:QuestionComponent},
  {path:"result",component:ResultsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
