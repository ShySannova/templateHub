import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import Layout from "./components/global/Layout/Layout";
import ClientLayout from "./components/client/ClientLayout/ClientLayout";
import HomePage from "./pages/ClientUI/HomePage/HomePage";
import Persist from "./components/global/Persist/Persist";
import ShimmerDashboard from "./components/shimmerUI/ShimmerDashboard";

const RegisterPage = lazy(() => import("./pages/GlobalUI/RegisterPage/RegisterPage"))
const LoginPage = lazy(() => import("./pages/GlobalUI/LoginPage/LoginPage"))
const VerifyAccountPage = lazy(() => import("./pages/GlobalUI/VerifyAccountPage/VerifyAccountPage"))


const ContactPage = lazy(() => import("./pages/ClientUI/ContactPage/ContactPage"))
const AboutPage = lazy(() => import("./pages/ClientUI/AboutPage/AboutPage"))
const ErrorPage = lazy(() => import("./pages/GlobalUI/ErrorPage/ErrorPage"))
const TemplatePage = lazy(() => import("./pages/ClientUI/TemplatePage/TemplatePage"))
const ProfilePage = lazy(() => import("./pages/ClientUI/ProfilePage/ProfilePage"))


const DashLayout = lazy(() => import("./components/dashboard/DashLayout/DashLayout"))
const DashboardPage = lazy(() => import("./pages/DashboardUI/DashboardPage/DashboardPage"))
const ProtectPrivate = lazy(() => import("./components/global/ProtectPrivate/ProtectPrivate"))
const AdminProfilePage = lazy(() => import("./pages/DashboardUI/AdminProfilePage/AdminProfilePage"))
const MediaPage = lazy(() => import("./pages/DashboardUI/MediaPage/MediaPage"))

const CreateEmployeePage = lazy(() => import("./pages/DashboardUI/EmployeeManagePages/CreateEmployeePage/CreateEmployeePage"))
const EmployeeListsPage = lazy(() => import("./pages/DashboardUI/EmployeeManagePages/EmployeeListsPage/EmployeeListsPage"))

const CreateTemplatePage = lazy(() => import("./pages/DashboardUI/TemplateManagePages/CreateTemplatePage/CreateTemplatePage"))
const TemplateListsPage = lazy(() => import("./pages/DashboardUI/TemplateManagePages/TemplateListsPage/TemplateListsPage"))
const TemplateEditPage = lazy(() => import("./pages/DashboardUI/TemplateManagePages/TemplateEditPage/TemplateEditPage"))

const ForgotPasswordPage = lazy(() => import("./pages/GlobalUI/ForgotPasswordPage/ForgotPasswordPage"))
const ResetPasswordPage = lazy(() => import("./pages/GlobalUI/ResetPasswordPage/ResetPasswordPage"))

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Persist>
                <Layout />
            </Persist>
        ),
        errorElement: < ErrorPage />,
        children: [
            {
                element: <ClientLayout />,
                children: [
                    {
                        index: true,
                        element: <HomePage />,
                    },
                    {
                        path: "template/:slug",
                        element: (
                            <Suspense fallback={<div>Loading...</div>}>
                                <TemplatePage />
                            </Suspense>
                        )
                    },
                    {
                        path: "about",
                        element: (
                            <Suspense fallback={<div>Loading...</div>}>
                                < AboutPage />
                            </Suspense>
                        )
                    },
                    {
                        path: "contact",
                        element: (
                            <Suspense fallback={<div>Loading...</div>}>
                                <ContactPage />
                            </Suspense>
                        )
                    },
                    {
                        path: "profile",
                        element: (
                            <Suspense fallback={<div>Loading...</div>}>
                                <ProfilePage />
                            </Suspense>
                        )
                    },
                ],
            },
            {
                path: "dashboard",
                element: (
                    <Suspense fallback={<ShimmerDashboard />}>
                        <ProtectPrivate>
                            <DashLayout />
                        </ProtectPrivate>
                    </Suspense>
                ),
                children: [
                    {
                        index: true,
                        element: (
                            <Suspense fallback={<ShimmerDashboard />}>
                                <DashboardPage />
                            </Suspense>
                        )
                    },
                    {
                        path: "users/profile",
                        element: (
                            <Suspense fallback={<ShimmerDashboard />}>
                                <AdminProfilePage />
                            </Suspense>
                        )
                    },
                    {
                        path: "media",
                        element: (
                            <Suspense fallback={<ShimmerDashboard />}>
                                <MediaPage />
                            </Suspense>
                        )
                    },
                    {
                        path: "employees",
                        element: (
                            <Suspense fallback={<ShimmerDashboard />}>
                                <EmployeeListsPage />
                            </Suspense>
                        )
                    },
                    {
                        path: "employee/create",
                        element: (
                            <Suspense fallback={<ShimmerDashboard />}>
                                <CreateEmployeePage />
                            </Suspense>
                        )
                    },
                    {
                        path: "templates",
                        children: [
                            {
                                index: true,
                                element: (
                                    <Suspense fallback={<ShimmerDashboard />}>
                                        <TemplateListsPage />
                                    </Suspense>
                                )
                            },
                            {
                                path: ":filter",
                                element: (
                                    <Suspense fallback={<ShimmerDashboard />}>
                                        <TemplateListsPage />
                                    </Suspense>
                                )
                            },
                            {
                                path: "create",
                                element: (
                                    <Suspense fallback={<ShimmerDashboard />}>
                                        <CreateTemplatePage />
                                    </Suspense>
                                )
                            },
                            {
                                path: ':slug/:id/edit',
                                element: (
                                    <Suspense fallback={<ShimmerDashboard />}>
                                        <TemplateEditPage />
                                    </Suspense>
                                )
                            },
                        ]
                    },

                ],

            },
            {
                path: "/login",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <LoginPage />
                    </Suspense>
                )
            },
            {
                path: "/register",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <RegisterPage />
                    </Suspense>
                )
            },
            {
                path: "/forgot-password",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <ForgotPasswordPage />
                    </Suspense>
                )
            },
            {
                path: `/reset-password/:resetPassToken`,
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <ResetPasswordPage />
                    </Suspense>
                )
            },
            {
                path: `/verify-account`,
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <VerifyAccountPage />
                    </Suspense>
                )
            },
        ],
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
