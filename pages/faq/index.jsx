import Footer from '@/components/Footer/footer'
import Navbar from '@/components/Navbar/navbar'
import { faq } from '@/public'
import { Box, Heading } from '@chakra-ui/react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'
import Head from 'next/head'
import axios from 'axios'
import { api } from '@/api/api'
import { Puff } from 'react-loader-spinner'
const Faq = () => {
    const [data, setData] = useState([])
    const [loader, serLoader] = useState(true)
    useEffect(() => {
        axios.get(`${api}api/faq/get`)
            .then(res => {
                setData(res.data.data)
                serLoader(false)
            })
    }, [])
    return (
        <Box width={'100%'}>
            <Head>
                <title>MOdevco | Faq</title>
            </Head>
            <Box minH={'10vh'}>
                <Navbar />
            </Box>


            <Box minH={'40vh'} px={5}>
                <Box className='wrapper borderLeft' h={'100%'} p={10} bg={'#091629'} roundedTopRight={'8px'} roundedBottomRight={'8px'} color={'white'} display={'flex'} w={'100%'} flexDirection={'column'} gap={10}>
                    <Box>
                        <Heading>Ko'p Beriladigan Savollar</Heading>
                    </Box>
                    <Box display={'flex'} flexDirection={'column-reverse'}>
                        {data.map((item, i) => (
                            <Accordion allowToggle width={'100%'} key={i} >
                                <AccordionItem borderBottom={'1px'} borderTop={'none'} borderColor={'#3F9CFB'}>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' fontSize={'20px'} textAlign='left'>
                                                {item.question}
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4} fontSize={'20px'}>
                                        {item.answer}
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        ))}

                    </Box>
                    {loader && <Box display={'flex'} justifyContent={'center'} className='line'>
                        <Puff
                            visible={true}
                            height="80"
                            width="80"
                            color="#3F9CFB"
                            ariaLabel="puff-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                        />
                    </Box>}
                </Box>
            </Box>




            <Footer />
        </Box>
    )
}

export default Faq