import React from "react";
import './TemplateCardShimmer.css';



const TemplateCardShimmer: React.FC = () => {

    return (
        <div className="product-card-shimmer">
            <div className="product-card-container-shimmer">
                <div className="badge-shimmer"></div>
                <div className="product-thumb-shimmer"></div>
                <div className="product-details-shimmer">
                    <h4 className="text-shimmer"></h4>
                    <p className="para-shimmer"></p>
                    <div className="product-bottom-details">
                        <div className="product-price-shimmer"></div>
                        <div className="product-wishlist-shimmer"></div>
                    </div>
                </div>
            </div>
            <div className="live-url-shimmer"></div>
        </div>
    );
};

export default TemplateCardShimmer;
