import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
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
import { BlogService } from './blog/blog.service';
import { NewBlogComponent } from './blog/new-blog/new-blog.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectListItemComponent } from './projects/project-list-item/project-list-item.component';
import { NewProjectComponent } from './projects/new-project/new-project.component';
import { ProjectsService } from './projects/projects.service';
import { BlogListItemComponent } from './blog/blog-list-item/blog-list-item.component';
import { FilterPipe } from './shared/filter.pipe';
import { FilterArrayPipe } from './shared/filter-array.pipe';

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
    NewBlogComponent,
    ProjectListComponent,
    ProjectListItemComponent,
    NewProjectComponent,
    BlogListItemComponent,
    FilterPipe,
    FilterArrayPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [BlogService, ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
