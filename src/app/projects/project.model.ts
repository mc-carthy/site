export class Project {
    // public id: number;
    public title: string;
    public summary: string;
    public content: string;
    public imagePath: string;
    public tags: string[];

    constructor(title: string, summary: string, content: string, imagePath: string, tags: string[]) {
        // this.id = id;
        this.title = title;
        this.summary = summary;
        this.content = content;
        this.imagePath = imagePath;
        this.tags = tags;
    }
}