import {   Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const Boxs = ({Title,Descripation,image,link,color}) => {
  return (
    <Card as={'b'} className='project' margin={"5px"}  maxW='sm' p={'10px'} borderRadius={'10px'} bgColor={color}>
  <CardBody>
    <Image
      src={image}
      alt='Green double couch with wooden legs'
      borderRadius='25px'
    />
    <Stack textAlign={'center'} color={'black'} mt='6' spacing='3'>
      <Heading  fontSize={30} >{Title}</Heading>

      <Text>
        {Descripation}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter _hover={{color:"Blue"}} marginTop={'5px'} as={'u'} justifyContent={'center'}>

        <a  className='boxbutton' href={link} target="_blank" rel="noreferrer" >
          {Title.length<=20?`Go To ${Title}`:'Go to link'}
        </a>
  </CardFooter>
</Card>
  )
}

export default Boxs