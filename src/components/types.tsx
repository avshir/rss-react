export interface IProduct {
  id: number;
  title: string;
  description?: string;
  price?: number;
  discountPercentage?: number;
  rating?: number;
  stock?: number;
  brand?: string;
  category?: string;
  thumbnail?: string;
  images?: string[];
}

export type DataGoods = {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
};

//https://developers.themoviedb.org/3/trending/get-trending
export interface IMovie {
  adult?: boolean;
  backdrop_path?: string | null;
  genre_ids?: number[];
  id: number;
  media_type?: string;
  original_language?: string;
  original_title: string;
  overview?: string;
  popularity?: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video?: boolean;
  vote_average: number;
  vote_count?: number;
}
