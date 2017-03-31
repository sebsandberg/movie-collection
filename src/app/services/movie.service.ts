import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MovieService {

  constructor(public http: Http) {}

  getData() {
    return this.http.get('./src/app/data/movies.json')
        .map((res: Response) => res.json())

  }
}