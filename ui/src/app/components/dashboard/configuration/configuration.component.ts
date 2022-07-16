import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss'],
})
export class ConfigurationComponent implements OnInit {
  textColor = '#000000';
  color = '#DEDEDE';
  border = '0.1rem solid #DEDEDE';
  title = 'Project Configuration';

  constructor() {}

  ngOnInit(): void {}
}
