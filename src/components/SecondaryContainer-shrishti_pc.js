import { useSelector } from "react-redux";
import MovieList from "./MovieList";


const SecondaryContainer = () =>{
    const movies = useSelector((store) => store?.movies);
    return(
        movies.nowPlayingMovies && (
        <div className="w-screen bg-black ">
           <div className=" md:-mt-52 md:pl-8 relative z-20 "> 

            <MovieList title={"Now Playing"}
             movies={movies?.nowPlayingMovies}/>

             <MovieList title={"Top Rated"}
             movies={movies?.topRatedMovies}/>

             <MovieList title={"Popular"}
             movies={movies?.popularMovies}/>

             <MovieList title={"Upcoming "}
             movies={movies?.upcomingMovies}/>

             <MovieList title={"TV Series"}
             movies={movies?.tvSeries}/>
             </div>
        </div>
        )
    )
}

export default SecondaryContainer;                                                                                                                                                                              