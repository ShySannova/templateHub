import { useState } from "react";

interface Data {
    [key: string]: string;
}

const useTemplateDataHelper = () => {
    const [data, setData] = useState<Data>({})
    const [features, setFeatures] = useState<string[]>([])
    const [keywords, setKeywords] = useState<string[]>([])
    const [stacks, setStacks] = useState<string[]>([])
    const [tech, setTech] = useState<string[]>([])

    const dataToArray = async (type: string) => {
        const wordArray = data[type].split(",")
        const trimmedWordArray = wordArray.map(word => word.trim());

        if (type === "features") {
            const filteredWordArray = trimmedWordArray.filter(word => !features?.includes(word));
            setFeatures((prev: string[]) => [...prev, ...filteredWordArray]);
        }
        if (type === "keywords") {
            const filteredWordArray = trimmedWordArray.filter(word => !keywords?.includes(word));
            setKeywords((prev: string[]) => [...prev, ...filteredWordArray]);
        }
        if (type === "stacks") {
            const filteredWordArray = trimmedWordArray.filter(word => !stacks?.includes(word));
            setStacks((prev: string[]) => [...prev, ...filteredWordArray]);
        }
        if (type === "tech") {
            const filteredWordArray = trimmedWordArray.filter(word => !tech?.includes(word));
            setTech((prev: string[]) => [...prev, ...filteredWordArray]);
        }
    }

    const handleDataToArraySubmit = (e: React.MouseEvent<HTMLButtonElement>, type: string) => {
        e.preventDefault()
        dataToArray(type)
    }

    return { data, setData, features, setFeatures, keywords, setKeywords, stacks, setStacks, tech, setTech, dataToArray, handleDataToArraySubmit }
}

export default useTemplateDataHelper