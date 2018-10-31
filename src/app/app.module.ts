import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { CvComponent } from './cv/cv.component';
import { BlogComponent } from './blog/blog.component';
import { BlogListComponent } from './blog/blog-list/blog-list.component';
import { BlogEntryComponent } from './blog/blog-entry/blog-entry.component';
import { BlogSearchFormComponent } from './blog/blog-search-form/blog-search-form.component';
import { BlogService } from './blog/blog.service';
import { NewBlogComponent } from './blog/new-blog/new-blog.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectListItemComponent } from './projects/project-list-item/project-list-item.component';
import { ProjectEntryComponent } from './projects/project-entry/project-entry.component';
import { ProjectSearchFormComponent } from './projects/project-search-form/project-search-form.component';
import { NewProjectComponent } from './projects/new-project/new-project.component';
import { ProjectsService } from './projects/projects.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UnderConstructionComponent,
    BlogComponent,
    CvComponent,
    HomeComponent,
    BlogListComponent,
    BlogEntryComponent,
    BlogSearchFormComponent,
    NewBlogComponent,
    ProjectListComponent,
    ProjectListItemComponent,
    ProjectEntryComponent,
    ProjectSearchFormComponent,
    NewProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BlogService, ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
