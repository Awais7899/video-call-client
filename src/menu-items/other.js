// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconBrandChrome, IconHelp, IconSitemap } from '@tabler/icons';

// constant
const icons = {
    IconBrandChrome,
    IconHelp,
    IconSitemap
};

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
    id: 'sample-docs-roadmap',
    title: <FormattedMessage id="others" />,
    icon: icons.IconHelp,
    type: 'group',
    children: [
        {
            id: 'online-users',
            title: 'Online users',
            type: 'item',
            url: '/online-users',
            icon: icons.IconBrandChrome,
            breadcrumbs: false
        },
    ]
};

export default other;
