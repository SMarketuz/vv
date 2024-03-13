import { Avatar, Box, Divider, Heading, Stack, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { api } from '@/api/api'
import Link from 'next/link'
import { useRouter } from 'next/router'
const AllCourse = ({ data }) => {
   
    return (
        <>
            {data.length &&  data.map((item, i) => (
                <Link href={`/videos/course/${item._id}`} >
                    <Box  border={'2px'} borderColor={'#3F9CFB'} borderRadius={'10px'}>
                        <motion.div
                            initial={{ opacity: 0, translateX: -50 }}
                            animate={{ opacity: 1, translateX: 0 }}
                            transition={{ duration: 0.3 }}
                        >

                            <Card cursor={'pointer'} bg={'transparent'} maxW={{ base: '100%', md: 'sm' }} boxShadow={'none'} transition={'0.5s'}>
                                <CardBody p={0} color={'white'} >
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
                </Link>
            ))}
            {!data.length && <Box textAlign={'center'} width={'100%'}>
                <Heading color={'gray'} >Hozircha kurs mavjud emas</Heading>
            </Box>}
        </>
    )
}

export default AllCourse