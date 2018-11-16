import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Blog } from './../blog.model';
import { BlogService } from './../blog.service';
import { DataStorageService } from './../../database/data-storage.service';

@Component({
    selector: 'app-new-blog',
    templateUrl: './new-blog.component.html',
    styleUrls: ['./new-blog.component.css']
})
export class NewBlogComponent implements OnInit {

    blogForm: FormGroup;
    id;
    editMode = false;

    constructor(
        private router: Router, 
        private route: ActivatedRoute, 
        private blogService: BlogService, 
        private dataStorageService: DataStorageService
    ) { }

    ngOnInit() {
        this.route.params.subscribe(
            (params: Params) => {
                this.id = params['id'];
                this.editMode = params['id'] != null;
                this.initForm();
            }
        );
    }

    private initForm() {
        let friendlyUrl = '';
        let title = '';
        let summary = '';
        let body = '';
        let tags = '';

        if (this.editMode) {
            const blog = this.blogService.getBlog(this.id);
            friendlyUrl = blog.friendlyUrl;
            title = blog.title;
            summary = blog.summary;
            body = blog.body;
            for (let tag of blog.tags) {
                tags += tag + ',';
            }
            tags = tags.slice(0, -1);
        }

        this.blogForm = new FormGroup({
            'friendlyUrl': new FormControl(friendlyUrl),
            'title': new FormControl(title),
            'summary': new FormControl(summary),
            'body': new FormControl(body),
            'tags': new FormControl(tags)
        });
    }

    onSubmit() {
        let blogId: number;
        if (this.editMode) {
            blogId = this.id;
        } else {
            blogId = this.blogService.getNextBlogId();
        }
        const blog = new Blog(
            blogId,
            this.blogForm.value['friendlyUrl'],
            this.blogForm.value['title'],
            this.blogForm.value['summary'],
            this.blogForm.value['body'],
            this.blogForm.value['tags'].split(','),
            Date.now()
        );
        if (this.editMode) {
            this.blogService.updateBlog(blog, this.id);
        } else {
            this.blogService.addBlog(blog);
        }
        this.dataStorageService.putBlogs().subscribe(
            (response: Response) => {
                console.log(response);
            }
        );
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