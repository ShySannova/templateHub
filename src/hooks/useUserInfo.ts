<<<<<<< HEAD
import { useEffect, useState } from "react";
=======
import { useCallback, useEffect, useState } from "react";
>>>>>>> b6133d22b37dc85d5449b885ca6c3741a33c1936
import { USER_URL } from "../utils/constant";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAuthenticated } from "../store/authSlice";
import { RootState } from "../store/rootReducer";
import useRefresh from "./useRefresh";
import usePersist from "./usePersist";
import useToast from "./useToast";
<<<<<<< HEAD

interface UserInfo {
    _id?: string;
    name?: string;
    email?:string;
}
=======
import { UserInfo } from "../utils/types";
>>>>>>> b6133d22b37dc85d5449b885ca6c3741a33c1936

const useUserInfo = () => {

    const auth = useSelector(
<<<<<<< HEAD
            (state: RootState) => state.auth
        );
=======
        (state: RootState) => state.auth
    );
>>>>>>> b6133d22b37dc85d5449b885ca6c3741a33c1936

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { handleRefresh } = useRefresh()
    const [persist] = usePersist()

<<<<<<< HEAD
    const {handleToast}= useToast();



    const handleGetUserInfo = async () => {
        if(!auth.isAuthenticated){
=======
    const { handleToast } = useToast();



    const handleGetUserInfo = useCallback(async () => {
        if (!auth.isAuthenticated) {
>>>>>>> b6133d22b37dc85d5449b885ca6c3741a33c1936

            try {
                const res = await fetch(USER_URL, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                });
<<<<<<< HEAD
    
    
=======


>>>>>>> b6133d22b37dc85d5449b885ca6c3741a33c1936
                if (res.ok) {
                    const data = await res.json();
                    const userInfo = data.userInfo;
                    setUserInfo(userInfo);
<<<<<<< HEAD
                    if(persist){
                        dispatch(setAuthenticated({isAuthenticated:true,userInfo}))
                    }else{
                        dispatch(setAuthenticated({isAuthenticated:false,userInfo}))
                    }
                } 
                else if(res.status === 401) {
                    const data = await res.json()
                    if(data.message==="Refresh token is missing"){
                        localStorage.clear()
                        navigate("/dashboard/login")
                        handleToast(true,"Please login again")
                    }
                    if(data.message==="Access token is missing"){
                        let success = await handleRefresh()
                        if(success){
                          handleGetUserInfo()
=======
                    if (persist) {
                        dispatch(setAuthenticated({ isAuthenticated: true, userInfo }))
                    } else {
                        dispatch(setAuthenticated({ isAuthenticated: false, userInfo }))
                    }
                }
                else if (res.status === 401) {
                    const data = await res.json()
                    if (data.message === "Refresh token is missing") {
                        localStorage.clear()
                        navigate("/login")
                        handleToast(true, "Please login again")
                    }
                    if (data.message === "Access token is missing") {
                        const success = await handleRefresh()
                        if (success) {
                            handleGetUserInfo()
>>>>>>> b6133d22b37dc85d5449b885ca6c3741a33c1936
                        }
                    }
                }


            } catch (error) {
                console.error("Error during getUserInfo:", error);
                localStorage.clear()
<<<<<<< HEAD
                dispatch(setAuthenticated({isAuthenticated:false,userInfo:{}}))
                navigate('/dashboard/login')
            }
        }else{

            setUserInfo(auth?.userInfo)
        }
    };
=======
                dispatch(setAuthenticated({ isAuthenticated: false, userInfo: {} }))
                navigate('/login')
            }
        } else {

            setUserInfo(auth?.userInfo)
        }
    }, [auth.isAuthenticated, auth?.userInfo, dispatch, handleRefresh, handleToast, navigate, persist])
>>>>>>> b6133d22b37dc85d5449b885ca6c3741a33c1936

    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        handleGetUserInfo().finally(() => setLoading(false));
<<<<<<< HEAD
    }, []);

    return { userInfo, loading };
=======
    }, [handleGetUserInfo]);

    return { userInfo, loading, handleGetUserInfo };
>>>>>>> b6133d22b37dc85d5449b885ca6c3741a33c1936
};

export default useUserInfo;
