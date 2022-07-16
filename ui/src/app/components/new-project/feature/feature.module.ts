import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilitiesModule } from '../../utilities/utilities.module';
import { RouterModule, Routes } from '@angular/router';
import { FeatureComponent } from './feature.component';
import { PopUpModule } from '../../utilities/pop-up/pop-up.module';

const routes: Routes = [
  {
    path: '',
    component: FeatureComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [FeatureComponent],
  imports: [CommonModule, RouterModule.forChild(routes), PopUpModule, UtilitiesModule],
})
export class FeatureModule {}
