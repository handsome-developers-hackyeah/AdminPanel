/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2022 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports

import { Box, Icon, SimpleGrid, useColorModeValue } from '@chakra-ui/react';

import MiniStatistics from 'components/card/MiniStatistics';
import IconBox from 'components/icons/IconBox';
import React from 'react';
import { MdGroup, MdOutlinePostAdd, MdTrendingUp } from 'react-icons/md';
import { RiPlantFill } from 'react-icons/ri';

import { useEffect, useState } from 'react';

export default function UserReports() {
  const brandColor = useColorModeValue('brand.500', 'white');
  const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');

  const [data, setData] = useState({});

  useEffect(async () => {
    const req = await fetch('http://comptee.tuso.pl:81/admin/getStats');
    const res = await req.json();

    setData(res);

    console.log(res);
  }, []);

  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, '2xl': 6 }}
        gap='20px'
        mb='100px'>
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={<Icon w='32px' h='32px' as={MdGroup} color='#73C9A5' />}
            />
          }
          name='Ilość kont'
          value={data.usersSum}
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={<Icon w='32px' h='32px' as={RiPlantFill} color='#73C9A5' />}
            />
          }
          name='Łączna suma kompostu'
          value={data.compostSum}
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdOutlinePostAdd} color='#73C9A5' />
              }
            />
          }
          name='Łączna ilość postów'
          value={data.postCount}
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdTrendingUp} color='#73C9A5' />
              }
            />
          }
          name='Średnia komp. na konto'
          value={data.compostAverage}
        />
      </SimpleGrid>
    </Box>
  );
}
