import "./EmployeeListPage.css"
import { EmployeeInfo } from "../../../../utils/types";
import useEmployee from "../../../../hooks/useEmployee";
import { Link, Navigate } from "react-router-dom";




const EmployeeListsPage = () => {



    const { employees, setRole, adminAccess, developerAccess, handleSetRole } = useEmployee()


    if (!adminAccess && !developerAccess) return <Navigate to="/login" />

    return (
        <main>
            <section className="employee-list">
                {
                    employees?.length !== 0 ?
                        <>
                            <div className="title">Employee Lists</div>
                            <div className="employee-list-container">
                                {employees?.map((employee: EmployeeInfo, i) => {
                                    return (
                                        <div key={employee?._id} className="employee-list-item">
                                            <strong>{i + 1}. {employee.name}</strong>
                                            <input type="radio" name={`role-${employee._id}`}
                                                defaultChecked={employee?.roles?.Editor}
                                                onChange={(e) => {
                                                    e.target.checked ? setRole("Editor") : null
                                                }}
                                            />
                                            <span>Editor</span>
                                            <input type="radio" name={`role-${employee._id}`}
                                                defaultChecked={employee?.roles?.Author}
                                                onChange={(e) => {
                                                    e.target.checked ? setRole("Author") : null
                                                }}
                                            />
                                            <span>Author</span>
                                            <input type="radio" name={`role-${employee._id}`}
                                                defaultChecked={!employee?.roles?.Editor && !employee?.roles?.Author}
                                                onChange={(e) => {
                                                    e.target.checked ? setRole("Disabled") : null
                                                }}
                                            />
                                            <span>Disable</span>
                                            <button onClick={() => { handleSetRole(employee?._id as string) }}>set</button>
                                        </div>
                                    )
                                })}
                            </div>
                        </>
                        :
                        <div className='no-employees'>
                            <h3>No Employee Found</h3>
                            <Link to={"/dashboard/employee/create"} className='btn'>Add Employee</Link>
                        </div>
                }
            </section>
        </main>
    )
}

export default EmployeeListsPage