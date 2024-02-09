import React from 'react'
import "./TemplateListsPage.css"
import { Link, NavLink } from 'react-router-dom';
import useTemplateFilter from '../../../../hooks/useTemplateFilter';
import { GoDotFill } from "react-icons/go";



const TemplateListsPage: React.FC = () => {



    const { templates, newTemplate, publishedTemplate, draftTemplate, trashTemplate, deleteTemplate } = useTemplateFilter()


    return (
        <main>

            <section className="table-box">
                <div className='table-filter-stauts'>
                    <NavLink to={"/dashboard/templates"} end>All ({templates?.length}) </NavLink>
                    <span> | </span>
                    <NavLink to={"/dashboard/templates/published"} end>Published ({templates?.filter((temp) => temp.status === "published").length}) </NavLink>
                    <span> | </span>
                    <NavLink to={"/dashboard/templates/draft"} end>Draft ({templates?.filter((temp) => temp.status === "draft").length}) </NavLink>
                    <span> | </span>
                    <NavLink to={"/dashboard/templates/trash"} end>Trash ({templates?.filter((temp) => temp.status === "trash").length}) </NavLink>
                </div>
                <table className="table-container">
                    <thead className="table-header">
                        <tr>
                            <td>
                                <input name='checkbox' type="checkbox" />
                            </td>
                            <th>
                                <span>Title</span>
                            </th>
                            <th>
                                <span>Value</span>
                            </th>
                            <th>
                                <span>Tech</span>
                            </th>
                            <th>
                                <span>Categories</span>
                            </th>
                            <th>
                                <span>Date</span>
                            </th>
                            <th>
                                <span>Status</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="table-body">
                        {newTemplate?.map((template) => {
                            const updatedAt = template?.updatedAt?.split("T") as string[]
                            return (
                                <tr key={template?._id}>
                                    <td>
                                        <input name='checkbox' type="checkbox" />
                                    </td>
                                    <td className='titile-td'>
                                        <div>
                                            <span className="template-title">{template?.title}</span>
                                        </div>
                                        <div className="template-action">
                                            <Link to={`/dashboard/templates/${template?.title}/${template?._id}/edit`} state={{ template }}>Edit</Link>
                                            <span> | </span>
                                            {template?.status === "draft" ? <span className='published-btn' onClick={() => { publishedTemplate({ status: "published", id: template?._id as string }) }}>Published</span> : <span className='draft-btn' onClick={() => { draftTemplate({ status: "draft", id: template?._id as string }) }}>Draft</span>}
                                            <span> | </span>
                                            {template?.status === "trash" ? <span className='delete-btn' onClick={() => { deleteTemplate(template?._id as string) }}>Delete</span> : <span className='trash-btn' onClick={() => { trashTemplate({ status: "trash", id: template?._id as string }) }}> Trash</span>}
                                        </div>
                                    </td>
                                    <td>
                                        <span>{template?.price === 0 ? "Free" : template?.price}</span>
                                    </td>
                                    <td>
                                        <span>{template?.tech}</span>
                                    </td>
                                    <td>
                                        <span>{template?.stacks}</span>
                                    </td>
                                    <td>
                                        <div>
                                            <span>Modify : {updatedAt[0]} at {updatedAt[1].split(".")[0]}</span>
                                        </div>
                                    </td>
                                    <td>
                                        {template?.status === "trash" ? <GoDotFill className='red' /> : template?.status === "published" ? <GoDotFill className='green' /> : <GoDotFill className='yellow' />}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                    <tfoot className="table-footer">
                        <tr>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <th>
                                <span>Title</span>
                            </th>
                            <th>
                                <span>Value</span>
                            </th>
                            <th>
                                <span>Tech</span>
                            </th>
                            <th>
                                <span>Categories</span>
                            </th>
                            <th>
                                <span>Date</span>
                            </th>
                            <th>
                                <span>Status</span>
                            </th>
                        </tr>
                    </tfoot>
                </table>
            </section>
        </main>

    )
}

export default TemplateListsPage