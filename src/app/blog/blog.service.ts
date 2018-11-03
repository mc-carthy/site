import { Blog } from './blog.model';

export class BlogService {
    private blogs: Blog[] = [
        new Blog(
            'Blog title 1',
            'This is a test blog body',
            'Testing',
            Date.now()
        ),
        new Blog(
            'Blog title 2',
            'This is another test blog body',
            'Also testing',
            Date.now()
        )
    ];

    getBlogs() {
        return this.blogs.slice();
    }

    addBlog(blog: Blog) {
        this.blogs.push(blog);
    }
}