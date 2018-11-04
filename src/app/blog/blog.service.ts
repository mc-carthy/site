import { Blog } from './blog.model';

export class BlogService {
    private blogs: Blog[] = [
        new Blog(
            'Blog title 1',
            'This is a test Angular blog summary',
            'This is a test Angular blog body, it is a lot longer than the summary',
            ['Angular', 'TypeScript'],
            Date.now()
        ),
        new Blog(
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

    getBlog(index: number) {
        return this.blogs.slice()[index];
    }

    addBlog(blog: Blog) {
        this.blogs.push(blog);
    }

    deleteBlog(index: number) {
        this.blogs.splice(index, 1);
    }
}