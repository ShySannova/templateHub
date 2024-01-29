import useTemplateCreate from "../../../hooks/useTemplateCreate";
import "./CreateTemplatePage.css"

import React, { useRef} from "react";



const CreateTemplatePage: React.FC = () => {
    const handleForm = useRef<HTMLFormElement>(null)
    const {handleInputChange,handleSubmit}=useTemplateCreate()

    return (
        <main>
            <section className="createTemplate">
                <form ref={handleForm}>
                    <input
                        type="text"
                        placeholder="Enter Template Name"
                        onChange={handleInputChange}
                        name="title"
                    />
                    <div className="checkbox">
                        <div>
                            <input
                                type="text"
                                placeholder="Enter Badge"
                                onChange={handleInputChange}
                                name="badge"
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Enter Discount"
                                onChange={handleInputChange}
                                name="discount"
                            />
                        </div>
                        <div>
                            <span>Responsive</span>
                            <label>
                                <span>Yes</span>
                                <input
                                    type="radio"
                                    value="true"
                                    onChange={handleInputChange}
                                    name="responsive"
                                />
                            </label>
                            <label>
                                <span>NO</span>
                                <input
                                    type="radio"
                                    value="false"
                                    onChange={handleInputChange}
                                    name="responsive"
                                />
                            </label>
                        </div>
                        <div>
                            <span>Save as</span>
                            <label>
                                <span>Publish</span>
                                <input
                                    type="radio"
                                    value="published"
                                    onChange={handleInputChange}
                                    name="status"
                                />
                            </label>
                            <label>
                                <span>Draft</span>
                                <input
                                    type="radio"
                                    value="draft"
                                    onChange={handleInputChange}
                                    name="status"
                                />
                            </label>
                        </div>
                    </div>
                    <input
                        type="text"
                        placeholder="Enter Your Tech"
                        onChange={handleInputChange}
                        name="tech"
                    />
                    <input
                        type="text"
                        placeholder="Enter Image Url"
                        onChange={handleInputChange}
                        name="image"
                    />
                    <input
                        type="text"
                        placeholder="Enter your stacks Separate by Comma(,)"
                        onChange={handleInputChange}
                        name="stacks"
                    />
                    <input
                        type="text"
                        placeholder="Enter live Url"
                        onChange={handleInputChange}
                        name="url"
                    />
                    <input
                        type="text"
                        placeholder="Enter price"
                        onChange={handleInputChange}
                        name="price"
                    />
                    <textarea
                        cols={30}
                        rows={10}
                        placeholder="Enter Long Description"
                        onChange={handleInputChange}
                        name="description"
                    />
                    <textarea
                        cols={30}
                        rows={10}
                        placeholder="Enter Features Separate by Comma(,)"
                        onChange={handleInputChange}
                        name="features"
                    />
                    <div>
                        <span>SEO</span>
                        <textarea
                            cols={30}
                            rows={10}
                            placeholder="Enter Meta Description for seo"
                            onChange={handleInputChange}
                            name="metaDescription"
                        />
                        <input
                            type="text"
                            placeholder="Enter Keywords Separate by Comma(,)"
                            onChange={handleInputChange}
                            name="keywords"
                        />
                        <input
                            type="text"
                            placeholder="Enter Meta Title for seo"
                            onChange={handleInputChange}
                            name="metaTitle"
                        />
                    </div>
                    <button
                        className="btn"
                        onClick={async (e: React.MouseEvent<HTMLButtonElement>) => {
                            e.preventDefault();
                            const success = await handleSubmit();
                            if (success) {
                                handleForm.current?.reset()
                            }
                        }}
                    >
                        Create Template
                    </button>
                </form>
            </section>
        </main>
    );
};

export default CreateTemplatePage;
