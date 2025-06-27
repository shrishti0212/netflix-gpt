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
            </div>
        </div>
    )
}

export default VideoTitle;