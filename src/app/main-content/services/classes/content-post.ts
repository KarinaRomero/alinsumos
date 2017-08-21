import { ContentTable } from './content-table';

export class ContentPost {
  title: string;
  content: string;
  image: string;
  link: string;
  table: ContentTable;

  private imagesRoute = 'assets/images/';


  constructor(title: string, content?: string, image?: string, link?: string, table?: ContentTable) {
    this.title = title;
    this.content = content ? content : '';
    this.image = this.imageOrigin(image);
    this.link = link;
    this.table = table;
  }

  private imageOrigin(image: string): string {
    if (image && !image.includes('http')) {
      return this.imagesRoute + image;
    } else if (image && image.includes('http')) {
      return image;
    } else {
      return '';
    }
  }
}
