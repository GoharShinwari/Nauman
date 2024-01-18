import React from 'react';
import { Box, Heading, Text, Image, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <Box bg="gray.800" p={8} textAlign="center" bgSize="fill">
      <Heading as="h1" fontSize="4xl" fontWeight="bold" fontFamily="'Montserrat', sans-serif" color="teal" mb={2}>
        Welcome to TrafficEase
      </Heading>
      <Text fontSize="lg" color="white" mb={4}>
        Simplify your commute with TrafficEase. Explore real-time traffic updates, plan your routes, and experience a stress-free journey.
      </Text>
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Image
          src="https://images.unsplash.com/photo-1605776988089-105148e14767?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhZmZpYyUyMGphbXxlbnwwfHwwfHx8MA%3D%3D"
          alt="CityTraffic"
          borderRadius="md"
          mb={4}
          mx="auto"
        />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Text fontSize="xl" color="white" mb={4}>
          Don't let traffic slow you down. Experience a smoother commute with TrafficEase.
        </Text>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
      <Button
  as={Link}
  to="/main"
  color="white"
  bgColor="teal"
  size="lg"
  fontFamily="'Montserrat', sans-serif"
  _hover={{ bgColor: 'teal.700' }}
>
  Get Started
</Button>
      </motion.div>
    </Box>
  );
}

export default LandingPage;
