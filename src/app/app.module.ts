import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './feature/movie/movie-list/movie-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ActorListComponent } from './feature/actor/actor-list/actor-list.component';
import { CreditListComponent } from './feature/credit/credit-list/credit-list.component';
import { GenreListComponent } from './feature/genre/genre-list/genre-list.component';
import { MoviegenreListComponent } from './feature/moviegenre/moviegenre-list/moviegenre-list.component';
import { MovieCreateComponent } from './feature/movie/movie-create/movie-create.component';
import { ActorCreateComponent } from './feature/actor/actor-create/actor-create.component';
import { GenreCreateComponent } from './feature/genre/genre-create/genre-create.component';

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
    GenreCreateComponent
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
