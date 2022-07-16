import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'side-folder',
  templateUrl: './side-folder.component.html',
  styleUrls: ['./side-folder.component.scss'],
})
export class SideFolderComponent implements OnInit {
  @Input() tabs = [
    { name: 'Serve', subName: 'Compile and Hot Reload', icon: 'las la-folder-open' },
    { name: 'Build', subName: 'Compile and Hot Reload', icon: 'las la-folder-open' },
    { name: 'Lint', subName: 'Compile and Hot Reload', icon: 'las la-folder-open' },
    { name: 'Apolo', subName: 'Compile and Hot Reload', icon: 'las la-folder-open' },
    { name: 'Apolo:Run', subName: 'Compile and Hot Reload', icon: 'las la-folder-open' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
