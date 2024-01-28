import React from "react";
import { Template } from "../../../utils/types";
import { Link } from "react-router-dom";
import './TemplateCard.css';

interface TemplateCardProps {
    template: Template;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ template }) => {
    return (
        <Link to={`/template/${template?.title}`} state={{ template }}>
            <div className="product-card">
                <div className="badge">{template?.badge}</div>
                <div className="product-tumb">
                    <img src={template?.image} alt={template?.image} />
                </div>
                <div className="product-details">
                    <span className="product-catagory">{template?.stacks}</span>
                    <h4><a href="">{template?.title}</a></h4>
                    <p>{template?.description}</p>
                    <div className="product-bottom-details">
                        <div className="product-price"><small>$96.00</small>${template?.price}</div>
                        <div className="product-links">
                            <a href=""><i className="fa fa-heart"></i></a>
                            <a href=""><i className="fa fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default TemplateCard;
