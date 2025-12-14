import { ReactNode, useEffect } from "react"
import usePersist from "../../../hooks/usePersist"
import useRefresh from "../../../hooks/useRefresh"


const Persist: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [persist] = usePersist()
    const { handleRefresh } = useRefresh()
    useEffect(() => {
        const effect = async () => {
            if (persist) {
                await handleRefresh();
            }
        };

        effect();
    }, [persist, handleRefresh])

    return children

}

export default Persist