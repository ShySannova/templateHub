import React from "react";
import { Template } from "../../../utils/types";
import { Link } from "react-router-dom";
import './TemplateCard.css';

import { FaHeartCircleMinus, FaHeartCirclePlus, FaEye } from "react-icons/fa6";


interface TemplateCardProps {
    template: Template;
}

const wishlist = true;

const TemplateCard: React.FC<TemplateCardProps> = ({ template }) => {
    return (
        <div className="product-card">
            <Link to={`/template/${template?.title}`} state={{ template }} >
                <div className="product-card-container">
                    {template?.badge && <div className="badge">{template?.badge}</div>}
                    <div className="product-thumb">
                        <img src={template?.image} alt={template?.image} loading="lazy" />
                    </div>
                    <div className="product-details">
                        <h4>{template?.title}</h4>
                        <p>By {template?.user?.name}</p>
                        <div className="product-bottom-details">
                            <div className="product-price">{template?.price !== 0 && <del>{template?.price}</del>} {template?.price === 0 ? `Free` : `$ ${(template?.price - template?.price * template?.discount / 100)}`}</div>
                            <div className="product-wishlist">
                                {
                                    wishlist
                                        ?
                                        <span>
                                            <FaHeartCircleMinus />
                                        </span>
                                        :
                                        <span>
                                            <FaHeartCirclePlus />
                                        </span>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            <div className="live-url">
                <Link to={template?.url} target="_blank" className="preview-btn">
                    Live Preview
                    <FaEye />
                </Link>
            </div>
        </div>
    );
};

export default TemplateCard;
