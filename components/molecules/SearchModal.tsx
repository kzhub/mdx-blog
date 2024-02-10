import {
	Box, 
	Modal,
	ModalOverlay,
	ModalContent,
	InputGroup,
	ModalBody,
	Input,
	InputLeftElement,
} from '@chakra-ui/react'
import { SearchIcon } from "@chakra-ui/icons";
import Article from '../organisms/ArticleList';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  searchObject: any;
  setSearchObject: React.Dispatch<React.SetStateAction<never[]>>;
  data: any; 
}

const SearchModal = ({
  isOpen,
  onClose,
  searchObject,
  setSearchObject,
  data
}: SearchModalProps) => {
	const objectSearch = (searchWord: string) => {
		const searchResultObjects = data.filter(function (article:any) {
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
			objectSearch(inputValue)
		} else {
			setSearchObject([])
		} 
	}

	return (
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
	);
}

export default SearchModal;