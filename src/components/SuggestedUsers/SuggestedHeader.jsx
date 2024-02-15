import { Avatar, Flex, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

const SuggestedHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
        <Flex alignItems={"center"} gap={2}>
            <Avatar size={"md"} name='As a Programmer' src='/profilepic.png'/>
            <Text fontSize={12} fontWeight={"bold"}>
                asaprogrammer_
            </Text>
        </Flex>
        <Link
            to={"/auth"}
            as={RouterLink}
            fontSize={14}
            fontWeight={"medium"}
            color={"blue.400"}
            style={{ textDecoration: "none" }}
            cursor={"pointer"}
            ml={4}
        >
            Log out
        </Link>
    </Flex>
  )
}

export default SuggestedHeader