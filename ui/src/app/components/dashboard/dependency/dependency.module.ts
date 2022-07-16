import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DependencyComponent } from './dependency.component';
import { RouterModule, Routes } from '@angular/router';
import { CardModule } from '../../utilities/card/card.module';
import { UtilitiesModule } from '../../utilities/utilities.module';
import { NavbarModule } from '../../utilities/navbar/navbar.module';

const routes: Routes = [
  {
    path: '',
    component: DependencyComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [DependencyComponent],
  imports: [CommonModule, RouterModule.forChild(routes), CardModule, UtilitiesModule, NavbarModule],
})
export class DependencyModule {}
