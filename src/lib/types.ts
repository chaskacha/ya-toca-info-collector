export type Demographics = {
    gender: string | null;
    age: string | null;
    population: string | null;
    ethnicity: string | null;
    occupation: string | null;
    education: string | null;
    originRegion: string | null;
    cabildoRegion: string | null;
};


export type Profile = {
    id: string | null;
    sessionId: string;
    phone: string | null;
    cabildoName: string | null;
    demographics: Demographics;
    demographicsCompleted: boolean;
    consent?: boolean;
    cabildoCompleted?: boolean;
    stationsDone: number[]; // 1..3
    finalWord?: string;
};


export type UploadImage = { filename: string; dataUrl: string };
export type UploadAudio = { mime: string; dataUrl: string; durationMs?: number } | null;


export type Result = { status: 'success' | 'error'; message: string };

export type Media = {
    kind: 'audio';
    url: string;          // served by our /api/media/… endpoint
    mime: string;         // e.g. audio/webm or audio/mp4
    durationMs?: number;  // optional
};

export type MessagePayload = {
    type: 'final' | 'station1' | 'station2' | 'station3';
    text?: string;
    media?: Media[];
};