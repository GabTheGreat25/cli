import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilitiesModule } from '../../utilities/utilities.module';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details.component';
import { PopUpModule } from '../../utilities/pop-up/pop-up.module';

const routes: Routes = [
  {
    path: '',
    component: DetailsComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [DetailsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), UtilitiesModule, PopUpModule],
})
export class DetailsModule {}
