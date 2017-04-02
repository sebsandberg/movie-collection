import { Component } from '@angular/core';
import { MovieService } from './services/movie.service'
import { Movie } from './models/movie'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Filmsamling';
  movies: Movie[]
  moviesToDisplay: Movie[]
  comedies: Movie[]
  readonly increaseIndex = 5
  currentIndex = 0
  availableGenres: Set<string>
  selectedGenre: string

  constructor(private movieService: MovieService) {

    this.movieService.getMovies().subscribe(movies => {
      this.movies = movies
      this.setMoviesToDisplay()
      this.availableGenres = new Set
      this.setAvaibleGenres(movies, this.availableGenres)
    })
  }

  setMoviesToDisplay() {
    this.moviesToDisplay = this.movies.slice(this.currentIndex, this.currentIndex + this.increaseIndex)
  }

  previous(){
    if(this.currentIndex - this.increaseIndex > 0) {
      this.currentIndex -= this.increaseIndex
    } else {
      this.currentIndex = 0
    }
    this.setMoviesToDisplay()
  }
  next() {
    if(this.currentIndex + this.increaseIndex < this.movies.length) {
      this.currentIndex += this.increaseIndex
      this.setMoviesToDisplay()
    }
  }

  setGenre(genre: string) {
    this.selectedGenre = genre || ''
    this.moviesToDisplay = this.movies.filter((movie) => {
      return this.filterByGenre(movie)
    })
  }

  filterByGenre(movie) {
    let match = false
    if (movie.tmdb) {
      movie.tmdb.genres.map((genre) => {
       if (genre.name == this.selectedGenre) {
         match = true
       }
      })
    }
    return match
  }

  setAvaibleGenres(movies, availableGenres) {
    movies.map((movie) => {
      if(movie.tmdb) {
        movie.tmdb.genres.map((genre) => {
          availableGenres.add(genre.name)
        })
      }
    })
  }
}
