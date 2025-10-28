export interface AlbumDetails {
  id: string;
  name: string;
  artists: Artist[];
  images: Image[];
  release_date: string;
  total_tracks: number;
  tracks: {
    items: Track[];
  };
}

export interface Artist {
  id: string;
  name: string;
}

export interface Track {
  id: string;
  name: string;
  duration_ms: number;
  preview_url: string | null;
}

export interface Image {
  url: string;
  height: number;
  width: number;
}