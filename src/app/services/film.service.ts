import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '@angular/router';
import { Film } from '../interfaces/film';
import { environment } from 'src/environments/environment';
import { APIResponse } from '../interfaces/http';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getFilmList(search?: string): Observable<APIResponse<Film>>{
    if(search) {
      console.log(search);
      return this.http.get<APIResponse<Film>>(`${environment.apiUrl}/Sakila/Get_Film_By_Title?title=${search}`);
    } else {
      return this.http.get<APIResponse<Film>>(`${environment.apiUrl}/Sakila/All_Films`)
    }
  }

  searchByFilmId(filmId: number): Observable<Film>{
    return this.http.get<Film>(`${environment.apiUrl}/Sakila/Get_Film_By_Id?filmId=${filmId}`);
  }

  createNewFilm(data: any): Observable<any>{
    return this.http.post(`${environment.apiUrl}/Sakila/Add_New_Film`, data);
  }
  editFilm(filmId: number, value:any): Observable<any>{
    return this.http.patch(`${environment.apiUrl}/Sakila/Film/${filmId}`, value);
  }
  deleteFilm(filmId: number): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/Sakila/Delete_Film_By_Id?filmId=${filmId}`)
  }
 
}
