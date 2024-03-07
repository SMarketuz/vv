import React, { useEffect, useRef, useState } from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Flex,
    Box,
    Heading,
    Divider,
    Avatar,
    Text,
} from '@chakra-ui/react'
import { FaChevronCircleLeft } from "react-icons/fa";
import { HamburgerIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import Image from 'next/image'
import { Logo } from '@/public'
const Menuu = ({ data }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    const [show, setShow] = useState(true)
    useEffect(() => {
        if (localStorage.getItem('token')) {
            setShow(false)
        }
    }, [show])

    const clearLocal = () => {
        localStorage.clear()
        window.location.reload()
    }
    return (
        <>
            <Button ref={btnRef} bg={'transparent'} fontSize={'40px'} _active={{ bg: '' }} _hover={{ bg: '' }} onClick={onOpen}>
                <HamburgerIcon />
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent display={'flex'} gap={5} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} >
                    <DrawerBody width={'100%'}>

                        <Box display={'flex'} alignItems={'center'} gap={1} borderBottom={'1px'} pb={3} borderColor={'gray'}>
                            <Image src={Logo} style={{ width: '40px' }}></Image>
                            <Heading>MOdevco</Heading>
                        </Box>
                        <br />
                       {!show &&  <Flex alignItems={'center'} gap={3} cursor={'pointer'} flexDirection={'column'} borderBottom={'1px'} pb={3} borderColor={'gray'}>
                            <Avatar />
                            <Text fontSize={'20px'} fontWeight={'bold'} color={'#3E9CFA'}>{data}</Text>
                        </Flex>}
                        <br />

                        <Flex gap={'20px'} flexDirection={'column'} justifyContent={'flex-end'} alignItems={'center'}>
                            <Link style={{ fontSize: '20px', color: '#1C3554', fontWeight: 'bold' }} href={'/'}>BOSH SAHIFA</Link>
                            <Link style={{ fontSize: '20px', color: '#1C3554', fontWeight: 'bold' }} href={'/faq'}>FAQ</Link>
                            <Link style={{ fontSize: '20px', color: '#1C3554', fontWeight: 'bold' }} href={'/contact'}>MUROJAT</Link>
                            {/* <Link style={{ fontSize: '20px', color: '#1C3554', fontWeight: 'bold' }} href={'#'}>IZOHLAR</Link> */}
                            <Link style={{ fontSize: '20px', color: '#1C3554', fontWeight: 'bold' }} href={'/downloads'}>YUKLAMALAR</Link>
                        </Flex>
                        <br />
                        {show && <Box display={{ base: 'block', md: 'none' }}>
                            <Flex flexDirection={'column'} gap={3}>
                                <Link href={'/user/login'}>
                                    <Button variant={'outline'} border={'1px'} borderColor={'#3F9CFB'} width={'100%'} h={'51px'}>Kirish</Button>
                                </Link>
                                <Link href={'/user/register'}>
                                    <Button bg={'#3F9CFB'} className='line' color={'white'} _hover={{ bg: '' }} _active={{ bg: '' }} width={'100%'} h={'51px'}>RO’YHATDAN O’TISH</Button>
                                </Link>
                            </Flex>
                        </Box>}

                        {!show && <Box>
                            <Button onClick={clearLocal} variant={'outline'} display={'flex'} gap={3} width={'100%'} h={'51px'} bg={'red'} color={'white'} _hover={{bg: ''}}>
                                <FaChevronCircleLeft />
                                Chiqish
                            </Button>
                        </Box>}
                    </DrawerBody>

                </DrawerContent>
            </Drawer>

        </>
    )
}

export default Menuu