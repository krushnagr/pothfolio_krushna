import { Container, Image, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import './Profilebar.css'

const Profilebar = () => {
    return (
        <div className='profilebar'>
            <Container maxW={"full"} className='container'>
                <Stack
                    p={'4px'}
                    direction={'row'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                >
                    <Image marginLeft={"20px"}
                        src='https://avatars.githubusercontent.com/u/123489852?s=400&u=bc2081e52dc13cc5b141dd882de091669e9da4a2&v=4'
                        width='120' height={'120'}
                        borderRadius={'50%'} />

                    <VStack justifyContent={'center'} alignItems={'end'}>
                        <Text fontSize={45}>Krushna Rudrawar</Text>
                        <SimpleGrid columns={{ base: 2, sm: 4, md: 4 }} spacing={2}>
                            <Image src='https://cdn0.iconfinder.com/data/icons/social-circle-3/72/Email-512.png' w={50} h={50} />
                            <Image src='https://cdn4.iconfinder.com/data/icons/social-media-circle-7/512/Medium_circle-512.png' w={50} h={50} />
                            <Image src='https://cdn4.iconfinder.com/data/icons/miu-black-social-2/60/github-512.png' w={50} h={50} />
                            <Image src='https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Linkedin_svg-512.png' w={50} h={50} />
                        </SimpleGrid>
                    </VStack>
                </Stack>
            </Container>
        </div>
    )
}

export default Profilebar