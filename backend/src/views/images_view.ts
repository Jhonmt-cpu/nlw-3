import Image from '../models/Image';

export interface ImagesView {
  id: number;
  url: string;
}

export default {
  render(image: Image): ImagesView {
    return {
      id: image.id,
      url: `http://192.168.15.29:3333/uploads/${image.path}`,
    };
  },
  renderMany(images: Image[]): ImagesView[] {
    return images.map(image => this.render(image));
  },
};
