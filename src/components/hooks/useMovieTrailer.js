<<<<<<< HEAD
import { useDispatch } from "react-redux";
=======
import { useDispatch ,useSelector} from "react-redux";
>>>>>>> 176079fa72d2ec88bd34e187611a471f949b1d41
import { addTrailerVideo } from "../../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../../utils/constants";

const useMovieTrailer = (movieId) =>{
   
    const dispatch = useDispatch();
<<<<<<< HEAD
    
=======
    const trailerVideo = useSelector((store) => store.movies.trailerVideo);

>>>>>>> 176079fa72d2ec88bd34e187611a471f949b1d41
    //fetch trailer video
        const getMovieVideos =async () =>{
            const data= await fetch('https://api.themoviedb.org/3/movie/558449/videos?language=en-US',
                API_OPTIONS
            )
            const json = await data.json();
            const filterData = json.results.filter(video => video.type === "Trailer")
            const trailer= filterData[0];
            dispatch(addTrailerVideo(trailer))
        };

        useEffect(()=>{
<<<<<<< HEAD
            getMovieVideos();
=======
            !trailerVideo && getMovieVideos();
>>>>>>> 176079fa72d2ec88bd34e187611a471f949b1d41
        },[])
    
}

export default useMovieTrailer;