import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import usePersist from "../../../hooks/usePersist";
import useRoleAccess from "../../../hooks/useRoleAccess";

const ProtectPrivate: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [persist] = usePersist()

    const { auth, dashboardAccess, userAccess } = useRoleAccess();

    if (!persist && !auth.isAuthenticated) return <Navigate to="/login" />

    if (!persist && auth.isAuthenticated && dashboardAccess) return children

    if (persist && dashboardAccess) return children

    if (persist && !dashboardAccess && userAccess) return <Navigate to="/login" />

};

export default ProtectPrivate;
