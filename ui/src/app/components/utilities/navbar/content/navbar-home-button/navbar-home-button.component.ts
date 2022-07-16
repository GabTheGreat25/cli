import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'navbar-home-button',
  templateUrl: './navbar-home-button.component.html',
  styleUrls: ['./navbar-home-button.component.scss'],
})
export class NavbarHomeButtonComponent implements OnInit {
  @Input() buttons = [
    { name: 'Project', icon: 'las la-calendar-week', route: '/project' },
    { name: 'Create', icon: 'las la-plus-square', route: '/create' },
    { name: 'Import', icon: 'las la-download', route: '/import' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
