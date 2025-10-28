export interface Track {
  id: string;
  name: string;
  artists: Artist[];
  album: Album;
  duration_ms: number;
  preview_url: string | null;
  uri: string;
}

export interface Artist {
  id: string;
  name: string;
  uri: string;
}

export interface Album {
  id: string;
  name: string;
  images: Image[];
  release_date: string;
}

export interface Image {
  url: string;
  height: number;
  width: number;
}