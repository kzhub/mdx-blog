import { Text, Heading, Center } from "@chakra-ui/react";
import Link from "next/link";
const Header = () => {
	return (
		<>
			<Heading as='h1' fontSize={64} mt='24px'>
				<Link href='/'>
					<Center>
						🦖🐕
					</Center>
				</Link>
			</Heading>
			<Center>
				<Text fontSize='8px' color='blackAlpha.300'>
					Music Gadget Tech
				</Text>
			</Center>
		</>
	);
}

export default Header;