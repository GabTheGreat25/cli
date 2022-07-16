import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'navbar-name',
  templateUrl: './navbar-name.component.html',
  styleUrls: ['./navbar-name.component.scss'],
})
export class NavbarNameComponent implements OnInit {
  @Input() title: string = '';
  constructor() {}

  ngOnInit(): void {}
}
