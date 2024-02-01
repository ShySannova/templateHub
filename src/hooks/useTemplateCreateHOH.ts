import { useCallback, useEffect } from "react"
import useTemplateCreate from "./useTemplateCreate"
import useTemplateDataHelper from "./useTemplateDataHelper"


const useTemplateCreateHOH = () => {
    const { setTemplate, handleInputChange, handleIntegerChange, handleSourceCodeChange, handleBooleanChange, handleCreateTemplate } = useTemplateCreate()
    const { setData, features, setFeatures, keywords, setKeywords, stacks, setStacks, tech, setTech, handleDataToArraySubmit } = useTemplateDataHelper()


    const setDataToCreate = useCallback(() => {
        setTemplate((prev) => {
            return { ...prev, features, keywords, stacks, tech }
        })
    }, [features, keywords, stacks, tech, setTemplate])

    useEffect(() => {
        // console.log('State created:', { features, keywords, stacks, tech });
        setDataToCreate()
    }, [features, keywords, stacks, tech, setDataToCreate]);

    return { handleInputChange, handleIntegerChange, handleSourceCodeChange, handleBooleanChange, handleCreateTemplate, setData, features, setFeatures, keywords, setKeywords, stacks, setStacks, tech, setTech, handleDataToArraySubmit }
}

export default useTemplateCreateHOH