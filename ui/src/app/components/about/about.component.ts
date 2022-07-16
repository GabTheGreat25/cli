import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  content =
    'MayaJS is designed for simplicity and ease of use for beginners. It is built using Typescript to take advantage of strong type checking and at the same time preserving support for pure Javascript. It also has support for MongoDb and SQL databases.';
  bg = '#FFFFFF';
  backRoute: string = 'dashboard/home';

  constructor(private router: Router) {}

  back() {
    this.router.navigate([this.backRoute]);
  }

  ngOnInit(): void {}
}
