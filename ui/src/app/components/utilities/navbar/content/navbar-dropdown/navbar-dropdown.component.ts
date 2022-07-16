import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar-dropdown',
  templateUrl: './navbar-dropdown.component.html',
  styleUrls: ['./navbar-dropdown.component.scss'],
})
export class NavbarDropdownComponent implements OnInit {
  isHidden: boolean = false;
  homeRoute: string = '/';
  aboutRoute: string = '/about';
  constructor(private router: Router) {}

  home() {
    this.router.navigate([this.homeRoute]);
  }

  about() {
    this.router.navigate([this.aboutRoute]);
  }

  onHide() {
    this.isHidden = !this.isHidden;
  }

  ngOnInit(): void {}
}
