import { Component, OnInit, OnDestroy } from '@angular/core';
import { Response } from '@angular/http';
import { Subscription } from 'rxjs';
import { Blog } from './../blog.model';
import { BlogService } from './../blog.service';
import { DataStorageService } from './../../database/data-storage.service';
import { AuthService } from './../../auth/auth.service';

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

    constructor(private blogService: BlogService, private dataStorageService: DataStorageService, private authService: AuthService) { }

    ngOnInit() {
        this.searchFilter = '';
        this.tagFilter = '';
        if (this.blogService.getBlogs() === null) {
            this.dataStorageService.getBlogs();
        } else {
            this.blogs = this.blogService.getBlogs();
        }
        this.subscription = this.blogService.blogsChanged.subscribe(
            (blogs: Blog[]) => {
                this.blogs = blogs;
            }
        );
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

    isAuthenticated() {
        return this.authService.isAuthenticated();
    }

}
