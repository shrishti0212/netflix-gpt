
import Header from "./Header";
import useNowPlayingMovies from "../components/hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
<<<<<<< HEAD

const Browse=()=>{
    useNowPlayingMovies();
=======
import usePopularMovies from "./hooks/usePopularMovies";
import useTopRatedMovies from "./hooks/useTopRatedMovies";
import useUpcomingMovies from "./hooks/useUpcomingMovies";
import useTVSeries from "./hooks/useTVSeries";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse=()=>{
    const showGptSearch = useSelector((store) =>
         store.gpt.showGptSearch);

    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();
    useTVSeries();
>>>>>>> 176079fa72d2ec88bd34e187611a471f949b1d41

    return(
    <div>
        <Header/>
<<<<<<< HEAD
        <MainContainer/>
        <SecondaryContainer/>
=======
        {showGptSearch ? (
            <GptSearch/>
        ):(   
        <> 
        <MainContainer/>
        <SecondaryContainer/>
        </>
        )}
>>>>>>> 176079fa72d2ec88bd34e187611a471f949b1d41
    </div>
    )
}

export default Browse;