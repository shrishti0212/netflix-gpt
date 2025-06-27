<<<<<<< HEAD
const VideoTitle = ({title,overview}) =>{
    return(
        <div className="w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="py-6 text-md w-1/4">{overview}</p>
            <div className="">
                <button className="bg-white text-black font-bold py-2 px-5 text-xl rounded-md hover:bg-opacity-80"
                >▸ Play</button>
                <button className="bg-gray-500 mx-2 text-white font-bold py-2 px-5 text-xl rounded-md opacity-100 hover:bg-opacity-50"
                >ⓘ More Info</button>
=======
import { useState } from "react";

const VideoTitle = ({title,overview}) =>{

    const [showInfo,setShowInfo] = useState(false);

    const toggleInfo =()=>{
        setShowInfo(!showInfo);
    }

    return(
        <div className="w-screen -mx-12  aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black">
            <h1 className=" text-2xl md:text-5xl font-bold">{title}</h1>
            
            {showInfo && (
            <p className="hidden md:inline-block mr-30 py-2 text-xs  md:py-6 md:text-lg md:w-2/4 ">
                {overview}</p>
            )}

            <div className=" flex mt-1 py-1 md:m-5">
                <button className="px-5  bg-white text-black md:font-bold md:py-2 md:px-5 md:text-xl rounded-md hover:bg-opacity-80"
                >▸ Play
                </button>
                
                <button 
                className="hidden md:inline-block mx-2 p-2 bg-gray-500 md:mx-2 text-white md:font-bold md:py-2 md:px-5 md:text-xl rounded-md opacity-100 hover:bg-opacity-50"
                onClick={toggleInfo}
                >{showInfo ? "ⓧ Hide Info" : "ⓘ More Info"}
                </button>
                
>>>>>>> 176079fa72d2ec88bd34e187611a471f949b1d41
            </div>
        </div>
    )
}

export default VideoTitle;