import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActorListComponent } from '../app/feature/actor/actor-list/actor-list.component';
import { MovieListComponent } from '../app/feature/movie/movie-list/movie-list.component';

const routes: Routes = [
  { path: "movie/list", component: MovieListComponent },
  { path: "actor/list", component: ActorListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
