import Orphanage from '../models/Orphanage';
import imagesView, { ImagesView } from './images_view';

interface OrphanageView {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  open_on_weekends: boolean;
  opening_hours: string;
  images: ImagesView[];
}

export default {
  render(orphanage: Orphanage): OrphanageView {
    return {
      id: orphanage.id,
      name: orphanage.name,
      latitude: orphanage.latitude,
      longitude: orphanage.longitude,
      about: orphanage.about,
      instructions: orphanage.instructions,
      opening_hours: orphanage.opening_hours,
      open_on_weekends: orphanage.open_on_weekends,
      images: imagesView.renderMany(orphanage.images),
    };
  },
  renderMany(orphanages: Orphanage[]): Omit<Orphanage, 'images'>[] {
    return orphanages.map(orphanage => this.render(orphanage));
  },
};
