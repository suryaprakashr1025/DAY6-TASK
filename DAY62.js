//1.https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md
//a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and
// a String representing the rating as its arguments, and sets the respective class properties to these values.

class movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    setMovie(titleName){
        this.title=titleName;
    }
    setStudio(studioName){
        this.studio=studioName;
    }
    setRating(ratingPoint){
        this.rating=ratingPoint;
    }
  getMovieDetails(){
    return `The movie name is ${this.title}, the studio is ${this.studio} and the rating is ${this.rating} `;
  }  
}
 const movieDetails = new movie("VICKRAM","RAJKAMAL FILMS","8.4/10");
 console.log(movieDetails.getMovieDetails());
 movieDetails.setMovie("MASTER");
 movieDetails.setStudio("XB FILMS");
 movieDetails.setRating("7.3/10");
 console.log(movieDetails.getMovieDetails());

 