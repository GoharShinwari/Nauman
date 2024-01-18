import React from 'react';
import { Box, Heading, Text, Image, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const LandingPage: React.FC = () => {
  return (
    <Box p={8} textAlign="center">
      <Heading as="h1" fontSize="4xl" fontWeight="bold" fontFamily="'Montserrat', sans-serif" color="teal.500" mb={4}>
        Welcome to TrafficEase
      </Heading>
      <Text fontSize="lg" color="gray.600" mb={6}>
        Simplify your commute with TrafficEase. Explore real-time traffic updates, plan your routes, and experience a stress-free journey.
      </Text>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="https://images.unsplash.com/photo-1605776988089-105148e14767?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhZmZpYyUyMGphbXxlbnwwfHwwfHx8MA%3D%3D"
          alt="CityTraffic"
          borderRadius="md"
          mb={6}
          mx="auto"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Text fontSize="xl" color="gray.600" mb={6}>
          Don't let traffic slow you down. Experience a smoother commute with TrafficEase.
        </Text>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Button colorScheme="teal" size="lg" fontFamily="'Montserrat', sans-serif">
          Get Started
        </Button>
      </motion.div>
    </Box>
  );
};

export default LandingPage;
