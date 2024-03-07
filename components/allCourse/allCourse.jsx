import { Avatar, Box, Divider, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Badge } from '@chakra-ui/react'
import { im, reactjs2 } from '@/public'
import { motion } from 'framer-motion'
import Image from 'next/image'
const AllCourse = () => {
    return (
        <Box border={'2px'} borderColor={'#3F9CFB'}  borderRadius={'10px'}>
            <motion.div
                initial={{opacity: 0, translateX: -50 }}
                animate={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.3 }}
            >

                <Card cursor={'pointer'}   bg={'transparent'} maxW={{ base: '100%', md: 'sm' }} boxShadow={'none'} transition={'0.5s'}>
                    <CardBody p={0} color={'white'} >
                        <Box className='line2'  position={'relative'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                            <Image
                                
                                style={{ borderRadius: '10px' }}
                                src={reactjs2}
                                alt='Green double couch with wooden legs'
                            />
                            <Box position={'absolute'} h={''} top={2} right={5}bg={'#3F9CFB'}  px={5} rounded={5}>
                                Frontend
                            </Box>
                        </Box>
                        <Stack  mt='6' spacing='3' p={6}>
                            <Heading size='md' color={'white'} >Living room Sofa</Heading>
                            <Text fontWeight={'bold'} fontSize='2xl'>
                                Bepul
                            </Text>
                        </Stack>
                    </CardBody>
                </Card>
            </motion.div>
        </Box>
    )
}

export default AllCourse