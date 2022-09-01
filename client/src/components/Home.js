import React from 'react';
import { Title, Container, Box } from '../styles';

const Home = ({ user}) => {
	return (
		<Box>
			<Container>
				<Title>Welcome Back {user.name}!</Title>
			</Container>
		</Box>
	);
};

export default Home;