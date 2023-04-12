export type Anime = {
  id: number;
  title: string;
  imgDomain: string;
  imgSrc: string;
  votes: number;
  rankings: number;
  description: string;
};

export type AnimeList = {
  isLoading: boolean;
  data: Anime[];
};
