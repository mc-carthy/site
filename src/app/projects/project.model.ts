export class Project {
    public title: string;
    public summary: string;
    public content: string;
    public imagePath: string;
    public url: string;
    public tags: string[];

    constructor(title: string, summary: string, content: string, imagePath: string, url: string, tags: string[]) {
        this.title = title;
        this.summary = summary;
        this.content = content;
        this.imagePath = imagePath;
        this.url = url;
        this.tags = tags;
    }
}