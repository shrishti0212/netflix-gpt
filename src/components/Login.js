import {useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import { auth } from "../utils/firebase"; 
import { useDispatch } from "react-redux";
import {addUser} from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";

const Login=() =>{
    const [isSignInForm , setSignInForm]=useState(true);
    const [errormessage, seterrormessage] =useState();
    const dispatch= useDispatch();

    const name=useRef(null);
    const email=useRef(null);
    const password = useRef(null);

    const handleButtonClick =()=>{
            const nameValue = isSignInForm ? null : name.current?.value ;
            const message=checkValidateData(email.current.value,password.current.value,nameValue);
            seterrormessage(message);
            if(message) return;

            if(!isSignInForm){
                    //sign up logic
                    createUserWithEmailAndPassword(
                        auth, 
                        email.current.value,
                         password.current.value
                        )

                    .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, 
                        photoURL: USER_AVATAR,
                      })
                      .then(() => {
                        const {uid,email,displayName,photoURL} = auth.currentUser;
                        dispatch(
                            addUser({
                                uid:uid,
                                email:email,
                                displayName:displayName,
                                photoURL:photoURL,
                            })
                        );
                        
                      }).catch((error) => {
                            seterrormessage(error.message)
                      });
            
                    })

                    .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    seterrormessage(`${errorCode} - ${errorMessage}`);

                    
                });

                }
                
            else{
                    //sign in logic
                    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                    .then((userCredential) => {
                     // Signed in 
                     const user = userCredential.user;
                     console.log(user);
                    })
                
                    .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    seterrormessage(`${errorCode} - ${errorMessage}`);

                    });

            }

    }


    const toggleSigninForm=()=>{
        setSignInForm(!isSignInForm);
    };

    return (
        <div>
            <Header/>
            <div className="absolute">
                <img
                src="https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_small.jpg"
                alt="logo"
                />
            </div>
            <form 
                onSubmit={(e)=> e.preventDefault()}
                className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-90">

                <h1 className="font-bold text-3xl py-4">{
                isSignInForm ? "Sign In":"Sign Up"}
                </h1>

                {!isSignInForm && (
                    <input
                    ref={name}
                    type="input"
                    placeholder="Full Name"
                    className="p-4 my-4 w-full bg-gray-700 rounded-lg"
                    />

                )}

                <input 
                ref={email}
                type="text" 
                placeholder="Email Address" 
                className="p-4 my-2 w-full bg-gray-700 rounded-lg"
                />

                <input 
                ref={password}
                type="text" 
                placeholder="Password" 
                className="p-4 my-2 w-full bg-gray-700 rounded-lg"    
                />
                
                <p className="text-red-700 font-bold">{errormessage}</p>
                
                <button className="p-4 my-6 bg-red-700 w-full rounded-lg cursor-pointer "
                 onClick={handleButtonClick}
                 >
                    {isSignInForm ?  "Sign In" : "Sign Up"}
                </button>

                <p className="py-4" onClick={(toggleSigninForm)}>
                    {isSignInForm?"New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}
                </p>

            </form>
        </div>
    )
}

export default Login;