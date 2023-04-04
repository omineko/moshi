import React, { useState } from 'react';
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
  useToast,
} from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
import BGImage from '../data/bg';

type formDataType = {
  email: {
    value: string;
    error: string;
  };
  password: {
    value: string;
    error: string;
  };
};

const bg = BGImage.genRand();

function Signin() {
  const toast = useToast();
  const [formData, setFormData] = useState<formDataType>({
    email: {
      value: '',
      error: '',
    },
    password: {
      value: '',
      error: '',
    },
  });

  const setField = (e: React.ChangeEvent<HTMLInputElement>, field: keyof formDataType) => {
    const { value } = e.target;

    setFormData((data) => {
      return {
        ...data,
        [field]: {
          ...data[field],
          value,
        },
      };
    });
  };

  const showPreventGoogleToast = () => {
    if (!toast.isActive('google')) {
      toast({
        id: 'google',
        title: 'Not available at the moment',
        description: 'Moshi is currently under development',
        position: 'top-right',
        isClosable: true,
        variant: 'subtle',
        status: 'warning',
      });
    }
  };

  return (
    <Box w="100vw" h="100vh" overflow="hidden" pos="relative">
      <Box
        bgImage={bg}
        w="300%"
        h="300%"
        pos="absolute"
        top={0}
        left={0}
        animation="animate-bg 30s ease-in alternate infinite"
      />
      <Center w="100%" h="100%" position="absolute" top="0" left="0" zIndex={2}>
        <Box bgColor="white" w="400px" p={12} rounded="md" boxShadow="xl" as="form">
          <VStack align="stretch" spacing={4}>
            <Heading textAlign="center" size="md" as="h1">
              Welcome to moshi
            </Heading>
            <Button
              size="md"
              variant="outline"
              fontSize="xs"
              leftIcon={<FcGoogle />}
              onClick={showPreventGoogleToast}
            >
              Log in using Google
            </Button>
            <Divider />
            <FormControl>
              <FormLabel fontWeight="normal" fontSize="xs">
                Email
              </FormLabel>
              <Input
                size="md"
                placeholder="Enter your email address"
                fontSize="xs"
                type="email"
                value={formData.email.value}
                onChange={(e) => setField(e, 'email')}
              />
            </FormControl>
            <FormControl>
              <FormLabel fontWeight="normal" fontSize="xs">
                Password
              </FormLabel>
              <Input
                size="md"
                placeholder="Enter your password"
                fontSize="xs"
                type="password"
                value={formData.password.value}
                onChange={(e) => setField(e, 'password')}
              />
            </FormControl>
            <Button size="md" bgColor="purple.400" fontSize="xs" type="submit">
              Sign In
            </Button>
          </VStack>
        </Box>
      </Center>
    </Box>
  );
}

export default Signin;
