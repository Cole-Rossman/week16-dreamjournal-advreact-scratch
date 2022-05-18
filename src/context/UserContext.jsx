import { createContext, useContext, useState } from "react";
import { getUser, signInUser, signOutUser } from "../services/users";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const currentUser = getUser();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [type, setType] = useState('');
    const [user, setUser] = useState(currentUser || {email: null});

    const login = async (email, password) => {
        const authenticatedUser = await signInUser(email, password);
        if (authenticatedUser) {
            setUser(authenticatedUser);
        }
    };

    const logout = () => {
        setUser({ email: null });
        signOutUser();
    }

    return (
        <UserContext.Provider value={{ user, email, setEmail, password, setPassword, error, setError, type, setType, currentUser, login, logout, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);

    if (context === undefined) {
        throw new Error('useUser must be used within useProvider');
    }

    return context;
};