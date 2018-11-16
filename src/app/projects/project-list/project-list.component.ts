import { AuthService } from './../../auth/auth.service';
import { ProjectsService } from './../projects.service';
import { Project } from '../project.model';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-project-list',
    templateUrl: './project-list.component.html',
    styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

    projects: Project[];
    searchFilter = '';
    tagFilter = '';
    
    constructor(private projectsService: ProjectsService, private authService: AuthService) { }
    
    ngOnInit() {
        this.searchFilter = '';
        this.tagFilter = '';
        this.projects = this.projectsService.getProjects();
    }

    isAuthenticated() {
        return this.authService.isAuthenticated();
    }

}
