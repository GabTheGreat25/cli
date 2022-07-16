import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  route: string = '/new-project/details';
  projectName: string = 'Create a new project here';
  projectLogo: string = 'las la-plus';

  constructor() {}

  ngOnInit(): void {}
}
