export class Image {
    public id;
    public title;
    public description;
    public thumbnail;
    public imageLink;
    constructor(id, title, description, thumbnail, imageLink)
    {
        this.id = id.toString();
        this.title = title.toString();
        this.description = description.toString();
        this.thumbnail = thumbnail.toString();
        this.imageLink = imageLink.toString();
    }
}
