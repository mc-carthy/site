import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Blog } from './../blog.model';
import { BlogService } from './../blog.service';
import { DataStorageService } from './../../database/data-storage.service';

@Component({
    selector: 'app-blog-list',
    templateUrl: './blog-list.component.html',
    styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

    blogs: Blog[];
    searchFilter: '';
    tagFilter: '';

    constructor(private blogService: BlogService, private dataStorageService: DataStorageService) { }

    ngOnInit() {
        this.searchFilter = '';
        this.tagFilter = '';
        this.blogs = this.blogService.getBlogs();
    }

    onSaveBlogs() {
        this.dataStorageService.putBlogs().subscribe(
            (response: Response) => {
                console.log(response);
            }
        );
    }

}
