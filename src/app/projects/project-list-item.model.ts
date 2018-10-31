export class ProjectListItem {
    public id: number;
    public title: string;
    public summary: string;
    public tags: string[];
    public imagePath: string;

    constructor(id: number, title: string, summary: string, tags: string[], imagePath: string) {
        this.id = id;
        this.title = title;
        this.summary = summary;
        this.tags = tags;
        this.imagePath = imagePath;
    }
}