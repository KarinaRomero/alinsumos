export class Link {
  title: string;
  link: string;
  active: boolean;

  constructor(title: string, link: string, active?: boolean) {
    this.title = title;
    this.link = link;
    this.active = active ? active : false;
  }
}
