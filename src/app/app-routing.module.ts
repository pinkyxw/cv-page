import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreviewComponent } from './components/preview/preview.component';
import { CvFormComponent } from './pages/cv-form/cv-form.component';


const routes: Routes = [
  { path: 'create', component: CvFormComponent },
  { path: 'preview', component: PreviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
