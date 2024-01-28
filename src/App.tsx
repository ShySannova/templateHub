import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import Layout from "./components/Layout/Layout";
import ClientLayout from "./components/client/ClientLayout/ClientLayout";

import HomePage from "./pages/ClientUI/HomePage/HomePage";
const RegisterPage = lazy(() => import("./pages/GlobalUI/RegisterPage/RegisterPage"))
const LoginPage = lazy(() => import("./pages/GlobalUI/LoginPage/LoginPage"))


const ContactPage = lazy(() => import("./pages/ClientUI/ContactPage/ContactPage"))
const AboutPage = lazy(() => import("./pages/ClientUI/AboutPage/AboutPage"))
const ErrorPage = lazy(() => import("./pages/GlobalUI/ErrorPage/ErrorPage"))
const TemplatePage = lazy(() => import("./pages/ClientUI/TemplatePage/TemplatePage"))


const DashLayout = lazy(() => import("./components/dashboard/DashLayout/DashLayout"))
const DashboardPage = lazy(() => import("./pages/DashboardUI/DashboardPage/DashboardPage"))
const ProtectPrivate = lazy(() => import("./components/ProtectPrivate/ProtectPrivate"))
const AdminProfilePage = lazy(() => import("./pages/DashboardUI/AdminProfilePage/AdminProfilePage"))
const MediaPage = lazy(() => import("./pages/DashboardUI/MediaPage/MediaPage"))
const CreateTemplatePage = lazy(() => import("./pages/DashboardUI/CreateTemplatePage/CreateTemplatePage"))
const TemplateListsPage = lazy(() => import("./pages/DashboardUI/TemplateListsPage/TemplateListsPage"))
const TemplateEditPage = lazy(() => import("./pages/DashboardUI/TemplateEditPage/TemplateEditPage"))
const ForgotPasswordPage = lazy(() => import("./pages/GlobalUI/ForgotPasswordPage/ForgotPasswordPage"))
const ResetPasswordPage = lazy(() => import("./pages/GlobalUI/ResetPasswordPage/ResetPasswordPage"))

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
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
                ],
            },
            {
                path: "dashboard",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <ProtectPrivate>
                            <DashLayout />
                        </ProtectPrivate>
                    </Suspense>
                ),
                children: [
                    {
                        index: true,
                        element: (
                            <Suspense fallback={<div>Loading...</div>}>
                                <DashboardPage />
                            </Suspense>
                        )
                    },
                    {
                        path: "users/profile",
                        element: (
                            <Suspense fallback={<div>Loading...</div>}>
                                <AdminProfilePage />
                            </Suspense>
                        )
                    },
                    {
                        path: "media",
                        element: (
                            <Suspense fallback={<div>Loading...</div>}>
                                <MediaPage />
                            </Suspense>
                        )
                    },
                    {
                        path: "templates",
                        children: [
                            {
                                index: true,
                                element: (
                                    <Suspense fallback={<div>Loading...</div>}>
                                        <TemplateListsPage />
                                    </Suspense>
                                )
                            },
                            {
                                path: ":filter",
                                element: (
                                    <Suspense fallback={<div>Loading...</div>}>
                                        <TemplateListsPage />
                                    </Suspense>
                                )
                            },
                            {
                                path: "create",
                                element: (
                                    <Suspense fallback={<div>Loading...</div>}>
                                        <CreateTemplatePage />
                                    </Suspense>
                                )
                            },
                            {
                                path: ':slug/:id/edit',
                                element: (
                                    <Suspense fallback={<div>Loading...</div>}>
                                        <TemplateEditPage />
                                    </Suspense>
                                )
                            },
                        ]
                    },

                ]

            },
            {
                path: "/login",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <LoginPage />,
                    </Suspense>
                )
            },
            {
                path: "/register",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <RegisterPage />,
                    </Suspense>
                )
            },
            {
                path: "/forgot-password",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <ForgotPasswordPage />,
                    </Suspense>
                )
            },
            {
                path: `/reset-password/:resetPassToken`,
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <ResetPasswordPage />,
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
