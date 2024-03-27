import { api } from '@/api/api'
import { angular, chakra, java, js, nextjs, node, nuxt, php, py, reactjs, typeS, vue } from '@/public'
import { Box, Heading } from '@chakra-ui/react'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Puff } from 'react-loader-spinner'

const Texnalogi = () => {
  const [data, setData] = useState([])
  const [loader , setLoader] = useState(true)

  useEffect(() => {
    axios.get(`${api}api/text/get` , {headers: {
      "ngrok-skip-browser-warning": true,
      "Access-Control-Allow-Origin": "*",
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS, HEAD',
    }})
      .then(res => {
        setData(res.data.data);
        setLoader(false)

      })
  }, [])
  return (
    <Box px={5} minH={'100%'} display={'flex'} mt={20}>
      <Box className='wrapper' display={'flex'} flexDirection={'column'} gap={20}>
        <Box textAlign={'center'}>
          <Heading fontSize={{ base: '30px', md: '48px' }} color={'#fff'}>Mashxur texnalogiyalar</Heading>
        </Box>

        <Box display={'flex'} gap={20} className='imgHov' flexWrap={'wrap'} justifyContent={'center'} alignItems={'center'} >
          {data.map((im, i) => (
            <Link href={im.url} target='_blank' key={i}>
              <img style={{ borderRadius: '10px' }} src={`${api}images/${im.image}`} width={'100'} height={'100'} alt='image'></img>
            </Link>
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
  )
}

export default Texnalogi