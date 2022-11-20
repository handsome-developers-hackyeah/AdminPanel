import React from 'react';

// Chakra imports
import { Flex, useColorModeValue } from '@chakra-ui/react';

// Custom components
import { HorizonLogo } from 'components/icons/Icons';
import { HSeparator } from 'components/separator/Separator';
import logo from '../../../assets/img/Comptee.svg';

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue('navy.700', 'white');

  return (
    <Flex align='center' direction='column'>
      <img style={{ width: '150px', marginBlock: '20px' }} src={logo} />
    </Flex>
  );
}

export default SidebarBrand;
