import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'navbar-dashboard-button',
  templateUrl: './navbar-dashboard-button.component.html',
  styleUrls: ['./navbar-dashboard-button.component.scss'],
})
export class NavbarDashboardButtonComponent implements OnInit {
  @Input() addButton: string = '';
  @Input() dashboardButton: string = '';
  constructor() {}

  ngOnInit(): void {}
}
