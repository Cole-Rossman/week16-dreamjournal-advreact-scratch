import { useContext, useEffect, useState } from "react";
import { EntriesContext } from "../context/EntriesContext";
import { fetchEntries, createEntry, editEntry, getEntry, deleteEntry } from "../services/journal_entries";

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
            throw new Error(error.message);
        }
    };
    fetchData()
    }, []);



    const addEntry = async (entry) => {
        try {
            const addedEntry = await createEntry(entry);
            dispatch({ type: 'CREATE', payload: addedEntry })
        } catch (error) {
            throw new Error(error.message);
        }
    };


    return { entries, addEntry };
}

export function useEntry(id) {
    const context = useContext(EntriesContext);

    if (context === undefined) {
        throw new Error('useSuggestion must be used within a EntriesContext')
    }

    const { entries, dispatch } = context;

    const [entry, setEntry] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const entry = await getEntry(id);
                setEntry(entry);
            } catch (error) {
                throw new Error(error.message);
            }
        };
        fetchData();
    }, [id]);

    const updateEntry = async (edits) => {
        try {
            const updated = await editEntry({
                ...entry,
                ...edits
            });
            const payload = {
                ...updated,
            }
            setEntry(payload);
            if (entries) dispatch({ type: 'UPDATE', payload });
            return payload;
        } catch (error) {
            throw new Error(error.message);
        }
    };

    const removeEntry = async () => {
        try {
            const payload = await deleteEntry(entry.id);
            setEntry(null);
            if (entries) dispatch({ type: 'DELETE', payload});
            return payload;
        } catch (error) {
            throw new Error(error.message);
        }
    };

    return { entry, removeEntry, updateEntry }
}