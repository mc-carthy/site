import { Blog } from './blog.model';

export class BlogService {
    private blogs: Blog[] = [
        new Blog(
            'Blog title 1',
            'This is a test blog summary',
            'This is a test blog body, it is a lot longer than the summary',
            'Testing',
            Date.now()
        ),
        new Blog(
            'Blog title 2',
            'This is another test blog summary',
            'This is another test blog body, it is a lot longer than the summary',
            'Also testing',
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
}