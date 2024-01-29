import React, { useState } from 'react'
import { Template } from "../../../utils/types";
import { UPDATE_TEMPLATE_URL } from '../../../utils/constant';
import { useLocation } from 'react-router-dom';
import useToast from '../../../hooks/useToast';
import "./TemplateEditPage.css"


const TemplateEditPage: React.FC = () => {
    const { template } = useLocation()?.state
    if (useLocation()?.state === null) {
        console.log("i am null")
    }
    const [newTemplate, setNewTemplate] = useState<Template>(template)
    const { handleToast } = useToast()

    const updateTemplate = async () => {
        try {
            const { user } = newTemplate;
            const res = await fetch(`${UPDATE_TEMPLATE_URL}/${user}`, {
                method: 'PATCH',
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...newTemplate }),
            });
            const data = await res.json()
            handleToast(true, data?.message)

        }
        catch (err) {
            console.error(err)
            handleToast(true, "Server Error Try Again...")
        }

    }


    return (
        <main>
            <section className="createTemplate">
                <form>
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
                    <div className="checkbox">
                        <div>
                            <input
                                type="text"
                                placeholder="Enter Badge"
                                name="badge"
                                defaultValue={template?.badge}
                                onChange={(e) => {
                                    setNewTemplate((prev) => {
                                        return { ...prev, badge: e?.target?.value }
                                    })
                                }}
                            />

                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Enter price"
                                name="price"
                                defaultValue={template?.price}
                                onChange={(e) => {
                                    setNewTemplate((prev) => {
                                        return { ...prev, price: e?.target?.value }
                                    })
                                }}
                            />
                        </div>
                        <div>
                            <span>Responsive</span>
                            <label>
                                <span>Yes</span>
                                <input
                                    type="radio"
                                    value="true"
                                    name="responsive"
                                    defaultValue={template?.responsive}
                                    onChange={(e) => {
                                        setNewTemplate((prev) => {
                                            return { ...prev, responsive: e?.target?.checked }
                                        })
                                    }}
                                />
                            </label>
                            <label>
                                <span>No</span>
                                <input
                                    type="radio"
                                    value="false"
                                    name="responsive"
                                    defaultValue={template?.responsive}
                                    onChange={(e) => {
                                        setNewTemplate((prev) => {
                                            return { ...prev, responsive: e?.target?.checked }
                                        })
                                    }}
                                />

                            </label>
                        </div>
                    </div>

                    <input
                        type="text"
                        placeholder="Enter Image URL"
                        name="image"
                        defaultValue={template?.image}
                        onChange={(e) => {
                            setNewTemplate((prev) => {
                                return { ...prev, image: e?.target?.value }
                            })
                        }}
                    />

                    <div>
                        <span>Save as</span>
                        <label>
                            <span>Published</span>
                            <input
                                type="radio"
                                value="published"
                                name="status"
                                defaultValue={template?.status}
                                onChange={(e) => {
                                    setNewTemplate((prev) => {
                                        return { ...prev, status: e?.target?.value }
                                    })
                                }}
                            />
                        </label>
                        <label>
                        <span>Draft</span>
                            <input
                                type="radio"
                                value="draft"
                                name="status"
                                defaultValue={template?.status}
                                onChange={(e) => {
                                    setNewTemplate((prev) => {
                                        return { ...prev, status: e?.target?.value }
                                    })
                                }}
                            />
                        </label>
                    </div>



                    <input
                        type="text"
                        placeholder="Enter Template Live Link"
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
                        name="metaTitle"
                        defaultValue={template?.metaTitle}
                        placeholder="Enter Meta Title for seo"
                        onChange={(e) => {
                            setNewTemplate((prev) => {
                                return { ...prev, metaTitle: e?.target?.value }
                            })
                        }}
                    />

                    <textarea
                        id="description"
                        cols={30}
                        rows={10}
                        placeholder="Enter Meta Description for seo"
                        name="metaDescription"
                        defaultValue={template?.metaDescription}
                        onChange={(e) => {
                            setNewTemplate((prev) => {
                                return { ...prev, metaDescription: e?.target?.value }
                            })
                        }}
                    />



                    <textarea
                        id="description"
                        cols={30}
                        rows={10}
                        placeholder="Enter Description"
                        name="description"
                        defaultValue={template?.description}
                        onChange={(e) => {
                            setNewTemplate((prev) => {
                                return { ...prev, description: e?.target?.value }
                            })
                        }}
                    />



                    <button className="btn" onClick={(e) => {
                        updateTemplate()
                        e.preventDefault()
                    }}>Update Template</button>
                </form>

            </section>
        </main>
    )
}

export default TemplateEditPage