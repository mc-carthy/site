import { AuthService } from './../auth/auth.service';
import { BlogService } from './../blog/blog.service';
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Constants } from '../shared/constants';
import { Blog } from '../blog/blog.model';
import { map } from 'rxjs/operators';

@Injectable()
export class DataStorageService {

    constructor (private http: Http, private blogService: BlogService, private authService: AuthService) {

    }

    // TODO: Enable the bmodified method below to ensure the response corresponds 
    // to the blog model. This will need to be done when storing tags as an array. 
    // If there are no tags, we will return nothing, as opposed to an empty array.
    getBlogs() {
        this.http.get(Constants.getDbUrl() + 'blogs.json')
        //     .pipe(map(
        //         (response: Response) => {
        //             const blogs: Blog[] = response.json();
        //             for (let blog of blogs) {
        //                 if (!blog.tags) {
        //                     blog['tags'] = [];
        //                 }
        //             }
        //             return blogs;
        //         }
        //     ))
        //     .subscribe(
        //         (blogs: Blog[]) => {
        //             this.blogService.setBlogs(blogs);
        //         }
        //     );
            .subscribe(
                (response: Response) => {
                    const blogs: Blog[] = response.json();
                    this.blogService.setBlogs(blogs);
                }
            );
    }

    putBlogs() {
        const token = this.authService.getToken()
        return this.http.put(Constants.getDbUrl() + 'blogs.json?auth=' + token, this.blogService.getBlogs());
    }
}