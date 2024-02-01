import { useOutletContext } from 'react-router-dom'
import { CHANGE_PASSWORD_URL } from '../utils/constant'
import useToast from './useToast'
import { useState } from 'react';
import { OutletContextType } from '../utils/types';
import useRefresh from './useRefresh';



const useChangePassword = () => {
    const { handleToast } = useToast()
    const { handleRefresh } = useRefresh();


    const [newPassword, setNewpassword] = useState("")
    const [userInfo]: OutletContextType = useOutletContext()
    let email: string | undefined;

    if (userInfo) {
        email = userInfo.email
    }

    const handleChangePassword = async (): Promise<boolean> => {
        try {
            const res = await fetch(CHANGE_PASSWORD_URL, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, newPassword }),
                credentials: "include"
            })

            if (res.ok) {
                const data = await res.json();
                handleToast(true, data.message);
                if (data.success) return true
                return false
            } else {
                if (res.status === 401) {
                    const success = await handleRefresh();
                    if (success) {
                        return handleChangePassword()
                    } else {
                        console.error("refresh-token failed")
                        return false
                    }
                }
            }
            return false

        } catch (error) {
            console.error(error)
            handleToast(true, 'server error try again later')
            return false
        }


    }
    return { handleChangePassword, newPassword, setNewpassword }
}

export default useChangePassword