import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { car1, car2, car3, car4, car5, car6, car7, car8 } from '@/public';
const AboutTeach = () => {
    return (
        <Box minH={'75vh'}>
            <Box width={'100%'} h={'650px'} bg={'#091629'} position={'relative'} overflow={'hidden'}>
                <Box className='shadoww'>

                </Box>

                <Box className='shadowww' display={{base: 'none' , md: 'block'}}>

                </Box>

                <Box className='wrapper'  py={20} display={'flex'} justifyContent={'center'} alignItems={'center'} minH={'100%'} >
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                          }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <Image src={car1}></Image>
                            <Heading color={'white'} fontSize={'25px'}>Siz istagan kunda</Heading>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={car2}></Image>
                            <Heading color={'white'} fontSize={'25px'}>Jamoaviy ishlash</Heading>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={car3}></Image>
                            <Heading color={'white'} fontSize={'25px'}>Eng oldi texnalogiyalar</Heading>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={car4}></Image>
                            <Heading color={'white'} fontSize={'25px'}>Do'slar bilan qiziqroq</Heading>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={car5}></Image>
                            <Heading color={'white'} fontSize={'25px'}>Yahshi mehnat</Heading>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={car7}></Image>
                            <Heading color={'white'} fontSize={'25px'}>Hoziroq boshla</Heading>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={car8}></Image>
                            <Heading color={'white'} fontSize={'25px'}>Muamo juda kam</Heading>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={car6}></Image>
                            <Heading color={'white'} fontSize={'25px'}>Va g'alaba</Heading>
                        </SwiperSlide>
                    </Swiper>
                </Box>
            </Box>
        </Box>
    )
}

export default AboutTeach