import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss'],
})
export class ConfigurationComponent implements OnInit {
  isOpen: boolean = false;
  icon = `../../../assets/images/folder.svg`;
  infoTitle = 'Preset Name';
  popupTitle = 'Name';
  title = 'Save as a new preset';
  info = 'Save the features and configuration into a new preset.';
  continueTitle = 'Continue without saving';
  createTitle = 'Create a preset';
  folder = `../../../assets/images/folder.svg`;
  backRoute: string = '/new-project/feature';
  nextRoute: string = '/dashboard/home';
  backTitle: string = 'Go Back';
  nextTitle: string = 'Continue';
  backIcon: string = 'las la-times-circle';
  nextIcon: string = 'las la-check';

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }

  back() {
    this.router.navigate([this.backRoute]);
  }

  next() {
    this.router.navigate([this.nextRoute]);
  }

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
