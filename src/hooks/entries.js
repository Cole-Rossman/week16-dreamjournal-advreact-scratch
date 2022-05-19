import { useContext, useEffect } from "react";
import { EntriesContext } from "../context/EntriesContext";
import { fetchEntries, createEntry } from "../services/journal_entries";

export function useEntries() {
    const context = useContext(EntriesContext);

    if (context === undefined) {
        throw new Error('useEntries must be used within a EntriesContext');
    }

    const { entries, dispatch } = context;

    useEffect(() => {
    const fetchData = async () => {
        try {
          const entries = await fetchEntries();
          dispatch({ type: 'RESET', payload: entries });
        } catch (error) {
            throw error.message;
        }
    };
    fetchData()
    }, []);

    
}