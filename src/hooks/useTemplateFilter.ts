import { useNavigate, useParams } from "react-router-dom";
import { DELETE_TEMPLATE_URL, UPDATE_TEMPLATE_URL } from "../utils/constant";
import useRefresh from "./useRefresh";
import useToast from "./useToast";
import { useCallback, useEffect, useState } from "react";
import { Template } from "../utils/types";
import useUserTemplate from "./useUserTemplate";


const useTemplateFilter = () => {

    const navigate = useNavigate()
    const { handleToast } = useToast()
    const { handleRefresh } = useRefresh();
    const params = useParams();

    const { templates }: { templates: Template[] } = useUserTemplate(params);
    const [newTemplate, setNewTemplate] = useState(templates);

    const filter = useCallback((status: string) => {
        const newTemp = templates?.filter((temp) => {
            if (status === "published") {
                return temp.status === "published"
            }
            else if (status === "draft") {
                return temp.status === status
            }
            else if (status === "trash") {
                return temp.status === status
            }
            else {
                return "halwa"
            }
        })
        setNewTemplate(newTemp)
    }, [templates])


    useEffect(() => {
        filter(params?.filter as string)
    }, [params, filter])


    const updateTemplateStatus = async (data: { status: string, id: string }): Promise<boolean> => {
        try {
            const res = await fetch(`${UPDATE_TEMPLATE_URL}/${data.id}`, {
                method: 'PATCH',
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ status: data.status }),
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
                        return updateTemplateStatus(data)
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

    const publishedTemplate = async (data: { status: string, id: string }) => {
        const success = await updateTemplateStatus(data)
        if (success) navigate("/dashboard/templates/published")
    }

    const draftTemplate = async (data: { status: string, id: string }) => {
        const success = await updateTemplateStatus(data)
        if (success) navigate("/dashboard/templates/draft")
    }

    const trashTemplate = async (data: { status: string, id: string }) => {
        const success = await updateTemplateStatus(data)
        if (success) navigate("/dashboard/templates/trash")
    }

    const deleteTemplate = async (id: string): Promise<boolean> => {
        try {
            const res = await fetch(`${DELETE_TEMPLATE_URL}/${id}`, {
                method: 'DELETE',
                credentials: "include"
            })
            if (res.ok) {
                const data = await res.json();
                handleToast(true, data.message);
                if (data.success) {
                    navigate("/dashboard/templates")
                    return true
                }
                return false
            } else {
                if (res.status === 401) {
                    const success = await handleRefresh();
                    if (success) {
                        return deleteTemplate(id)
                    } else {
                        console.error("refresh-token failed")
                        return false
                    }
                }
            }
            const data = await res.json();
            handleToast(true, data.message)
            return false
        }
        catch (err) {
            console.error(err)
            handleToast(true, "Server Error Try Again...")
            return false
        }
    }

    return { templates, newTemplate, publishedTemplate, draftTemplate, trashTemplate, deleteTemplate }

}

export default useTemplateFilter