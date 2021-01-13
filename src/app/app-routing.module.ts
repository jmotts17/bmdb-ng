import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActorListComponent } from '../app/feature/actor/actor-list/actor-list.component';
import { MovieListComponent } from '../app/feature/movie/movie-list/movie-list.component';
import { CreditListComponent } from '../app/feature/credit/credit-list/credit-list.component';
import { GenreListComponent } from '../app/feature/genre/genre-list/genre-list.component';
import { MoviegenreListComponent } from '../app/feature/moviegenre/moviegenre-list/moviegenre-list.component';
import { NoComponentDefinedComponent } from './core/no-component-defined/no-component-defined.component';
import { MovieCreateComponent } from './feature/movie/movie-create/movie-create.component';
import { ActorCreateComponent } from './feature/actor/actor-create/actor-create.component';
import { GenreCreateComponent } from './feature/genre/genre-create/genre-create.component';
import { UserListComponent } from './feature/user/user-list/user-list.component';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: "movie/list", component: MovieListComponent },
  { path: "movie/create", component: MovieCreateComponent },
  { path: "actor/list", component: ActorListComponent },
  { path: "actor/create", component: ActorCreateComponent },
  { path: "credit/list", component: CreditListComponent},
  { path: "genre/list", component: GenreListComponent},
  { path: "genre/create", component: GenreCreateComponent},
  { path: "moviegenre/list", component: MoviegenreListComponent},
  { path: "user/list", component: UserListComponent},
  { path: "user/create", component:UserCreateComponent},
  {path: '**', component: NoComponentDefinedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
