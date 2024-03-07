import { ForFooter, Logo } from '@/public'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaTelegram ,FaYoutube ,FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <Box mt={20}>
      <Box width={'100%'} p={10}  className='wrapper' bg={'#091629'} h={{base: '100%' , md: '40vh'}} rounded={'8px'}>
        <Box h={'100%'} display={'flex'} justifyContent={'space-between'} flexDirection={{base: 'column' , md: 'row'}} gap={10} alignItems={'flex-end'}> 
          <Box display={'flex'} flexDirection={'column'} justifyContent={'space-between'} h={'100%'}>
            <Box>
              <Flex alignItems={'center'} gap={2} color={'white'}>
                <Image width={'50'} src={Logo}></Image>
                <Heading color={'#3F9CFB'}>MOdevco</Heading>
              </Flex>
              <br /><br />
              <Text maxW={'500px'} color={'white'}>Agarda sizda qandaydir muammo chiqqan bo‘lsa, muammolaringizni tezlik bilan yechishni xohlasangiz bizni telegam guruhimizda buni imkoni bor. Telegram guruhimizga qo‘shiling. Bizni boshqa ijtimoiy kanalardayam kuzatishingiz mumkin.</Text>
            </Box>

            <Box color={'white'} fontSize={'20px'} fontWeight={'bold'}>
              <Text>MOdevco online Akademiyasi</Text>
            </Box>


          </Box>


          <Box color={'white'} fontSize={'20px'} fontWeight={'bold'} display={'flex'} alignItems={{base: 'flex-start' , md: 'flex-end'}} flexDirection={'column'}>
            <Flex gap={5} fontSize={'30px'}>
              <Box _hover={{color: '#3F9CFB'}} transition={'0.5s'}>
                <Link target='_blank' href={'https://t.me/modevco_online_school'}>
                  <FaTelegram />
                </Link>
              </Box>
              <Box _hover={{color: '#3F9CFB'}} transition={'0.5s'}>     
                <Link target='_blank' href={'https://www.youtube.com/@MOdevco'}>
                  <FaYoutube  />
                </Link>
              </Box>
              <Box _hover={{color: '#3F9CFB'}} transition={'0.5s'}>
                <Link target='_blank' href={'https://www.instagram.com/mo_devco/'}>
                  <FaInstagram />
                </Link>
              </Box>
            </Flex>
            <Text>@ MOdevco 2024. Barcha huquqlardan himoyalangan.</Text>
          </Box>

        </Box>
      </Box>
    </Box>
  )
}

export default Footer