import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from 'src/app/services/film.service';
import { environment } from 'src/environments/environment';
import { NgForm } from '@angular/forms';

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
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  errormsg:any;
  successmsg:any;
  film: Film = new Film();
  filmForm!: FormGroup;
  constructor(private fb: FormBuilder, private filmService: FilmService, 
    private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.filmForm = this.fb.group({
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
    if (!this.filmForm.valid){
      return;
    }
    if (this.filmForm.valid){
      this.filmService.createNewFilm(this.filmForm.value).subscribe((res) => {
        console.log(res, 'data submited');
        this.filmForm.reset();
        this.successmsg = res.message;
      })
    }
    else{
      this.errormsg = "All fields required.";
    }
  }


}
