import { ProjectListItem } from './project-list-item.model';

export class ProjectsService {
    private projectListItems: ProjectListItem[] = [
        new ProjectListItem(
            1,
            "Hooked on a Ceiling",
            "A 2D platformer prototype built in Unity with a rope swinging traversal mechanic",
            ["Unity", "C#"],
            "https://img.itch.zone/aW1hZ2UvMTE3NzM4LzY2MTkwOC5wbmc=/315x250%23c/rxgypk.png"
        ),
        new ProjectListItem(
            2,
            "SuperNot",
            "An FPS prototype exploring the time dilation mechanics of SuperHot",
            ["Unity", "C#"],
            "https://img.itch.zone/aW1hZ2UvMTM0ODEzLzYxODUyNC5qcGc=/315x250%23c/oGER74.jpg"
        ),
    ];

    getProjectListItems() {
        return this.projectListItems.slice();
    }
}