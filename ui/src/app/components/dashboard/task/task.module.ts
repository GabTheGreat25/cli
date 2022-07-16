import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task.component';
import { UtilitiesModule } from '../../utilities/utilities.module';
import { RouterModule, Routes } from '@angular/router';
import { CardModule } from '../../utilities/card/card.module';
import { NavbarModule } from '../../utilities/navbar/navbar.module';

const routes: Routes = [
  {
    path: '',
    component: TaskComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [TaskComponent],
  imports: [CommonModule, RouterModule.forChild(routes), UtilitiesModule, CardModule, NavbarModule],
})
export class TaskModule {}
