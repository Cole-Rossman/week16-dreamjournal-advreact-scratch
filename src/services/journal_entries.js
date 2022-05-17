import { client, parseData } from "./client";

export async function fetchEntries() {
    const request = await client
    .from('dream_journal')
    .select('*')
    .order('created_at', { ascending: false });

    return parseData(request);
};

export async function createEntry(entry) {
    const request = await client
    .from('dream_journal')
    .insert(entry)
    .single();

    return parseData(request);
}