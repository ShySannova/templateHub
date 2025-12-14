import useTemplateCreateHOH from "../../../../hooks/useTemplateCreateHOH";
import "./CreateTemplatePage.css"

import React, { useRef } from "react";



const CreateTemplatePage: React.FC = () => {
    const handleForm = useRef<HTMLFormElement>(null)

    const { handleInputChange, handleIntegerChange, handleSourceCodeChange, handleBooleanChange, handleCreateTemplate, setData, features, setFeatures, keywords, setKeywords, stacks, setStacks, tech, setTech, handleDataToArraySubmit } = useTemplateCreateHOH()

    return (
        <main>
            <section className="create-template">
                <form ref={handleForm}>
                    <div className='panel-container'>
                        <div className="main-panel">

                            <div className="first-row">

                                <div className="first">
                                    <input
                                        type="text"
                                        placeholder="Enter Template Name"
                                        name="title"
                                        onChange={handleInputChange}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Enter live Url"
                                        name="url"
                                        onChange={handleInputChange}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Enter Image Url"
                                        name="image"
                                        onChange={handleInputChange}
                                    />
                                    <div>

                                    </div>
                                </div>
                                <div className="second">
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Enter Badge"
                                            name="badge"
                                            onChange={handleInputChange}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Enter Discount"
                                            name="discount"
                                            onChange={handleIntegerChange}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Enter price"
                                            name="price"
                                            onChange={handleIntegerChange}
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="frontend source code"
                                            name="frontend"
                                            onChange={handleSourceCodeChange}
                                        />
                                        <input
                                            type="text"
                                            placeholder="backend source code"
                                            name="backend"
                                            onChange={handleSourceCodeChange}
                                        />
                                    </div>

                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Enter Meta Title for seo"
                                            name="metaTitle"
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                </div>
                            </div>

                            <div className="desc-area">
                                <textarea
                                    cols={30}
                                    rows={20}
                                    placeholder="Enter Long Description"
                                    name="description"
                                    onChange={handleInputChange}
                                />
                                <textarea
                                    cols={30}
                                    rows={20}
                                    placeholder="Enter Meta Description for seo"
                                    name="metaDescription"
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="features-panel panel">
                                <div className="heading">
                                    <h3>Features</h3>
                                </div>
                                <div className="feature-display-area">
                                    <ul>
                                        {features &&
                                            features?.map((feature: string) => {
                                                return (
                                                    <li className="feature" key={feature}>
                                                        <p>{feature}</p> <span className="feature-delete" onClick={() => { setFeatures(features.filter((filFeature) => filFeature !== feature)) }}>x</span>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>

                                </div>

                                <div className="feature-input-container">
                                    <input
                                        type="text"
                                        placeholder="Enter Features"
                                        name="features"
                                        onChange={(e) => { setData({ features: e.target.value }) }}
                                    />
                                    <button onClick={(e) => { handleDataToArraySubmit(e, "features") }}>Add</button>
                                </div>
                            </div>
                        </div>

                        <div className="side-panel">

                            <div className='combo-container'>
                                <div className="save-as-panel panel">
                                    <div className="heading">
                                        <h3>Save As</h3>
                                    </div>
                                    <div className="save-as-radios radios">
                                        <label>
                                            <span>Publish</span>
                                            <input
                                                type="radio"
                                                value="published"
                                                name="status"
                                                onChange={handleInputChange}
                                            />
                                        </label>
                                        <span className="break"></span>
                                        <label>
                                            <span>Draft</span>
                                            <input
                                                type="radio"
                                                value="draft"
                                                name="status"
                                                onChange={handleInputChange}
                                            />
                                        </label>
                                    </div>
                                </div>
                                <div className="responsive-panel panel">
                                    <div className="heading">
                                        <h3>Responsive</h3>
                                    </div>
                                    <div className="responsive-radios radios">
                                        <label>
                                            <span>Yes</span>
                                            <input
                                                type="radio"
                                                value="true"
                                                name="responsive"
                                                onChange={handleBooleanChange}
                                            />
                                        </label>
                                        <span className="break"></span>
                                        <label>
                                            <span>No</span>
                                            <input
                                                type="radio"
                                                value="false"
                                                name="responsive"
                                                onChange={handleBooleanChange}
                                            />
                                        </label>
                                    </div>

                                </div>
                            </div>

                            <div className='combo-container'>
                                <div className="keyword-panel panel">
                                    <div className="heading">
                                        <h3>Keywords</h3>
                                    </div>
                                    <div className="display-area">
                                        <p>
                                            {keywords &&
                                                keywords?.map((keyword: string) => {
                                                    return (
                                                        <span className="keyword" key={keyword}>{keyword} <span className="keyword-delete" onClick={() => { setKeywords(keywords.filter((filKeyword) => filKeyword !== keyword)) }}>x</span></span>
                                                    )
                                                })
                                            }
                                        </p>
                                    </div>

                                    <div className="keyword-input-container">
                                        <input
                                            type="text"
                                            placeholder="Enter Keywords"
                                            name="keywords"
                                            onChange={(e) => { setData({ keywords: e.target.value }) }}
                                        />
                                        <button onClick={(e) => { handleDataToArraySubmit(e, "keywords") }}>Add</button>

                                    </div>
                                </div>

                                <div className="stack-panel panel">
                                    <div className="heading">
                                        <h3>Stacks</h3>
                                    </div>
                                    <div className="display-area">
                                        <p>
                                            {stacks &&
                                                stacks?.map((stack: string) => {
                                                    return (
                                                        <span className="keyword" key={stack}>{stack} <span className="stack-delete" onClick={() => { setStacks(stacks.filter((filStacks) => filStacks !== stack)) }}>x</span></span>
                                                    )
                                                })
                                            }
                                        </p>
                                    </div>

                                    <div className="stack-input-container">
                                        <input
                                            type="text"
                                            placeholder="Enter your stacks Separate by Comma(,)"
                                            name="stacks"
                                            onChange={(e) => { setData({ stacks: e.target.value }) }}
                                        />
                                        <button onClick={(e) => { handleDataToArraySubmit(e, "stacks") }}>Add</button>

                                    </div>
                                </div>
                            </div>
                            <div className="panel tech-panel">
                                <div className="heading">
                                    <h3>Technology</h3>
                                </div>
                                <div className="tech-display-area display-area">
                                    <p>
                                        {tech &&
                                            tech?.map((techno: string) => {
                                                return (
                                                    <span className="tech" key={techno}>{techno} <span className="tech-delete" onClick={() => { setTech(tech.filter((filTechno) => filTechno !== techno)) }}>x</span></span>
                                                )
                                            })
                                        }
                                    </p>
                                </div>

                                <div className="tech-input-container">
                                    <input
                                        type="text"
                                        placeholder="Enter your techs Separate by Comma(,)"
                                        name="techs"
                                        onChange={(e) => { setData({ tech: e.target.value }) }}
                                    />
                                    <button onClick={(e) => { handleDataToArraySubmit(e, "tech") }}>Add</button>

                                </div>
                            </div>
                            <div>
                                <button
                                    className="btn create-btn"
                                    onClick={async (e: React.MouseEvent<HTMLButtonElement>) => {
                                        e.preventDefault();
                                        const success = await handleCreateTemplate();
                                        if (success) {
                                            handleForm.current?.reset()
                                        }
                                    }}
                                >
                                    Create Template
                                </button>
                            </div>
                        </div>


                    </div>




                </form>
            </section>
        </main >
    );
};

export default CreateTemplatePage;
