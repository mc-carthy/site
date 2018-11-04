import { Project } from './project.model';

export class ProjectsService {
    private projects: Project[] = [
        new Project(
            "Hooked on a Ceiling",
            "A 2D platformer prototype built in Unity with a rope swinging traversal mechanic",
            "A 2D platformer prototype built in Unity with a rope swinging traversal mechanic",
            "https://img.itch.zone/aW1hZ2UvMTE3NzM4LzY2MTkwOC5wbmc=/315x250%23c/rxgypk.png",
            "https://mccarthy.itch.io/hooked-on-a-cieling",
            ["Unity", "C#"]
        ),
        new Project(
            "SuperNot",
            "An FPS prototype built in Unity exploring the time dilation mechanics of SuperHot",
            "An FPS prototype built in Unity exploring the time dilation mechanics of SuperHot",
            "https://img.itch.zone/aW1hZ2UvMTM0ODEzLzYxODUyNC5qcGc=/315x250%23c/oGER74.jpg",
            "https://mccarthy.itch.io/super-not",
            ["Unity", "C#"]
        ),
    ];

    getProjects() {
        return this.projects.slice();
    }

    addProject(project: Project) {
        this.projects.push(project);
    }
}