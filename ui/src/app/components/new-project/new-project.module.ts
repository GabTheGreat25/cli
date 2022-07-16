import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewProjectComponent } from './new-project.component';
import { UtilitiesModule } from '../utilities/utilities.module';
import { RouterModule, Routes } from '@angular/router';
import { NavbarModule } from '../utilities/navbar/navbar.module';

const routes: Routes = [
  {
    path: '',
    component: NewProjectComponent,
    children: [
      {
        path: 'configuration',
        loadChildren: () => import('./configuration/configuration.module').then((m) => m.ConfigurationModule),
      },

      {
        path: 'feature',
        loadChildren: () => import('./feature/feature.module').then((m) => m.FeatureModule),
      },
      {
        path: 'preset',
        loadChildren: () => import('./preset/preset.module').then((m) => m.PresetModule),
      },
      {
        path: 'details',
        loadChildren: () => import('./details/details.module').then((m) => m.DetailsModule),
      },
      {
        path: '**',
        redirectTo: 'details',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  declarations: [NewProjectComponent],
  imports: [CommonModule, RouterModule.forChild(routes), UtilitiesModule, NavbarModule],
})
export class NewProjectModule {}
