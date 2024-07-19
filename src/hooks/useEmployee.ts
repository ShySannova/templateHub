import { useCallback, useEffect, useState } from "react"
import useRoleAccess from "./useRoleAccess"
import { GET_EMPLOYEES_URL, SET_EMPLOYEE_ROLE_URL } from "../utils/constant"
import useToast from "./useToast"
import useRefresh from "./useRefresh"



const useEmployee = () => {
    const { auth, adminAccess, developerAccess } = useRoleAccess()
    const [employees, SetEmployees] = useState([])
    const [role, setRole] = useState({})

    const { handleRefresh } = useRefresh()
    const { handleToast } = useToast()

    const getEmployees = useCallback(async (): Promise<boolean> => {
        try {
            const handleUrl = adminAccess ? GET_EMPLOYEES_URL : `${GET_EMPLOYEES_URL}/${auth?.userInfo?._id}`
            const res = await fetch(handleUrl, {
                credentials: "include",
            });

            if (res.ok) {
                const data = await res.json();
                SetEmployees(data.employees)
                return true
            } else {
                if (res.status === 401) {
                    const success = await handleRefresh();
                    if (success) {
                        return getEmployees()
                    } else {
                        handleToast(true, "No Employees Found")
                        console.error("No Employees Found", res.statusText);
                        return false
                    }
                }
            }
            return false
        } catch (error) {
            console.error("some internal error:", error);
            return false
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [auth?.userInfo?._id, adminAccess])


    useEffect(() => {
        getEmployees()
    }, [getEmployees])


    const handleSetRole = async (employeeId: string): Promise<boolean> => {
        try {
            const res = await fetch(`${SET_EMPLOYEE_ROLE_URL}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",

                },
                body: JSON.stringify({ employeeId, role }),
                credentials: "include",
            });

            if (res.ok) {
                const data = await res.json();
                handleToast(true, data.message)
                return true
            } else {
                if (res.status === 401) {
                    const success = await handleRefresh();
                    if (success) {
                        return handleSetRole(employeeId)
                    } else {
                        handleToast(true, "Unable to set role Please try again later")
                        console.error("Unable to set role Please try again later");
                        return false
                    }
                }
            }
            return false
        } catch (error) {
            handleToast(true, "some internal error")
            console.error("some internal error:", error);
            return false
        }
    }


    return { employees, SetEmployees, role, setRole, getEmployees, adminAccess, developerAccess, handleSetRole }
}

export default useEmployee