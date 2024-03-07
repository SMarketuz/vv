import { Box, Button, ButtonGroup, Divider, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import Image from 'next/image'
import { nuxt } from '@/public'
import { Badge } from '@chakra-ui/react'
import { api } from '@/api/api'
const FutureCourseCards = ({item}) => {
    return (
        <Box>
            <Card maxW={{ base: '100%', md: 'md' }} border={'1px'} borderColor={'#3F9CFB'} >
                <CardBody>
                    <Box position={'relative'} className='line'>
                        <img
                            src={`${api}images/${item.image}`}
                            alt='future courses'
                        />
                        <Box position={'absolute'} h={''} top={2} color={'white'} right={5} bg={'#3F9CFB'} px={5} rounded={5}>
                            {item.direct.toUpperCase()}
                        </Box>
                    </Box>
                    <Stack mt='6' spacing='3'>
                        <Box display={'flex'} justifyContent={'space-between'} color={'gray'}>
                            <Text>Chiqish vaqti</Text>
                            <Text>{item.production}</Text>
                        </Box>
                        <Heading color={'#1C3554'} fontWeight={'bold'} size='md'>{item.title}</Heading>
                    </Stack>
                </CardBody>
            </Card>
        </Box>
    )
}

export default FutureCourseCards