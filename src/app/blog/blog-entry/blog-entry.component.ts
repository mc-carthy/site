import { Component, OnInit, OnDestroy } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';
import { Subscription } from 'rxjs';
import { Blog } from './../blog.model';
import { BlogService } from './../blog.service';
import { DataStorageService } from './../../database/data-storage.service';

@Component({
    selector: 'app-blog-entry',
    templateUrl: './blog-entry.component.html',
    styleUrls: ['./blog-entry.component.css']
})
export class BlogEntryComponent implements OnInit, OnDestroy {

    subscription: Subscription
    id: number;
    blog: Blog = new Blog(-1, '', '', '', [''], 0);

    constructor(
        private route: ActivatedRoute, 
        private router: Router, 
        private blogService: BlogService,
        private dataStorageService: DataStorageService
    ) { }

    ngOnInit() {
        this.subscription = this.blogService.blogsChanged.subscribe(
            (blogs: Blog[]) => {
                this.blog = this.blogService.getBlog(this.id);
            }
        );

        this.route.params.subscribe(
            (params: Params) => {
                this.id = +params['id']
                if (this.blogService.getBlog(this.id) !== null) {
                    this.blog = this.blogService.getBlog(this.id);
                } else {
                    this.dataStorageService.getBlogs();
                }
            }
        );
    }

    onDelete() {
        if (confirm('Are you sure you want to delete this blog entry?')) {
            this.blogService.deleteBlog(this.id);
            this.dataStorageService.putBlogs().subscribe(
                (response: Response) => {
                    console.log(response);
                }
            );
            this.router.navigate(['/blogs']);
        }
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
