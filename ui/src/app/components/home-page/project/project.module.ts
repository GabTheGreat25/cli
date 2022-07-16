import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilitiesModule } from '../../utilities/utilities.module';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './project.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [ProjectComponent],
  imports: [CommonModule, RouterModule.forChild(routes), UtilitiesModule],
})
export class ProjectModule {}
