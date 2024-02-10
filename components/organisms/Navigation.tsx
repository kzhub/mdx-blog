import { Flex, Box, TabList, Tab, Spacer } from "@chakra-ui/react";
import SearchModal from "../molecules/SearchModal";
import SearchButton from "../atoms/SearchButton";
import {
	useDisclosure,
} from '@chakra-ui/react'
import { useState } from "react";
import { articleObjectType } from "@/types";
interface NavigationProps {
	catArray: String[];
	data: articleObjectType[];
}

const Navigation = ({ catArray, data }: NavigationProps) => {

	const { isOpen, onOpen, onClose } = useDisclosure()

	const [searchObject, setSearchObject] = useState([])

	const openModalCustom = () => {
		setSearchObject([])
		onOpen()
	}

	return (
		<Flex>
			<Box>
				<TabList>
					<Tab>All</Tab>
					{catArray.map((node: String, index: number) => (
						<Tab key={index}>{node}</Tab>
					))}
				</TabList>
			</Box>
			<Spacer />

			<SearchButton onClick={openModalCustom} />
			<SearchModal
				isOpen={isOpen}
				onClose={onClose}
				searchObject={searchObject}
				setSearchObject={setSearchObject}
				data={data}
			/>
		</Flex>
	);
}

export default Navigation;