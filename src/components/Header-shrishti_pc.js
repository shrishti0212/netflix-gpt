import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser} from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";


const Header =()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(store => store.user);
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch)

    const handleSignOut = () => {
        signOut(auth)
        .then(() => {})
        .catch((error) => {
            navigate("/error");
    });
    };
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid ,email, displayName,photoURL} = user;
              dispatch(
                addUser(
                    { uid : uid ,
                    email : email ,
                    displayName : displayName,
                    photoURL: photoURL, 
                }));
                navigate("/browse");
            } else {
              dispatch(removeUser())
              navigate("/");
            }
          });
          return ()=> unsubscribe();
    },[dispatch]);

    const handeGptSearchClick = () =>{
        dispatch(toggleGptSearchView());
    }

    const handleLanguageChange = (e) =>{
        dispatch(changeLanguage(e.target.value));
    };


    return (
        <div className="absolute pt-3 w-screen px-3 md:px-8 py-2 bg-gradient-to-b from-black z-10 flex  md:flex-row justify-between">
            <img
            className="w-20  md:w-44"
            src={LOGO}
            alt="logo"/>
             {user && 
            (<div className="flex py-2 ">
            {showGptSearch && (
                <select className=" text-sm md:py-2 md:px-4 md:mx-2 md:h-12 bg-gray-900 text-white rounded-lg" 
                onChange={handleLanguageChange}
                >
                    {SUPPORTED_LANGUAGES.map((lang) => (
                        <option key={lang.identifier} value={lang.identifier}>
                            {lang.name}
                        </option>
                    ))}  
                </select>
                )}
                <button className="h-10 px-2 text-md md:h-12 md:px-4 bg-purple-300 text-white rounded-lg cursor-pointer"
                onClick={handeGptSearchClick}
                >
                {showGptSearch? "Homepage" :"GPTSearch"}
                </button>
                <img
                className="h-10 px-1 md:h-12 md:px-2"
                alt="usericon" 
                src={user?.photoURL} />
                <button onClick={handleSignOut} className="px-2 h-10 md:h-12 bg-red-700 md:px-2 rounded-lg cursor-pointer text-white">
                 Sign Out </button>
            </div>
        )}
        </div>
    )
};


export default Header;