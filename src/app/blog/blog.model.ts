export class Blog {
    public title: string;
    public body: string;
    public tags: string[];
    // createdAt will be milliseconds from epoch
    public createdAt: number;

    constructor(title: string, body: string, tags: string[], createdAt: number) {
        this.title = title;
        this.body = body;
        this.tags = tags;
        this.createdAt = createdAt;
    }
}