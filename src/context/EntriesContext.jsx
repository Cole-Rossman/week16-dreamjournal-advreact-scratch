import { createContext, useReducer } from "react";

export const EntriesContext = createContext();

function reducer(entries, { type, payload}) {
    switch (type) {
        case 'CREATE':
            return [payload, ...entries];
        case 'RESET':
            return payload;
        case 'UPDATE':
            return entries.map((entry) => (entry.id === payload.id ? payload: entry));
        case 'DELETE':
            return entries.filter((entry) => entry.id !== payload.id);
        default:
            throw Error(`Unknown action: ${type}`);
    }
}

export const EntriesProvider = ({ children }) => {
    const [entries, dispatch] = useReducer(reducer);

    return (
        <EntriesContext.Provider value={{ entries, dispatch}}>
            {children}
        </EntriesContext.Provider>
    );
};