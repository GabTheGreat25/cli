import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  @Input() tabs = [
    { name: 'Dashboard', icon: 'las la-window-restore', route: '/home' },
    { name: 'Plugins', icon: 'las la-project-diagram', route: '/plugin' },
    { name: 'Dependency', icon: 'las la-code-branch', route: 'dependency' },
    { name: 'Configuration', icon: 'las la-laptop-code', route: 'configuration' },
    { name: 'Task', icon: 'las la-tasks', route: 'task' },
  ];
  mayaBird = `../../../assets/images/maya-bird-with-mayajs.svg`;
  constructor() {}

  ngOnInit(): void {}
}
