import { Box, Heading, TabIndicator } from '@chakra-ui/react'
import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import AllCourse from '../allCourse/allCourse'
import Link from 'next/link'
const Courses = () => {
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
                        <TabList display={'flex'} gap={5} justifyContent={{ base: 'flex-start', md: 'center' }} flexWrap={{ base: 'wrap', md: 'nowrap' }}>
                            <Tab _hover={{bg: '#3F9CFB'}} width={{base: '100%' , md: '200px'}} border={'2px'} borderColor={'#3F9CFB'} _selected={{bg: '#3F9CFB' , filter: ' drop-shadow( -1px 1px 7px #3F9CFB)'}} color={'white'} fontSize={'22px'} rounded={'5px'}>Barchasi</Tab>
                            <Tab _hover={{bg: '#3F9CFB'}} width={{base: '100%' , md: '200px'}} border={'2px'} borderColor={'#3F9CFB'} _selected={{bg: '#3F9CFB' , filter: ' drop-shadow( -1px 1px 7px #3F9CFB)'}} color={'white'} fontSize={'22px'} rounded={'5px'} >Frontend</Tab>
                            <Tab _hover={{bg: '#3F9CFB'}} width={{base: '100%' , md: '200px'}} border={'2px'} borderColor={'#3F9CFB'} _selected={{bg: '#3F9CFB' , filter: ' drop-shadow( -1px 1px 7px #3F9CFB)'}} color={'white'} fontSize={'22px'} rounded={'5px'} >Backend</Tab>
                            <Tab _hover={{bg: '#3F9CFB'}} width={{base: '100%' , md: '200px'}} border={'2px'} borderColor={'#3F9CFB'} _selected={{bg: '#3F9CFB' , filter: ' drop-shadow( -1px 1px 7px #3F9CFB)'}} color={'white'} fontSize={'22px'} rounded={'5px'} >FullStack</Tab>
                            <Tab _hover={{bg: '#3F9CFB'}} width={{base: '100%' , md: '200px'}} border={'2px'} borderColor={'#3F9CFB'} _selected={{bg: '#3F9CFB' , filter: ' drop-shadow( -1px 1px 7px #3F9CFB)'}} color={'white'} fontSize={'22px'} rounded={'5px'} >Projects</Tab>
                        </TabList>
                      {/* bg="#3F9CFB" */}
                        <TabPanels pt={10} pl={{base: 0 , md: 12}}>
                            <TabPanel display={'flex'} alignItems={'center'} flexWrap={'wrap'} justifyContent={{ base: 'center', xl: 'flex-start' }} gap={10}>
                                <AllCourse />
                                <AllCourse />
                                <AllCourse />
                                <AllCourse />
                                <AllCourse />
                                <AllCourse />
                                <AllCourse />
                                <AllCourse />
                                <AllCourse />
                                <AllCourse />
                                <AllCourse />
                                <AllCourse />
                            </TabPanel>
                            <TabPanel display={'flex'} alignItems={'center'} flexWrap={'wrap'} justifyContent={{ base: 'center', xl: 'flex-start' }} gap={10}>
                                <AllCourse />
                                <AllCourse />
                                <AllCourse />
                            </TabPanel>
                            <TabPanel display={'flex'} alignItems={'center'} flexWrap={'wrap'} justifyContent={{ base: 'center', xl: 'flex-start' }} gap={10}>
                                <AllCourse />
                                <AllCourse />
                                <AllCourse />
                            </TabPanel>
                            <TabPanel display={'flex'} alignItems={'center'} flexWrap={'wrap'} justifyContent={{ base: 'center', xl: 'flex-start' }} gap={10}>
                                <AllCourse />
                                <AllCourse />
                                <AllCourse />
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>
            </Box>
        </Box>
    )
}

export default Courses