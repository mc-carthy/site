export class Project {
    public id: number;
    public title: string;
    public summary: string;
    public content: string;
    public tags: string[];
    public imagePath: string;

    constructor(id: number, title: string, summary: string, content: string, tags: string[], imagePath: string) {
        this.id = id;
        this.title = title;
        this.summary = summary;
        this.content = content;
        this.tags = tags;
        this.imagePath = imagePath;
    }
}