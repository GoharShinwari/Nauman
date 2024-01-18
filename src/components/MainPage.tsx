import React from 'react';
import { Box, Button, Heading, HStack, Image, Text } from '@chakra-ui/react';

interface MainPageProps {
  onButtonClick: () => void;
}

const MainPage: React.FC<MainPageProps> = ({ onButtonClick }) => {
  const storeIcons = [
    {
      src: 'https://www.apple.com/v/app-store/b/images/overview/icon_appstore__ev0z770zyxoy_large_2x.png',
      alt: 'App Store',
    },
    {
      src: 'https://www.svgrepo.com/show/223032/playstore.svg',
      alt: 'Play Store',
    },
  ];

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      textAlign="center"
      fontFamily="'Montserrat', sans-serif"
      bg="gray.800"
      p={8}
    >
      <Heading as="h1" fontSize="4xl" fontWeight="bold" color="teal" mb={2} fontFamily="'Montserrat', sans-serif">
        Explore TrafficEase
      </Heading>
      <Text fontSize="lg" color="white" mb={6}>
        Navigate smarter with TrafficEase. Discover efficient routes and breeze through your commute.
      </Text>
      <HStack spacing={8} justify="center">
        {storeIcons.map((icon, index) => (
          <Button
            key={index}
            colorScheme="blue"
            size="lg"
            leftIcon={<Image src={icon.src} alt={icon.alt} boxSize="24px" />}
          >
            {index === 0 ? 'Download on the App Store' : 'Get it on Google Play'}
          </Button>
        ))}
      </HStack>
      <Text fontSize="sm" color="gray.500" mt={4}>
        Available for iOS and Android
      </Text>
      <Button
        color="white"
        bgColor="teal"
        size="lg"
        onClick={onButtonClick}
        mt={6}
        _hover={{ bgColor: 'teal.700' }}
      >
        Get Started
      </Button>
    </Box>
  );
};

export default MainPage;
