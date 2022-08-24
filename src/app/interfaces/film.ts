import { FilmActor } from "./film-actor";
import { FilmCategory } from "./film-category";


export interface Film {
  filmId: number;
  filmActor: (any | any)[];
  filmCategory: any;
  title: string;
  description: string;
  releaseYear: number;
  languageId: number;
  originalLanguageId: number;
  length: number;
  rating: string;
}
