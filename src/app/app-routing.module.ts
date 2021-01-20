import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieCreateComponent } from './feature/movie/movie-create/movie-create.component';
import { MovieListComponent } from '../app/feature/movie/movie-list/movie-list.component';
import { MovieDetailComponent } from '../app/feature/movie/movie-detail/movie-detail.component';
import { MovieEditComponent } from '../app/feature/movie/movie-edit/movie-edit.component';
import { ActorListComponent } from '../app/feature/actor/actor-list/actor-list.component';
import { ActorCreateComponent } from './feature/actor/actor-create/actor-create.component';
import { ActorDetailComponent } from './feature/actor/actor-detail/actor-detail.component';
import { ActorEditComponent } from './feature/actor/actor-edit/actor-edit.component';
import { CreditListComponent } from '../app/feature/credit/credit-list/credit-list.component';
import { CreditCreateComponent } from '../app/feature/credit/credit-create/credit-create.component';
import { CreditDetailComponent } from '../app/feature/credit/credit-detail/credit-detail.component';
import { CreditEditComponent } from '../app/feature/credit/credit-edit/credit-edit.component';
import { GenreListComponent } from '../app/feature/genre/genre-list/genre-list.component';
import { GenreCreateComponent } from './feature/genre/genre-create/genre-create.component';
import { GenreDetailComponent } from './feature/genre/genre-detail/genre-detail.component';
import { GenreEditComponent } from './feature/genre/genre-edit/genre-edit.component';
import { MoviegenreListComponent } from '../app/feature/moviegenre/moviegenre-list/moviegenre-list.component';
import { MoviegenreCreateComponent } from './feature/moviegenre/moviegenre-create/moviegenre-create.component';
import { MoviegenreDetailComponent } from '../app/feature/moviegenre/moviegenre-detail/moviegenre-detail.component';
import { UserListComponent } from './feature/user/user-list/user-list.component';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { UserDetailComponent } from './feature/user/user-detail/user-detail.component';
import { UserEditComponent } from './feature/user/user-edit/user-edit.component';
import { UserLoginComponent } from './feature/user/user-login/user-login.component';
import { NoComponentDefinedComponent } from './core/no-component-defined/no-component-defined.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: "movie-list", component: MovieListComponent },
  { path: "movie-create", component: MovieCreateComponent },
  { path: "movie-detail/:id", component: MovieDetailComponent },
  { path: "movie-edit/:id", component: MovieEditComponent },
  { path: "actor-list", component: ActorListComponent },
  { path: "actor-create", component: ActorCreateComponent },
  { path: "actor-detail/:id", component: ActorDetailComponent },
  { path: "actor-edit/:id", component: ActorEditComponent },
  { path: "credit-list", component: CreditListComponent},
  { path: "credit-create", component: CreditCreateComponent},
  { path: "credit-detail/:id", component: CreditDetailComponent},
  { path: "credit-edit/:id", component: CreditEditComponent},
  { path: "genre-list", component: GenreListComponent},
  { path: "genre-create", component: GenreCreateComponent},
  { path: "genre-detail/:id", component: GenreDetailComponent},
  { path: "genre-edit/:id", component: GenreEditComponent},
  { path: "moviegenre-list", component: MoviegenreListComponent},
  { path: "moviegenre-create", component: MoviegenreCreateComponent},
  { path: "moviegenre-detail/:id", component: MoviegenreDetailComponent},
  { path: "user-list", component: UserListComponent},
  { path: "user-create", component:UserCreateComponent},
  { path: "user-detail/:id", component:UserDetailComponent},
  { path: "user-edit/:id", component:UserEditComponent},
  { path: "user-login", component:UserLoginComponent},
  {path: '**', component: NoComponentDefinedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
