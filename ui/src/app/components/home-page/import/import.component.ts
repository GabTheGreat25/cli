import { Component, OnInit } from '@angular/core';

interface IImport {
  name: string;
}

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.scss'],
})
export class ImportComponent implements OnInit {
  squareFolder = `../../../assets/images/square-folder.svg`;
  route: string = '';
  projectName: string = 'Import this folder';
  projectLogo: string = 'las la-cloud-upload-alt';
  imports: IImport[] = [];
  constructor() {}

  ngOnInit(): void {}
}
