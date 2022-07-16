import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar-dashboard',
  templateUrl: './navbar-dashboard.component.html',
  styleUrls: ['./navbar-dashboard.component.scss'],
})
export class NavbarDashboardComponent implements OnInit {
  title = 'Dashboard';
  constructor() {}

  ngOnInit(): void {}
}
