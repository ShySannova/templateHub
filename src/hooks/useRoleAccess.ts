import { useSelector } from "react-redux";
import { RootState } from "../store/rootReducer";
import { Role } from "../utils/types";
import { roles } from "../utils/constant";


const useRoleAccess = () => {
    const auth = useSelector(
        (state: RootState) => state.auth
    );

    const userAccess = auth?.userInfo?.roles?.map((role: Role) => role === "User")?.filter(Boolean).find((val: boolean) => val === true)
    const dashboardAccess = auth?.userInfo?.roles?.map((role: Role) => roles.includes(role)).find((val: boolean) => val === true)
    const adminAccess = auth?.userInfo?.roles?.map((role: Role) => role === "Admin")?.filter(Boolean).find((val: boolean) => val === true)
    const developerAccess = auth?.userInfo?.roles?.map((role: Role) => role === "Developer")?.filter(Boolean).find((val: boolean) => val === true)




    return { auth, userAccess, dashboardAccess, developerAccess, adminAccess }
}

export default useRoleAccess