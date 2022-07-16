import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { NavbarHeadComponent } from './title/navbar-head/navbar-head.component';
import { NavbarSearchComponent } from './content/navbar-search/navbar-search.component';
import { RouterModule } from '@angular/router';
import { NavbarHomeComponent } from './body/navbar-home/navbar-home.component';
import { NavbarHomeButtonComponent } from './content/navbar-home-button/navbar-home-button.component';
import { NavbarNewProjectComponent } from './body/navbar-new-project/navbar-new-project.component';
import { NavbarNewProjectButtonComponent } from './content/navbar-new-project-button/navbar-new-project-button.component';
import { NavbarNameComponent } from './title/navbar-name/navbar-name.component';
import { NavbarDropdownComponent } from './content/navbar-dropdown/navbar-dropdown.component';
import { NavbarDashboardComponent } from './body/navbar-dashboard/navbar-dashboard.component';
import { CardModule } from '../card/card.module';
import { UtilitiesModule } from '../utilities.module';
import { NavbarDashboardButtonComponent } from './content/navbar-dashboard-button/navbar-dashboard-button.component';

@NgModule({
  declarations: [
    NavbarComponent,
    NavbarHeadComponent,
    NavbarSearchComponent,
    NavbarHomeComponent,
    NavbarHomeButtonComponent,
    NavbarNewProjectComponent,
    NavbarNewProjectButtonComponent,
    NavbarNameComponent,
    NavbarDropdownComponent,
    NavbarDashboardComponent,
    NavbarDashboardButtonComponent,
  ],
  imports: [CommonModule, RouterModule, CardModule, UtilitiesModule],
  exports: [
    NavbarComponent,
    NavbarHeadComponent,
    NavbarSearchComponent,
    NavbarHomeComponent,
    NavbarHomeButtonComponent,
    NavbarNewProjectComponent,
    NavbarNewProjectButtonComponent,
    NavbarNameComponent,
    NavbarDropdownComponent,
    NavbarDashboardComponent,
    NavbarDashboardButtonComponent,
  ],
})
export class NavbarModule {}
