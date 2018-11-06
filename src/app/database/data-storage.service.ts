import { BlogService } from './../blog/blog.service';
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Constants } from '../shared/constants';

@Injectable()
export class DataStorageService {

    constructor (private http: Http, private blogService: BlogService) {

    }

    putBlogs() {
        return this.http.put(Constants.getDbUrl() + 'blogs.json', this.blogService.getBlogs());
    }
}