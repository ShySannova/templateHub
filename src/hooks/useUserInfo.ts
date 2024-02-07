import { useSelector } from "react-redux";
import { RootState } from "../store/rootReducer";

const useUserInfo = () => {

    const userInfo = useSelector(
        (state: RootState) => state.auth?.userInfo
    );


    return { userInfo };
};

export default useUserInfo;
