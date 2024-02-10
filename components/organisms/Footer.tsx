import { Box, Flex, Text } from "@chakra-ui/react";
import { currentYear,siteTitle } from "@/constants";

const Footer = () => {
  return (
    <Box as="footer" bg="gray.200" py={6} position="fixed" bottom={0} left={0} right={0}>
      <Flex direction="column" align="center" justify="center">
				<Text fontSize='8px' color='blackAlpha.300'>{currentYear} {siteTitle}</Text>
      </Flex>
    </Box>
  );
};

export default Footer;