import { api } from '@/api/api'
import Footer from '@/components/Footer/footer'
import Navbar from '@/components/Navbar/navbar'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Textarea,
    Box, Heading, Input, Button, Toast, useToast 
} from '@chakra-ui/react'
import axios from 'axios'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
const Contact = () => {

    const [val , setVal] = useState({name: '' , theme: '' , message: ''})
    const toast = useToast()
    const router = useRouter()
    const handleSubmit = () => {
        axios.post(`${api}api/contact/new`,{
            "name": val.name,
            "theme": val.theme,
            "message": val.message
        }, {
            headers: {
                "token": localStorage.getItem('token'),
                "ngrok-skip-browser-warning": true,
                "Access-Control-Allow-Origin": "*",
            }
        }).then(res => {
            if(res.data.status == true ) {
                setVal({name: '' , theme: '' , message: ''})
                toast({
                    description: res.data.message,
                    status: 'success',
                    position: 'top-right',
                    duration: 3000,
                    isClosable: true,
                })

            }else {
               
            }
        }).catch(err => {
            toast({
                description: err.response.data.message,
                status: 'error',
                position: 'top-right',
                duration: 3000,
                isClosable: true,
            })
        })
    }
    return (
        <Box>
            <Head>
                <title>MOdevco | Contact</title>
            </Head>
            <Box minHeight={'10vh'}>
                <Navbar />
            </Box>

            <Box minH={'70vh'} px={5}>
                <Box className='wrapper borderLeft' h={'100%'} p={10} bg={'#091629'} roundedTopRight={'8px'} roundedBottomRight={'8px'} color={'white'} display={'flex'} w={'100%'} flexDirection={'column'} gap={10}>
                    <Box>
                        <Heading>Murojatingizni yozing!</Heading>
                    </Box>
                    <Box display={'flex'} flexDirection={'column'} gap={5}>
                        <FormControl>
                            <FormLabel>Ismingiz?</FormLabel>
                            <Input value={val.name} onChange={e => setVal({...val , name: e.target.value})} _hover={{ border: ''}} height={'50px'} border={'1px'} borderColor={'#3F9CFB'} type='text' placeholder={'ism...'} />
                        </FormControl>

                        <FormControl>
                            <FormLabel>Mavzu?</FormLabel>
                            <Input value={val.theme} onChange={e => setVal({...val , theme: e.target.value})} _hover={{ border: ''}} height={'50px'} border={'1px'} borderColor={'#3F9CFB'} type='text' placeholder={'mavzu...'} />
                        </FormControl>

                        <FormControl>
                            <FormLabel>Xabar</FormLabel>
                            <Textarea value={val.message} onChange={e => setVal({...val , message: e.target.value})} _hover={{ border: ''}} border={'1px'} borderColor={'#3F9CFB'} rows={'7'} placeholder='xabar...' />
                        </FormControl>

                        <Button onClick={() => {
                            if(localStorage.getItem('token')) {
                                handleSubmit()
                            }else {
                                router.push('/user/login')
                            }
                        }} width={{base: '100%' , md: '200px'}} h={'50px'}  bg={'#3F9CFB'} color={'white'} className='line' _hover={{bg: ''}}>Jo'natish</Button>
                    </Box>
                </Box>
            </Box>




            <Footer />
        </Box>
    )
}

export default Contact