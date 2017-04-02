export class Movie {
  title: string;
  year: number;
  link: string;
  id: string;
  tmdb: any;
  imagePath: string;

  constructor() {

   }

  setId() {

    let first = this.link.split('/movie/')
    if(first[1]) {
      this.id = first[1].split('-')[0]
    }

    console.log(this.id)
  }

  setImagePath() {
    if(this.tmdb) {
      this.imagePath = 'https://image.tmdb.org/t/p/w500' + this.tmdb.poster_path
    }
  }
}
