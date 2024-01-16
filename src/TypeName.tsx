import React, { useEffect, useState } from "react";
import { Box, Flex, Link, ChakraProvider, Button } from "@chakra-ui/react";

function TypeName() {
  const [name, setName] = useState<string>("");
  const [showCursor, setShowCursor] = useState<boolean>(true);

  useEffect(() => {
    const fullName: string = "Nauman Choudhry";
    let charIndex: number = 0;

    const typeText = () => {
      if (charIndex <= fullName.length) {
        setName(fullName.slice(0, charIndex));
        charIndex++;
      }
    };

    const toggleCursor = () => {
      setShowCursor((prevShowCursor) => !prevShowCursor);
    };

    const textIntervalId = setInterval(typeText, 100);
    const cursorIntervalId = setInterval(toggleCursor, 1000);

    return () => {
      clearInterval(textIntervalId);
      clearInterval(cursorIntervalId);
    };
  }, []);

  return (
    <ChakraProvider resetCSS>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        backgroundColor="#a7b8d2"
      >
        <Box
          fontSize="8vh"
          fontFamily="Source Code Pro"
          color="white"
          textAlign="center"
          className="typing-animation"
          mb={4}
        >
          <h1>
            {name}
            <span
              style={{
                display: "inline-block",
                transition: "opacity 0.5s ease 0s",
                opacity: showCursor ? 1 : 0,
              }}
            >
              _
            </span>
          </h1>
        </Box>

        <Flex flexDirection="column" alignItems="center" color="white" mt={2}>
          <p
            className="my-custom-class chakra-text css-1638ci3"
            style={{
              fontFamily: "Source Code Pro",
              fontSize: "2rem",
              animationFillMode: "both",
              animationDuration: "1000ms",
              animationDelay: "0ms",
              animationIterationCount: "1",
              opacity: "1",
              padding: 10,
              animationName: "react-reveal-907529300631610-1",
            }}
          >
            Undecided Major @ Rutgers University '27
          </p>

          <Flex
            className="css-h94677"
            style={{
              animationFillMode: "both",
              animationDuration: "1000ms",
              animationDelay: "0ms",
              animationIterationCount: "1",
              opacity: "1",
              animationName: "react-reveal-907529300631610-1",
            }}
          >
            <Link
              href="https://www.linkedin.com/in/nauman-choudhry-a986a2285/"
              isExternal
              mx={2}
              padding={5}
              className="chakra-link css-uvgg6t"
              aria-label="Linkedin"
            >
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="2em"
                width="2em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </Link>

            <Link
              href="mailto:nauman.choudhry.2023@gmail.com"
              mx={2}
              padding={5}
              className="chakra-link css-uvgg6t"
              aria-label="Email"
            >
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="2em"
                width="2em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default TypeName;
