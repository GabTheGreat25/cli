import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface IFeature {
  title: string;
  content: string;
  moreInfo: string;
}

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss'],
})
export class FeatureComponent implements OnInit {
  content = 'You will able to add features after the project is created by installing plugins.';
  backTitle: string = 'Go Back';
  nextTitle: string = 'Next';
  backIcon: string = 'las la-times-circle';
  nextIcon: string = 'las la-arrow-right';
  backRoute: string = '/new-project/preset';
  nextRoute: string = '/new-project/configuration';
  features: IFeature[] = [];

  constructor(private router: Router) {}

  back() {
    this.router.navigate([this.backRoute]);
  }

  next() {
    this.router.navigate([this.nextRoute]);
  }

  ngOnInit(): void {}
}
