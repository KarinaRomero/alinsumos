import { ContentPost } from '../classes/content-post';

export interface DataServices {
  getProduct(route: string): ContentPost;
}
