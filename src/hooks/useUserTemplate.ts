import { useState, useEffect, useCallback } from "react";
import { GET_USER_TEMPLATE_URL } from "../utils/constant";
import { Template } from "../utils/types";
import { Params } from "react-router-dom";


import { useOutletContext } from "react-router-dom";
import { OutletContextType } from "../utils/types";

interface UseTemplate {
  templates: Template[];
  getTemplates: () => Promise<boolean>;
}

const useTemplate = (params: Readonly<Params<string>>): UseTemplate => {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [userInfo]: OutletContextType = useOutletContext()


  const getTemplates = useCallback(async (): Promise<boolean> => {
    try {
      const res = await fetch(GET_USER_TEMPLATE_URL + userInfo?._id, { credentials: "include" });
      if (res.ok) {
        const data = await res.json();
        if (data.success) {
          setTemplates(data.templates);
          return true
        }
        return false
      }
      return false

    } catch (error) {
      console.error(error);
      return false
    }
  }, [userInfo?._id])


  // Call getTemplates using useEffect to avoid calling it directly in the function body
  useEffect(() => {
    getTemplates();
  }, [params, getTemplates]); // Empty dependency array means it runs once when the component mounts

  return { templates, getTemplates };
};

export default useTemplate;
