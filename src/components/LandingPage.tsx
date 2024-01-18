import React from 'react';
import { Box, Heading, Text, Image, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';

interface LandingPageProps {
  onButtonClick: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onButtonClick }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bg="gray.800"
      p={8}
      textAlign="center"
    >
      <Heading as="h1" fontSize="4xl" fontWeight="bold" color="teal" mb={2} fontFamily="'Montserrat', sans-serif">
        Welcome to TrafficEase
      </Heading>
      <Text fontSize="lg" color="white" mb={4} fontFamily="'Montserrat', sans-serif">
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
        <Text fontSize="xl" color="white" mb={4} fontFamily="'Montserrat', sans-serif">
          Don't let traffic slow you down. Experience a smoother commute with TrafficEase.
        </Text>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
        <Button
          color="white"
          bgColor="teal"
          size="lg"
          fontFamily="'Montserrat', sans-serif"
          _hover={{ bgColor: 'teal.700' }}
          onClick={onButtonClick}
          mt={4}
        >
          Get Started
        </Button>
      </motion.div>
    </Box>
  );
}

export default LandingPage;
