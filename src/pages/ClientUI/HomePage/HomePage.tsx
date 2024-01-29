import "./HomePage.css"
import React from "react";
import useTemplate from "../../../hooks/useTemplate";
import { Template } from "../../../utils/types";

import TemplateCard from "../../../components/client/TemplateCard/TemplateCard";


const HomePage: React.FC = () => {
    const { templates }: { templates: Template[] } = useTemplate();


    return (

        <main className="homepage">
            <section className="container templates-container">
                {templates?.map((template) => {
                    return <TemplateCard key={template?._id} template={template} />

                })}
            </section>
        </main>
    );
};

export default HomePage;
