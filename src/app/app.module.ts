import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CvHeaderComponent } from './components/cv-header/cv-header.component';
import { CvSectionComponent } from './components/cv-section/cv-section.component';
import { CvSubSectionComponent } from './components/cv-sub-section/cv-sub-section.component';
import { CvMiniSectionComponent } from './components/cv-mini-section/cv-mini-section.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    CvHeaderComponent,
    CvSectionComponent,
    CvSubSectionComponent,
    CvMiniSectionComponent,
    ProgressBarComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
