import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plugin',
  templateUrl: './plugin.component.html',
  styleUrls: ['./plugin.component.scss'],
})
export class PluginComponent implements OnInit {
  textColor = '#000000';
  color = '#DEDEDE';
  border = '0.1rem solid #DEDEDE';
  plugin = `../../../assets/images/plugin.png`;
  checkbox = `../../../assets/images/checkbox.svg`;
  title = 'Project Plugin';
  addButton = 'Add vuex';
  dashboardButton = 'Add maya-router';

  constructor() {}

  ngOnInit(): void {}
}
