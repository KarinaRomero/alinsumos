export class ContentPost {
  title: string;
  content: string;
  image: string;

  private imagesRoute = 'assets/images/';


  constructor(title: string, content?: string, image?: string) {
    this.title = title;
    this.content = content ? content : '';
    this.image = image ? this.imagesRoute + image : '';
  }
}
