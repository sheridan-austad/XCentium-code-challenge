import React, { useState } from 'react';

// creating context to store the user information
const UserContext = React.createContext();

const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [message, setMessage] = useState(null)

	return (
		<UserContext.Provider
			value={{
				user,
				setUser,
				message,
				setMessage
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export { UserContext, UserProvider };
