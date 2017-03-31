import { Component } from '@angular/core';
import { MovieService } from './services/movie.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Filmsamling';
  constructor(private movieService: MovieService) {

    this.movieService.getData().subscribe(res => {
      console.log(res)
    })
  }

}
