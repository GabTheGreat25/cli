import { Component, OnInit } from '@angular/core';

interface IProject {
  name: string;
  info: string;
  favorite: boolean;
}

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  addFile = `../../../assets/images/add-file.svg`;
  route: string = '/create';
  projectName: string = 'Create a new project here';
  projectLogo: string = 'las la-plus';
  projects: IProject[] = [];

  constructor() {}

  ngOnInit(): void {
    this.getProjects();
  }

  onFavorite(project: IProject) {
    this.projects.forEach((project) => {
      if (project.name === project.name) {
        project.favorite = !project.favorite;
      }
    });
  }

  getProjects() {
    // TODO: get projects from API
  }
}
