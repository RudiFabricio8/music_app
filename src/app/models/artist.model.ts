export interface ArtistDetails {
  id: string;
  name: string;
  images: Image[];
  genres: string[];
  followers: {
    total: number;
  };
  popularity: number;
}

export interface Image {
  url: string;
  height: number;
  width: number;
}