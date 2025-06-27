<<<<<<< HEAD
import { useDispatch } from "react-redux";
=======
import { useDispatch, useSelector } from "react-redux";
>>>>>>> 176079fa72d2ec88bd34e187611a471f949b1d41
import { API_OPTIONS } from "../../utils/constants";
import { addNowPlayingMovies } from "../../utils/movieSlice";
import { useEffect } from "react";


const useNowPlayingMovies = () => {
    //fetch data from TMDB API and update store
    const dispatch = useDispatch();

<<<<<<< HEAD
=======
    const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);

>>>>>>> 176079fa72d2ec88bd34e187611a471f949b1d41
    const getNowPlayingMovies = async() =>{
      const data = await fetch(
       'https://api.themoviedb.org/3/movie/now_playing?page=1',
       API_OPTIONS
    );

    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
    };

    useEffect( ()=>{
<<<<<<< HEAD
        getNowPlayingMovies();
=======
        !nowPlayingMovies && getNowPlayingMovies();
        
>>>>>>> 176079fa72d2ec88bd34e187611a471f949b1d41
    },[]);
};

export default useNowPlayingMovies;