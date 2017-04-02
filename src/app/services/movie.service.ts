import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Movie } from '../models/movie'
import { Secrets } from '../../secrets'
import 'rxjs/Rx';

@Injectable()
export class MovieService {

  constructor(public http: Http, private secrets: Secrets) {}

  getMovies() {
    return this.http.get('./src/app/data/new_movies.json')
        .map((res: Response) => {
          let movies = []
          res.json().map(movie_resp => {
            let movie = new Movie()
            movie.link = movie_resp.link
            movie.title = movie_resp.title
            movie.year = movie_resp.year
            movie.id = movie_resp.id
            if(!movie.id) {
              movie.setId()
            }
            if(movie_resp.tmdb) {
              movie.tmdb = movie_resp.tmdb
              movie.setImagePath()
            }

            if(!movie.tmdb) {
              this.getFromTMDB(movie).subscribe((val) => {
                movie.tmdb = val
              })
            }
            movies.push(movie)
          })
          return movies
      })
  }
  getFromTMDB(movie: Movie) {
    let BASE_URL = this.secrets.apiUrl
    let api_key = this.secrets.apiKey
    return this.http.get(BASE_URL + movie.id + '?api_key=' + api_key)
      .map((res: Response) => {
       return res.json()
      })
  }
}