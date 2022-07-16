import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'navbar-head',
  templateUrl: './navbar-head.component.html',
  styleUrls: ['./navbar-head.component.scss'],
})
export class NavbarHeadComponent implements OnInit {
  @Input() title: string = ''
  birdLogo = `../../../assets/images/maya-bird-logo.svg`;
  constructor() {}

  ngOnInit(): void {}
}
