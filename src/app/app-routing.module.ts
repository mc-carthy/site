import { BlogEntryComponent } from './blog/blog-entry/blog-entry.component';
import { NewProjectComponent } from './projects/new-project/new-project.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CvComponent } from './cv/cv.component';
import { BlogComponent } from './blog/blog.component';
import { NewBlogComponent } from './blog/new-blog/new-blog.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'blogs', component: BlogComponent },
    { path: 'blogs/new', component: NewBlogComponent },
    { path: 'blogs/:id', component: BlogEntryComponent },
    { path: 'projects', component: ProjectListComponent },
    { path: 'projects/new', component: NewProjectComponent },
    { path: 'cv', component: CvComponent },
    { path: '**', redirectTo: '/' }
];

@NgModule({
    imports: [        
        // Only to be used if we cannot configure our server
        // to return our index.html page in the event of a 404
        RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}