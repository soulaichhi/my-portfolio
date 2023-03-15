import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class ProjectService {
  projects = [
    {
      name: 'project1',
      githubUrl: 'https://github.com/soulaichhi/movies-webapp',
      imgUrl: 'assets/projects-images/moviesapp.png',
      appUrl: 'navigate to deployed app',
      description: 'Some Decription!!!!!!!!',
    },
    {
      name: 'project2',
      githubUrl: 'https://github.com/soulaichhi/movies-webapp',
      imgUrl: 'assets/projects-images/moviesapp3.png',
      appUrl: 'navigate to deployed app',
      description: 'Some Decription!!!!!!!!',
    },
    {
      name: 'project3',
      githubUrl: 'https://github.com/soulaichhi/movies-webapp',
      imgUrl: 'assets/projects-images/moviesapp4.png',
      appUrl: 'navigate to deployed app',
      description: 'Some Decription!!!!!!!!',
    },
    {
      name: 'project4',
      githubUrl: 'https://github.com/soulaichhi/movies-webapp',
      imgUrl: 'assets/projects-images/ngshop.png',
      appUrl: 'navigate to deployed app',
      description: 'Some Decription!!!!!!!!',
    },
    {
      name: 'project5',
      githubUrl: 'https://github.com/soulaichhi/movies-webapp',
      imgUrl: 'assets/projects-images/ngshop3.png',
      appUrl: 'navigate to deployed app',
      description: 'Some Decription!!!!!!!!',
    },
    {
      name: 'project6',
      githubUrl: 'https://github.com/soulaichhi/movies-webapp',
      imgUrl: 'assets/projects-images/ngshop4.png',
      appUrl: 'navigate to deployed app',
      description: 'Some Decription!!!!!!!!',
    },
  ];
  constructor() {}
  getProjects() {
    return this.projects;
  }
}
