
import { EmployeeInfo } from "../../../../utils/types";
import useEmployee from "../../../../hooks/useEmployee";
import { Navigate } from "react-router-dom";




const EmployeeListsPage = () => {



    const { employees, setRole, adminAccess, developerAccess, handleSetRole } = useEmployee()


    if (!adminAccess && !developerAccess) return <Navigate to="/login" />

    return (
        <main>
            <section>
                <div>EmployeeListsPage</div>
                {employees?.map((employee: EmployeeInfo) => {
                    return (
                        <div key={employee?._id}>
                            {employee.name}
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
            </section>
        </main>
    )
}

export default EmployeeListsPage