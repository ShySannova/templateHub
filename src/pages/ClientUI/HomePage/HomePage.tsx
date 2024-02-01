import "./HomePage.css"
import React from "react";
import useTemplate from "../../../hooks/useTemplate";
import { Template } from "../../../utils/types";

import TemplateCard from "../../../components/client/TemplateCard/TemplateCard";
import { useParams } from "react-router-dom";

const HomePage: React.FC = () => {

    const params = useParams()
    const { templates }: { templates: Template[] } = useTemplate(params);


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
