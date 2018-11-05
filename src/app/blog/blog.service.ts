import { Blog } from './blog.model';

export class BlogService {
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

    getBlog(index: number) {
        for (let blog of this.blogs) {
            if (blog.id === index) {
                return blog;
            }
        }
        return null;
    }

    addBlog(blog: Blog) {
        this.blogs.push(blog);
    }

    deleteBlog(index: number) {
        this.blogs.splice(index, 1);
    }

    getNextBlogId() {
        return this.blogs[this.blogs.length - 1].id + 1;
    }
}