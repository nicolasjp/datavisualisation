import {IAlbums} from "./albums";

export interface IArtistes {
  id: number,
  name: string,
  genres: string,
  lifeSpan: string,
  location: string,
  albums: IAlbums[]
}
