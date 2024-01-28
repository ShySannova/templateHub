import { useState, ChangeEvent } from "react";
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

    const {_id} = useSelector(
        (state: RootState) => state.auth.userInfo
    );

 

    const [template, setTemplate] = useState<Template>({
        user:{_id} ,
        title: "",
        badge: "",
        tech: "",
        responsive: false,
        image: "",
        status: "",
        stacks: "",
        url: "",
        metaTitle: "",
        metaDescription: "",
        keywords: "",
        description: "",
        features: "",
        price: "",
        discount: 0,
        images: [
            "https://upload.wikimedia.org/wikipedia/en/c/cc/Agoda_mainlogo_stack_positive_ai_Main_Logo.jpg",
            "https://public.bnbstatic.com/image/cms/blog/20220215/56e2ce27-0276-408f-ad55-2fe85ad0cb68.png"
        ],
    });

    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => { setTemplate((prev) => ({ ...prev, [e.target.name]: e.target.value })) };

    // const addImage = (imageUrl: string) => {
    //     if (imageUrl.trim() !== "") {
    //         setTemplate((prev) => ({
    //             ...prev,
    //             images: [...prev.images, imageUrl],
    //         }));
    //     }
    // };

    const createTemplate = async (): Promise<boolean> => {
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
                return true
            } else {
                if (res.status === 401) {
                    const success = await handleRefresh();
                    if (success) {
                        return createTemplate()
                    } else {
                        console.error("refresh-token failed")
                        return false
                    }
                }
            }
            return true

        } catch (error) {
            console.error("Error creating template:", error);
            localStorage.clear()
            dispatch(setAuthenticated({ isAuthenticated: false, userInfo: {} }))
            return false
        }
    };


    const handleSubmit = async () => {
        try {
            const success = await createTemplate();
            if (success) {
                return true
            }
        } catch (error) {
            console.error(error)
            return false
        }
    };


    return { template, handleInputChange,handleSubmit, createTemplate };
};

export default useTemplateCreate;
