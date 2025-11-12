// hooks/useProfile.ts
'use client';
import { useEffect, useState } from 'react';
import { Profile, loadProfile, saveProfile } from '@/lib/profile';

export function useProfile() {
    const [profile, setProfile] = useState<Profile>(() => loadProfile());
    const [loading, setLoading] = useState(false);

    // expose a setter that persists
    const update = (patch: Partial<Profile>) => {
        const next = saveProfile(patch);
        setProfile(next);
    };

    // in case you later replace with API, keep a loading hook
    useEffect(() => { setLoading(false); }, []);

    return { profile, update, loading };
}
