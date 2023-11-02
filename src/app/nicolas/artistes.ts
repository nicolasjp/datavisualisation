import {IAlbums} from "./albums";

export interface IArtistes {
  name: string,
  genres: string,
  lifeSpan: string,
  location: string,
  albums: IAlbums[]
}
