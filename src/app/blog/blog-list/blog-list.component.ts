import { Component, OnInit } from '@angular/core';
import { Blog } from './../blog.model';
import { BlogService } from './../blog.service';

@Component({
    selector: 'app-blog-list',
    templateUrl: './blog-list.component.html',
    styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

    blogs: Blog[];
    searchFilter: '';
    tagFilter: '';

    constructor(private blogService: BlogService) { }

    ngOnInit() {
        this.searchFilter = '';
        this.tagFilter = '';
        this.blogs = this.blogService.getBlogs();
    }

}
