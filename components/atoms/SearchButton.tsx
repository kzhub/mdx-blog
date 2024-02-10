import {
	Center,
	Icon
} from '@chakra-ui/react'
import { SearchIcon } from "@chakra-ui/icons";

interface SearchButtonProps {
  onClick: () => void;
}

const SearchButton = ({ onClick }: SearchButtonProps) => {
	return (
		<>
			<Center cursor='pointer' onClick={onClick}>
				<Icon boxSize='16px' as={SearchIcon} mr='8px' />
			</Center>
		</>
	);
}

export default SearchButton;