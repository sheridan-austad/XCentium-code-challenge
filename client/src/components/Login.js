import {
	Label,
	FormField,
	Input,
	Error,
	Button,
	Container,
	Wrapper,
	Title,
	Form,
} from '../styles';
import { useState } from 'react';

// setting up the login page so the user can input the proper fields
const Login = ({onLogin}) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [errors, setErrors] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	// fetching the login info from the backend to allow the user to login and create a new session
	// raising an error if there is a problem
	const handleSubmit = (e) => {
		e.preventDefault()
		setIsLoading(true)
		fetch('/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({username, password})
		}).then((r) => {
			setIsLoading(false)
			if (r.ok) {
				r.json().then((user) => {
					onLogin(user)
				})
			} else {
				r.json().then((err) => {
					setErrors(err.errors)
				})
			}
		})
	}

	return (
		// setting up the sign in page
		// raising errors if needed
		<Container>
			<Wrapper>
				<Title> SIGN IN </Title>
				<Form onSubmit={handleSubmit}>
				<FormField>
					<Label htmlFor='username'>Username: </Label>
					<Input
						type='text'
						id='username'
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</FormField>
				<FormField>
					<Label htmlFor='password'>Password: </Label>
					<Input
						type='password'
						id='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</FormField>
				<FormField>
					<Button variant='fill' color='primary' type='submit'>
						{isLoading ? 'Loading...' : 'Login'}
					</Button>
				</FormField>
				<FormField>
					{errors?.map((err) => (
						<Error key={err}>{err}</Error>
					))}
				</FormField>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Login;