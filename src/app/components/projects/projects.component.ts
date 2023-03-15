import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects!: any[];
  responsiveOptions;

  constructor(
    private projectService: ProjectService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }
  goToGithubUrl(): void {
    this.projects.map((project) => {
      this.document.location.href = `${project.githubUrl}`;
    });
  }
  viewProject(): void {
    this.projects.map((project) => {
      this.document.location.href = `${project.appUrl}`;
    });
  }
  //this.document.location.href = '';
}
