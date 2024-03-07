import { Logo, register } from '@/public'
import { Box, Button, Flex, Heading, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
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
import { useMask } from '@react-input/mask'
import axios from 'axios'
import { api } from '@/api/api'
import { useToast } from '@chakra-ui/react'
import { useRouter } from 'next/router'
const Register = () => {
    const toast = useToast()
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    const inputRef2 = useMask({
        mask: "+998 (__) ___-__-__",
        replacement: { _: /\d/ },
    });
   


    const [values, setValues] = useState({ name: '', email: '', phone: '', username: '', password: '' })
    const algoritm = values.phone
    const algoritm1 = algoritm.slice(1, 4)
    const algoritm2 = algoritm.slice(6, 8)
    const algoritm3 = algoritm.slice(10, 13)
    const algoritm4 = algoritm.slice(14, 16)
    const algoritm5 = algoritm.slice(17, 19)
    const result = algoritm1 + algoritm2 + algoritm3 + algoritm4 + algoritm5
    const router = useRouter()
    const registerHandle = () => {
        if (values.name.length == 0 || values.email.length == 0 || values.phone.length == 0 || values.username.length == 0 || values.password.length == 0) {
            toast({
                description: "Ma'lumot to'liq emas",
                status: 'error',
                position: 'top-right',
                duration: 3000,
                isClosable: true,
            })
        } else {
            axios.post(`${api}api/user/auth/new`, {
                "name": values.name,
                "email": values.email,
                "phone": result,
                "username": values.username,
                "password": values.password
            }).then(res => {
                router.push('/user/login')
            }).catch(er => {
                console.log(er);
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
                <title>MOdevco | Register</title>
            </Head>
            <Box display={'flex'} justifyContent={'space-between'} height={'100px'}>

                <Box p={{ base: 10, lg: '90px' }} display={'flex'} flexDirection={'column'} gap={3}>
                    <Link href={'/'}>
                        <Flex gap={2} alignItems={'center'}>
                            <Image width={'50'} src={Logo}></Image>
                            <Heading color={'#3F9CFB'}>MOdevco</Heading>
                        </Flex>
                    </Link>

                    <Box>
                        <Heading fontSize={{ base: '40px', lg: '60px' }} color={'#1C3554'}>Ro'yxatdan o'tish!</Heading><br />
                        <Text fontSize={'18px'} color={'gray'} maxW={'500px'}>Ro'yxatdan o'tishingiz platformani sifatini yahshilash uchun hizmat qilishi mumkin. Siz uchun platformadan to'liq foidalanish imkonini beradi.</Text>
                    </Box>

                    <Flex flexDirection={'column'} gap={5}>
                        <FormControl isRequired>
                            <FormLabel >Ismingiz?</FormLabel>
                            <Input value={values.name} onChange={(e) => setValues({ ...values, name: e.target.value })} bg={'#F3F4F6'} type='text' placeholder={'ism...'} h={'50px'} />
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel>Emailingiz?</FormLabel>
                            <Input value={values.email} onChange={(e) => setValues({ ...values, email: e.target.value })} bg={'#F3F4F6'} type='email' placeholder={'email...'} h={'50px'} />
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel>Telefon raqamingiz?</FormLabel>
                            <Input value={values.phone} onChange={(e) => setValues({ ...values, phone: e.target.value })} ref={inputRef2} bg={'#F3F4F6'} type='text' placeholder={'+998...'} h={'50px'} />
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel>Foidalanuvchi nomi</FormLabel>
                            <Input value={values.username} onChange={(e) => setValues({ ...values, username: e.target.value })} bg={'#F3F4F6'} type='text' placeholder={'nom...'} h={'50px'} />
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel>Foidalanuvchi paroli</FormLabel>
                            <Box display={'flex'} alignItems={'center'} h={'50px'} bg={'#F3F4F6'} border={'1px'} rounded={'5px'} borderColor={'#E2E8F0'}>
                                <Input
                                    type={show ? 'text' : 'password'}
                                    placeholder={'parol...'}
                                    style={{ border: 'none' }}
                                    value={values.password} onChange={(e) => setValues({ ...values, password: e.target.value })}
                                />
                                <Button h={'0px'} fontSize={'20px'} onClick={handleClick}>
                                    {show ? <FaRegEyeSlash /> : <LiaEyeSolid />}
                                </Button>
                            </Box>
                        </FormControl>

                        <Link href={'/user/login'}>
                            <Text textDecoration={'underline'} color={'blue'}>Akkountingiz bormi?</Text>
                        </Link>

                        <Box>
                            <Button onClick={registerHandle} h={'50px'} w={'100%'} bg={'#3F9CFB'} color={'white'} _hover={{ bg: '' }} _active={{ bg: '' }}>Ro'yxatdan o'tish</Button>
                        </Box>
                    </Flex>
                </Box>


                <Box display={{ base: 'none', md: 'none', lg: 'block' }}>
                    <Image src={register} width={'793'} height={'700px'}></Image>
                </Box>


            </Box>
        </Box>
    )
}

export default Register