import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState: {
        nowPlayingMovies : null,
    },
    reducers: {
        addNowPlayingMovies : (state,action) =>{
            state.nowPlayingMovies = action.payload;
        },
<<<<<<< HEAD
    addTrailerVideo: (state,action) =>{
        state.trailerVideo = action.payload;
=======
        addPopularMovies : (state,action) =>{
            state.popularMovies = action.payload;    
        },
        addTopRatedMovies : (state,action) =>{
            state.topRatedMovies = action.payload;    
        },
        addUpcomingMovies : (state,action) =>{
            state.upcomingMovies = action.payload;    
        },
        addTVSeries: (state,action) =>{
            state.tvSeries = action.payload;    
        },
        addTrailerVideo: (state,action) =>{
            state.trailerVideo = action.payload;
>>>>>>> 176079fa72d2ec88bd34e187611a471f949b1d41
    },
    }
});

<<<<<<< HEAD
export const { addNowPlayingMovies,addTrailerVideo } =movieSlice.actions;
=======
export const { addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTopRatedMovies,addUpcomingMovies,addTVSeries} =
movieSlice.actions;
>>>>>>> 176079fa72d2ec88bd34e187611a471f949b1d41

export default movieSlice.reducer;