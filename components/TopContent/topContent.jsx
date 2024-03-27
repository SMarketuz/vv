import { Box, Button, Flex, Heading, Text, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { LuAlarmClock } from "react-icons/lu";
import { IoMdContact } from "react-icons/io";
import { GoVideo } from "react-icons/go";
import { Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'
import axios from 'axios';
import { api } from '@/api/api';
import { useRouter } from 'next/router';

// import { Re } from '@/public';
const TopContent = () => {

    const a = Math.trunc(Math.random() * 4)
    const b = Math.trunc(Math.random() * 4)
    const [email ,setEmail] = useState('')
    const router = useRouter()
    const toast = useToast()

    const handleEmail = () => {
        if(localStorage.getItem('token')) {
            if(!email.length == 0) {
                axios.post(`${api}api/email/new`, {
                    "email": email
                },{
                    headers: {
                        'token': localStorage.getItem('token'),
                        "ngrok-skip-browser-warning": true,
                        "Access-Control-Allow-Origin": "*",
                    }
                }).then(res => {
                    setEmail('')
                    toast({
                        description: "Email jo'natildi",
                        status: 'success',
                        position: 'top-right',
                        duration: 3000,
                        isClosable: true,
                    })
                })
            }else {
                toast({
                    description: "Maydon to'lmagan",
                    status: 'error',
                    position: 'top-right',
                    duration: 3000,
                    isClosable: true,
                })
            }
        }
    }
    return (
        <Box className='wrapper' px={5} width={'100%'}>
            <Box width={'100%'} p={10} color={'white'} position={'relative'} display={'flex'} justifyContent={'space-between'} rounded={10} bg={'#091629'}  overflow={'hidden'}>
                <Box color={'white'} w={{ base: '150px', md: '300px', xl: '600px' }} h={{ base: '150px', md: '300px', xl: '500px' }} className='shadow' rounded={'50%'} ></Box>

                <Box display={'flex'} flexDirection={{ base: 'column', xl: 'row' }} justifyContent={'space-between'} width={'100%'} gap={10}>
                    <Box display={'flex'} gap={10} flexDirection={'column'}>
                        <motion.div
                            // initial={{ opacity: 0 }}
                            // whileInView={{ opacity: 1 }}

                            initial={{ x: -500, scale: 0.5 }}
                            animate={{ x: 10, scale: 1 }}
                            transition={{ duration: 0.3 }}

                        >
                            <Heading fontSize={{ base: '45px', md: '64px' }}>Bizning kurslar <br /> <Typewriter words={['Frontend', 'Backend', 'Mobile']} loop={''} cursor typeSpeed={150} /> <br /> va boshqalar</Heading>
                        </motion.div>

                        <Box>
                            <Text fontSize={'18px'} maxW={'600px'}>Siz MOdevco platformasidan istalgan paytingizda foydalana olishingiz mumkin bo‘ladi. Biz siz sizlar uchun doim harakatdamiz.</Text>
                        </Box>

                        <Box display={{ base: 'none', md: 'block' }}>
                            <Box bg={'white'} display={'flex'} alignItems={'center'} p={5} justifyContent={'space-between'} rounded={'10px'} h={'80px'}>
                                <input value={email} onChange={e => setEmail(e.target.value)} type="text" style={{ border: 'none', outline: 'none', paddingLeft: '10px', background: 'transparent', color: 'black', width: '100%', fontWeight: 'bold' }} placeholder='email...' />
                                <Button onClick={() => {
                                    if(localStorage.getItem('token')) {
                                        handleEmail()
                                    }else {
                                        router.push('/user/login')
                                    }
                                }} w={'130px'} h={'50px'} bg={'#3F9CFB'} _hover={{ bg: '' }} className='line' color={'white'}>Jo'natish</Button>
                            </Box>
                        </Box>


                        <Flex alignItems={'center'} gap={5} flexWrap={'wrap'}>
                            <Flex alignItems={'center'} gap={2} fontSize={'24px'} fontWeight={'bold'}>
                                <LuAlarmClock />
                                <Text>Siz istagan vaqtda</Text>
                            </Flex>
                            <Flex alignItems={'center'} gap={2} fontSize={'24px'} fontWeight={'bold'}>
                                <IoMdContact fontSize={'25px'} />
                                <Text>Yagona mentor</Text>
                            </Flex>

                            <Flex alignItems={'center'} gap={2} fontSize={'24px'} fontWeight={'bold'}>
                                <GoVideo />
                                <Text>10+ Darslar</Text>
                            </Flex>
                        </Flex>
                    </Box>

                    <Box width={{ base: '100%', xl: '600px' }} rounded={'10px'} h={{ base: '100%', xl: '100%x' }} display={{ md: 'none', xl: 'block' }} position={'relative'} >
                        <Box display={'flex'} gap={3} flexDirection={'column'} justifyContent={'center'} minH={'100%'} p={3}>
                            <video autoPlay loop muted playsInline>
                                <source src={`./${a}.mp4`} style={{ width: '100%' }} />
                            </video>
                            <video autoPlay loop muted playsInline>
                                <source src={`./${b}.mp4`} style={{width: '100%'}} />
                            </video>
                        </Box>
                    </Box>

                </Box>

            </Box>
        </Box>
    )
}

export default TopContent