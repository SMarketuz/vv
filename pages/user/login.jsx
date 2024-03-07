import { Logo, login, register } from '@/public'
import { Box, Button, Flex, Heading, Input, InputGroup, InputRightElement, Text, useToast } from '@chakra-ui/react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'
import { LiaEyeSolid } from "react-icons/lia";
import { FaRegEyeSlash } from "react-icons/fa";
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import axios from 'axios'
import { api } from '@/api/api'
const Login = () => {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    const toast = useToast()
    const [values, setValues] = useState({ username: '', password: '' })
    const router = useRouter()
    const loginHandle = () => {
        if (values.username.length == 0 || values.password.length == 0) {
            toast({
                description: "Ma'lumot to'liq emas",
                status: 'error',
                position: 'top-right',
                duration: 3000,
                isClosable: true,
            })
        } else {
            axios.post(`${api}api/user/auth/login`, {
                "username": values.username,
                "password": values.password
            }, {
                headers: {
                    "ngrok-skip-browser-warning": true,
                    "Access-Control-Allow-Origin": "*",
                }
            }).then(res => {
                router.push('/')
                localStorage.setItem('token' , res.data.token)
            }).catch(er => {
                toast({
                    description: er.response.data.message,
                    status: 'error',
                    position: 'top-right',
                    duration: 3000,
                    isClosable: true,
                })
            })
        }
    }
    useEffect(() => {
        if(localStorage.getItem('token')) {
            router.push('/')
        }
    } ,[show])
    return (
        <Box width={'100%'} h={'10px'}>
            <Head>
                <title>MOdevco | Login</title>
            </Head>
            <Box display={'flex'} justifyContent={'space-between'} height={'100px'}>

                <Box p={{base: 10 , lg: '120px'}} display={'flex'} flexDirection={'column'} gap={10}>
                    <Link href={'/'}>
                        <Flex gap={2} alignItems={'center'}>
                            <Image width={'50'} src={Logo}></Image>
                            <Heading color={'#3F9CFB'}>MOdevco</Heading>
                        </Flex>
                    </Link>

                    <Box>
                        <Heading fontSize={{base: '40px' , lg: '60px'}} color={'#1C3554'}>Kirish!</Heading><br />
                        <Text fontSize={'18px'} color={'gray'} maxW={'500px'}>Ro'yxatdan o'tishingiz platformani sifatini yahshilash uchun hizmat qilishi mumkin. Siz uchun platformadan to'liq foidalanish imkonini beradi.</Text>
                    </Box>

                    <Flex flexDirection={'column'} gap={5}>
                        <FormControl isRequired>
                            <FormLabel>Foidalanuvchi nomi</FormLabel>
                            <Input value={values.username} onChange={(e) => setValues({ ...values, username: e.target.value })} bg={'#F3F4F6'} type='text' placeholder={'nom...'} h={'50px'} />
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel>Foidalanuvchi paroli</FormLabel>
                            <Box display={'flex'} alignItems={'center'} h={'50px'}  bg={'#F3F4F6'} border={'1px'} rounded={'5px'} borderColor={'#E2E8F0'}>
                                <Input
                                    type={show ? 'text' : 'password'}
                                   placeholder={'parol...'} 
                                   style={{border: 'none' }}
                                   value={values.password} onChange={(e) => setValues({ ...values, password: e.target.value })}
                                />
                                <Button h={'0px'} fontSize={'20px'} onClick={handleClick}>
                                    {show ? <FaRegEyeSlash /> : <LiaEyeSolid />}
                                </Button>
                            </Box>
                        </FormControl>

                        <Link href={'/user/register'}>
                            <Text textDecoration={'underline'} color={'blue'}>Akkountingiz yo'qmi?</Text>
                        </Link>

                        <Box>
                            <Button onClick={loginHandle} h={'50px'} w={'100%'} bg={'#3F9CFB'} color={'white'} _hover={{bg: ''}} _active={{bg: ''}}>Kirish</Button>
                        </Box>
                    </Flex>
                </Box>


                <Box  display={{base: 'none', md: 'none' , lg: 'block'}}>
                    <Image src={login} width={'793'} height={'100%'}></Image>
                </Box>


            </Box>
        </Box>
    )
}

export default Login