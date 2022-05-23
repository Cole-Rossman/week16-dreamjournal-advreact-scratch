import { client, parseData } from "./client";

export async function fetchEntries() {
    const request = await client
    .from('dream_journal')
    .select('*')
    .order('created_at', { ascending: false });
    
    return parseData(request);
}

export async function createEntry({ description, dream_significance, nightmare, user_id, date }) {
    const request = await client
    .from('dream_journal')
    .insert({ user_id, description, dream_significance, nightmare, date })
    .single();

    return parseData(request);
}

export async function editEntry({ id, date, description, dream_significance, nightmare }) {
    const request = await client
    .from('dream_journal')
    .update({ date, description, dream_significance, nightmare })
    .match({ id })
    .single();

    return parseData(request);
}

export async function deleteEntry(id) {
    const request = await client
    .from('dream_journal')
    .delete()
    .match({ id })
    .single()

    return parseData(request);
}

export async function getEntry(id) {
    const request = await client
    .from('dream_journal')
    .select('*')
    .match({ id })
    .single();

    return parseData(request);
}