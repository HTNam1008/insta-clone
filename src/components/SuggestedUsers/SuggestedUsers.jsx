import { Box, Flex, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import SuggestedHeader from './SuggestedHeader'
import SuggestedUser from './SuggestedUser'

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
        <SuggestedHeader/>
        <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
            <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
                Suggested for you
            </Text>

            <Text fontSize={12} fontWeight={"bold"} _hover={{color: "gray.400"}} cursor={"pointer"}>
                See all
            </Text>
        </Flex>

        <SuggestedUser name="Minh Thu" follower={1235} avatar="https://bit.ly/minhthu"/>
        <SuggestedUser name="Hai Son" follower={390} avatar="https://bit.ly/haison"/>
        <SuggestedUser name="Ngoc Anh" follower={54} avatar="https://bit.ly/ngocanh"/>
        
        <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
            © 2024 Built By{" "}
            <Link href='/' target='_blank' color={"blue.500"} fontSize={14}>
                As a Programmer
            </Link>
        </Box>

    </VStack>
  )
}

export default SuggestedUsers