import { Logo } from '@/public'
import { Avatar, Box, Button, Flex, Heading, IconButton, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import axios from 'axios'
import { api } from '@/api/api'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from '@chakra-ui/react'
import Menuu from '../menu/menu'
import { AddIcon, ArrowLeftIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, RepeatIcon } from '@chakra-ui/icons'
const Navbar = () => {
    const pathname = usePathname()
    const [show, setShow] = useState(true)
    const [data, setData] = useState('')
    useEffect(() => {
        if (localStorage.getItem('token')) {
            setShow(false)
        }
    }, [show])

    useEffect(() => {
        if (localStorage.getItem('token')) {
            axios.get(`${api}api/user/get/one`, {
                headers: {
                    'token': localStorage.getItem('token')
                }
            }).then(res => {
                setData(res.data.username)
            })
        }
    }, [data])
    return (
        <Box bg={'white'} boxShadow={'2xl'} position={'fixed'} w={'100%'} px={5} zIndex={1000}>
            <Flex alignItems={'center'} className='wrapper' justifyContent={'space-between'} fd>
                <Link href={'/'}>
                    <Box display={'flex'} alignItems={'center'} gap={1}>
                        <Image style={{ width: '45px' }} src={Logo} alt='logo'></Image>
                        <Heading fontSize={{ base: '24px', md: '35px' }} color={'#3F9CFB'}>MOdevco</Heading>
                    </Box>
                </Link>

                <Box display={{ base: 'none', md: 'none', lg: 'block' }} className='navbar_links'>
                    <Flex gap={'30px'}>
                        <Link className={`link ${pathname === '/' ? 'active' : ''}`} style={{ fontSize: '17px', color: '#1C3554', fontWeight: 'bold' }} href={'/'}>BOSH SAHIFA</Link>
                        <Link className={`link ${pathname === '/faq' ? 'active' : ''}`} style={{ fontSize: '17px', color: '#1C3554', fontWeight: 'bold' }} href={'/faq'}>FAQ</Link>
                        {/* <Link style={{ fontSize: '17px', color: '#1C3554', fontWeight: 'bold' }} href={'#'}>IZOHLAR</Link> */}
                        {/* <Link style={{ fontSize: '17px', color: '#1C3554', fontWeight: 'bold' }} href={'#'}>FOIDALI</Link> */}
                        <Link className={`link ${pathname === '/contact' ? 'active' : ''}`} style={{ fontSize: '17px', color: '#1C3554', fontWeight: 'bold' }} href={'/contact'}>MUROJAT</Link>
                        <Link className={`link ${pathname === '/downloads' ? 'active' : ''}`} style={{ fontSize: '17px', color: '#1C3554', fontWeight: 'bold' }} href={'/downloads'}>YUKLAMALAR</Link>
                    </Flex>
                </Box>

                {show && <Box display={{ base: 'none', md: 'none', lg: 'block' }}>
                    <Flex gap={10}>
                        <Link href={'/user/login'}>
                            <Button variant={'outline'} border={'1px'} borderColor={'#3F9CFB'} width={'154px'} h={'51px'}>Kirish</Button>
                        </Link>
                        <Link href={'/user/register'}>
                            <Button bg={'#3F9CFB'} color={'white'} _hover={{ bg: '' }} _active={{ bg: '' }} width={'203px'} h={'51px'}>RO’YHATDAN O’TISH</Button>
                        </Link>
                    </Flex>

                </Box>}

                {!show && <Flex display={{ base: 'none', md: 'none', lg: 'block' }} alignItems={'center'} gap={3} cursor={'pointer'}>

                    <Menu>
                        <MenuButton
                            aria-label='Options'
                            variant='outline'
                        >
                            <Box display={'flex'} alignItems={'center'} gap={3}>
                                <Avatar />
                                <Text fontSize={'20px'} fontWeight={'bold'} color={'#3E9CFA'}>{data}</Text>
                            </Box>
                        </MenuButton>
                        <MenuList>
                            <MenuItem onClick={() => {
                                window.location.reload()
                            }} icon={<RepeatIcon />} command='⌘R'>
                                Yangilash
                            </MenuItem>
                            <MenuItem onClick={() => {
                                localStorage.clear()
                                window.location.reload()
                            }} color={'red'}  fontWeight={'bold'}icon={<ArrowLeftIcon />} command='⌘O'>
                                Chiqish
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>}


                <Box display={{ base: 'block', md: 'block', lg: 'none' }} className='navbar_menu'>
                    <Menuu data={data} />
                </Box>

            </Flex>
        </Box>
    )
}

export default Navbar