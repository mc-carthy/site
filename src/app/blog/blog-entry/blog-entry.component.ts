import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Blog } from './../blog.model';
import { BlogService } from './../blog.service';

@Component({
    selector: 'app-blog-entry',
    templateUrl: './blog-entry.component.html',
    styleUrls: ['./blog-entry.component.css']
})
export class BlogEntryComponent implements OnInit {

    id: number;
    blog: Blog;

    constructor(private route: ActivatedRoute, private blogService: BlogService) { }

    ngOnInit() {
        this.route.params.subscribe(
            (params: Params) => {
                this.id = +params['id']
                this.blog = this.blogService.getBlog(this.id);
            }
        );
    }

}
