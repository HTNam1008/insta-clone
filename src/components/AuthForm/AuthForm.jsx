import { Box, Button, Flex, Image, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const AuthForm = () => {
    const navigate = useNavigate()
    const [isLogin, setIsLogin] = React.useState(true)
    const [inputs, setInputs] = React.useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleAuth = () => {
        if (!inputs.email === '' || !inputs.password ) {
            alert('Please fill all fields')
            return;
        }
        navigate('/')
    }
  return (
    <>
    <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
            <Image src="/logo.png" alt="Instagram" h={24} cursor={"pointer"} />
            <Input 
                placeholder='Email'
                fontSize={14}
                type='email'
                value={inputs.email}
                onChange={(e)=>setInputs({...inputs, email: e.target.value})}
             />
             <Input 
                placeholder='Password'
                fontSize={14}
                type='password'
                value={inputs.password}
                onChange={(e)=>setInputs({...inputs, password: e.target.value})}
             />
             {!isLogin ?  <Input 
                placeholder='Confirm Password'
                fontSize={14}
                type='password'
                value={inputs.confirmPassword}
                onChange={(e)=>setInputs({...inputs, confirmPassword: e.target.value})}
             />: null }
             <Button w={"full"} colorScheme='blue' size={"sm"} fontSize={14} onClick={handleAuth}>
                {isLogin ? 'Login' : 'Sign Up'}     
             </Button>
            {/* ------------- OR ----------*/}
            <Flex justifyContent={"center"} alignItems={"center"} gap={1} my={4} w={"full"}>
                <Box flex={1} h={"1px"} bg={"gray.400"}></Box>
                <Text mx={1} color={"white"}>OR</Text>
                <Box flex={1} h={"1px"} bg={"gray.400"}></Box>
            </Flex>

            <Flex justifyContent={"center"} alignItems={"center"} gap={1} cursor={"pointer"} >
                <Image src="/google.png" alt="Google logo" h={5} />
                <Text mx={2}  color={"blue.500"} >Log in with Google</Text>
            </Flex>
        </VStack>
    </Box>
    <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <Flex alignItems={"center"} justifyContent={"center"}>
            <Box mx={2} fontSize={14}>
                {isLogin ? "Don't have an account ?" : "Already have an account ?"}
            </Box>
            <Box fontSize={14} onClick={()=>setIsLogin(!isLogin)} color={"blue.500"} cursor={"pointer"}    >
                {isLogin ? "Sign Up" : "Login"}
            </Box>
        </Flex>
    </Box>
    </>
  )
}

export default AuthForm