import { Component, OnInit } from '@angular/core';

interface IExtension {
  title: string;
  service: string;
  version: string;
  official: string;
  install: string;
  local: string;
  info: string;
}

@Component({
  selector: 'extension',
  templateUrl: './extension.component.html',
  styleUrls: ['./extension.component.scss'],
})
export class ExtensionComponent implements OnInit {
  plugin = `../../../assets/images/plugin.png`;
  checkbox = `../../../assets/images/checkbox.svg`;
  extensions: IExtension[] = [];
  constructor() {}

  ngOnInit(): void {}
}
