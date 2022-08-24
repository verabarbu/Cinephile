import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Data } from '@angular/router';
import { Subscription } from 'rxjs';
import { Film } from 'src/app/interfaces/film';
import { FilmService } from 'src/app/services/film.service';



@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  filmSub: Subscription = new Subscription();
  film: Film = {} as Film;


  constructor(private filmService: FilmService, private activatedRoute: ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['filmId']) {
        this.getAboutFilm(params['filmId']);
      }
    });
  }
  getAboutFilm(filmId: number) {
    this.filmSub = this.filmService
      .searchByFilmId(filmId)
      .subscribe((response: any) => {
        this.film = response.data;
        console.log(response);
      });

}
}
