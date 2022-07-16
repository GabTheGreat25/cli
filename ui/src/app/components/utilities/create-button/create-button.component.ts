import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'create-button',
  templateUrl: './create-button.component.html',
  styleUrls: ['./create-button.component.scss'],
})
export class CreateButtonComponent implements OnInit {
  @Input() route: string = '/';
  @Input() projectName = '';
  @Input() projectLogo = '';
  constructor(private router: Router) {}

  ngOnInit(): void {}

  changeRoute() {
    this.router.navigate([this.route]);
  }
}
