import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const AboutMentor = () => {
    return (
        <Box mt={40} minH={'100vh'} display={'flex'} justifyContent={'center'}px={5} >
            <Box className='wrapper' display={'flex'} alignItems={'center'} justifyContent={'center'} gap={10} width={'100%'} flexDirection={{base: 'column' , md: 'row'}} >
                <Box>
                    <video autoPlay loop muted playsInline style={{borderRadius: '19px'}}>
                        <source src='../anim.mp4' style={{ width: '100%',height: '100%'  }} />
                    </video>
                </Box>

                <Flex flexDirection={'column'} alignContent={'flex-start'} justifyContent={'flex-start'} gap={10}>
                    <Heading fontSize={'50px'} color={'#ffff'}>Mentor</Heading>
                    <Text maxW={'600px'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, illum necessitatibus ab iusto nihil eum ad exercitationem harum, nostrum consequuntur amet id nisi illo, suscipit odit laboriosam accusamus ex ipsum expedita veniam excepturi. Quaerat sequi accusantium ex voluptatem laboriosam non consequatur nam iure accusamus. A, saepe in consequatur impedit earum id optio distinctio cumque obcaecati tempore ex nostrum aspernatur <br /> <br /> minus, repudiandae libero quam natus quas culpa? Exercitationem incidunt delectus veritatis odit praesentium illo, id magni deleniti quo. Et modi vitae enim amet sint temporibus inventore sapiente optio, doloribus dolores consequuntur nam natus, officia voluptatum perferendis pariatur dolorum corporis eius impedit.</Text>
                    <Link href={'#course'} >
                        <Button width={{base: '100%' , md: '200px'}} bg={'#3F9CFB'} className='line' _hover={{ bg: '1' }} color={'white'} h={'50px'}>O'rganishni boshlang!</Button>
                    </Link>
                </Flex>
            </Box>
        </Box>
    )
}

export default AboutMentor