import Navbar from '@/components/Navbar/navbar'
import { reactjs, reactjs2 } from '@/public'
import { Box, Button, Divider, Flex, Heading, Text, useDisclosure } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { MdOutlineVerified } from "react-icons/md";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import ReactPlayer from 'react-player'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import Footer from '@/components/Footer/footer'
import Link from 'next/link'
import axios from 'axios'
import { api } from '@/api/api'
import { IoIosVideocam , IoMdCard } from "react-icons/io";
import { FaRegChartBar } from "react-icons/fa";
const VideoID = () => {
  const router = useRouter()
  const videoId = router.query.videoId ? router.query.videoId : '65ee5c2e9c67a13b338a46b4'
  const [data, setData] = useState([])
  const [count, setCount] = useState([])
  const [videos, setVideos] = useState([])
  const [videosName, setVideosName] = useState([])
  const [level, setLevel] = useState('')

  useEffect(() => {
    axios.get(`${api}api/video/get/by-category?course=${videoId}` , {
      headers: {
        "ngrok-skip-browser-warning": true,
        "Access-Control-Allow-Origin": "*",
    }
    })
      .then(res => {
        setData(res.data.data[0]);
        setCount(res.data.data);
        setVideos(res.data.data);
        setLevel(res.data.data[0]?.course.level)
      })
  }, [videoId])

  // useEffect(() => {
  //   axios.get(`${api}api/fakt/get/byID/${fakt ? fakt : '65f2a2eb7c77ad1975761b24'}`)
  //     .then(res => {
  //       setFakt2(res.data.data)
  //     })
  // }, [])

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [size, setSize] = useState('md')
  const [nameVideo, setNameVideo] = useState('')
  const handleSizeClick = (newSize) => {
    setSize(newSize)
    onOpen()
  }

  const sizes = ['full']
  return (
    <Box >
      <Head>
        <title>MOdevco | Videos</title>
      </Head>
      <Box minH={'10vh'} >
        <Navbar />
      </Box>


      <Box>
        <Box className='wrapper' color={'white'} >
          <Box width={'100%'} h={'100%'} p={10} bg={'#091629'} rounded={'10px'} display={'flex'} justifyContent={{ base: 'center', md: 'space-evenly' }} gap={4} alignItems={'center'} flexDirection={{ base: 'column-reverse', md: 'row' }}>
            <Box>
              <Heading>{data ? data?.course?.title + "ni mukammal o'rganing" : 'Darslik Mavjud emas'}</Heading><br />
              <Text fontSize={'18px'} maxW={'700px'}>{data ? data?.course?.information : 'Darslik Mavjud emas'}</Text>
              <br /><br />
              <Box display={'flex'} alignItems={'center'} gap={3} flexDirection={{base: 'column' , md: 'row'}}>
                <Text color={'#3F9CFB'} fontWeight={'bold'} fontSize={'20px'} display={'flex'} alignItems={'center' } gap={2}><IoIosVideocam /> Darslar soni {count.length} ta</Text>
                <Text color={'#3F9CFB'} fontWeight={'bold'} fontSize={'20px'} display={'flex'} alignItems={'center' } gap={2}><FaRegChartBar /> Daraja {level}</Text>
                <Text color={'#3F9CFB'} fontWeight={'bold'} fontSize={'20px'} display={'flex'} alignItems={'center' } gap={2}><IoMdCard />Sertifikan yo'q</Text>
              </Box>
            </Box>

            <Box>
              <img src={`${api}images/${data?.course?.image}`} width={'400'} alt='Darsliklar suratlari' />
            </Box>
          </Box>
        </Box>

        <Box className='wrapper' display={'flex'} justifyContent={{ base: 'center', md: 'space-around' }} gap={5} pt={20} flexDirection={{ base: 'column-reverse', md: 'row' }}>
          <Box width={{ base: '100%', md: '50%' }} h={'100%'} p={10} bg={'#091629'} rounded={'10px'} color={'white'}>
            <Box><Heading>Nimalarni o'rganasiz</Heading></Box>
            <br /><br />

            <Box >
              {data?.course?.learn.map((item, i) => (
                <Flex alignItems={'flex-start'} gap={2} color={'#3F9CFB'}>
                  <MdOutlineVerified fontSize={'40px'} />
                  <Text fontSize={'24px'}>{item}</Text>
                </Flex>
              ))}
            </Box>
          </Box>



          <Box width={{ base: '100%', md: '30%' }} h={'100%'} p={3} border={'1px'} rounded={'10px'} borderColor={'#3F9CFB'} display={'flex'} flexDirection={'column'} gap={4}>
            <Box className='line2' >
              {/* <video src={`${api}videos/${fakt2.video}`} controls></video> */}
            </Box>
            <Box><Heading fontSize={'20px'}>Kurs haqida ma'lumot</Heading></Box>
            <Box><Heading>Bepul</Heading></Box>
            <Divider />
            <Button onClick={() => {
              if (!localStorage.getItem('token')) {
                router.push('/user/login')
              }
            }} h={'50px'} bg={'#3F9CFB'} className='line' color={'white'} _hover={{ bg: '' }}>Boshlash</Button>
          </Box>



        </Box>

        <Box className='wrapper' >
          <Box textAlign={{ base: 'center', md: 'start' }} mx={5}>
            <Heading>Mentor</Heading>
          </Box>
          <br />
          <Flex gap={4} flexDirection={{ base: 'column', md: 'row' }} alignItems={'center'} mx={5}>
            <Box>
              <video autoPlay loop muted playsInline style={{ borderRadius: '19px', width: '400px' }}>
                <source src='../../anim.mp4' />
              </video>
            </Box>

            <Box>
              <Heading>Muhammadali Anvarov</Heading>
              <Text fontSize={'17px'} color={'gray'}>FullStack dasturchi. 3 yildan ortiq tajribaga ega dasturchi</Text><br />
              <Text maxW={'500px'}>Muhammadali Anvarov 19 yosh. Farg‘ona viloyati Quva tumanida yashaydi hozirda. Fullstack dasturchi bo‘lib ishlaydi, hozirgacha ko‘plab o‘quvchilarni o‘qitgan va hoziram o‘qitib keladi.</Text>
            </Box>
          </Flex>
        </Box>

        <br /><br />
        <Box className='wrapper' id='video_course' >
          <Accordion allowToggle mx={5}>


            <AccordionItem border={'none'} bg={'#3F9CFB'} color={'white'} rounded={'5px'} onClick={() => {
              if (!localStorage.getItem('token')) {
                router.push('/user/login')
              }
            }}>
              <Box>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                      Video darsliklar
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                {videos?.map((video, i) => (
                  <AccordionPanel pb={4} key={i} cursor={'pointer'}>
                    {sizes.map((size) => (
                      <Box onClick={() => {
                        handleSizeClick(size)
                        setNameVideo(video.video)
                        setVideosName(video.name)
                      }}
                        key={size}>
                        {video.name}
                      </Box>
                    ))}
                  </AccordionPanel>
                ))}

                <Modal onClose={onClose} size={size} isOpen={isOpen} >
                  <ModalContent display={'flex'} justifyContent={'center'} w={'100%'} bg={'#2D3748'} color={'white'}>
                    <ModalHeader>{videosName}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody display={'flex'} justifyContent={'center'}>
                      <video src={`${api}videos/${nameVideo}`} controls autoPlay style={{ width: '80%' }}></video>
                    </ModalBody>
                    <ModalFooter>
                      <Button onClick={onClose} bg={'#3F9CFB'} color={'white'} _hover={{ bg: '' }}>Yakunlash</Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </Box>
            </AccordionItem>

          </Accordion>
        </Box>
      </Box>



      <Box>
        <Footer />
      </Box>
    </Box>
  )
}

export default VideoID