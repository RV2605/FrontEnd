import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LinkedinComponent } from './linkedin/linkedin.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  {path:'resume',component:ResumeComponent},
  {path:'linkedin',component:LinkedinComponent},
  {path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
