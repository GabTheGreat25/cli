import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dependency',
  templateUrl: './dependency.component.html',
  styleUrls: ['./dependency.component.scss'],
})
export class DependencyComponent implements OnInit {
  textColor = '#000000';
  color = '#DEDEDE';
  border = '0.1rem solid #DEDEDE';
  title = 'Project Dependency';
  addButton = 'Add vuex';
  dashboardButton = 'Add maya-router';

  constructor() {}

  ngOnInit(): void {}
}
