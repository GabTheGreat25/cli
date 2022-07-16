import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface IPreset {
  name: string;
  content: string;
}

@Component({
  selector: 'app-preset',
  templateUrl: './preset.component.html',
  styleUrls: ['./preset.component.scss'],
})
export class PresetComponent implements OnInit {
  content =
    "A preset is an association of plugins and configurations. After you've selected features, you can optionally save it as a preset so that you can reuse it for future projects, without having to reconfigure everything again.";
  isOpen: boolean = false;
  icon = `../../../assets/images/globe.svg`;
  infoTitle = 'Preset URL';
  popupTitle = 'Link';
  title = 'Configure Remote Preset';
  info = 'Save the features and configuration into a new preset.';
  clearTitle = 'Done';
  folder = `../../../assets/images/folder.svg`;
  backRoute: string = '/new-project/details';
  nextRoute: string = '/new-project/feature';
  backTitle: string = 'Go Back';
  nextTitle: string = 'Next';
  backIcon: string = 'las la-times-circle';
  nextIcon: string = 'las la-arrow-right';
  radios: IPreset[] = [];

  constructor(private router: Router) {}

  back() {
    this.router.navigate([this.backRoute]);
  }

  next() {
    this.router.navigate([this.nextRoute]);
  }

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }

  ngOnInit(): void {}
}
