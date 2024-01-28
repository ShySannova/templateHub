import { useCallback, useEffect, useState } from "react";
import { USER_URL } from "../utils/constant";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAuthenticated } from "../store/authSlice";
import { RootState } from "../store/rootReducer";
import useRefresh from "./useRefresh";
import usePersist from "./usePersist";
import useToast from "./useToast";
import { UserInfo } from "../utils/types";

const useUserInfo = () => {

    const auth = useSelector(
        (state: RootState) => state.auth
    );

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { handleRefresh } = useRefresh()
    const [persist] = usePersist()

    const { handleToast } = useToast();



    const handleGetUserInfo = useCallback(async () => {
        if (!auth.isAuthenticated) {

            try {
                const res = await fetch(USER_URL, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                });


                if (res.ok) {
                    const data = await res.json();
                    const userInfo = data.userInfo;
                    setUserInfo(userInfo);
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
                        }
                    }
                }


            } catch (error) {
                console.error("Error during getUserInfo:", error);
                localStorage.clear()
                dispatch(setAuthenticated({ isAuthenticated: false, userInfo: {} }))
                navigate('/login')
            }
        } else {

            setUserInfo(auth?.userInfo)
        }
    }, [auth.isAuthenticated, auth?.userInfo, dispatch, handleRefresh, handleToast, navigate, persist])

    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        handleGetUserInfo().finally(() => setLoading(false));
    }, [handleGetUserInfo]);

    return { userInfo, loading, handleGetUserInfo };
};

export default useUserInfo;
