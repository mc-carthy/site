import { Blog } from './blog.model';
import { Subject } from 'rxjs';

export class BlogService {

    blogsChanged = new Subject<Blog[]>();

    private blogs: Blog[] = [
        new Blog(
            0,
            'Blog title 1',
            'This is a test Angular blog summary',
            `
            ## This is a test Angular blog body, it is a lot longer than the summary. This text was turned into a H2 equivalent with MarkDown
            
            ### This text is a little smaller

            
            `,
            ['Angular', 'TypeScript'],
            Date.now()
        ),
        new Blog(
            1,
            'Blog title 2',
            'This is a test LÖVE blog summary',
            'This is a test LÖVE blog body, it is a lot longer than the summary',
            ['LÖVE', 'Lua'],
            Date.now()
        )
    ];

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