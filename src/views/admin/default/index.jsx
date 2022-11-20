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
import { MdGroup, MdFileCopy } from 'react-icons/md';
import { RiPlantFill } from 'react-icons/ri';
import {
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
} from '@chakra-ui/react';

import { Card, CardBody, CardFooter } from '@chakra-ui/card';
import { useEffect, useState } from 'react';

const jwt = process.env.JWT;
export default function UserReports() {
  const [data, setData] = useState([]);

  const brandColor = useColorModeValue('brand.500', 'white');
  const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');

  const getReports = async () => {
    const req = await fetch('http://10.250.161.137:5011/admin/getReportPosts', {
      headers: {
        Authorization: `Bearer ${'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjliMGY1NzFhLTAwNjMtNDNmMy1hNDJjLWJkZDEwNjgyMWViZiIsImVtYWlsIjoiZ292QGdvdi5wbCIsIm5hbWUiOiJnb3YiLCJoYXZlQXZhdGFyIjoiRmFsc2UiLCJyb2xlIjoiQWRtaW4iLCJuYmYiOjE2Njg4OTc1NzYsImV4cCI6MTcyOTM3NzU3NiwiaWF0IjoxNjY4ODk3NTc2LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0IiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdCJ9.GKGYC9Q5tEl3X_YQBRotSn1vA_OFRhrkeIgLU7JXBgqi4lvYMO795i56Dt2cejv-4MxK1MQ9GouPvQywYIQkWA'}`,
      },
    });
    const res = await req.json();

    setData(res);
  };

  useEffect(() => getReports(), []);

  const banPost = async (id) => {
    await fetch('http://10.250.161.137:5011/admin/banPost', {
      headers: {
        Authorization: `Bearer ${'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjliMGY1NzFhLTAwNjMtNDNmMy1hNDJjLWJkZDEwNjgyMWViZiIsImVtYWlsIjoiZ292QGdvdi5wbCIsIm5hbWUiOiJnb3YiLCJoYXZlQXZhdGFyIjoiRmFsc2UiLCJyb2xlIjoiQWRtaW4iLCJuYmYiOjE2Njg4OTc1NzYsImV4cCI6MTcyOTM3NzU3NiwiaWF0IjoxNjY4ODk3NTc2LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0IiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdCJ9.GKGYC9Q5tEl3X_YQBRotSn1vA_OFRhrkeIgLU7JXBgqi4lvYMO795i56Dt2cejv-4MxK1MQ9GouPvQywYIQkWA'}`,
      },
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ postId: id }),
    });
    getReports();
  };

  const acceptPost = async (id) => {
    await fetch('http://10.250.161.137:5011/admin/acceptPost', {
      headers: {
        Authorization: `Bearer ${'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjliMGY1NzFhLTAwNjMtNDNmMy1hNDJjLWJkZDEwNjgyMWViZiIsImVtYWlsIjoiZ292QGdvdi5wbCIsIm5hbWUiOiJnb3YiLCJoYXZlQXZhdGFyIjoiRmFsc2UiLCJyb2xlIjoiQWRtaW4iLCJuYmYiOjE2Njg4OTc1NzYsImV4cCI6MTcyOTM3NzU3NiwiaWF0IjoxNjY4ODk3NTc2LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0IiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdCJ9.GKGYC9Q5tEl3X_YQBRotSn1vA_OFRhrkeIgLU7JXBgqi4lvYMO795i56Dt2cejv-4MxK1MQ9GouPvQywYIQkWA'}`,
      },
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ postId: id }),
    });
    getReports();
  };

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
              icon={
                <Icon w='32px' h='32px' as={RiPlantFill} color={brandColor} />
              }
            />
          }
          name='Ilosc Gówna'
          value='350.4'
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={<Icon w='32px' h='32px' as={MdGroup} color={brandColor} />}
            />
          }
          name='Ilość użytkowników'
          value='649'
        />
      </SimpleGrid>
      {data.map((item) => (
        <Card maxW='sm'>
          <CardBody>
            <Image
              src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
              alt='Green double couch with wooden legs'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>{item.user.name}</Heading>

              <Text color='blue.600' fontSize='2xl'>
                {item.post.reportCount} zgłoszeń ({item.post.amount} kg
                kompostu)
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter mt='20px'>
            <ButtonGroup spacing='2'>
              <Button
                variant='solid'
                colorScheme='red'
                onClick={() => banPost(item.post.id)}>
                Usuń post
              </Button>
              <Button
                variant='ghost'
                colorScheme='green'
                onClick={() => acceptPost(item.post.id)}>
                Zatwierdź post
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
    </Box>
  );
}
