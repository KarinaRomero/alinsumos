export class ContentPost {
  title: string;
  content: string;
  image: string;

  private imagesRoute = 'assets/images/';


  constructor(title: string, content: string, image: string) {
    this.title = title;
    this.content = content;
    this.image = this.imagesRoute + image;
  }
}
