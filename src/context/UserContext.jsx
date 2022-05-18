import { createContext, useContext, useState } from "react";
import { getUser } from "../services/users";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [type, setType] = useState('');
    const [user, setUser] = useState(currentUser || {email: null});

    const currentUser = getUser();

    return (
        <UserContext.Provider value={{ user, email, setEmail, password, setPassword, error, setError, type, setType, currentUser, setUser }}>
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