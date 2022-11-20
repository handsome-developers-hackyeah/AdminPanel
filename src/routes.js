import React from 'react';

import { Icon } from '@chakra-ui/react';
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
} from 'react-icons/md';

// Admin Imports
import MainDashboard from 'views/admin/default';
import NFTMarketplace from 'views/admin/marketplace';
import Profile from 'views/admin/profile';
import DataTables from 'views/admin/dataTables';
import RTL from 'views/admin/rtl';
import Verify from 'views/admin/Verify';

const routes = [
  {
    name: 'Głowny',
    layout: '/admin',
    path: '/default',
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: 'Zweryfikuj zgłoszone posty',
    layout: '/admin',
    path: '/Verify',
    icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
    component: Verify,
  },
];

export default routes;
