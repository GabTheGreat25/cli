import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationComponent } from './configuration.component';
import { RouterModule, Routes } from '@angular/router';
import { CardModule } from '../../utilities/card/card.module';
import { NavbarModule } from '../../utilities/navbar/navbar.module';
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
  imports: [CommonModule, RouterModule.forChild(routes), UtilitiesModule, CardModule, NavbarModule],
})
export class ConfigurationModule {}
