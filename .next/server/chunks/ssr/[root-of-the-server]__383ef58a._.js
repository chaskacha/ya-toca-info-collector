module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/src/components/Composer.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Composer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
async function fileToDataUrl(file) {
    return new Promise((res, rej)=>{
        const r = new FileReader();
        r.onload = ()=>res(String(r.result));
        r.onerror = rej;
        r.readAsDataURL(file);
    });
}
function Composer({ kind, placeholder }) {
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [images, setImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [audio, setAudio] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Audio recorder
    const mediaRecorder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const chunks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [recording, setRecording] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const startRec = async ()=>{
        if (recording) return;
        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true
        });
        const mr = new MediaRecorder(stream);
        mediaRecorder.current = mr;
        chunks.current = [];
        mr.ondataavailable = (e)=>{
            if (e.data.size) chunks.current.push(e.data);
        };
        mr.onstop = async ()=>{
            const blob = new Blob(chunks.current, {
                type: 'audio/webm'
            });
            const dataUrl = await fileToDataUrl(new File([
                blob
            ], 'audio.webm'));
            setAudio({
                mime: 'audio/webm',
                dataUrl
            });
            stream.getTracks().forEach((t)=>t.stop());
        };
        mr.start();
        setRecording(true);
    };
    const stopRec = ()=>{
        mediaRecorder.current?.stop();
        setRecording(false);
    };
    const onPickImages = async (files)=>{
        if (!files) return;
        const selected = [];
        for (const f of Array.from(files).slice(0, 5)){
            const dataUrl = await fileToDataUrl(f);
            selected.push({
                filename: f.name,
                dataUrl
            });
        }
        setImages((prev)=>[
                ...prev,
                ...selected
            ]);
    };
    const submit = async ()=>{
        setBusy(true);
        try {
            const payload = {
                type: kind,
                text: text.trim() || undefined,
                images: images.length ? images : undefined,
                audio
            };
            const res = await fetch('/api/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            const j = await res.json();
            if (!res.ok) throw new Error(j.error || 'Error');
            setText('');
            setImages([]);
            setAudio(null);
            alert('¡Enviado!');
        } catch (e) {
            alert(e.message || 'Error');
        } finally{
            setBusy(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                className: "input min-h-[120px]",
                placeholder: placeholder ?? 'Escribe aquí… (puedes usar emojis)',
                value: text,
                onChange: (e)=>setText(e.target.value)
            }, void 0, false, {
                fileName: "[project]/src/components/Composer.tsx",
                lineNumber: 70,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "label mr8",
                        children: "Audio"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Composer.tsx",
                        lineNumber: 85,
                        columnNumber: 17
                    }, this),
                    !recording ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "btn",
                        onClick: startRec,
                        children: "🎙️ Grabar"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Composer.tsx",
                        lineNumber: 87,
                        columnNumber: 21
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "btn",
                        onClick: stopRec,
                        children: "⏹️ Terminar"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Composer.tsx",
                        lineNumber: 89,
                        columnNumber: 21
                    }, this),
                    audio && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "help",
                        children: [
                            "Audio listo para enviar (",
                            audio.mime,
                            ")."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Composer.tsx",
                        lineNumber: 91,
                        columnNumber: 27
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Composer.tsx",
                lineNumber: 84,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "btn",
                onClick: submit,
                disabled: busy,
                children: "Enviar"
            }, void 0, false, {
                fileName: "[project]/src/components/Composer.tsx",
                lineNumber: 95,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Composer.tsx",
        lineNumber: 69,
        columnNumber: 9
    }, this);
}
}}),
"[project]/src/components/basic/safe-area/index.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
;
const SafeArea = ({ children, mv = 60 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "safe-area w100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: mv
                }
            }, void 0, false, {
                fileName: "[project]/src/components/basic/safe-area/index.tsx",
                lineNumber: 12,
                columnNumber: 13
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/basic/safe-area/index.tsx",
        lineNumber: 11,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = SafeArea;
}}),
"[project]/src/constants/texts.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "COLORS": (()=>COLORS),
    "excel_records_1": (()=>excel_records_1)
});
const COLORS = {
    WHITE: '#ffffff',
    BLACK: '#000000',
    GRAY: '#D9D9D9',
    YELLOW: '#EABF00',
    RED: '#E53016',
    GRAY2: '#F5F5F5'
};
const excel_records_1 = [
    {
        "source_table": "open text",
        "source_id": null,
        "question": "En 1 palabra: No me querría ir del Perú si fuera",
        "text_raw": "No me querría ir del Perú si fuera Si fuera Muy responsable con sus decisiones políticas",
        "fecha": "2025-09-14 00:00:00.000 -0500",
        "age_group": null,
        "gender": null,
        "region": null
    },
    {
        "source_table": "open text",
        "source_id": null,
        "question": "En 1 palabra: No me querría ir del Perú si fuera",
        "text_raw": "No me querría ir del Perú si fuera Un país que promueva la transparencia en la gestión pública",
        "fecha": "2025-09-14 00:00:00.000 -0500",
        "age_group": null,
        "gender": null,
        "region": null
    },
    {
        "source_table": "open text",
        "source_id": null,
        "question": "En 1 palabra: No me querría ir del Perú si fuera",
        "text_raw": "No me querría ir del Perú si fuera Un país con valores e integridad!",
        "fecha": "2025-09-14 00:00:00.000 -0500",
        "age_group": null,
        "gender": null,
        "region": null
    },
    {
        "source_table": "open text",
        "source_id": null,
        "question": "En 1 palabra: No me querría ir del Perú si fuera",
        "text_raw": "No me querría ir del Perú si fuera Un país con mucha empatia y respeto x los demás",
        "fecha": "2025-09-14 00:00:00.000 -0500",
        "age_group": null,
        "gender": null,
        "region": null
    },
    {
        "source_table": "open text",
        "source_id": null,
        "question": "En 1 palabra: No me querría ir del Perú si fuera",
        "text_raw": "No me querría ir del Perú si fuera Makanky a la presidencia",
        "fecha": "2025-09-14 00:00:00.000 -0500",
        "age_group": null,
        "gender": null,
        "region": null
    },
    {
        "source_table": "open text",
        "source_id": null,
        "question": "En 1 palabra: No me querría ir del Perú si fuera",
        "text_raw": "No me querría ir del Perú si fuera Un país con personas que se ayudan y no se envidian",
        "fecha": "2025-09-14 00:00:00.000 -0500",
        "age_group": null,
        "gender": null,
        "region": null
    },
    {
        "source_table": "open text",
        "source_id": null,
        "question": "En 1 palabra: No me querría ir del Perú si fuera",
        "text_raw": "No me querría ir del Perú si fuera Un país con gobernantes de buenos valores y principios inquebrantables",
        "fecha": "2025-09-14 00:00:00.000 -0500",
        "age_group": null,
        "gender": null,
        "region": null
    },
    {
        "source_table": "open text",
        "source_id": null,
        "question": "En 1 palabra: No me querría ir del Perú si fuera",
        "text_raw": "No me querría ir del Perú si fuera Si los valores fueran los primero",
        "fecha": "2025-09-14 00:00:00.000 -0500",
        "age_group": null,
        "gender": null,
        "region": null
    },
    {
        "source_table": "open text",
        "source_id": null,
        "question": "En 1 palabra: No me querría ir del Perú si fuera",
        "text_raw": "No me querría ir del Perú si fuera Un país con infraestructura ecológica",
        "fecha": "2025-09-14 00:00:00.000 -0500",
        "age_group": null,
        "gender": null,
        "region": null
    },
    {
        "source_table": "open text",
        "source_id": null,
        "question": "En 1 palabra: No me querría ir del Perú si fuera",
        "text_raw": "No me querría ir del Perú si fuera Un país seguro, sin delincuencia",
        "fecha": "2025-09-14 00:00:00.000 -0500",
        "age_group": null,
        "gender": null,
        "region": null
    },
    {
        "source_table": "open text",
        "source_id": null,
        "question": "En 1 palabra: No me querría ir del Perú si fuera",
        "text_raw": "No me querría ir del Perú si fuera Sigan a @la\_morte\_band",
        "fecha": "2025-09-14 00:00:00.000 -0500",
        "age_group": null,
        "gender": null,
        "region": null
    },
    {
        "source_table": "open text",
        "source_id": null,
        "question": "En 1 palabra: No me querría ir del Perú si fuera",
        "text_raw": "No me querría ir del Perú si fuera Un país sin delincuencia y con muchas oportunidades",
        "fecha": "2025-09-14 00:00:00.000 -0500",
        "age_group": null,
        "gender": null,
        "region": null
    },
    {
        "source_table": "open text",
        "source_id": null,
        "question": "En 1 palabra: No me querría ir del Perú si fuera",
        "text_raw": "No me querría ir del Perú si fuera Que todas tengan una amiga como la mía .. YESSI",
        "fecha": "2025-09-14 00:00:00.000 -0500",
        "age_group": null,
        "gender": null,
        "region": null
    },
    {
        "source_table": "open text",
        "source_id": null,
        "question": "En 1 palabra: No me querría ir del Perú si fuera",
        "text_raw": "No me querría ir del Perú si fuera Si tiene una educación mejor",
        "fecha": "2025-09-14 00:00:00.000 -0500",
        "age_group": null,
        "gender": null,
        "region": null
    },
    {
        "source_table": "open text",
        "source_id": null,
        "question": "En 1 palabra: No me querría ir del Perú si fuera",
        "text_raw": "No me querría ir del Perú si fuera Un país que apoyan más a los artistas y no existiera estereotipos sobre ellos",
        "fecha": "2025-09-14 00:00:00.000 -0500",
        "age_group": null,
        "gender": null,
        "region": null
    },
    {
        "source_table": "open text",
        "source_id": null,
        "question": "En 1 palabra: No me querría ir del Perú si fuera",
        "text_raw": "No me querría ir del Perú si fuera Un país menos corrupto",
        "fecha": "2025-09-14 00:00:00.000 -0500",
        "age_group": null,
        "gender": null,
        "region": null
    },
    {
        "source_table": "open text",
        "source_id": null,
        "question": "En 1 palabra: No me querría ir del Perú si fuera",
        "text_raw": "No me querría ir del Perú si fuera Si hubiera fieles",
        "fecha": "2025-09-14 00:00:00.000 -0500",
        "age_group": null,
        "gender": null,
        "region": null
    },
    {
        "source_table": "open text",
        "source_id": null,
        "question": "En 1 palabra: No me querría ir del Perú si fuera",
        "text_raw": "No me querría ir del Perú si fuera Un país con autoridades honestad y sin corrupción",
        "fecha": "2025-09-14 00:00:00.000 -0500",
        "age_group": null,
        "gender": null,
        "region": null
    },
    {
        "source_table": "open text",
        "source_id": null,
        "question": "En 1 palabra: No me querría ir del Perú si fuera",
        "text_raw": "No me querría ir del Perú si fuera Si no tuvieran un pensamiento tan retrógrada",
        "fecha": "2025-09-14 00:00:00.000 -0500",
        "age_group": null,
        "gender": null,
        "region": null
    },
    {
        "source_table": "open text",
        "source_id": null,
        "question": "En 1 palabra: No me querría ir del Perú si fuera",
        "text_raw": "No me querría ir del Perú si fuera UN PAÍS CON UN PRESIDENTE CÓMO BUKELE",
        "fecha": "2025-09-14 00:00:00.000 -0500",
        "age_group": null,
        "gender": null,
        "region": null
    },
    {
        "source_table": "open text",
        "source_id": null,
        "question": "En 1 palabra: No me querría ir del Perú si fuera",
        "text_raw": "No me querría ir del Perú si fuera Una rata",
        "fecha": "2025-09-14 00:00:00.000 -0500",
        "age_group": null,
        "gender": null,
        "region": null
    },
    {
        "source_table": "open text",
        "source_id": null,
        "question": "En 1 palabra: No me querría ir del Perú si fuera",
        "text_raw": "No me querría ir del Perú si fuera Si se eliminará la delincuencia de raíz",
        "fecha": "2025-09-14 00:00:00.000 -0500",
        "age_group": null,
        "gender": null,
        "region": null
    },
    {
        "source_table": "open text",
        "source_id": null,
        "question": "En 1 palabra: No me querría ir del Perú si fuera",
        "text_raw": "No me querría ir del Perú si fuera Pais con mucho más oportunidades laborales",
        "fecha": "2025-09-14 00:00:00.000 -0500",
        "age_group": null,
        "gender": null,
        "region": null
    },
    {
        "source_table": "open text",
        "source_id": null,
        "question": "En 1 palabra: No me querría ir del Perú si fuera",
        "text_raw": "No me querría ir del Perú si fuera Si la educación valiera más q la plata",
        "fecha": "2025-09-14 00:00:00.000 -0500",
        "age_group": null,
        "gender": null,
        "region": null
    },
    {
        "source_table": "open text",
        "source_id": null,
        "question": "En 1 palabra: No me querría ir del Perú si fuera",
        "text_raw": "No me querría ir del Perú si fuera Por eso me voy pa celendin",
        "fecha": "2025-09-14 00:00:00.000 -0500",
        "age_group": null,
        "gender": null,
        "region": null
    },
    {
        "source_table": "open text",
        "source_id": null,
        "question": "En 1 palabra: No me querría ir del Perú si fuera",
        "text_raw": "No me querría ir del Perú si fuera Quién financia esto?",
        "fecha": "2025-09-14 00:00:00.000 -0500",
        "age_group": null,
        "gender": null,
        "region": null
    },
    {
        "source_table": "open text",
        "source_id": null,
        "question": "En 1 palabra: No me querría ir del Perú si fuera",
        "text_raw": "No me querría ir del Perú si fuera Un país libre de corrupción",
        "fecha": "2025-09-14 00:00:00.000 -0500",
        "age_group": null,
        "gender": null,
        "region": null
    },
    {
        "source_table": "open text",
        "source_id": null,
        "question": "En 1 palabra: No me querría ir del Perú si fuera",
        "text_raw": "No me querría ir del Perú si fuera Una política leal!",
        "fecha": "2025-09-14 00:00:00.000 -0500",
        "age_group": null,
        "gender": null,
        "region": null
    },
    {
        "source_table": "open text",
        "source_id": null,
        "question": "En 1 palabra: No me querría ir del Perú si fuera",
        "text_raw": "No me querría ir del Perú si fuera País seguro",
        "fecha": "2025-09-14 00:00:00.000 -0500",
        "age_group": null,
        "gender": null,
        "region": null
    },
    {
        "source_table": "open text",
        "source_id": null,
        "question": "En 1 palabra: No me querría ir del Perú si fuera",
        "text_raw": "No me querría ir del Perú si fuera Raíces",
        "fecha": "2025-09-14 00:00:00.000 -0500",
        "age_group": null,
        "gender": null,
        "region": null
    },
    {
        "source_table": "open text",
        "source_id": null,
        "question": "En 1 palabra: No me querría ir del Perú si fuera",
        "text_raw": "No me querría ir del Perú si fuera Un país donde se pudiera cumplir todo lo que nos propongamos y el gobierno no nos jugará en contra",
        "fecha": "2025-09-14 00:00:00.000 -0500",
        "age_group": null,
        "gender": null,
        "region": null
    },
    {
        "source_table": "open text",
        "source_id": null,
        "question": "En 1 palabra: No me querría ir del Perú si fuera",
        "text_raw": "No me querría ir del Perú si fuera Si priorizaran la salud mental, y si fuera menos machista",
        "fecha": "2025-09-14 00:00:00.000 -0500",
        "age_group": null,
        "gender": null,
        "region": null
    },
    {
        "source_table": "open text",
        "source_id": null,
        "question": "En 1 palabra: No me querría ir del Perú si fuera",
        "text_raw": "No me querría ir del Perú si fuera Morte",
        "fecha": "2025-09-14 00:00:00.000 -0500",
        "age_group": null,
        "gender": null,
        "region": null
    },
    {
        "source_table": "open text",
        "source_id": null,
        "question": "En 1 palabra: No me querría ir del Perú si fuera",
        "text_raw": "No me querría ir del Perú si fuera Una estrella en ascenso",
        "fecha": "2025-09-14 00:00:00.000 -0500",
        "age_group": null,
        "gender": null,
        "region": null
    },
    {
        "source_table": "open text",
        "source_id": null,
        "question": "En 1 palabra: No me querría ir del Perú si fuera",
        "text_raw": "No me querría ir del Perú si fuera Un país que sepa elegir buenos políticos",
        "fecha": "2025-09-14 00:00:00.000 -0500",
        "age_group": null,
        "gender": null,
        "region": null
    },
    {
        "source_table": "open text",
        "source_id": null,
        "question": "En 1 palabra: No me querría ir del Perú si fuera",
        "text_raw": "No me querría ir del Perú si fuera Si fuera un país, con una educación de calidad",
        "fecha": "2025-09-14 00:00:00.000 -0500",
        "age_group": null,
        "gender": null,
        "region": null
    },
    {
        "source_table": "open text",
        "source_id": null,
        "question": "En 1 palabra: No me querría ir del Perú si fuera",
        "text_raw": "No me querría ir del Perú si fuera Un país con servicios de salud eficientes, transportes funcionales, agua potable, respeto por la vida humana",
        "fecha": "2025-09-14 00:00:00.000 -0500",
        "age_group": null,
        "gender": null,
        "region": null
    }
];
}}),
"[project]/src/components/basic/wrapper/index.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$texts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/texts.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const Wrapper = ({ children, color = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$texts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].GRAY2 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "wrapper",
        style: {
            backgroundColor: color
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                flex: 10
            },
            className: "wrapper-children",
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/basic/wrapper/index.tsx",
            lineNumber: 15,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/basic/wrapper/index.tsx",
        lineNumber: 13,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = Wrapper;
}}),
"[project]/src/app/cabildos/station-one/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Page)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Composer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Composer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$basic$2f$safe$2d$area$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/basic/safe-area/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$basic$2f$wrapper$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/basic/wrapper/index.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$basic$2f$wrapper$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "admin-topics",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$basic$2f$safe$2d$area$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                mv: 32,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-semibold",
                            children: "Estación 1: La catarsis"
                        }, void 0, false, {
                            fileName: "[project]/src/app/cabildos/station-one/page.tsx",
                            lineNumber: 11,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "help",
                            children: "Cuéntanos cómo te sentiste después de la conversación..."
                        }, void 0, false, {
                            fileName: "[project]/src/app/cabildos/station-one/page.tsx",
                            lineNumber: 12,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Composer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            kind: "station1"
                        }, void 0, false, {
                            fileName: "[project]/src/app/cabildos/station-one/page.tsx",
                            lineNumber: 13,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/cabildos/station-one/page.tsx",
                    lineNumber: 10,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/cabildos/station-one/page.tsx",
                lineNumber: 9,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/cabildos/station-one/page.tsx",
            lineNumber: 8,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/cabildos/station-one/page.tsx",
        lineNumber: 7,
        columnNumber: 9
    }, this);
}
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else {
                "TURBOPACK unreachable";
            }
        } else {
            "TURBOPACK unreachable";
        }
    }
} //# sourceMappingURL=module.compiled.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__383ef58a._.js.map