<<<<<<< HEAD
// hooks/useTemplateForm.tsx
import { useState, ChangeEvent } from "react";
import { Template } from "../utils/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/rootReducer";
=======
import { useState, ChangeEvent } from "react";
import { Template } from "../utils/types";
import { useDispatch, useSelector } from "react-redux";
>>>>>>> b6133d22b37dc85d5449b885ca6c3741a33c1936
import useToast from "./useToast";
import { setAuthenticated } from "../store/authSlice";
import useRefresh from "./useRefresh";
import { CREATE_TEMPLATE_URL } from "../utils/constant";
<<<<<<< HEAD

const useTemplateForm = () => {
=======
import { RootState } from "../store/rootReducer";

const useTemplateCreate = () => {
>>>>>>> b6133d22b37dc85d5449b885ca6c3741a33c1936

    const { handleToast } = useToast()


    const dispatch = useDispatch()
    const { handleRefresh } = useRefresh();

<<<<<<< HEAD

    const userInfo = useSelector(
        (state: RootState) => state.auth.userInfo
    );


    const [template, setTemplate] = useState<Template>({
        user_id: userInfo._id as string,
        template_name: "",
        main_image: "",
        stacks: [],
        template_url: "",
        description: "",
        images: [],
=======
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
>>>>>>> b6133d22b37dc85d5449b885ca6c3741a33c1936
    });

    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
<<<<<<< HEAD
    ) => {
        if (e.target.type === "checkbox") {
            const isChecked = (e.target as HTMLInputElement).checked;
            const stackValue = e.target.value;

            setTemplate((prev) => {
                if (isChecked) {
                    return {
                        ...prev,
                        stacks: [...prev.stacks, stackValue],
                    };
                } else {
                    return {
                        ...prev,
                        stacks: prev.stacks.filter((stack) => stack !== stackValue),
                    };
                }
            });
        } else {
            setTemplate((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        }
    };

    const addImage = (imageUrl: string) => {
        if (imageUrl.trim() !== "") {
            setTemplate((prev) => ({
                ...prev,
                images: [...prev.images, imageUrl],
            }));
        }
    };
=======
    ) => { setTemplate((prev) => ({ ...prev, [e.target.name]: e.target.value })) };

    // const addImage = (imageUrl: string) => {
    //     if (imageUrl.trim() !== "") {
    //         setTemplate((prev) => ({
    //             ...prev,
    //             images: [...prev.images, imageUrl],
    //         }));
    //     }
    // };
>>>>>>> b6133d22b37dc85d5449b885ca6c3741a33c1936

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
<<<<<<< HEAD
                    let success = await handleRefresh();
=======
                    const success = await handleRefresh();
>>>>>>> b6133d22b37dc85d5449b885ca6c3741a33c1936
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
<<<<<<< HEAD
            let success = await createTemplate();
=======
            const success = await createTemplate();
>>>>>>> b6133d22b37dc85d5449b885ca6c3741a33c1936
            if (success) {
                return true
            }
        } catch (error) {
            console.error(error)
            return false
        }
    };


<<<<<<< HEAD
    return { template, handleInputChange, addImage, handleSubmit, createTemplate };
};

export default useTemplateForm;
=======
    return { template, handleInputChange,handleSubmit, createTemplate };
};

export default useTemplateCreate;
>>>>>>> b6133d22b37dc85d5449b885ca6c3741a33c1936
