import { MessagePayload, Profile } from './types';


// @ts-ignore
const g: any = global;
if (!g.__YTC_STORE__) g.__YTC_STORE__ = { profiles: new Map<string, Profile>(), messages: new Map<string, MessagePayload[]>() };


export const mem = g.__YTC_STORE__ as { profiles: Map<string, Profile>; messages: Map<string, MessagePayload[]> };


export function upsertProfile(sessionId: string, mut: (p: Profile) => void) {
    const curr = mem.profiles.get(sessionId) ?? {
        id: null,
        sessionId,
        phone: null,
        cabildoName: null,
        demographics: { gender: null, age: null, population: null, ethnicity: null, occupation: null, education: null, originRegion: null, cabildoRegion: null },
        demographicsCompleted: false,
        cabildoCompleted: false,
        stationsDone: []
    } satisfies Profile;
    mut(curr);
    mem.profiles.set(sessionId, curr);
    return curr;
}


export function getProfile(sessionId: string) {
    return mem.profiles.get(sessionId) ?? null;
}


export function pushMessage(sessionId: string, m: MessagePayload) {
    const list = mem.messages.get(sessionId) ?? [];
    list.push({ ...m, _id: crypto.randomUUID(), _ts: Date.now() } as any);
    mem.messages.set(sessionId, list);
}