import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar-home',
  templateUrl: './navbar-home.component.html',
  styleUrls: ['./navbar-home.component.scss'],
})
export class NavbarHomeComponent implements OnInit {
  title: string = 'Manage Project';
  constructor() {}

  ngOnInit(): void {}
}
