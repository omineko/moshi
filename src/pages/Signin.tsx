import React from 'react';
import {
  Center,
  VStack,
  Input,
  Button,
  FormControl,
  FormLabel,
  Box,
  Divider,
  Heading,
} from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
import ocean from '../assets/bg/ocean.jpg';

function Signin() {
  return (
    <Box w="100vw" h="100vh" overflow="hidden" pos="relative">
      <Box
        bgImage={ocean}
        w="300%"
        h="300%"
        pos="absolute"
        top={0}
        left={0}
        animation="animate-bg 30s ease-in alternate infinite"
      />
      <Center w="100%" h="100%" position="absolute" top="0" left="0" zIndex={2}>
        <Box bgColor="white" w="400px" p={12} borderRadius={4} as="form">
          <VStack align="stretch" spacing={4}>
            <Heading textAlign="center" size="md" as="h1">
              Welcome to moshi
            </Heading>
            <Button size="md" variant="outline" fontSize="xs" leftIcon={<FcGoogle />}>
              Log in using Google
            </Button>
            <Divider />
            <FormControl>
              <FormLabel fontWeight="normal" fontSize="xs">
                Email
              </FormLabel>
              <Input size="md" placeholder="Enter your email address" fontSize="xs" type="email" />
            </FormControl>
            <Button size="md" bgColor="purple.400" fontSize="xs">
              Sign In
            </Button>
          </VStack>
        </Box>
      </Center>
    </Box>
  );
}

export default Signin;
