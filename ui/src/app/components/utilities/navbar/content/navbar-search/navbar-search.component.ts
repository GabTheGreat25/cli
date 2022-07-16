import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar-search',
  templateUrl: './navbar-search.component.html',
  styleUrls: ['./navbar-search.component.scss'],
})
export class NavbarSearchComponent implements OnInit {
  @Input() color: string = '';
  @Input() textColor: string = '';
  @Input() border: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
