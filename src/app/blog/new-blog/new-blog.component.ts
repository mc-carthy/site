import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
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

    constructor(private router: Router, private blogService: BlogService) { }

    ngOnInit() {
        this.initForm();
    }

    private initForm() {
        let title = '';
        let summary = '';
        let body = '';
        let tags = '';
        this.blogForm = new FormGroup({
            'title': new FormControl(title),
            'summary': new FormControl(summary),
            'body': new FormControl(body),
            'tags': new FormControl(tags)
        });
    }

    onSubmit() {
        const blog = new Blog(
            this.blogForm.value['title'],
            this.blogForm.value['summary'],
            this.blogForm.value['body'],
            this.blogForm.value['tags'].split(','),
            Date.now()
        );
        console.log(this.blogForm);
        this.blogService.addBlog(blog);
        this.router.navigate(['/blogs']);
    }

    // onAddTag() {
    //     (<FormArray>this.blogForm.get('tags')).push(
    //         new FormGroup({
    //             'tag': new FormControl(null)
    //         })
    //     );
    // }

    // onDeleteTag(index: number) {
    //     (<FormArray>this.blogForm.get('tags')).removeAt(index);
    // }

}
