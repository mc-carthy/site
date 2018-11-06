import { Component, OnInit, OnDestroy } from '@angular/core';
import { Response } from '@angular/http';
import { Blog } from './../blog.model';
import { BlogService } from './../blog.service';
import { DataStorageService } from './../../database/data-storage.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-blog-list',
    templateUrl: './blog-list.component.html',
    styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit, OnDestroy {

    subscription = new Subscription;
    blogs: Blog[];
    searchFilter: '';
    tagFilter: '';

    constructor(private blogService: BlogService, private dataStorageService: DataStorageService) { }

    ngOnInit() {
        this.searchFilter = '';
        this.tagFilter = '';
        this.subscription = this.blogService.blogsChanged.subscribe(
            (blogs: Blog[]) => {
                this.blogs = blogs;
            }
        );
        this.blogs = this.blogService.getBlogs();
    }

    onSaveBlogs() {
        this.dataStorageService.putBlogs().subscribe(
            (response: Response) => {
                console.log(response);
            }
        );
    }

    onGetBlogs() {
        this.dataStorageService.getBlogs();
    }

    onLogBlogs() {
        console.log(this.blogService.getBlogs());
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
