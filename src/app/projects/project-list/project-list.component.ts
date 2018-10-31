import { ProjectsService } from './../projects.service';
import { ProjectListItem } from './../project-list-item.model';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-project-list',
    templateUrl: './project-list.component.html',
    styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

    projectListItems: ProjectListItem[];

    constructor(private projectsService: ProjectsService) { }

    ngOnInit() {
        this.projectListItems = this.projectsService.getProjectListItems();
    }

}
