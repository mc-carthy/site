import { Project } from './project.model';

export class ProjectsService {
    private projects: Project[] = [
        new Project(
            1,
            "Hooked on a Ceiling",
            "A 2D platformer prototype built in Unity with a rope swinging traversal mechanic",
            "A 2D platformer prototype built in Unity with a rope swinging traversal mechanic",
            ["Unity", "C#"],
            "https://img.itch.zone/aW1hZ2UvMTE3NzM4LzY2MTkwOC5wbmc=/315x250%23c/rxgypk.png"
        ),
        new Project(
            2,
            "SuperNot",
            "An FPS prototype exploring the time dilation mechanics of SuperHot",
            "An FPS prototype exploring the time dilation mechanics of SuperHot",
            ["Unity", "C#"],
            "https://img.itch.zone/aW1hZ2UvMTM0ODEzLzYxODUyNC5qcGc=/315x250%23c/oGER74.jpg"
        ),
    ];

    getProjects() {
        return this.projects.slice();
    }
}