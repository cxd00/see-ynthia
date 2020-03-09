import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ResumeComponent } from './resume/resume.component';
import { WritingComponent } from './writing/writing.component';
import { CodingComponent } from './coding/coding.component';
import { GraphicsComponent } from './graphics/graphics.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ResumeComponent,
    WritingComponent,
    CodingComponent,
    GraphicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
