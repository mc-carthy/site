import { BlogService } from './../blog/blog.service';
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Constants } from '../shared/constants';
import { Blog } from '../blog/blog.model';

@Injectable()
export class DataStorageService {

    constructor (private http: Http, private blogService: BlogService) {

    }

    getBlogs() {
        this.http.get(Constants.getDbUrl() + 'blogs.json').subscribe(
            (response: Response) => {
                const blogs: Blog[] = response.json();
                this.blogService.setBlogs(blogs);
            }
        );
    }

    putBlogs() {
        return this.http.put(Constants.getDbUrl() + 'blogs.json', this.blogService.getBlogs());
    }
}