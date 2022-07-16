import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  folder = `../../../assets/images/folder.svg`;
  route: string = '/new-project/preset';
  backRoute: string = '/home-page/project';
  isOpen: boolean = false;
  title = 'Cancel and reset project creation';
  clearTitle = 'Clear Project';
  backTitle: string = 'Go Back';
  nextTitle: string = 'Next';
  backIcon: string = 'las la-times-circle';
  nextIcon: string = 'las la-arrow-right';

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }

  back() {
    this.router.navigate([this.backRoute]);
  }

  constructor(private router: Router) {}

  ngOnInit(): void {}

  next() {
    this.router.navigate([this.route]);
  }
}
