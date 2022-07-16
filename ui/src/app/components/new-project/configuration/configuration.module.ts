import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfigurationComponent } from './configuration.component';
import { PopUpModule } from '../../utilities/pop-up/pop-up.module';
import { UtilitiesModule } from '../../utilities/utilities.module';

const routes: Routes = [
  {
    path: '',
    component: ConfigurationComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [ConfigurationComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule, PopUpModule, UtilitiesModule],
})
export class ConfigurationModule {}
