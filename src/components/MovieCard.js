import { IMG_CDN_URL } from "../utils/constants"


const MovieCard = ({poster_path}) =>{
    if(!poster_path) return null;
    return (
        <div className="p-2 w-40">
            <img alt="movie Card"
            src= {IMG_CDN_URL + poster_path}/>
        </div>  
    )
}

export default MovieCard;