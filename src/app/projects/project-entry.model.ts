export class ProjectEntry {
    public title: string;
    public body: string;
    public tags: string[];

    constructor(title: string, body: string, tags: string[], createdAt: number) {
        this.title = title;
        this.body = body;
        this.tags = tags;
    }
}