import { Avatar, Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const PostHeader = ({username,avatar}) => {
    return (
        <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"} my={2}>
            <Flex alignItems={"center"}>
                <Avatar size={"sm"} src={avatar} alt={username} />
                <Flex fontSize={12} fontWeight={"bold"} gap={2} ml={2}>
                    {username}
                    <Box color={"gray.500"}>
                        • 1w
                    </Box>
                </Flex>
            </Flex>
            <Box
                cursor={"pointer"}>
                <Text
                    fontSize={12}  
                    transition={"0.2s ease-in-out"}
                    _hover={{color: "white"}}
                    fontWeight={"bold"}
                    color={"blue.500"}    
                >
                      Unfollow
                </Text>    
            </Box>
        </Flex>
    )
}

export default PostHeader