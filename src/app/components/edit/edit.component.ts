import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from 'src/app/services/film.service';

export class Film{
  filmId: number | undefined;
  filmActor: (any | any)[] | undefined;
  filmCategory: any;
  title: string | undefined;
  description: string | undefined;
  releaseYear: number | undefined;
  languageId: number | undefined;
  originalLanguageId: number | undefined;
  length: number | undefined;
  rating: string | undefined;
} 

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  filmId!: number;
  film!: Film;
  editForm!: FormGroup;


  constructor(private fb: FormBuilder, private filmService: FilmService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.film = new Film();
    this.filmId = this.route.snapshot.params['filmId'];
    this.filmService.searchByFilmId(this.filmId).subscribe((res) => {
      this.editForm.patchValue({
        title: res.title[0],
        description: res.description[0],
        releaseYear: res.releaseYear[0],
        languageId: res.languageId[0],
        originalLanguageId: res.originalLanguageId[0],
        length: res.length[0],
        rating: res.rating[0]
      })
    });
    this.editForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      releaseYear: ['', Validators.required],
      languageId: ['', Validators.required],
      originalLanguageId: ['', Validators.required],
      length: ['', Validators.required],
      rating: ['', Validators.required],
    });
  }
  onSubmit(){
    this.filmService.editFilm(this.filmId, this.film).subscribe((res) =>{
      this.film  = new Film();
      this.goToList();
    });
  }
  goToList(){
    this.router.navigate(['/'])
  }

}
