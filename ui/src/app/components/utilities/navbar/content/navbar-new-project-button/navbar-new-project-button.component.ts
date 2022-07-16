import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'navbar-new-project-button',
  templateUrl: './navbar-new-project-button.component.html',
  styleUrls: ['./navbar-new-project-button.component.scss'],
})
export class NavbarNewProjectButtonComponent implements OnInit {
  @Input() buttons = [
    { name: 'Details', icon: 'las la-calendar', route: '/details' },
    { name: 'Presets', icon: 'las la-calendar-week', route: '/preset' },
    { name: 'Features', icon: 'las la-file-medical', route: '/feature' },
    { name: 'Configuration', icon: 'las la-download', route: '/configuration' },
  ];

  birdLogo = `../../../assets/images/maya-bird-logo.svg`;
  constructor() {}

  ngOnInit(): void {}
}
