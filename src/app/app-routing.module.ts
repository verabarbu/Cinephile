import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FilmComponent } from './components/film/film.component';
import { UpdateComponent } from './components/update/update.component';
import { EditComponent } from './components/edit/edit.component';

const routes: Routes = [
  {path:'', component: DashboardComponent},
  {path: 'film/:filmId', component: FilmComponent},
  {path: 'search/:title', component: DashboardComponent},
  {path: 'Update', component: UpdateComponent},
  {path: 'Edit/:filmId', component: EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
