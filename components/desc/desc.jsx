import { nuba } from '@/public'
import { Box, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { GoVideo } from "react-icons/go";
import { FiUsers } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { CiFlag1 } from "react-icons/ci";
const Desc = () => {
    return (
        <Box  overflow={'hidden'}  mt={'200px'} bg={'#091629'} h={{base: '100%' , md: '450px'}} w={'100%'} color={'white'} p={10}  display={'flex'} alignItems={'center'} position={'relative'}>
            <Box  display={'flex'} gap={20} position={'relative'} zIndex={100} justifyContent={'space-evenly'} width={'100%'} color={'#1C3554'} flexWrap={'wrap'} className='wrapper ' alignItems={'center'}>
                <Box gap={5} fontSize={'32px'} color='#fff' textAlign={'center'} fontWeight={'bold'} justifyContent={'center'} alignItems={'center'} display={'flex'} flexDirection={'column'}>
                    <GoVideo fontSize={'70px'} />
                    <Text>10+ <br /> Kurslar</Text>
                </Box>
                <Box gap={5} fontSize={'32px'}color='#fff' textAlign={'center'} fontWeight={'bold'} justifyContent={'center'} alignItems={'center'} display={'flex'} flexDirection={'column'}>
                    <FiUsers fontSize={'70px'}  />
                    <Text>50+ <br /> O’quvchilar</Text>
                </Box>
                <Box gap={5} fontSize={'32px'}color='#fff' textAlign={'center'} fontWeight={'bold'} justifyContent={'center'} alignItems={'center'} display={'flex'} flexDirection={'column'}>
                    <FaRegUserCircle fontSize={'70px'}   />
                    <Text>1 <br /> Yagona mentor</Text>
                </Box>
                <Box gap={5} fontSize={'32px'}color='#fff' textAlign={'center'} fontWeight={'bold'} justifyContent={'center'} alignItems={'center'} display={'flex'} flexDirection={'column'}>
                    <CiFlag1  fontSize={'70px'}  />
                    <Text>4 <br /> Davlarlar</Text>
                </Box>
            </Box>

            <Box display={{base: 'none' , md: 'block'}} position={'absolute'} className='shadoww2 '>

            </Box>
            <Box position={'absolute'} className='shadowww2 '>

            </Box>

            <Box display={{ base: 'none', md: 'block' }}>
                <Image style={{ position: 'absolute', right: 0, top: '200px' }} width={'150'} src={nuba}></Image>
            </Box>
        </Box>
    )
}

export default Desc