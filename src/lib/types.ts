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
    sessionId: string;
    phone: string | null;
    cabildoName: string | null;
    demographics: Demographics;
    demographicsCompleted: boolean;
    consent?: 'yes' | 'no';
    cabildoCompleted?: boolean;
    stationsDone: number[]; // 1..3
    finalWord?: string;
};


export type UploadImage = { filename: string; dataUrl: string };
export type UploadAudio = { mime: string; dataUrl: string; durationMs?: number } | null;


export type MessagePayload = {
    type: 'free' | 'station1' | 'station2' | 'station3' | 'final';
    text?: string;
    images?: UploadImage[];
    audio?: UploadAudio;
};

export type Result = { status: 'success' | 'error'; message: string };