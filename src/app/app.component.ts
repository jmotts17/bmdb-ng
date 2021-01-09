import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BMDB';

  movies:string[] = ["The Dark Knight", "Shawshank Redemption", "The Last Samurai", "Gladiator", "Harry Potter", "The Lord of the Rings", "The Matrix", "Se7en"];

}
