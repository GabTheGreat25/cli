import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'about',
    loadChildren: () => import('./components/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./components/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'new-project',
    loadChildren: () => import('./components/new-project/new-project.module').then((m) => m.NewProjectModule),
  },
  {
    path: '',
    loadChildren: () => import('./components/home-page/home-page.module').then((m) => m.HomePageModule),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
