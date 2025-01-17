
import { useDispatch,useSelector } from "react-redux";
import { API_OPTIONS } from "../../utils/constants";
import { addTVSeries} from "../../utils/movieSlice";
import { useEffect } from "react";


const useTVSeries= () => {
    //fetch data from TMDB API and update store
    const dispatch = useDispatch();
    const tvSeries = useSelector((store) => store.movies.tvSeries)
    
    const getTVSeries= async() =>{
      const data = await fetch(
       'https://api.themoviedb.org/3/tv/top_rated?page=1',
       API_OPTIONS
    );

    const json = await data.json();
    dispatch(addTVSeries(json.results));
    
    };

    useEffect( ()=>{
        !tvSeries && getTVSeries()
        
    },[]);
};

export default useTVSeries;
;