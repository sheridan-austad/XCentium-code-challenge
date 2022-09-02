import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from '../styles';

// fetching the logout info from the backend
function NavBar({ setUser }) {
	function handleLogout() {
		fetch('/api/logout', {
			method: 'DELETE',
		}).then((r) => {
			if (r.ok) {
				setUser(null);
			}
		});
	}

	return (
		// setting up the logout button
		<>
			<Navbar className='navbar sticky-top'>
				<Container>
					<Navbar.Collapse className='justify-content-end'>
						<Button onClick={handleLogout}>Logout</Button>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			
		</>
	);
}

export default NavBar;