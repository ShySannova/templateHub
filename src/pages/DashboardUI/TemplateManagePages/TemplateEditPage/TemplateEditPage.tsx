import React from 'react'
import "./TemplateEditPage.css"
import useTemplateEditHOH from '../../../../hooks/useTemplateEditHOH';


const TemplateEditPage: React.FC = () => {

    const { template, newTemplate, setNewTemplate, updateTemplate, setData, features, setFeatures, keywords, setKeywords, stacks, setStacks, tech, setTech, handleDataToArraySubmit } = useTemplateEditHOH()

    return (
        <main>
            <section className="edit-template">
                <form>
                    <div className='panel-container'>
                        <div className="main-panel">

                            <div className="first-row">

                                <div className="first">
                                    <input
                                        type="text"
                                        placeholder="Enter Template Name"
                                        name="title"
                                        defaultValue={template?.title}
                                        onChange={(e) => {
                                            setNewTemplate((prev) => {
                                                return { ...prev, title: e?.target?.value }
                                            })
                                        }}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Enter live Url"
                                        name="url"
                                        defaultValue={template?.url}
                                        onChange={(e) => {
                                            setNewTemplate((prev) => {
                                                return { ...prev, url: e?.target?.value }
                                            })
                                        }}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Enter Image Url"
                                        name="image"
                                        defaultValue={template?.image}
                                        onChange={(e) => {
                                            setNewTemplate((prev) => {
                                                return { ...prev, image: e?.target?.value }
                                            })
                                        }}
                                    />
                                    <div>

                                    </div>
                                </div>
                                <div className="second">
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Enter Badge"
                                            defaultValue={template?.badge}
                                            onChange={(e) => {
                                                setNewTemplate((prev) => {
                                                    return { ...prev, badge: e?.target?.value }
                                                })
                                            }}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Enter Discount"
                                            name="discount"
                                            defaultValue={template?.discount}
                                            onChange={(e) => {
                                                setNewTemplate((prev) => {
                                                    return { ...prev, discount: Number(e?.target?.value) }
                                                })
                                            }}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Enter price"
                                            name="price"
                                            defaultValue={template?.price}
                                            onChange={(e) => {
                                                setNewTemplate((prev) => {
                                                    return { ...prev, price: Number(e?.target?.value) }
                                                })
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="frontend source code"
                                            name="sourceCode"
                                            defaultValue={template?.sourceCode?.frontend}
                                            onChange={(e) => {
                                                setNewTemplate((prev) => {
                                                    return { ...prev, sourceCode: { ...prev.sourceCode, frontend: e?.target?.value } }
                                                })
                                            }}
                                        />
                                        <input
                                            type="text"
                                            placeholder="backend source code"
                                            name="sourceCode"
                                            defaultValue={template?.sourceCode?.backend}
                                            onChange={(e) => {
                                                setNewTemplate((prev) => {
                                                    return { ...prev, sourceCode: { ...prev.sourceCode, backend: e?.target?.value } }
                                                })
                                            }}
                                        />
                                    </div>

                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Enter Meta Title for seo"
                                            name="metaTitle"
                                            defaultValue={template?.metaTitle}
                                            onChange={(e) => {
                                                setNewTemplate((prev) => {
                                                    return { ...prev, metaTitle: e?.target?.value }
                                                })
                                            }}
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
                                    defaultValue={template?.description}
                                    onChange={(e) => {
                                        setNewTemplate((prev) => {
                                            return { ...prev, description: e?.target?.value }
                                        })
                                    }}
                                />
                                <textarea
                                    cols={30}
                                    rows={20}
                                    placeholder="Enter Meta Description for seo"
                                    name="metaDescription"
                                    defaultValue={template?.metaDescription}
                                    onChange={(e) => {
                                        setNewTemplate((prev) => {
                                            return { ...prev, metaDescription: e?.target?.value }
                                        })
                                    }}
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
                                    <button onClick={(e) => {
                                        handleDataToArraySubmit(e, "features")
                                    }}>Add</button>
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
                                                defaultChecked={template?.status === "published" && true}
                                                onChange={(e) => {
                                                    setNewTemplate((prev) => {
                                                        return { ...prev, status: e?.target?.value }
                                                    })
                                                }}
                                            />
                                        </label>
                                        <span className="break"></span>
                                        <label>
                                            <span>Draft</span>
                                            <input
                                                type="radio"
                                                value="draft"
                                                name="status"
                                                defaultChecked={template?.status === "draft" && true}
                                                onChange={(e) => {
                                                    setNewTemplate((prev) => {
                                                        return { ...prev, status: e?.target?.value }
                                                    })
                                                }}
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
                                                defaultChecked={template?.responsive === true && true}
                                                onChange={(e) => {
                                                    setNewTemplate((prev) => {
                                                        return { ...prev, responsive: e?.target?.checked }
                                                    })
                                                }}
                                            />
                                        </label>
                                        <span className="break"></span>
                                        <label>
                                            <span>No</span>
                                            <input
                                                type="radio"
                                                value="false"
                                                name="responsive"
                                                defaultChecked={template?.responsive === false && true}
                                                onChange={(e) => {
                                                    setNewTemplate((prev) => {
                                                        return { ...prev, responsive: e?.target?.checked }
                                                    })
                                                }}
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
                                        <button onClick={(e) => {
                                            handleDataToArraySubmit(e, "keywords")
                                            console.log(newTemplate)
                                        }}>Add</button>

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
                                    className="btn update-btn"
                                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                        e.preventDefault();
                                        updateTemplate()
                                    }}
                                >
                                    Update Template
                                </button>
                            </div>
                        </div>


                    </div>




                </form>
            </section>
        </main >
    )
}

export default TemplateEditPage