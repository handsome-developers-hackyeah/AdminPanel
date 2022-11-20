import { Card, CardBody, CardFooter } from '@chakra-ui/card';
import { Box, Icon, SimpleGrid, useColorModeValue } from '@chakra-ui/react';

import {
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { RiPlantFill } from 'react-icons/ri';

const Verify = () => {
  const [data, setData] = useState([]);

  const getReports = async () => {
    const req = await fetch('http://comptee.tuso.pl:81/admin/getReportPosts', {
      headers: {
        Authorization: `Bearer ${'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjliMGY1NzFhLTAwNjMtNDNmMy1hNDJjLWJkZDEwNjgyMWViZiIsImVtYWlsIjoiZ292QGdvdi5wbCIsIm5hbWUiOiJnb3YiLCJoYXZlQXZhdGFyIjoiRmFsc2UiLCJyb2xlIjoiQWRtaW4iLCJuYmYiOjE2Njg4OTc1NzYsImV4cCI6MTcyOTM3NzU3NiwiaWF0IjoxNjY4ODk3NTc2LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0IiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdCJ9.GKGYC9Q5tEl3X_YQBRotSn1vA_OFRhrkeIgLU7JXBgqi4lvYMO795i56Dt2cejv-4MxK1MQ9GouPvQywYIQkWA'}`,
      },
    });
    const res = await req.json();

    setData(res);
  };

  useEffect(() => getReports(), []);

  const banPost = async (id) => {
    await fetch('http://comptee.tuso.pl:81/admin/banPost', {
      headers: {
        Authorization: `Bearer ${'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjliMGY1NzFhLTAwNjMtNDNmMy1hNDJjLWJkZDEwNjgyMWViZiIsImVtYWlsIjoiZ292QGdvdi5wbCIsIm5hbWUiOiJnb3YiLCJoYXZlQXZhdGFyIjoiRmFsc2UiLCJyb2xlIjoiQWRtaW4iLCJuYmYiOjE2Njg4OTc1NzYsImV4cCI6MTcyOTM3NzU3NiwiaWF0IjoxNjY4ODk3NTc2LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0IiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdCJ9.GKGYC9Q5tEl3X_YQBRotSn1vA_OFRhrkeIgLU7JXBgqi4lvYMO795i56Dt2cejv-4MxK1MQ9GouPvQywYIQkWA'}`,
        'Content-Type': 'application/json',
      },
      method: 'DELETE',
      body: JSON.stringify({ postId: id }),
    });
    getReports();
  };

  const acceptPost = async (id) => {
    await fetch('http://comptee.tuso.pl:81/admin/acceptPost', {
      headers: {
        Authorization: `Bearer ${'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjliMGY1NzFhLTAwNjMtNDNmMy1hNDJjLWJkZDEwNjgyMWViZiIsImVtYWlsIjoiZ292QGdvdi5wbCIsIm5hbWUiOiJnb3YiLCJoYXZlQXZhdGFyIjoiRmFsc2UiLCJyb2xlIjoiQWRtaW4iLCJuYmYiOjE2Njg4OTc1NzYsImV4cCI6MTcyOTM3NzU3NiwiaWF0IjoxNjY4ODk3NTc2LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0IiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdCJ9.GKGYC9Q5tEl3X_YQBRotSn1vA_OFRhrkeIgLU7JXBgqi4lvYMO795i56Dt2cejv-4MxK1MQ9GouPvQywYIQkWA'}`,
        'Content-Type': 'application/json',
      },
      method: 'DELETE',
      body: JSON.stringify({ postId: id }),
    });
    getReports();
  };
  return (
    <>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, '2xl': 4 }}
        gap='20px'
        mb='500px'
        style={{ marginTop: '100px' }}>
        {data.map((item) => (
          <Card maxW='sm'>
            <CardBody>
              <Image
                src={`http://comptee.tuso.pl/images/${item.post.id}.txt`}
                alt='Green double couch with wooden legs'
                borderRadius='lg'
                style={{ objectFit: 'cover', width: '300px', height: '300px' }}
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>{item.user.name}</Heading>

                <Text color='#73C9A5' fontSize='2xl'>
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
      </SimpleGrid>
    </>
  );
};

export default Verify;
