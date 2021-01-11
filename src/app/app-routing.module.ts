import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActorListComponent } from '../app/feature/actor/actor-list/actor-list.component';
import { MovieListComponent } from '../app/feature/movie/movie-list/movie-list.component';
import { CreditListComponent } from '../app/feature/credit/credit-list/credit-list.component';
import { GenreListComponent } from '../app/feature/genre/genre-list/genre-list.component';
import { MoviegenreListComponent } from '../app/feature/moviegenre/moviegenre-list/moviegenre-list.component';

const routes: Routes = [
  { path: "movies/list", component: MovieListComponent },
  { path: "actors/list", component: ActorListComponent },
  { path: "credits/list", component: CreditListComponent},
  { path: "genres/list", component: GenreListComponent},
  { path: "movie-genres/list", component: MoviegenreListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
