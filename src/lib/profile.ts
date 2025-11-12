// lib/profile.ts
export type Profile = {
    waId?: string | null;
    demographicsCompleted: boolean;
    cabildoCompleted: boolean;
    stationsDone: number[];
    consent?: 'yes' | 'no';
    lastCabildoName?: string | null;
    demographics?: {
        gender?: string | null;
        age?: string | null;
        population?: string | null;
        ethnicity?: string | null;
        occupation?: string | null;
        education?: string | null;
        originRegion?: string | null;
        cabildoRegion?: string | null;
    };
};

const KEY = 'yt_profile_v1';

export function loadProfile(): Profile {
    if (typeof window === 'undefined') {
        // SSR fallback (not used by 'use client' pages)
        return {
            waId: null,
            demographics: { gender: null, age: null, population: null, ethnicity: null, occupation: null, education: null, originRegion: null, cabildoRegion: null },
            demographicsCompleted: false,
            cabildoCompleted: false,
            stationsDone: [],
        };
    }
    try {
        const raw = localStorage.getItem(KEY);
        if (raw) return JSON.parse(raw) as Profile;
    } catch { }
    // default new profile
    const fresh: Profile = {
        waId: null,
        demographics: { gender: null, age: null, population: null, ethnicity: null, occupation: null, education: null, originRegion: null, cabildoRegion: null },
        demographicsCompleted: false,
        cabildoCompleted: false,
        stationsDone: []
    };
    localStorage.setItem(KEY, JSON.stringify(fresh));
    return fresh;
}

export function saveProfile(patch: Partial<Profile>) {
    const current = loadProfile();
    const next: Profile = { ...current, ...patch };
    localStorage.setItem(KEY, JSON.stringify(next));
    return next;
}

export function remainingStations(p: Profile): number[] {
    const set = new Set(p.stationsDone ?? []);
    return [1, 2, 3].filter(n => !set.has(n));
}
