// small helper to convert Blob -> data: URL (persists in localStorage)
export function blobToDataUrl(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
        const fr = new FileReader();
        fr.onload = () => resolve(String(fr.result));
        fr.onerror = reject;
        fr.readAsDataURL(blob);
    });
}
export function sanitizeFilename(name: string) {
    return name.replace(/[^\w.-]/g, '_');
}