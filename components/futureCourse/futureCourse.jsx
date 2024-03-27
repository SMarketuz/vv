import { Box, Flex, Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import FutureCourseCards from '../futureCourseCards/futureCourseCards'
import axios from 'axios'
import { api } from '@/api/api'
import { Puff } from 'react-loader-spinner'

const FutureCourse = () => {
  const [data, setData] = useState([])
  const [loader , setLoader] = useState(true)

  useEffect(() => {
    axios.get(`${api}api/future/get` , {
      headers: {
        "ngrok-skip-browser-warning": true,
        "Access-Control-Allow-Origin": "*",
      }
    })
      .then(res => {
        setData(res.data.data)
        setLoader(false)
      })
  }, [])
  return (
    <Box width={'100%'}   display={'flex'} justifyContent={'center'} alignItems={'flex-start'}>
      <Box className='wrapper' display={'flex'} mx={5} flexDirection={'column'} gap={20} justifyContent={'center'} alignItems={'center'}>
        <Box>
          <Heading fontSize={{ base: '25px', md: '50px' }} color={'#fff'}>Kutilayotgan kurslar.</Heading>
        </Box>

        <Flex gap={10} flexWrap={'wrap'} justifyContent={'center'}>
          {data.map((item, i) => (
            <FutureCourseCards key={i} item={item} />
          ))}
        </Flex>

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
  )
}

export default FutureCourse