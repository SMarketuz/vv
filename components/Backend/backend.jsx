import { Avatar, Box, Divider, Heading, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { api } from '@/api/api'
import axios from 'axios'
const Backend = () => {
    const [data, setData] = useState([])
    const [apis, setApis] = useState('api/course/category?badge=Backend')
    useEffect(() => {
        axios.get(`${api}${apis}` ,{
            headers: {
                "ngrok-skip-browser-warning": true,
                "Access-Control-Allow-Origin": "*",
            }
        })
            .then(res => {
                setData(res.data.data)
            })
    }, [apis])
    return (
        <>
            {data.length &&  data.map((item, i) => (
                <Box border={'2px'} borderColor={'#3F9CFB'} borderRadius={'10px'}>
                    <motion.div
                        initial={{ opacity: 0, translateX: -50 }}
                        animate={{ opacity: 1, translateX: 0 }}
                        transition={{ duration: 0.3 }}
                    >

                        <Card cursor={'pointer'} bg={'transparent'} maxW={{ base: '100%', md: 'sm' }} boxShadow={'none'} transition={'0.5s'}>
                            <CardBody p={0} color={'white '} >
                                <Box className='line2' position={'relative'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                    <img

                                        style={{ borderRadius: '10px' }}
                                        src={`${api}images/${item.image}`}
                                        alt={item.title}
                                    />
                                    <Box position={'absolute'} h={''} top={2} right={5} bg={'#3F9CFB'} px={5} rounded={5}>
                                        {item.badge}
                                    </Box>
                                </Box>
                                <Stack mt='6' spacing='3' p={6}>
                                    <Heading size='md' color={'white'} >{item.title}</Heading>
                                    <Text fontWeight={'bold'} fontSize='2xl'>
                                        Bepul
                                    </Text>
                                </Stack>
                            </CardBody>
                        </Card>
                    </motion.div>
                </Box>
            ))}
            {!data.length && <Box textAlign={'center'} width={'100%'}>
                <Heading color={'gray'} >Hozircha kurs mavjud emas</Heading>
            </Box>}
        </>
    )
}

export default Backend