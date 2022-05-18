import { useContext } from "react";
import { UserContext } from '../context/UserContext';
import { signInUser, signOutUser, signUpUser } from "../services/users";

export const useAuth = () => {
    const context = useContext(UserContext);

    if (context === undefined) {
        throw new Error('useAuth must be used within a useProvider');
    }

    const { user, setUser } = context;


    const isLoggedIn = user?.email;

    const login = async (email, password) => {
        const authenticatedUser = await signInUser(email, password);
        if (authenticatedUser) {
            setUser(authenticatedUser);
        }
    };

    const signUp = async (email, password) => {
        const newUser = await signUpUser(email, password);
        if (newUser) {
            setUser(newUser);
        }
    };


    const logout = () => {
        setUser({ email: null });
        signOutUser();
    };

    return { user, isLoggedIn, signUp, login, logout };
}