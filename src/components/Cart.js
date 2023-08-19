import { Box, Card, CardBody, Image, Text, Stack } from '@chakra-ui/react'
import React from 'react'

const Cart = ( {Year, Name, CollageName, image, color}) => {

    return (
        <div>
            <Card m={'15px 5px 15px 5px'} borderRadius={'15px'} paddingLeft={'10px'} fontSize={'30'} bgColor={color}>
                <CardBody>
                    <Stack p={'10px'} direction={'row'} justifyContent={'space-between'}>
                        <Box>
                            <Text as={'em'} >{Year}</Text>
                            <Text>{Name}</Text>
                            <Text as={'b'}>{CollageName}</Text>
                        </Box>
                        <Box>
                            <Image src={image}w={150} h={150} borderRadius={'20px'} />
                        </Box>
                    </Stack>
                </CardBody>
            </Card>
        </div>
    )
}

export default Cart