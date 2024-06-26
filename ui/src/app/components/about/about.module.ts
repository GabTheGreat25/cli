import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { UtilitiesModule } from '../utilities/utilities.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, RouterModule.forChild(routes), UtilitiesModule],
})
export class AboutModule {}
