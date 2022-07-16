import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PluginComponent } from './plugin.component';
import { UtilitiesModule } from '../../utilities/utilities.module';
import { RouterModule, Routes } from '@angular/router';
import { CardModule } from '../../utilities/card/card.module';
import { NavbarModule } from '../../utilities/navbar/navbar.module';

const routes: Routes = [
  {
    path: '',
    component: PluginComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [PluginComponent],
  imports: [CommonModule, RouterModule.forChild(routes), UtilitiesModule, CardModule, NavbarModule],
})
export class PluginModule {}
