import { Component, OnInit, Input } from '@angular/core';
import { ProjectListItem } from '../project-list-item.model';

@Component({
    selector: 'app-project-list-item',
    templateUrl: './project-list-item.component.html',
    styleUrls: ['./project-list-item.component.css']
})
export class ProjectListItemComponent implements OnInit {

    @Input() listItem: ProjectListItem;

    constructor() { }

    ngOnInit() {
    }

}
