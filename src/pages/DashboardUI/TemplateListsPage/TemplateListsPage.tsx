import React, { useCallback, useEffect, useState } from 'react'
import "./TemplateListsPage.css"
import useTemplate from '../../../hooks/useTemplate';
import { Link, NavLink, useParams } from 'react-router-dom';
import { Template } from '../../../utils/types';
import useToast from '../../../hooks/useToast';
import { UPDATE_TEMPLATE_URL } from '../../../utils/constant';



const TemplateListsPage: React.FC = () => {
    const { handleToast } = useToast();

    const params = useParams();

    const { templates }: { templates: Template[] } = useTemplate();
    const [newTemplate, setNewTemplate] = useState(templates);

    const filter = useCallback((status: string) => {
        const newTemp = templates?.filter((temp) => {
            if (status === "published") {
                return temp.status === "published"
            }
            else if (status === "draft") {
                return temp.status === status
            }
            else if (status === "trash") {
                return temp.status === status
            }
            else {
                return "halwa"
            }
        })
        setNewTemplate(newTemp)
    }, [templates])



    const publishedTemplate = async (id: string) => {
        const res = await fetch(`${UPDATE_TEMPLATE_URL}/${id}`, {
            method: 'PATCH',
            credentials: "include",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status: "published" }),
        });
        const data = await res.json()
        console.log(data)
    }

    const draftTemplate = async (id: string) => {
        const res = await fetch(`${UPDATE_TEMPLATE_URL}/${id}`, {
            method: 'PATCH',
            credentials: "include",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status: "draft" }),
        });
        const data = await res.json()
        console.log(data)
    }

    const trashTemplate = async (id: string) => {
        const res = await fetch(`${UPDATE_TEMPLATE_URL}/${id}`, {
            method: 'PATCH',
            credentials: "include",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status: "trash" }),
        });
        const data = await res.json()
        console.log(data)
    }

    const deleteTemplate = async (id: string) => {
        console.log(id)
        const res = await fetch(`http://localhost:5000/template/delete/${id}`, {
            method: 'DELETE',
            credentials: "include"
        })
        const data = await res.json();
        handleToast(data?.success, data.message);
    }

    // templates?.reduce(()=>{},0)

    useEffect(() => {
        filter(params?.filter as string)
    }, [params, filter])

    return (
        <main>
            <div>
                <NavLink to={"/dashboard/templates/"} end>All ({templates?.length}) </NavLink>
                <span> | </span>
                <NavLink to={"/dashboard/templates/published"} end>Published ({templates?.filter((temp) => temp.status === "published").length}) </NavLink>
                <span> | </span>
                <NavLink to={"/dashboard/templates/draft"} end>Draft ({templates?.filter((temp) => temp.status === "draft").length}) </NavLink>
                <span> | </span>
                <NavLink to={"/dashboard/templates/trash"} end>Trash ({templates?.filter((temp) => temp.status === "trash").length}) </NavLink>
            </div>
            <section className="table-box">
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
                                            <Link to={`/dashboard/templates/${template?.title}/${template?.user}/edit`} state={{ template }}>Edit</Link>
                                            <span> | </span>
                                            {template?.status === "draft" ? <span className='trash' onClick={() => { publishedTemplate(template?.user as string) }}>Published</span> : <span className='delete' onClick={() => { draftTemplate(template?.user as string) }}>Draft</span>}
                                            <span> | </span>
                                            {template?.status === "trash" ? <span className='trash' onClick={() => { deleteTemplate(template?.user as string) }}>Delete</span> : <span className='delete' onClick={() => { trashTemplate(template?.user as string) }}> Trash</span>}
                                        </div>
                                    </td>
                                    <td>
                                        <span>{template?.price}</span>
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
                                        {template?.status === "trash" ? <span>Red</span> : template?.status === "published" ? <span>Green</span> : <span>Yellow</span>}
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