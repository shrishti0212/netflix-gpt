import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { BG_IMG } from "../utils/constants";

const GptSearch = () =>{

    return(
        <>
            <div className=" fixed -z-10">
                <img className="w-screen h-screen object-cover"
                src={BG_IMG}
                alt="bg_img"
                />
            </div>
            <div className=""> 

                <GptSearchBar/>
                <GptMovieSuggestions/>
                
            </div>
        </>
    )
}


export default GptSearch;