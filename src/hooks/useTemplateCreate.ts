import { useState, ChangeEvent, useEffect } from "react";
import { Template } from "../utils/types";
import { useDispatch, useSelector } from "react-redux";
import useToast from "./useToast";
import { setAuthenticated } from "../store/authSlice";
import useRefresh from "./useRefresh";
import { CREATE_TEMPLATE_URL } from "../utils/constant";
import { RootState } from "../store/rootReducer";

const useTemplateCreate = () => {

    const { handleToast } = useToast()


    const dispatch = useDispatch()
    const { handleRefresh } = useRefresh();
    const { _id } = useSelector((state: RootState) => state.auth?.userInfo);
    useEffect(() => {
        setTemplate(prevTemplate => ({
            ...prevTemplate,
            user: { _id },
        }));
    }, [_id]);



    const [template, setTemplate] = useState<Partial<Template>>({
        user: { _id },
        title: "",
        url: "",
        image: "",
        badge: "",
        sourceCode: {
            frontend: "",
            backend: ""
        },
        metaTitle: "",
        metaDescription: "",
        features: [],
        keywords: [],
        stacks: [],
        tech: [],
        description: "",

        images: [
            "https://upload.wikimedia.org/wikipedia/en/c/cc/Agoda_mainlogo_stack_positive_ai_Main_Logo.jpg",
            "https://public.bnbstatic.com/image/cms/blog/20220215/56e2ce27-0276-408f-ad55-2fe85ad0cb68.png"
        ],
    });

    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => { setTemplate((prev) => ({ ...prev, [e.target.name]: e.target.value })) };

    const handleIntegerChange = (
        e: ChangeEvent<HTMLInputElement>
    ) => { setTemplate((prev) => ({ ...prev, [e.target.name]: Number(e.target.value) })) };


    const handleSourceCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTemplate((prev) => {
            return { ...prev, sourceCode: { ...prev.sourceCode, frontend: e?.target?.value } }
        })
    }
    const handleBooleanChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTemplate((prev) => {
            return { ...prev, responsive: e?.target?.checked }
        })
    }

    // const addImage = (imageUrl: string) => {
    //     if (imageUrl.trim() !== "") {
    //         setTemplate((prev) => ({
    //             ...prev,
    //             images: [...prev.images, imageUrl],
    //         }));
    //     }
    // };

    const handleCreateTemplate = async (): Promise<boolean> => {
        console.log(template)
        try {
            const res = await fetch(CREATE_TEMPLATE_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(template),
                credentials: "include",
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
                        return handleCreateTemplate()
                    } else {
                        console.error("refresh-token failed")
                        return false
                    }
                }
            }
            return false

        } catch (error) {
            console.error("Error creating template:", error);
            localStorage.clear()
            dispatch(setAuthenticated({ isAuthenticated: false, userInfo: {} }))
            return false
        }
    };


    return { template, setTemplate, handleInputChange, handleIntegerChange, handleSourceCodeChange, handleBooleanChange, handleCreateTemplate };
};

export default useTemplateCreate;
