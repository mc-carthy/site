import { Component, OnInit, Input } from '@angular/core';
import { Blog } from './../blog.model';

@Component({
    selector: 'app-blog-entry',
    templateUrl: './blog-entry.component.html',
    styleUrls: ['./blog-entry.component.css']
})
export class BlogEntryComponent implements OnInit {

    @Input() blog: Blog;

    constructor() { }

    ngOnInit() {
    }

}
