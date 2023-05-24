import { Box, Flex, Text, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" bg="gray.200" py={6} position="fixed" bottom={0} left={0} right={0}>
      <Flex direction="column" align="center" justify="center">
        <Text>2023 MDX Blog 🧑‍💻</Text>
      </Flex>
    </Box>
  );
};

export default Footer;