import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
<<<<<<< HEAD
=======
import gptReducer from "./gptSlice"
import configReducer from "./configSlice"
>>>>>>> 176079fa72d2ec88bd34e187611a471f949b1d41

const appStore = configureStore(
    {
        reducer:{
            user:userReducer,
            movies: moviesReducer,
<<<<<<< HEAD
=======
            gpt:gptReducer,
            config: configReducer
            
>>>>>>> 176079fa72d2ec88bd34e187611a471f949b1d41
        }
    }
)

<<<<<<< HEAD
export default appStore;
=======
export default appStore
>>>>>>> 176079fa72d2ec88bd34e187611a471f949b1d41
