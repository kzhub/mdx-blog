import { Text, Heading, Center } from "@chakra-ui/react";
import Link from "next/link";
import { siteDiscription } from "@/constants";
import { cuteEmojiLogo } from "@/constants";
const Header = () => {
	return (
		<>
			<Heading as='h1' fontSize={64} mt='24px'>
				<Link href='/'>
					<Center>
						{cuteEmojiLogo}
					</Center>
				</Link>
			</Heading>
			<Center mb='32px'>
				<Text fontSize='8px' color='blackAlpha.300'>
					{siteDiscription}
				</Text>
			</Center>
		</>
	);
}

export default Header;