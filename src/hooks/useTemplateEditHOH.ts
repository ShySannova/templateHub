import { useCallback, useEffect } from "react"
import useUpdateTemplate from "./useUpdateTemplate"
import useTemplateDataHelper from "./useTemplateDataHelper"


const useTemplateEditHOH = () => {
    const { template, newTemplate, setNewTemplate, updateTemplate } = useUpdateTemplate()

    const { setData, features, setFeatures, keywords, setKeywords, stacks, setStacks, tech, setTech, handleDataToArraySubmit } = useTemplateDataHelper()

    const setDataToUpdate = useCallback(() => {
        setNewTemplate((prev) => {
            return { ...prev, features, keywords, stacks, tech }
        })
    }, [features, keywords, stacks, tech, setNewTemplate])


    useEffect(() => {
        setFeatures(template?.features)
        setKeywords(template?.keywords)
        setStacks(template?.stacks)
        setTech(template?.tech)
    }, [setFeatures, setKeywords, setStacks, setTech, template?.features, template?.keywords, template?.stacks, template?.tech])

    useEffect(() => {
        // console.log('State updated:', { features, keywords, stacks, tech });
        setDataToUpdate()
    }, [features, keywords, stacks, tech, setDataToUpdate]);

    return { template, newTemplate, setNewTemplate, updateTemplate, setData, features, setFeatures, keywords, setKeywords, stacks, setStacks, tech, setTech, handleDataToArraySubmit }
}

export default useTemplateEditHOH