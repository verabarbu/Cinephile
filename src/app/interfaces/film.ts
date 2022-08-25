import { FilmActor } from "./film-actor";
import { FilmCategory } from "./film-category";


export interface Film {
  data: any;
  filmId: number;
  filmActor: (any | any)[];
  filmCategory: any;
  title: string;
  description: string;
  releaseYear: any;
  languageId: any;
  originalLanguageId: any;
  length: any;
  rating: string;
}
