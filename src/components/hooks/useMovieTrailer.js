import { useDispatch ,useSelector} from "react-redux";
import { addTrailerVideo } from "../../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../../utils/constants";

const useMovieTrailer = (movieId) =>{
   
    const dispatch = useDispatch();
    const trailerVideo = useSelector((store) => store.movies.trailerVideo);

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
            !trailerVideo && getMovieVideos();
        },[])
    
}

export default useMovieTrailer;