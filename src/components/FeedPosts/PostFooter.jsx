import { Box, Button, Flex, Input, InputGroup, InputRightElement, LinkBox, Text } from '@chakra-ui/react'
import React from 'react'
import { NotificationsLogo, UnlikeLogo, CommentLogo } from '../../assets/constant'

const PostFooter = ({ username, isProfilePage }) => {
    const [liked, setLiked] = React.useState(false)
    const [likes, setLikes] = React.useState(0)

    const handleLike = () => {
        if (liked) {
            setLiked(false);
            setLikes(likes - 1);
        }
        else {
            setLiked(true);
            setLikes(likes + 1);
        }
    }
    return (
        <Box mb={10} mt={"auto"}>
            <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={2}>
                <Box
                    fontSize={18}
                    cursor={"pointer"}
                    onClick={handleLike}
                >
                    {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
                </Box>

                <Box cursor={"pointer"} fontSize={18}>
                    <CommentLogo />
                </Box>

            </Flex>

            <Text fontWeight={600} fontSize={"sm"}>
                {likes} likes
            </Text>
            {!isProfilePage && (
                <>
                    <Text fontWeight={700} fontSize={"sm"}>
                        {username}{" "}
                        <Text as={"span"} fontWeight={400}>
                            Feeling good
                        </Text>
                    </Text>

                    <Text fontSize={"sm"} color={"gray"}>
                        View all 1,000 comment
                    </Text>
                </>
            )}

            <Flex alignItems={"center"} gap={2} justifyContent={"space-between"} w={"full"}>
                <InputGroup>
                    <Input variant={"flushed"} placeholder={"Add a comment..."} fontSize={14} />
                    <InputRightElement>
                        <Button
                            fontSize={14}
                            color={"blue.500"}
                            fontWeight={600}
                            cursor={"pointer"}
                            _hover={{ color: "white" }}
                            bg={"transparent"}
                        >
                            Post
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </Flex>
        </Box>
    )
}

export default PostFooter