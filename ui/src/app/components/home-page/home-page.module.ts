import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilitiesModule } from '../utilities/utilities.module';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page.component';
import { NavbarModule } from '../utilities/navbar/navbar.module';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      {
        path: 'import',
        loadChildren: () => import('./import/import.module').then((m) => m.ImportModule),
      },
      {
        path: 'create',
        loadChildren: () => import('./create/create.module').then((m) => m.CreateModule),
      },
      {
        path: 'project',
        loadChildren: () => import('./project/project.module').then((m) => m.ProjectModule),
      },
      {
        path: '**',
        redirectTo: 'project',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, RouterModule.forChild(routes), UtilitiesModule, NavbarModule],
})
export class HomePageModule {}
