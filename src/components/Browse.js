
import Header from "./Header";
import useNowPlayingMovies from "../components/hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
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

    return(
    <div>
        <Header/>
        {showGptSearch ? (
            <GptSearch/>
        ):(   
        <> 
        <MainContainer/>
        <SecondaryContainer/>
        </>
        )}
    </div>
    )
}

export default Browse;