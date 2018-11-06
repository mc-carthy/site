import { Blog } from './blog.model';
import { Subject } from 'rxjs';

export class BlogService {

    blogsChanged = new Subject<Blog[]>();

    private blogs: Blog[];

    getBlogs() {
        return this.blogs.slice();
    }

    setBlogs(blogs: Blog[]) {
        this.blogs = blogs;
        this.blogsChanged.next(this.blogs.slice());
    }

    getBlog(id: number) {
        for (let blog of this.blogs) {
            if (blog.id === id) {
                return blog;
            }
        }
        return null;
    }

    addBlog(blog: Blog) {
        this.blogs.push(blog);
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
    }

    getNextBlogId() {
        return this.blogs[this.blogs.length - 1].id + 1;
    }
}