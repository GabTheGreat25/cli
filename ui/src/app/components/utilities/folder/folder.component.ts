import { Component, OnInit } from '@angular/core';

interface ICreate {
  name: string;
}

@Component({
  selector: 'folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss'],
})
export class FolderComponent implements OnInit {
  squareFolder = `../../../assets/images/square-folder.svg`;
  creates: ICreate[] = [];
  constructor() {}

  ngOnInit(): void {}
}
