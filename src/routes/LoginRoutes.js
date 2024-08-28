import { lazy } from 'react';

// project imports
import GuestGuard from 'utils/route-guard/GuestGuard';
import MinimalLayout from 'layout/MinimalLayout';
import NavMotion from 'layout/NavMotion';
import Loadable from 'ui-component/Loadable';
import VerficationCode from 'views/pages/authentication/VerficationCode';
import Forgetpassword from 'views/pages/authentication/Forgetpassword';
import CodeVerification3 from 'views/pages/authentication/CodeVerification3';
import NewPassword from 'views/pages/authentication/NewPassword';

// login routing
const AuthLogin = Loadable(lazy(() => import('views/pages/authentication/Login3')));
const AuthRegister = Loadable(lazy(() => import('views/pages/authentication/Register3')));
const AuthForgotPassword = Loadable(lazy(() => import('views/pages/authentication/ForgotPassword3')));

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
    path: '/',
    element: (
        <NavMotion>
            <GuestGuard>
                <MinimalLayout />
            </GuestGuard>
        </NavMotion>
    ),
    children: [
        {
            path: '/',
            element: <AuthLogin />
        },
        {
            path: '/login',
            element: <AuthLogin />
        },
        {
            path: '/register',
            element: <AuthRegister />
        },
        {
            path: '/forgot',
            element: <AuthForgotPassword />
        },
        {
            path: '/verfication-code',
            element: <VerficationCode/>
        },
        {
            path: '/forget-password',
            element: <Forgetpassword/>
        },
        {
            path: '/login-verfication-code',
            element: <CodeVerification3/>
        },
        {
            path: '/login/new-password',
            element: <NewPassword/>
        }
    ]
};

export default LoginRoutes;
