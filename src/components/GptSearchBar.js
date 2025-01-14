import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import lang from "../utils/languageConstants";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import {addGptMovieResult} from "../utils/gptSlice";
import appStore from "../utils/appStore";


const GptSearchBar= () =>{
    const dispatch = useDispatch();
    const langKey = useSelector((store)=>
        store.config.lang);
        const searchText = useRef(null);

    const searchMovieTMDB = async(movie ) =>{
        const data = await fetch(
            "https://api.themoviedb.org/3/search/movie?query=" +
            movie +
            "&include_adult=false&language=en-US&page=1",
            API_OPTIONS
        );

        const json= await data.json()

        return json.results;
    }


    const handleGptSearchClick = async() =>{
    
    
    const gptQuery="Act as a movie Recommendation system and suggest some movies for the query" 
        + searchText.current.value + 
        "only give me names of 5 movies,comma seperated like the example result ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

        const gptResults = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        store: true,
        messages: [{ role: 'user', content: gptQuery }],
        });
        

        const gptMovies = gptResults?.choices?.[0]?.message?.content.split(",");

        const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    
        const tmdbResults = await Promise.all(promiseArray); 
    
        dispatch(addGptMovieResult({
            movieNames: gptMovies,
            movieResults: tmdbResults,
        }));
        
    };

    return(
        <div className="pt-[45%] md:pt-[10%] flex justify-center">
            
            <form 
            className=" w-11/12 md:w-1/2 bg-black grid grid-cols-12 rounded-lg " 
            onSubmit={(e)=>e.preventDefault()}
            >
            <input 
                ref={searchText}
                type="text" 
                className="m-2 md:p-4 md:m-4 col-span-9 rounded-lg text-center" 
                placeholder={lang[langKey].gptSearchPlaceholder}
            />
            <button 
             className=" m-4 py-2 col-span-3 md:m-4  md:px-4 bg-red-700 text-white rounded-lg text-lg"
                onClick={handleGptSearchClick}
            >
                {lang[langKey].search}
                </button> 
            </form>
        </div>
    );
};

export default GptSearchBar;