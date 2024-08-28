import { lazy } from 'react';

// project imports
import AuthGuard from 'utils/route-guard/AuthGuard';
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import EditAddress from 'views/pages/myprofile/EditAddress';
import EditIntrest from 'views/pages/myprofile/EditIntrest';
import EditAbout from 'views/pages/myprofile/EditAbout';
import EditImage from 'views/pages/MyImage/EditImage';
import Currency from 'views/pages/currency';
import MyServices from 'views/pages/MyServices/MyServices';

// sample page routing
const EditLoginCredentials = Loadable(lazy(() => import('views/pages/login-credentials/EditLoginCredentials')));
const EditLoginEmail = Loadable(lazy(() => import('views/pages/login-credentials/EditLoginEmail')));
const EditLoginPassword = Loadable(lazy(() => import('views/pages/login-credentials/EditLoginPassword')));
const EditLoginEmailVerification = Loadable(lazy(() => import('views/pages/login-credentials/EditLoginEmailVerification')));
const EditNikname = Loadable(lazy(() => import('views/pages/nikname/EditNikname')));
const EditUser = Loadable(lazy(() => import('views/pages/myprofile/EditUser')));
const ListCards = Loadable(lazy(() => import('views/payment-methods/sending/ListCards')));
const AddCard = Loadable(lazy(() => import('views/payment-methods/sending/AddCard')));
const Dashboard = Loadable(lazy(() => import('views/pages/dashboard')));
const OnlineUsers = Loadable(lazy(() => import('views/video-chat-app/components/OnlineUsers')));



// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: (
        <AuthGuard>
            <MainLayout />
        </AuthGuard>
    ),
    children: [
        {
            path: '/',
            element: <Dashboard />
        },
        {
            path: '/dashboard',
            element: <Dashboard />
        },
        {
            path: '/online-users',
            element: <OnlineUsers />
        },
        {
            path: '/edit-login-credentials',
            element: <EditLoginCredentials />
        },
        {
            path: '/edit-login-email',
            element: <EditLoginEmail />
        },
        {
            path: '/edit-login-password',
            element: <EditLoginPassword />
        },
        {
            path: '/edit-login-email-verification',
            element: <EditLoginEmailVerification /> 
        },
        {
            path: '/edit-nikname',
            element: <EditNikname /> 
        },
        {
            path: '/edit-user',
            element: <EditUser /> 
        },
        {
            path: '/edit-address',
            element: <EditAddress/> 
        },
        {
            path: '/edit-interested-catagories',
            element: <EditIntrest/> 
        },
        {
            path: '/edit-about-yourself',
            element: <EditAbout/> 
        },
        {
            path: '/edit-image',
            element: <EditImage/> 
        },
        {
            path: '/currency',
            element: <Currency/> 
        },
        {
            path: '/my-services',
            element: <MyServices/> 
        },
        {
            path: '/payment-methods/sending/list-cards',
            element: <ListCards />
        },
        {
            path: '/payment-methods/sending/add-card',
            element: <AddCard />
        },
        {
            path: '/payment-methods/receiving',
            element: <AddCard />
        }
    ]
};

export default MainRoutes;
