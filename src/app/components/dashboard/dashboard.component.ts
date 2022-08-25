import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Film } from 'src/app/interfaces/film';
import { APIResponse } from 'src/app/interfaces/http';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public films: Array<Film> = [];
  filmSub: Subscription = new Subscription();
  routeSub: Subscription = new Subscription();

  constructor(private router: Router, private filmService: FilmService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((params) => {
      this.searchFilms(params['title']);
    });
  }

  openFilm(id: number): void {
    this.router.navigate(['film', id]);
  }

  searchFilms(search?: string): void{
    this.filmSub = this.filmService.getFilmList(search).subscribe((response: APIResponse<Film>) => {
      this.films = response.data;
      console.log(response);
    });
  }
  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }
  openEdit(id: number): void{
    this.router.navigate(['Edit', id]);
  }
  removeFilm(id: number): void {
    this.filmService.deleteFilm(id).subscribe((res) => {
      this.searchFilms();
    });
  }
}
