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
    this.image = image ? this.imagesRoute + image : '';
    this.link = link;
    this.table = table;
  }
}
