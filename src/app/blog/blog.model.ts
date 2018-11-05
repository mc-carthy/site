export class Blog {
    public id: number;
    public title: string;
    public summary: string;
    public body: string;
    public tags: string[];
    // createdAt will be milliseconds from epoch
    public createdAt: number;

    constructor(id: number, title: string, summary: string, body: string, tags: string[], createdAt: number) {
        this.id = id;
        this.title = title;
        this.summary = summary;
        this.body = body;
        this.tags = tags;
        this.createdAt = createdAt;
    }
}