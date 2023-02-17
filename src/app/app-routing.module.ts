import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectAckComponent } from './Components/projectCreation/project-ack/project-ack.component';
import { ProjectCreationFormComponent } from './Components/projectCreation/project-creation-form/project-creation-form.component';
import { ProjectWelcomepageComponent } from './Components/projectCreation/project-welcomepage/project-welcomepage.component';

const routes: Routes = [
  {path:'projectform', component: ProjectCreationFormComponent},
  {path: '', component: ProjectWelcomepageComponent},
  {path:'ack',component:ProjectAckComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
