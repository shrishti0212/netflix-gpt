import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
    // Ensure movies is always treated as an array
    const moviesArray = Array.isArray(movies) ? movies : [movies];
    return (
        <div className="px-6 ">
            <h1 className="text-xl md:text-3xl py-4 text-white font-bold">{title}</h1>
            <div className="flex overflow-auto scrollbar-none">
                <div className="flex">
                    {moviesArray.map((movie) => (
                        <MovieCard 
                            key={movie?.id} 
                            poster_path={movie?.poster_path} 
                            title={movie?.title || movie?.original_title} 
                        />
                    ))}
                    {moviesArray.length === 0 && (
                        <p className="text-red-500">No movies available to display.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MovieList;
