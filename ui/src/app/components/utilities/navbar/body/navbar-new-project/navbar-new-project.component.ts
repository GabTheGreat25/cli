import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar-new-project',
  templateUrl: './navbar-new-project.component.html',
  styleUrls: ['./navbar-new-project.component.scss'],
})
export class NavbarNewProjectComponent implements OnInit {
  title: string = 'Create a new project';
  constructor() {}

  ngOnInit(): void {}
}
