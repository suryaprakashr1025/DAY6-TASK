//1.https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md
//d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, 
//the studio “Eon Productions”, and the rating “PG­13”

class movie3{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    getMovieDetails3(){
        return `The movie name is ${this.title}, the studio is ${this.studio} and the rating is ${this.rating} `;
      }  
    }
     const movieDetails3 = new movie3("Casino Royale","Eon Productions","PG­13");
     console.log(movieDetails3.getMovieDetails3());
     