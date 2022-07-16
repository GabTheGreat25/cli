import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  textColor = '#000000';
  color = '#DEDEDE';
  border = '0.1rem solid #DEDEDE';
  title = 'Project Task';

  constructor() {}

  ngOnInit(): void {}
}
