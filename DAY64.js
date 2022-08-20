//1.https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md
//c) Write a method getPG, which takes an array of base type Movie as its argument, 
//and returns a new array of only those movies in the input array with a rating of 
//"PG". You may assume the input array is full of Movie instances. The returned array need not be full.

 
class movie2{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating="PG";
    }
    setMovieDetails2(titleOfMovie){
        this.title=titleOfMovie;
    }
    getMovieDetails2(){
        return `The movie name is ${this.title}, and the rating is ${this.rating} `;
      }  
    }
     const movieDetails2 = new movie2("RRR");
     console.log(movieDetails2.getMovieDetails2());
     movieDetails2.setMovieDetails2("LEGEND");
     console.log(movieDetails2.getMovieDetails2());