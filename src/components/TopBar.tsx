import React from 'react';
import { Box, Flex, Text, IconButton, Tooltip } from '@chakra-ui/react';
import { FaBell, FaUser, FaCog } from 'react-icons/fa';

const TopBar: React.FC = () => {
  return (
    <Box bg="gray.800" color="white" p={4}>
      <Flex justify="space-between" align="center">
        <Text fontSize="xl" fontWeight="bold" fontFamily="'Montserrat', monospace">
          TrafficEase
        </Text>
        <Flex align="center">
          <Tooltip label="Notifications" hasArrow>
            <IconButton
              aria-label="Notifications"
              icon={<FaBell />}
              size="sm"
              bgColor="red.500"
              color="white"
              mr={2}
              _hover={{ bgColor: 'red.600' }}
            />
          </Tooltip>
          <Tooltip label="User Profile" hasArrow>
            <IconButton
              aria-label="User Profile"
              icon={<FaUser />}
              size="sm"
              bgColor="yellow.500"
              color="gray.800"
              mr={2}
              _hover={{ bgColor: 'yellow.600' }}
            />
          </Tooltip>
          <Tooltip label="Settings" hasArrow>
            <IconButton
              aria-label="Settings"
              icon={<FaCog />}
              size="sm"
              bgColor="green.500"
              color="white"
              _hover={{ bgColor: 'green.600' }}
            />
          </Tooltip>
        </Flex>
      </Flex>
    </Box>
  );
};

export default TopBar;
