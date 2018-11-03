import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogService } from './../blog.service';
import { Blog } from './../blog.model';

@Component({
    selector: 'app-new-blog',
    templateUrl: './new-blog.component.html',
    styleUrls: ['./new-blog.component.css']
})
export class NewBlogComponent implements OnInit {

    blogForm: FormGroup;
    editMode = false;

    constructor(private router: Router ,private blogService: BlogService) { }

    ngOnInit() {
        this.initForm();
    }

    private initForm() {
        let title = '';
        let content = '';
        let tags = '';
        this.blogForm = new FormGroup({
            'title': new FormControl(title),
            'body': new FormControl(content),
            'tags': new FormControl(tags)
        })
    }

    onSubmit() {
        const blog = new Blog(
            this.blogForm.value['title'],
            this.blogForm.value['body'],
            this.blogForm.value['tags'],
            Date.now()
        );
        this.blogService.addBlog(blog);
        this.router.navigate(['/blogs']);
    }

}
