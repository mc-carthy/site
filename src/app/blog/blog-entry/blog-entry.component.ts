import { Component, OnInit } from '@angular/core';
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
export class BlogEntryComponent implements OnInit {

    id: number;
    blog: Blog;

    constructor(
        private route: ActivatedRoute, 
        private router: Router, 
        private blogService: BlogService,
        private dataStorageService: DataStorageService
    ) { }

    ngOnInit() {
        this.route.params.subscribe(
            (params: Params) => {
                this.id = +params['id']
                this.blog = this.blogService.getBlog(this.id);
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
}
