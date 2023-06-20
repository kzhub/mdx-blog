import {
	Box, 
	Modal,
	ModalOverlay,
	ModalContent,
	InputGroup,
	ModalBody,
	Input,
	InputLeftElement,
	useDisclosure,
	Center,
	Icon
} from '@chakra-ui/react'
import { SearchIcon } from "@chakra-ui/icons";
import Article from './Article';
import { useState } from "react";

type articleObjectType = {
	data: String,
	id: String,
	tags:String[]
	title:String,
}

const SearchModal = (props:{ data: articleObjectType[]; }) => {
	const { isOpen, onOpen, onClose } = useDisclosure()

	const [searchObject, setSearchObject] = useState<articleObjectType[]>([])
	
	const objectSearch = (searchWord: string) => {
		const searchResultObjects = props.data.filter(function (article:any) {
			const lowerCaseTitle = article.title.toLowerCase()
			const lowerCaseSearchWord = searchWord.toLowerCase()
			if (lowerCaseTitle.includes(lowerCaseSearchWord)) {
				return true;
			}
		})

		setSearchObject(searchResultObjects)
	}

	const getInputFunction = (inputValue: string) => {
		if (inputValue.length > 1) {
			objectSearch(inputValue)//2文字以上の場合検索を行う
		} else {
			setSearchObject([])
		} 
	}

	const openModalCustom = () => {
		setSearchObject([])
		onOpen()
	}

	return (
		<>
		<Center cursor='pointer' onClick={openModalCustom}>
			<Icon boxSize='16px' as={SearchIcon} mr='8px' />
		</Center>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent m='40px 10px'>
					<ModalBody p="0">
						<InputGroup>
							<InputLeftElement
								borderRadius='20px'
								pointerEvents='none'
							>
								<SearchIcon color='gray.300' />
							</InputLeftElement>
							<Input
								placeholder='Search article'
								focusBorderColor='teal.400'
								_placeholder={{ opacity: 0.4, color: 'inherit' }}
								color='teal'
								onChange={(ev) => getInputFunction(ev.target.value)}
							/>
						</InputGroup>
						<Box px="16px">
							<Article propData={searchObject} />
						</Box>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
}

export default SearchModal;