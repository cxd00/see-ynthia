import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeComponent} from './resume/resume.component';
import { WritingComponent} from './writing/writing.component';
import { GraphicsComponent} from './graphics/graphics.component';
import { CodingComponent} from './coding/coding.component';


const routes: Routes = [
  {path: 'resume', component: ResumeComponent},
  {path: 'w', component: WritingComponent},
  {path: 'c', component: CodingComponent},
  {path: 'g', component: GraphicsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
