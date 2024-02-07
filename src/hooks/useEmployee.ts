import { useCallback, useEffect, useState } from "react"
import useRoleAccess from "./useRoleAccess"
import { GET_EMPLOYEES_URL, SET_EMPLOYEE_ROLE_URL } from "../utils/constant"



const useEmployee = () => {
    const { auth, adminAccess, developerAccess } = useRoleAccess()
    const [employees, SetEmployees] = useState([])
    const [role, setRole] = useState({})

    const getEmployees = useCallback(async () => {
        try {
            const res = await fetch(`${GET_EMPLOYEES_URL}/${auth?.userInfo?._id}`, {
                credentials: "include",
            });

            if (res.ok) {
                const data = await res.json();
                SetEmployees(data.employees)
            } else {
                console.error("No Employees Found", res.statusText);
            }
        } catch (error) {
            console.error("some internal error:", error);
        }
    }, [auth?.userInfo?._id])


    useEffect(() => {
        getEmployees()
    }, [getEmployees])


    const handleSetRole = async (employeeId: string) => {
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
                console.log(data)
            } else {
                console.error("Unable to set role Please try again later");
            }
        } catch (error) {
            console.error("some internal error:", error);
        }
    }


    return { employees, SetEmployees, role, setRole, getEmployees, adminAccess, developerAccess, handleSetRole }
}

export default useEmployee