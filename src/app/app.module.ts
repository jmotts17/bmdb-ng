import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieListComponent } from './feature/movie/movie-list/movie-list.component';
import { ActorListComponent } from './feature/actor/actor-list/actor-list.component';
import { CreditListComponent } from './feature/credit/credit-list/credit-list.component';
import { GenreListComponent } from './feature/genre/genre-list/genre-list.component';
import { MoviegenreListComponent } from './feature/moviegenre/moviegenre-list/moviegenre-list.component';
import { MovieCreateComponent } from './feature/movie/movie-create/movie-create.component';
import { ActorCreateComponent } from './feature/actor/actor-create/actor-create.component';
import { GenreCreateComponent } from './feature/genre/genre-create/genre-create.component';
import { NoComponentDefinedComponent } from './core/no-component-defined/no-component-defined.component';
import { MenuComponent } from './core/menu/menu.component';
import { UserListComponent } from './feature/user/user-list/user-list.component';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { MovieDetailComponent } from './feature/movie/movie-detail/movie-detail.component';
import { MovieEditComponent } from './feature/movie/movie-edit/movie-edit.component';
import { ActorDetailComponent } from './feature/actor/actor-detail/actor-detail.component';
import { ActorEditComponent } from './feature/actor/actor-edit/actor-edit.component';
import { GenreDetailComponent } from './feature/genre/genre-detail/genre-detail.component';
import { GenreEditComponent } from './feature/genre/genre-edit/genre-edit.component';
import { UserDetailComponent } from './feature/user/user-detail/user-detail.component';
import { UserEditComponent } from './feature/user/user-edit/user-edit.component';
import { CreditDetailComponent } from './feature/credit/credit-detail/credit-detail.component';
import { CreditEditComponent } from './feature/credit/credit-edit/credit-edit.component';
import { CreditCreateComponent } from './feature/credit/credit-create/credit-create.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    ActorListComponent,
    CreditListComponent,
    GenreListComponent,
    MoviegenreListComponent,
    MovieCreateComponent,
    ActorCreateComponent,
    GenreCreateComponent,
    NoComponentDefinedComponent,
    MenuComponent,
    UserListComponent,
    UserCreateComponent,
    MovieDetailComponent,
    MovieEditComponent,
    ActorDetailComponent,
    ActorEditComponent,
    GenreDetailComponent,
    GenreEditComponent,
    UserDetailComponent,
    UserEditComponent,
    CreditDetailComponent,
    CreditEditComponent,
    CreditCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
