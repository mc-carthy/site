import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Project } from './../project.model';
import { ProjectsService } from './../projects.service';

@Component({
    selector: 'app-new-project',
    templateUrl: './new-project.component.html',
    styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

    projectForm: FormGroup;
    editMode = false;

    constructor(private projectService: ProjectsService, private router: Router) { }

    ngOnInit() {
        this.initForm();
    }

    private initForm() {
        let title = '';
        let summary = '';
        let content = '';
        let imagePath= '';
        let tags = '';
        this.projectForm = new FormGroup({
            'title': new FormControl(title),
            'summary': new FormControl(summary),
            'body': new FormControl(content),
            'imagePath': new FormControl(imagePath),
            'tags': new FormControl(tags)
        });
    }

    onSubmit() {
        const project = new Project(
            this.projectForm.value['title'],
            this.projectForm.value['summary'],
            this.projectForm.value['content'],
            this.projectForm.value['imagePath'],
            this.projectForm.value['tags'],
        );
        this.projectService.addProject(project);
        this.router.navigate(['/projects']);
    }
}
