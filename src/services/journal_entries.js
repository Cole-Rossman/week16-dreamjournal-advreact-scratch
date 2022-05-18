import { client, parseData } from "./client";

export async function fetchEntries() {
    const request = await client
    .from('dream_journal')
    .select('*')
    .order('created_at', { ascending: false });
    
    return parseData(request);
};

export async function createEntry({ description, dream_significance, nightmare, user_id }) {
    const request = await client
    .from('dream_journal')
    .insert({ user_id, description, dream_significance, nightmare });

    return parseData(request);
}