import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Blog } from './blog.model';

@Injectable()
export class BlogService {

    constructor(private router: Router) {}

    blogsChanged = new Subject<Blog[]>();

    private blogs: Blog[];

    getBlogs() {
        if (this.blogs === undefined) { return null }
        return this.blogs.slice();
    }

    setBlogs(blogs: Blog[]) {
        this.blogs = blogs;
        this.blogsChanged.next(this.blogs.slice());
    }

    getBlog(id) {
        if (this.blogs === undefined) { return null; }
        for (let blog of this.blogs) {
            if (blog.friendlyUrl === id || blog.id === +id) {
                return blog;
            }
        }
        this.router.navigate(['/blogs'])
    }

    addBlog(blog: Blog) {
        this.blogs.push(blog);
        this.blogsChanged.next(this.blogs.slice());
    }

    updateBlog(updatedBlog: Blog, id: number) {
        for (var i = 0; i < this.blogs.length; i++) {
            if (this.blogs[i].id === id) {
                this.blogs[i] = updatedBlog;
            }
        }
    }

    deleteBlog(index: number) {
        this.blogs.splice(index, 1);
        this.blogsChanged.next(this.blogs.slice());
    }

    getNextBlogId() {
        return this.blogs[this.blogs.length - 1].id + 1;
    }
}