import { FaHeart,FaRegHeart } from 'react-icons/fa';
import { useState } from 'react';
import axios from 'axios';

const LikeButton = (props) => {
	
	const [likeState, setLikeState] = useState(false)

	const handleClick = async () => {
		setLikeState(true)
		try {
			await axios.post('/api/addLike',{ id: props.id })
    } catch (error) {
      console.error('error')
    }
	}


	return (
		<>
		{
		likeState === false 
		?<FaRegHeart onClick={handleClick} /> 
		:<FaHeart />
		}
		</>
	);
}

export default LikeButton;