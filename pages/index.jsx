"use client"
import Courses from '@/components/Courses/courses'
import Footer from '@/components/Footer/footer'
import Navbar from '@/components/Navbar/navbar'
import Texnalogi from '@/components/Texnalogi/texnalogi'
import TopContent from '@/components/TopContent/topContent'
import AboutMentor from '@/components/aboutMentor/aboutMentor'
import AboutTeach from '@/components/aboutTeach/aboutTeach'
import Desc from '@/components/desc/desc'
import FutureCourse from '@/components/futureCourse/futureCourse'
import { Logo } from '@/public'
import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/router'
import React from 'react'

const App = () => {
   const params = useParams()
   console.log(params);
    return (
        <Box >
            <Head>
                <title>MOdevco</title>
            </Head>
          
            <Box minH={'10vh'}>
                <Navbar />
            </Box>

            <Box minH={'70vh'}>
                <TopContent />
            </Box>

            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} >
                <Courses />
            </Box>

            <Box>
                <Texnalogi />
            </Box>

            <Box>
                <Desc />
            </Box>

            <Box>
                <AboutMentor />
            </Box>

            <Box>
                <AboutTeach />
            </Box>

            <Box>
                <FutureCourse />
            </Box>

            <Box>
                <Footer />
            </Box>
        </Box>
    )
}

export default App