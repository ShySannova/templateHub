import "./TemplatePage.css"
import { Link, useLocation } from "react-router-dom"
import { formatToLocalDateTime } from "../../../utils/helper";


const TemplatePage = () => {
    const { template } = useLocation().state;
    return (
        <main>
            <section className="container template-container">
                <div className="template-details">
                    <div className="template-image-container">
                        <div className="template-image">
                            <img width={200} src={template?.image} alt={template?.image} loading="lazy" />
                        </div>
                        {template?.images ?
                            <div className="template-gallery">
                                {template?.images.map((image: string) => {
                                    return (
                                        <div key={image}>
                                            <img width={200} src={image} alt={image} loading="lazy" />
                                        </div>
                                    )
                                })}
                            </div>
                            : null
                        }
                    </div>
                    <div className="template-info">
                        <div className="template-title">
                            <h2>{template?.title}</h2>
                        </div>
                        <div className="template-meta">
                            <div>
                                <h3>Developed By:</h3>
                                <p>{template?.user?.name}</p>
                            </div>
                            <div>
                                <h3>Published On:</h3>
                                <p>{formatToLocalDateTime(template?.createdAt)}</p>
                            </div>
                            <div>
                                <h3>Stack:</h3>
                                <p>{template?.stacks.join(", ")}</p>
                            </div>
                        </div>
                        <div className="template-about">
                            <h3>About Site:</h3>
                            <p>{template?.description}</p>
                        </div>
                        <div className="template-features">
                            <h3>Features:</h3>
                            <p>{template?.features.join(", ")}</p>
                        </div>
                        <div className="template-tech">
                            <h3>Technologies Used:</h3>
                            <p>{template?.tech.join(", ")}</p>
                        </div>
                        <div className="template-price">
                            <h2>Price:</h2>
                            <div className="product-price">
                                {template?.price !== 0 && <del>{template?.price}</del>}
                                {template?.price === 0 ? `Free` : `$ ${(template?.price - template?.price * template?.discount / 100)}`}
                            </div>
                        </div>
                        {template?.price === 0 ?
                            <div className="template-source">
                                <h3>Source Code:</h3>
                                <div className="template-buttons">
                                    {
                                        template?.sourceCode.frontend &&
                                        <Link to={template?.sourceCode.frontend} target="_blank" rel="noopener noreferrer" className="btn">
                                            Frontend
                                        </Link>
                                    }
                                    {
                                        template?.sourceCode.backend &&
                                        <Link to={template?.sourceCode.backend} target="_blank" rel="noopener noreferrer" className="btn">
                                            Backend
                                        </Link>
                                    }

                                </div>
                            </div>
                            : null
                        }

                    </div>
                </div>

            </section>
        </main>

    )
}

export default TemplatePage