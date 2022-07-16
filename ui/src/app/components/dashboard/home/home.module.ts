import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { CardModule } from '../../utilities/card/card.module';
import { NavbarModule } from '../../utilities/navbar/navbar.module';
import { UtilitiesModule } from '../../utilities/utilities.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, RouterModule.forChild(routes), CardModule, NavbarModule, UtilitiesModule],
})
export class HomeModule {}
