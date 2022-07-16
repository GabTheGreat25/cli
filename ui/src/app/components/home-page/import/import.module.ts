import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilitiesModule } from '../../utilities/utilities.module';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ImportComponent } from './import.component';
import { CardModule } from '../../utilities/card/card.module';

const routes: Routes = [
  {
    path: '',
    component: ImportComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [ImportComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule, UtilitiesModule, CardModule],
})
export class ImportModule {}
