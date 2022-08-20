//1.https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md
//b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
 
class movie1{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating="PG";
    }
    getMovieDetails1(){
        return `The movie name is ${this.title}, the studio is ${this.studio} and the rating is ${this.rating} `;
      }  
    }
     const movieDetails1 = new movie1("VICKRAM","RAJKAMAL FILMS");
     console.log(movieDetails1.getMovieDetails1());