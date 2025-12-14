import "./DashboardPage.css"
import useRoleAccess from "../../../hooks/useRoleAccess";
import LogDownloader from "../../../components/dashboard/LogDownloader/LogDownloader";



const DashboardPage = () => {


    const { adminAccess } = useRoleAccess()

    return (
        <main>
            <section className="dashpage">
                <h2>overview page</h2>
                <p>30 post</p>

                <p>70comment</p>
                {adminAccess ? <LogDownloader /> : null}
            </section>
        </main>

    )
}

export default DashboardPage;