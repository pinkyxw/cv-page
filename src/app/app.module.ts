import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CvHeaderComponent } from './components/cv-header/cv-header.component';
import { CvSectionComponent } from './components/cv-section/cv-section.component';
import { CvSubSectionComponent } from './components/cv-sub-section/cv-sub-section.component';
import { CvMiniSectionComponent } from './components/cv-mini-section/cv-mini-section.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { CvFormComponent } from './pages/cv-form/cv-form.component';
import { AppRoutingModule } from './app-routing.module';
import { PreviewComponent } from './components/preview/preview.component';

@NgModule({
  declarations: [
    AppComponent,
    CvHeaderComponent,
    CvSectionComponent,
    CvSubSectionComponent,
    CvMiniSectionComponent,
    ProgressBarComponent,
    CvFormComponent,
    PreviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
