import { Box, Heading, TabIndicator } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import AllCourse from '../allCourse/allCourse'
import Link from 'next/link'
import axios from 'axios'
import { api } from '@/api/api'
import Frontend from '../Frontend/frontend'
import Backend from '../Backend/backend'
import Fullstack from '../Fullstack/fullstack'
import Project from '../Project/project'
const Courses = () => {
    const [data, setData] = useState([])
    const [pres, setPres] = useState([])
    const [apis, setApis] = useState('api/course/category')
    useEffect(() => {
        axios.get(`${api}${apis}` , {
            headers: {
                "ngrok-skip-browser-warning": true,
                "Access-Control-Allow-Origin": "*",
            }
        })
            .then(res => {
                setData(res.data.data)
                setPres(res.data.data)
            })
    }, [apis])
    return (
        <Box px={5} position={'relative'} width={'100%'} bg={'#091629'} display={'flex'} justifyContent={'center'} alignItems={'center'} mt={20} p={10}>
            <Box display={'flex'} flexDirection={'column'} gap={'60px'}>
                <Box textAlign={'center'} >
                    <Heading color={'white'} fontSize={{ base: '30px', md: '48px' }}>Mavjud kurslar turlari</Heading>
                </Box>
                {/* <Box className='shadoww'></Box> */}
                {/* <Box className='shadowww'></Box> */}
                <Box >
                    <Tabs position="" variant="none">
                        <TabList display={'flex'} gap={5} justifyContent={{ base: 'flex-start', md: 'center' }} flexWrap={'wrap'}>
                            <Tab  _hover={{ bg: '#3F9CFB' }} width={{ base: '100%', md: '200px' }} border={'2px'} borderColor={'#3F9CFB'} _selected={{ bg: '#3F9CFB', filter: ' drop-shadow( -1px 1px 7px #3F9CFB)' }} color={'white'} fontSize={'22px'} rounded={'5px'}>Barchasi</Tab>

                            <Tab  _hover={{ bg: '#3F9CFB' }} width={{ base: '100%', md: '200px' }} border={'2px'} borderColor={'#3F9CFB'} _selected={{ bg: '#3F9CFB', filter: ' drop-shadow( -1px 1px 7px #3F9CFB)' }} color={'white'} fontSize={'22px'} rounded={'5px'} >Frontend</Tab>

                            <Tab _hover={{ bg: '#3F9CFB' }} width={{ base: '100%', md: '200px' }} border={'2px'} borderColor={'#3F9CFB'} _selected={{ bg: '#3F9CFB', filter: ' drop-shadow( -1px 1px 7px #3F9CFB)' }} color={'white'} fontSize={'22px'} rounded={'5px'} >Backend</Tab>

                            <Tab _hover={{ bg: '#3F9CFB' }} width={{ base: '100%', md: '200px' }} border={'2px'} borderColor={'#3F9CFB'} _selected={{ bg: '#3F9CFB', filter: ' drop-shadow( -1px 1px 7px #3F9CFB)' }} color={'white'} fontSize={'22px'} rounded={'5px'} >FullStack</Tab>

                            <Tab  _hover={{ bg: '#3F9CFB' }} width={{ base: '100%', md: '200px' }} border={'2px'} borderColor={'#3F9CFB'} _selected={{ bg: '#3F9CFB', filter: ' drop-shadow( -1px 1px 7px #3F9CFB)' }} color={'white'} fontSize={'22px'} rounded={'5px'} >Projects</Tab>
                        </TabList>
                        {/* bg="#3F9CFB" */}
                        <TabPanels pt={10} pl={{ base: 0, md: 12 }}>

                            <TabPanel display={'flex'} alignItems={'center'} flexWrap={'wrap'} flexDirection={'row-reverse'}  justifyContent={{ base: 'center', xl: 'flex-end' }} gap={10}>
                                <AllCourse data={data} />
                            </TabPanel>

                            <TabPanel display={'flex'} alignItems={'center'} flexWrap={'wrap'} flexDirection={'row-reverse'}   justifyContent={{ base: 'center', xl: 'flex-end' }} gap={10}>
                                <Frontend />
                            </TabPanel>

                            <TabPanel display={'flex'} alignItems={'center'} flexWrap={'wrap'} flexDirection={'row-reverse'}  justifyContent={{ base: 'center', xl: 'flex-end' }} gap={10}>
                                <Backend />
                            </TabPanel>

                            <TabPanel display={'flex'} alignItems={'center'} flexWrap={'wrap'} flexDirection={'row-reverse'} justifyContent={{ base: 'center', xl: 'flex-end' }} gap={10}>
                                <Fullstack />
                            </TabPanel>
                            <TabPanel display={'flex'} alignItems={'center'} flexWrap={'wrap'} flexDirection={'row-reverse'}  justifyContent={{ base: 'center', xl: 'flex-start' }} gap={10}>
                                <Project />
                            </TabPanel>

                        </TabPanels>
                    </Tabs>
                </Box>
            </Box>
        </Box>
    )
}

export default Courses