import { Component, OnInit, Input } from '@angular/core';
import { Blog } from './../blog.model';

@Component({
    selector: 'app-blog-list-item',
    templateUrl: './blog-list-item.component.html',
    styleUrls: ['./blog-list-item.component.css']
})
export class BlogListItemComponent implements OnInit {

    @Input() blog: Blog;

    constructor() { }

    ngOnInit() {
    }
}
