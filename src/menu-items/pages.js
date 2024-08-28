// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconKey, IconBug } from '@tabler/icons';
import SpeedIcon from '@mui/icons-material/Speed';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ImageIcon from '@mui/icons-material/Image';
import PaymentIcon from '@mui/icons-material/Payment';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import IosShareIcon from '@mui/icons-material/IosShare';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import LogoutIcon from '@mui/icons-material/Logout';

import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import { FaLanguage,FaRegMoneyBillAlt } from 'react-icons/fa';
import { MdMiscellaneousServices,MdEditNote } from 'react-icons/md';
import { TfiWorld} from 'react-icons/tfi';
import { IoIosPeople} from 'react-icons/io';
import { BsPersonFillExclamation} from 'react-icons/bs';
import { VscKey} from 'react-icons/vsc';





// constant
const icons = { IconBug, IconKey };

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
    id: 'pages',
    icon: icons.IconKey,
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: <FormattedMessage id="dashboard" />,
            type: 'item',
            url: "/dashboard",
            icon: SpeedIcon,
        },
        {
            id: 'Login credentials',
            title: <FormattedMessage id="Login credentials" />,
            type: 'collapse',
            icon: LockPersonIcon,
            children: [
                {
                    id: 'Edit Login credentials',
                    title: <FormattedMessage id="Edit Login credentials" />,
                    type: 'item',
                    url: '/edit-login-credentials'
                },
                {
                    id: 'Edit Login Email',
                    title: <FormattedMessage id="Edit Login Email" />,
                    type: 'item',
                    url: '/edit-login-email'
                },
                {
                    id: 'Edit Login password',
                    title: <FormattedMessage id="Edit Login password" />,
                    type: 'item',
                    url: '/edit-login-password'
                }
            ]
        },
        {
            id: 'Nickname',
            title: <FormattedMessage id="Nickname" />,
            type: 'collapse',
            icon: MdEditNote,
            children: [
                {
                    id: 'Edit Nickname',
                    title: <FormattedMessage id="Edit Nickname" />,
                    type: 'item',
                    url: '/edit-nikname'
                    // target: true
                }
            ]
        },
        {
            id: 'My profile',
            title: <FormattedMessage id="My profile" />,
            type: 'collapse',
            icon: AccountCircleIcon,
            children: [
                {
                    id: 'Edit user',
                    title: <FormattedMessage id="Edit user" />,
                    type: 'item',
                    url: '/edit-user'
                },
                {
                    id: 'Edit address',
                    title: <FormattedMessage id="Edit address" />,
                    type: 'item',
                    url: '/edit-address'
                },
                {
                    id: 'Edit interested catagories',
                    title: <FormattedMessage id="Edit interested catagories" />,
                    type: 'item',
                    url: '/edit-interested-catagories'
                },
                {
                    id: 'Edit about yourself',
                    title: <FormattedMessage id="Edit about yourself" />,
                    type: 'item',
                    url: '/edit-about-yourself'
                }
            ]
        },
        {
            id: 'My image',
            title: <FormattedMessage id="My image" />,
            type: 'collapse',
            icon: ImageIcon,
            children: [
                {
                    id: 'Edit image',
                    title: <FormattedMessage id="Edit image" />,
                    type: 'item',
                    url: '/edit-image'
                    // target: true
                }
            ]
        },
        {
            id: 'My availablitily',
            title: <FormattedMessage id="My availablitily" />,
            type: 'collapse',
            icon: MdMiscellaneousServices,
            children: [
                {
                    id: 'Edit Login credentials',
                    title: <FormattedMessage id="Edit Login credentials" />,
                    type: 'item',
                    url: '/faq'
                    // target: true
                },
                {
                    id: 'terms',
                    title: <FormattedMessage id="Terms & Condition" />,
                    type: 'item',
                    url: '/terms_and_conditions'
                    // target: true
                },
                {
                    id: 'privacy',
                    title: <FormattedMessage id="Privacy Policy" />,
                    type: 'item',
                    url: '/privacy_policy'
                    // target: true
                }
            ]
        },
        {
            id: 'Payment methods',
            title: <FormattedMessage id="Payment methods" />,
            type: 'collapse',
            icon: FaRegMoneyBillAlt,
            children: [
                {
                    id: 'Sending',
                    title: <FormattedMessage id="Sending" />,
                    type: 'collapse',
                    children: [
                        {
                            id: 'List Cards',
                            title: <FormattedMessage id="List Cards" />,
                            type: 'item',
                            url: '/payment-methods/sending/list-cards',
                        },
                        {
                            id: 'Add Card',
                            title: <FormattedMessage id="Add Card" />,
                            type: 'item',
                            url: '/payment-methods/sending/add-card',
                        },
                    ]
                },
                {
                    id: 'receiving',
                    title: <FormattedMessage id="Receiving" />,
                    type: 'item',
                    url: '/payment-methods/receiving',
                },
            ]
        },
        {
            id: 'Display language',
            title: <FormattedMessage id="Display language" />,
            type: 'collapse',
            icon: FaLanguage,
            children: [
                {
                    id: 'Edit Login credentials',
                    title: <FormattedMessage id="Edit Login credentials" />,
                    type: 'item',
                    url: '/faq'
                    // target: true
                },
                {
                    id: 'terms',
                    title: <FormattedMessage id="Terms & Condition" />,
                    type: 'item',
                    url: '/terms_and_conditions'
                    // target: true
                },
                {
                    id: 'privacy',
                    title: <FormattedMessage id="Privacy Policy" />,
                    type: 'item',
                    url: '/privacy_policy'
                    // target: true
                }
            ]
        },
        {
            id: 'Currency',
            title: <FormattedMessage id="Currency" />,
            type: 'item',
            url: "/currency",
            icon: PaymentIcon,
        },
        {
            id: 'My level',
            title: <FormattedMessage id="My level" />,
            type: 'collapse',
            icon: FaceRetouchingNaturalIcon,
            children: [
                {
                    id: 'Edit Login credentials',
                    title: <FormattedMessage id="Edit Login credentials" />,
                    type: 'item',
                    url: '/faq'
                    // target: true
                },
                {
                    id: 'terms',
                    title: <FormattedMessage id="Terms & Condition" />,
                    type: 'item',
                    url: '/terms_and_conditions'
                    // target: true
                },
                {
                    id: 'privacy',
                    title: <FormattedMessage id="Privacy Policy" />,
                    type: 'item',
                    url: '/privacy_policy'
                    // target: true
                }
            ]
        },
        {
            id: 'Notifications',
            title: <FormattedMessage id="Notifications " />,
            type: 'collapse',
            icon: NotificationsActiveIcon,
            children: [
                {
                    id: 'Edit Login credentials',
                    title: <FormattedMessage id="Edit Login credentials" />,
                    type: 'item',
                    url: '/faq'
                    // target: true
                },
                {
                    id: 'terms',
                    title: <FormattedMessage id="Terms & Condition" />,
                    type: 'item',
                    url: '/terms_and_conditions'
                    // target: true
                },
                {
                    id: 'privacy',
                    title: <FormattedMessage id="Privacy Policy" />,
                    type: 'item',
                    url: '/privacy_policy'
                    // target: true
                }
            ]
        },
        {
            id: 'My Services',
            title: <FormattedMessage id="My Services" />,
            type: 'item',
            icon: TfiWorld,
            url:"/my-services"
        },
        {
            id: 'Share Services',
            title: <FormattedMessage id="Share Services" />,
            type: 'collapse',
            icon: IosShareIcon,
            children: [
                {
                    id: 'Edit Login credentials',
                    title: <FormattedMessage id="Edit Login credentials" />,
                    type: 'item',
                    url: '/faq'
                    // target: true
                },
                {
                    id: 'terms',
                    title: <FormattedMessage id="Terms & Condition" />,
                    type: 'item',
                    url: '/terms_and_conditions'
                    // target: true
                },
                {
                    id: 'privacy',
                    title: <FormattedMessage id="Privacy Policy" />,
                    type: 'item',
                    url: '/privacy_policy'
                    // target: true
                }
            ]
        },
        {
            id: 'Permissions',
            title: <FormattedMessage id="permissions" />,
            type: 'collapse',
            icon: VscKey,
            children: [
                {
                    id: 'Edit Login credentials',
                    title: <FormattedMessage id="Edit Login credentials" />,
                    type: 'item',
                    url: '/faq'
                    // target: true
                },
                {
                    id: 'terms',
                    title: <FormattedMessage id="Terms & Condition" />,
                    type: 'item',
                    url: '/terms_and_conditions'
                    // target: true
                },
                {
                    id: 'privacy',
                    title: <FormattedMessage id="Privacy Policy" />,
                    type: 'item',
                    url: '/privacy_policy'
                    // target: true
                }
            ]
        },
        {
            id: 'FAQs',
            title: <FormattedMessage id="FAQs" />,
            type: 'collapse',
            icon: LiveHelpIcon,
            children: [
                {
                    id: 'Edit Login credentials',
                    title: <FormattedMessage id="Edit Login credentials" />,
                    type: 'item',
                    url: '/faq'
                    // target: true
                },
                {
                    id: 'terms',
                    title: <FormattedMessage id="Terms & Condition" />,
                    type: 'item',
                    url: '/terms_and_conditions'
                    // target: true
                },
                {
                    id: 'privacy',
                    title: <FormattedMessage id="Privacy Policy" />,
                    type: 'item',
                    url: '/privacy_policy'
                    // target: true
                }
            ]
        },
        {
            id: 'Terms and conditions',
            title: <FormattedMessage id="Terms and conditions" />,
            type: 'collapse',
            icon: MdEditNote,
            children: [
                {
                    id: 'Edit Login credentials',
                    title: <FormattedMessage id="Edit Login credentials" />,
                    type: 'item',
                    url: '/faq'
                    // target: true
                },
                {
                    id: 'terms',
                    title: <FormattedMessage id="Terms & Condition" />,
                    type: 'item',
                    url: '/terms_and_conditions'
                    // target: true
                },
                {
                    id: 'privacy',
                    title: <FormattedMessage id="Privacy Policy" />,
                    type: 'item',
                    url: '/privacy_policy'
                    // target: true
                }
            ]
        },
        {
            id: 'Contact us',
            title: <FormattedMessage id="Contact us" />,
            type: 'collapse',
            icon: BsPersonFillExclamation,
            children: [
                {
                    id: 'Edit Login credentials',
                    title: <FormattedMessage id="Edit Login credentials" />,
                    type: 'item',
                    url: '/faq'
                    // target: true
                },
                {
                    id: 'terms',
                    title: <FormattedMessage id="Terms & Condition" />,
                    type: 'item',
                    url: '/terms_and_conditions'
                    // target: true
                },
                {
                    id: 'privacy',
                    title: <FormattedMessage id="Privacy Policy" />,
                    type: 'item',
                    url: '/privacy_policy'
                    // target: true
                }
            ]
        },
        {
            id: 'About',
            title: <FormattedMessage id="About" />,
            type: 'collapse',
            icon: IoIosPeople,
            children: [
                {
                    id: 'Edit Login credentials',
                    title: <FormattedMessage id="Edit Login credentials" />,
                    type: 'item',
                    url: '/faq'
                    // target: true
                },
                {
                    id: 'terms',
                    title: <FormattedMessage id="Terms & Condition" />,
                    type: 'item',
                    url: '/terms_and_conditions'
                    // target: true
                },
                {
                    id: 'privacy',
                    title: <FormattedMessage id="Privacy Policy" />,
                    type: 'item',
                    url: '/privacy_policy'
                    // target: true
                }
            ]
        },
        {
            id: 'Log out',
            title: <FormattedMessage id="Log out" />,
            type: 'collapse',
            icon: LogoutIcon
        }
    ]
};

export default pages;
