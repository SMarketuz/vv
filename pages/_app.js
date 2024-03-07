import Footer from "@/components/Footer/footer";
import Navbar from "@/components/Navbar/navbar";
import "@/styles/globals.css";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaQuestion } from "react-icons/fa";
export default function App({ Component, pageProps }) {
  const [show, setShow] = useState(true)

  useEffect(() => {
    if(window.location.pathname == '/register' || window.location.pathname == '/login') {
      setShow(false)
    }
  } ,[show])
  return (
    <>
      <ChakraProvider>
        <Head>
          <link rel="shortcut icon" href='/logo.png' />
        </Head>
        {/* {show &&} */}
        <Component {...pageProps} />
        {/* {show && } */}
        <Link target="_blank" href={'https://t.me/MOdevco'} >
          <Box position={'fixed'} right={10} bottom={10} className="line"  width={'50px'} h={'50px'} bg={'#3F9CFB'} color={'white'} rounded={'100%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <FaQuestion />
          </Box>
        </Link>
      </ChakraProvider>
    </>
  );
}
