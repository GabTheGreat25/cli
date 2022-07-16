import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { UtilitiesModule } from '../utilities/utilities.module';
import { RouterModule, Routes } from '@angular/router';
import { NavbarModule } from '../utilities/navbar/navbar.module';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'configuration',
        loadChildren: () => import('./configuration/configuration.module').then((m) => m.ConfigurationModule),
      },
      {
        path: 'task',
        loadChildren: () => import('./task/task.module').then((m) => m.TaskModule),
      },
      {
        path: 'dependency',
        loadChildren: () => import('./dependency/dependency.module').then((m) => m.DependencyModule),
      },
      {
        path: 'plugin',
        loadChildren: () => import('./plugin/plugin.module').then((m) => m.PluginModule),
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, RouterModule.forChild(routes), UtilitiesModule, NavbarModule],
})
export class DashboardModule {}
