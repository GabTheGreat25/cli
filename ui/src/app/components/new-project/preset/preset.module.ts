import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresetComponent } from './preset.component';
import { UtilitiesModule } from '../../utilities/utilities.module';
import { RouterModule, Routes } from '@angular/router';
import { PopUpModule } from '../../utilities/pop-up/pop-up.module';

const routes: Routes = [
  {
    path: '',
    component: PresetComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [PresetComponent],
  imports: [CommonModule, RouterModule.forChild(routes), UtilitiesModule, PopUpModule],
})
export class PresetModule {}
