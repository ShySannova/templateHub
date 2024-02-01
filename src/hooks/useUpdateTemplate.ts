import { useCallback, useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import useToast from './useToast'
import { GET_ONE_TEMPLATE_URL, UPDATE_TEMPLATE_URL } from '../utils/constant'
import { Template } from '../utils/types'
import useRefresh from './useRefresh'


const useUpdateTemplate = () => {
    const location = useLocation();
    const [template, setTemplate] = useState(location?.state?.template)

    const id = useParams().id

    const getTemplate = useCallback(async () => {
        try {
            const res = await fetch(`${GET_ONE_TEMPLATE_URL}/${id}`, { credentials: "include" })
            const data = await res.json()
            setTemplate(data.template)
        } catch (error) {
            console.error(error)
        }
    }, [id])


    useEffect(() => {
        // Check if template is null or undefined
        if (location.state === null) {
            getTemplate();
        }
    }, [location.state, getTemplate]);


    const [newTemplate, setNewTemplate] = useState<Template>(template)
    const { handleToast } = useToast()
    const { handleRefresh } = useRefresh();


    const updateTemplate = async (): Promise<boolean> => {
        try {
            const res = await fetch(`${UPDATE_TEMPLATE_URL}/${id}`, {
                method: 'PATCH',
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...newTemplate }),
            });
            if (res.ok) {
                const data = await res.json();
                handleToast(true, data.message);
                if (data.success) return true
                return false
            } else {
                if (res.status === 401) {
                    const success = await handleRefresh();
                    if (success) {
                        return updateTemplate()
                    } else {
                        console.error("refresh-token failed")
                        return false
                    }
                }
            }
            return false
        }
        catch (err) {
            console.error(err)
            handleToast(true, "Server Error Try Again...")
            return false
        }

    }

    return { template, newTemplate, setNewTemplate, updateTemplate }
}

export default useUpdateTemplate