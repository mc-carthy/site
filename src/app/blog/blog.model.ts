export class Blog {
    public id: number;
    public friendlyUrl: string;
    public title: string;
    public summary: string;
    public body: string;
    public tags: string[];
    // createdAt will be milliseconds from epoch
    public createdAt: number;

    constructor(id: number, friendlyUrl: string, title: string, summary: string, body: string, tags: string[], createdAt: number) {
        this.id = id;
        this.friendlyUrl = friendlyUrl;
        this.title = title;
        this.summary = summary;
        this.body = body;
        this.tags = tags;
        this.createdAt = createdAt;
    }
}