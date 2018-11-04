export class Blog {
    public title: string;
    public summary: string;
    public body: string;
    public tags: string[];
    // createdAt will be milliseconds from epoch
    public createdAt: number;

    constructor(title: string, summary: string, body: string, tags: string[], createdAt: number) {
        this.title = title;
        this.summary = summary;
        this.body = body;
        this.tags = tags;
        this.createdAt = createdAt;
    }
}