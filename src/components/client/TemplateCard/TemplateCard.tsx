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
                    <img src={template?.image} alt={template?.image} loading="lazy" />
                </div>
                <div className="product-details">
                    <span className="product-catagory">{template?.stacks?.join(',')}</span>
                    <h4>{template?.title}</h4>
                    <p>{template?.description.slice(0, 100)}</p>
                    <div className="product-bottom-details">
                        <div className="product-price"><small>$96.00</small>${template?.price}</div>
                        <div className="product-links">
                            <span><i className="fa fa-heart"></i></span>
                            <span><i className="fa fa-shopping-cart"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default TemplateCard;
