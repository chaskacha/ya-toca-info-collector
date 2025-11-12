(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/Composer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Composer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
    _s();
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [images, setImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [audio, setAudio] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Audio recorder
    const mediaRecorder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const chunks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [recording, setRecording] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                className: "input min-h-[120px]",
                placeholder: placeholder ?? 'Escribe aquí… (puedes usar emojis)',
                value: text,
                onChange: (e)=>setText(e.target.value)
            }, void 0, false, {
                fileName: "[project]/src/components/Composer.tsx",
                lineNumber: 70,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "label mr8",
                        children: "Audio"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Composer.tsx",
                        lineNumber: 85,
                        columnNumber: 17
                    }, this),
                    !recording ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "btn",
                        onClick: startRec,
                        children: "🎙️ Grabar"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Composer.tsx",
                        lineNumber: 87,
                        columnNumber: 21
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "btn",
                        onClick: stopRec,
                        children: "⏹️ Terminar"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Composer.tsx",
                        lineNumber: 89,
                        columnNumber: 21
                    }, this),
                    audio && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/src/components/Composer.tsx",
                lineNumber: 93,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "btn w100 fw700 fs16 uppercase",
                style: {
                    height: 48
                },
                onClick: submit,
                disabled: busy,
                children: "Enviar"
            }, void 0, false, {
                fileName: "[project]/src/components/Composer.tsx",
                lineNumber: 94,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
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
_s(Composer, "lDcSUi4Gv392jTzcursFX56xkUQ=");
_c = Composer;
var _c;
__turbopack_context__.k.register(_c, "Composer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/basic/safe-area/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
;
const SafeArea = ({ children, mv = 60 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "safe-area w100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_c = SafeArea;
const __TURBOPACK__default__export__ = SafeArea;
var _c;
__turbopack_context__.k.register(_c, "SafeArea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/constants/texts.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/constants/svgs.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "BackArrowSVG": (()=>BackArrowSVG),
    "BurgerMenu": (()=>BurgerMenu),
    "BurgerMenuSVG": (()=>BurgerMenuSVG),
    "CloseSVG": (()=>CloseSVG),
    "CloseTwoSVG": (()=>CloseTwoSVG),
    "ClosedListSVG": (()=>ClosedListSVG),
    "CompareSVG": (()=>CompareSVG),
    "DeleteIconSVG": (()=>DeleteIconSVG),
    "FbSVG": (()=>FbSVG),
    "ForwardArrowSVG": (()=>ForwardArrowSVG),
    "GoToFestival2SVG": (()=>GoToFestival2SVG),
    "GoToFestivalSVG": (()=>GoToFestivalSVG),
    "GoToFestivalShortSVG": (()=>GoToFestivalShortSVG),
    "IconFb": (()=>IconFb),
    "IconInsta": (()=>IconInsta),
    "IconTikTok": (()=>IconTikTok),
    "IconWhatsApp": (()=>IconWhatsApp),
    "IgSVG": (()=>IgSVG),
    "LeftArrowSVG": (()=>LeftArrowSVG),
    "Logo": (()=>Logo),
    "LogoAmbosSVG": (()=>LogoAmbosSVG),
    "LogoBicentarioSVG": (()=>LogoBicentarioSVG),
    "LogoIdeaSVG": (()=>LogoIdeaSVG),
    "LogoWhite": (()=>LogoWhite),
    "OpenListSVG": (()=>OpenListSVG),
    "SearchSVG": (()=>SearchSVG)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Logo = ({ color = "#000000" })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "94",
        height: "25",
        viewBox: "0 0 94 25",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6.38346 11.1989H6.06662L4.91107 0.382324H0L3.71825 17.9256V24.65H8.627V17.9256L12.4874 0.382324H7.54134L6.38346 11.1989Z",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 7,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M15.7839 0.347656L13.0488 24.6176H17.9599L18.4864 18.6187H20.6251L21.1866 24.6176H26.0977L23.4651 0.347656H15.7839ZM18.8708 14.3883L19.3973 8.59885H19.7468L20.2384 14.3883H18.8708Z",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 8,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M35.9492 4.57573H39.5277V24.6153H44.4388V4.57573H48.0498V0.347656H35.9492V4.57573Z",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 9,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M56.8196 0.034668C54.9023 0.034668 53.3763 0.550512 52.2417 1.57759C51.1071 2.60698 50.541 4.19596 50.541 6.34454V18.6534C50.541 20.802 51.1071 22.3979 52.2417 23.4388C53.3763 24.4797 54.8999 24.9978 56.8196 24.9978C58.7393 24.9978 60.3445 24.4728 61.5024 23.4204C62.6603 22.3679 63.2381 20.779 63.2381 18.6534V6.34454C63.2381 4.24202 62.6603 2.66455 61.5024 1.61214C60.3445 0.559723 58.7836 0.034668 56.8196 0.034668ZM58.327 18.9988C58.327 19.669 58.1872 20.1365 57.9053 20.4036C57.6234 20.6684 57.2856 20.802 56.8872 20.802C56.5121 20.802 56.179 20.6684 55.8877 20.4036C55.5942 20.1388 55.4498 19.6713 55.4498 18.9988V6.03366C55.4498 5.36352 55.5942 4.90064 55.8877 4.64733C56.179 4.39401 56.5121 4.26505 56.8872 4.26505C57.2856 4.26505 57.6234 4.39171 57.9053 4.64733C58.1849 4.90294 58.327 5.36352 58.327 6.03366V19.0011V18.9988Z",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 10,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M72.3939 0C70.4765 0 68.9505 0.52045 67.8159 1.56135C66.6814 2.60225 66.1152 4.19584 66.1152 6.34672V18.621C66.1152 20.7927 66.6814 22.4001 67.8159 23.441C68.9505 24.4819 70.4742 25 72.3939 25C74.3136 25 75.9187 24.468 77.0766 23.4041C78.2345 22.3402 78.8123 20.7466 78.8123 18.6187V13.4534H73.9012V19.001C73.9012 19.6712 73.7544 20.134 73.4632 20.3873C73.1697 20.643 72.8365 20.7696 72.4638 20.7696C72.091 20.7696 71.7555 20.643 71.4643 20.3873C71.1707 20.134 71.0263 19.6712 71.0263 19.001V5.99899C71.0263 5.32885 71.1707 4.86597 71.4643 4.61266C71.7555 4.35934 72.0887 4.23038 72.4638 4.23038C72.8388 4.23038 73.1697 4.35704 73.4632 4.61266C73.7544 4.86828 73.9012 5.32885 73.9012 5.99899V11.5466H78.8123V6.34672C78.8123 4.2442 78.2345 2.65982 77.0766 1.59589C75.9187 0.531964 74.3578 0 72.3939 0Z",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 11,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M83.6863 0.347656L80.9512 24.6176H85.8622L86.3888 18.6187H88.5275L89.0889 24.6176H94L91.3674 0.347656H83.6863ZM86.7732 14.3883L87.2997 8.59885H87.6491L88.1407 14.3883H86.7732Z",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 12,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/constants/svgs.tsx",
        lineNumber: 6,
        columnNumber: 9
    }, this);
};
_c = Logo;
const LogoWhite = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "94",
        height: "25",
        viewBox: "0 0 94 25",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6.38346 11.1989H6.06662L4.91107 0.382263H0L3.71825 17.9256V24.65H8.627V17.9256L12.4874 0.382263H7.54134L6.38346 11.1989Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 19,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M15.7839 0.347717L13.0488 24.6177H17.9599L18.4864 18.6187H20.6251L21.1866 24.6177H26.0977L23.4651 0.347717H15.7839ZM18.8708 14.3883L19.3973 8.59892H19.7468L20.2384 14.3883H18.8708Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 20,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M35.9492 4.57579H39.5277V24.6154H44.4388V4.57579H48.0498V0.347717H35.9492V4.57579Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 21,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M56.8196 0.0345459C54.9023 0.0345459 53.3763 0.55039 52.2417 1.57747C51.1071 2.60686 50.541 4.19584 50.541 6.34442V18.6533C50.541 20.8019 51.1071 22.3978 52.2417 23.4387C53.3763 24.4796 54.8999 24.9977 56.8196 24.9977C58.7393 24.9977 60.3445 24.4726 61.5024 23.4202C62.6603 22.3678 63.2381 20.7788 63.2381 18.6533V6.34442C63.2381 4.2419 62.6603 2.66443 61.5024 1.61201C60.3445 0.559601 58.7836 0.0345459 56.8196 0.0345459ZM58.327 18.9987C58.327 19.6688 58.1872 20.1363 57.9053 20.4035C57.6234 20.6683 57.2856 20.8019 56.8872 20.8019C56.5121 20.8019 56.179 20.6683 55.8877 20.4035C55.5942 20.1386 55.4498 19.6712 55.4498 18.9987V6.03353C55.4498 5.3634 55.5942 4.90052 55.8877 4.6472C56.179 4.39389 56.5121 4.26493 56.8872 4.26493C57.2856 4.26493 57.6234 4.39158 57.9053 4.6472C58.1849 4.90282 58.327 5.3634 58.327 6.03353V19.001V18.9987Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 22,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M72.3939 0C70.4765 0 68.9505 0.52045 67.8159 1.56135C66.6814 2.60225 66.1152 4.19584 66.1152 6.34672V18.621C66.1152 20.7927 66.6814 22.4001 67.8159 23.441C68.9505 24.4819 70.4742 25 72.3939 25C74.3136 25 75.9187 24.468 77.0766 23.4041C78.2345 22.3402 78.8123 20.7466 78.8123 18.6187V13.4534H73.9012V19.001C73.9012 19.6712 73.7544 20.134 73.4632 20.3873C73.1697 20.643 72.8365 20.7696 72.4638 20.7696C72.091 20.7696 71.7555 20.643 71.4643 20.3873C71.1707 20.134 71.0263 19.6712 71.0263 19.001V5.99899C71.0263 5.32885 71.1707 4.86597 71.4643 4.61266C71.7555 4.35934 72.0887 4.23038 72.4638 4.23038C72.8388 4.23038 73.1697 4.35704 73.4632 4.61266C73.7544 4.86828 73.9012 5.32885 73.9012 5.99899V11.5466H78.8123V6.34672C78.8123 4.2442 78.2345 2.65982 77.0766 1.59589C75.9187 0.531964 74.3578 0 72.3939 0Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 23,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M83.6863 0.347717L80.9512 24.6177H85.8622L86.3888 18.6187H88.5275L89.0889 24.6177H94L91.3674 0.347717H83.6863ZM86.7732 14.3883L87.2997 8.59892H87.6491L88.1407 14.3883H86.7732Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 24,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/constants/svgs.tsx",
        lineNumber: 18,
        columnNumber: 9
    }, this);
};
_c1 = LogoWhite;
const IconInsta = ({ color = '#FFFFFF' })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "19",
        height: "19",
        viewBox: "0 0 19 19",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M13.8735 3.2417C13.2881 3.2417 12.8125 3.71734 12.8125 4.30274C12.8125 4.88814 13.2881 5.36378 13.8735 5.36378C14.4589 5.36378 14.9346 4.88814 14.9346 4.30274C14.9346 3.71734 14.4589 3.2417 13.8735 3.2417Z",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 31,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9.14678 4.60278C6.68078 4.60278 4.67578 6.60778 4.67578 9.07378C4.67578 11.5398 6.68078 13.5448 9.14678 13.5448C11.6128 13.5448 13.6178 11.5398 13.6178 9.07378C13.6178 6.60778 11.6128 4.60278 9.14678 4.60278ZM9.14678 11.9349C7.5662 11.9349 6.28563 10.647 6.28563 9.07378C6.28563 7.50052 7.57352 6.21264 9.14678 6.21264C10.72 6.21264 12.0079 7.50052 12.0079 9.07378C12.0079 10.647 10.72 11.9349 9.14678 11.9349Z",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 32,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12.6959 18.1474H5.45155C2.44405 18.1474 0 15.7034 0 12.6959V5.45155C0 2.44405 2.44405 0 5.45155 0H12.6959C15.7034 0 18.1474 2.44405 18.1474 5.45155V12.6959C18.1474 15.7034 15.7034 18.1474 12.6959 18.1474ZM5.45155 1.70498C3.38801 1.70498 1.70498 3.38801 1.70498 5.45155V12.6959C1.70498 14.7594 3.38801 16.4425 5.45155 16.4425H12.6959C14.7594 16.4425 16.4425 14.7594 16.4425 12.6959V5.45155C16.4425 3.38801 14.7594 1.70498 12.6959 1.70498H5.45155Z",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 33,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/constants/svgs.tsx",
        lineNumber: 30,
        columnNumber: 9
    }, this);
};
_c2 = IconInsta;
const IconFb = ({ color = '#FFFFFF' })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "11",
        height: "20",
        viewBox: "0 0 11 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M7.17426 20V11.2458H10.1276L10.6894 7.62356H7.17426V5.28097C7.17426 4.29248 7.66761 3.32431 9.23677 3.32431H10.8333V0.243737C10.8333 0.243737 9.38067 0 7.99652 0C5.11174 0 3.22054 1.73324 3.22054 4.86798V7.62356H0V11.2458H3.22054V19.9932H7.17426V20Z",
            fill: color
        }, void 0, false, {
            fileName: "[project]/src/constants/svgs.tsx",
            lineNumber: 40,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/constants/svgs.tsx",
        lineNumber: 39,
        columnNumber: 9
    }, this);
};
_c3 = IconFb;
const IconTikTok = ({ color = '#FFFFFF' })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "15",
        height: "18",
        viewBox: "0 0 15 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M15 7.28859C14.8562 7.30201 14.7124 7.30872 14.5686 7.30872C12.9935 7.30872 11.5163 6.48993 10.6536 5.13422V12.5302C10.6536 15.5503 8.26797 18 5.3268 18C2.38562 18 0 15.5503 0 12.5302C0 9.51007 2.38562 7.0604 5.3268 7.0604C5.43791 7.0604 5.54902 7.07382 5.65359 7.08053V9.77181C5.54248 9.75839 5.43791 9.73825 5.3268 9.73825C3.82353 9.73825 2.60784 10.9866 2.60784 12.5302C2.60784 14.0738 3.82353 15.3221 5.3268 15.3221C6.83006 15.3221 8.15033 14.1074 8.15033 12.5638L8.17647 0H10.6863C10.9216 2.30872 12.7386 4.11409 14.9935 4.28859V7.28188L15 7.28859Z",
            fill: color
        }, void 0, false, {
            fileName: "[project]/src/constants/svgs.tsx",
            lineNumber: 47,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/constants/svgs.tsx",
        lineNumber: 46,
        columnNumber: 9
    }, this);
};
_c4 = IconTikTok;
const IconWhatsApp = ({ color = '#FFFFFF' })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "18",
        height: "18",
        viewBox: "0 0 18 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M0 18L1.2878 13.1854C0.556098 11.8683 0.17561 10.3902 0.17561 8.89024C0.17561 3.9878 4.16341 0 9.06585 0C13.9683 0 17.9561 3.9878 17.9561 8.89024C17.9561 13.7927 13.9683 17.7805 9.06585 17.7805C7.59512 17.7805 6.13902 17.4073 4.83659 16.7049L0 18ZM5.07805 14.8976L5.38537 15.0805C6.50488 15.7463 7.77805 16.0976 9.06585 16.0976C13.039 16.0976 16.2732 12.8634 16.2732 8.89024C16.2732 4.91707 13.039 1.68293 9.06585 1.68293C5.09268 1.68293 1.85854 4.91707 1.85854 8.89024C1.85854 10.2 2.22439 11.4951 2.9122 12.6293L3.10244 12.9366L2.38537 15.622L5.09268 14.8976H5.07805Z",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 54,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M12.3721 10.1269C12.0063 9.90742 11.5307 9.66596 11.099 9.84157C10.7697 9.97328 10.5575 10.4928 10.3453 10.7562C10.2355 10.8952 10.1038 10.9099 9.93554 10.844C8.69163 10.3464 7.74042 9.51962 7.05993 8.37816C6.94285 8.20255 6.96481 8.06352 7.10383 7.89523C7.30871 7.65377 7.57212 7.37572 7.62334 7.04645C7.68188 6.71718 7.52822 6.33669 7.3892 6.04401C7.21359 5.67084 7.02334 5.13669 6.65017 4.9245C6.30627 4.72694 5.85261 4.83669 5.54529 5.08547C5.01846 5.51718 4.76237 6.19035 4.76968 6.86352C4.76968 7.05377 4.79163 7.24401 4.84285 7.42694C4.95261 7.86596 5.15017 8.28303 5.38432 8.67084C5.55993 8.96352 5.74285 9.25621 5.94773 9.52694C6.61359 10.4269 7.44042 11.2099 8.39164 11.8025C8.86725 12.0952 9.38676 12.3513 9.9209 12.5269C10.5209 12.7245 11.055 12.9294 11.699 12.805C12.3721 12.6733 13.038 12.2562 13.3087 11.605C13.3892 11.4147 13.4258 11.1952 13.3819 10.9904C13.2868 10.566 12.7233 10.3172 12.3794 10.1123L12.3721 10.1269Z",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 55,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/constants/svgs.tsx",
        lineNumber: 53,
        columnNumber: 9
    }, this);
};
_c5 = IconWhatsApp;
const BurgerMenu = ({ color = '#FFFFFF' })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "24",
        height: "18",
        viewBox: "0 0 24 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M0 17H24",
                stroke: color
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 62,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M0 9H24",
                stroke: color
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 63,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M0 1H24",
                stroke: color
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 64,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/constants/svgs.tsx",
        lineNumber: 61,
        columnNumber: 9
    }, this);
};
_c6 = BurgerMenu;
const CloseSVG = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "26",
        height: "22",
        viewBox: "0 0 26 22",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1 21L25 0.999982",
                stroke: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 71,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1 1L25 21",
                stroke: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 72,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/constants/svgs.tsx",
        lineNumber: 70,
        columnNumber: 9
    }, this);
};
_c7 = CloseSVG;
const CloseTwoSVG = ({ color = '#DCDCDC' })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "18",
        height: "18",
        viewBox: "0 0 18 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M17 1L1 17",
                stroke: color
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 79,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M17 17L1 0.999999",
                stroke: color
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 80,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/constants/svgs.tsx",
        lineNumber: 78,
        columnNumber: 9
    }, this);
};
_c8 = CloseTwoSVG;
const BurgerMenuSVG = ({ color = '#FFFFFF' })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "24",
        height: "18",
        viewBox: "0 0 24 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M0 17H24",
                stroke: color
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 87,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M0 9H24",
                stroke: color
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 88,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M0 1H24",
                stroke: color
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 89,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/constants/svgs.tsx",
        lineNumber: 86,
        columnNumber: 9
    }, this);
};
_c9 = BurgerMenuSVG;
const OpenListSVG = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "25",
        height: "15",
        viewBox: "0 0 25 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M23.6274 1.31372L12.3137 12.6274L1.00003 1.31372",
            stroke: "white",
            strokeWidth: "2"
        }, void 0, false, {
            fileName: "[project]/src/constants/svgs.tsx",
            lineNumber: 96,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/constants/svgs.tsx",
        lineNumber: 95,
        columnNumber: 9
    }, this);
};
_c10 = OpenListSVG;
const ClosedListSVG = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "25",
        height: "15",
        viewBox: "0 0 25 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M1 13.3137L12.3137 2.00001L23.6274 13.3137",
            stroke: "white",
            strokeWidth: "2"
        }, void 0, false, {
            fileName: "[project]/src/constants/svgs.tsx",
            lineNumber: 103,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/constants/svgs.tsx",
        lineNumber: 102,
        columnNumber: 9
    }, this);
};
_c11 = ClosedListSVG;
const LeftArrowSVG = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "15",
        height: "25",
        viewBox: "0 0 15 25",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M1.31372 1L12.6274 12.3137L1.31372 23.6274",
            stroke: "white",
            strokeWidth: "2"
        }, void 0, false, {
            fileName: "[project]/src/constants/svgs.tsx",
            lineNumber: 110,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/constants/svgs.tsx",
        lineNumber: 109,
        columnNumber: 9
    }, this);
};
_c12 = LeftArrowSVG;
const BackArrowSVG = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "34",
        height: "18",
        viewBox: "0 0 34 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10 1L2 9L10 17",
                stroke: "currentColor",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 116,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2.39506 9L34 9",
                stroke: "currentColor",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 117,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/constants/svgs.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
_c13 = BackArrowSVG;
const ForwardArrowSVG = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "34",
        height: "18",
        viewBox: "0 0 34 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M24 17L32 9L24 1",
                stroke: "currentColor",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 122,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M31.6049 9H0",
                stroke: "currentColor",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 123,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/constants/svgs.tsx",
        lineNumber: 121,
        columnNumber: 5
    }, this);
_c14 = ForwardArrowSVG;
const SearchSVG = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "17",
        height: "17",
        viewBox: "0 0 17 17",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "6.7117",
                cy: "6.7117",
                r: "5.7117",
                stroke: "black",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 128,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10.9648 10.9662L15.9986 16",
                stroke: "black",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 129,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/constants/svgs.tsx",
        lineNumber: 127,
        columnNumber: 5
    }, this);
_c15 = SearchSVG;
const LogoAmbosSVG = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "116",
        height: "17",
        viewBox: "0 0 116 17",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9.95795 11.5348H3.61306L1.83101 15.7353H0L6.85405 0.127686L13.5319 15.7353H11.7008L9.95795 11.5348ZM9.31172 9.97793L6.81488 4.01491L4.26909 9.97793H9.31172Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 134,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M25.8301 15.7349L28.3073 0.0195816L34.0256 12.5919L39.8515 0L42.1721 15.7447H40.4782L39.0682 5.38532L33.9962 16.3714L28.9927 5.38532L27.524 15.7447H25.8301V15.7349Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 135,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M59.0129 0.842285C59.8354 0.842285 61.3335 0.910827 62.4302 1.78227C62.9001 2.13476 63.7716 3.05516 63.7716 4.86659C63.7716 5.60095 63.6149 6.90322 62.3029 7.79425C64.3787 8.30341 65.1424 10.1148 65.1424 11.5444C65.1424 12.974 64.4276 14.1391 63.6247 14.756C62.4399 15.696 61.0789 15.7352 60.0508 15.7352H56.3398V0.842285H59.0227H59.0129ZM57.9848 7.38301H59.2381C60.1096 7.38301 62.1658 7.20676 62.1658 4.90576C62.1658 2.44809 59.7571 2.40893 59.2871 2.40893H57.9946V7.3928L57.9848 7.38301ZM57.9848 14.1783H59.8844C60.8439 14.1783 61.7839 14.1098 62.4987 13.5517C63.0764 13.1306 63.4778 12.3865 63.4778 11.4954C63.4778 10.3107 62.7826 9.61547 62.2049 9.31193C61.6468 8.9986 60.8635 8.86152 59.6787 8.86152H57.9848V14.1783Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 136,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M78.0781 8.30308C78.0781 3.85774 81.5345 0.597168 85.8232 0.597168C90.1119 0.597168 93.5683 3.85774 93.5683 8.30308C93.5683 12.7484 90.1315 16.009 85.8232 16.009C81.5149 16.009 78.0781 12.7288 78.0781 8.30308ZM79.7819 8.30308C79.7819 11.7203 82.4843 14.4423 85.833 14.4423C89.1817 14.4423 91.8841 11.7203 91.8841 8.30308C91.8841 4.88584 89.1817 2.16381 85.833 2.16381C82.4843 2.16381 79.7819 4.88584 79.7819 8.30308Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 137,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M113.983 3.7892C113.777 3.38775 113.444 2.93734 113.111 2.67297C112.817 2.44776 112.289 2.16381 111.437 2.16381C109.968 2.16381 108.94 3.08421 108.94 4.46481C108.94 5.04251 109.097 5.37542 109.498 5.75729C109.948 6.2077 110.507 6.45249 111.065 6.69727L112.494 7.32393C113.366 7.7058 114.169 8.10725 114.795 8.7339C115.559 9.49764 115.863 10.3593 115.863 11.4364C115.863 14.178 113.836 16.009 111.153 16.009C110.174 16.009 108.94 15.8034 107.912 14.8046C107.177 14.0899 106.727 13.0617 106.531 12.1707L108.137 11.7203C108.245 12.5036 108.607 13.1695 109.028 13.6199C109.674 14.2661 110.409 14.4423 111.172 14.4423C113.199 14.4423 114.169 12.9932 114.169 11.4951C114.169 10.8293 113.963 10.2418 113.434 9.75222C113.013 9.35077 112.426 9.0864 111.652 8.72411L110.311 8.09746C109.733 7.83309 108.989 7.51976 108.323 6.87352C107.677 6.24686 107.295 5.55167 107.295 4.43544C107.295 2.13443 109.057 0.597168 111.466 0.597168C112.377 0.597168 113.121 0.773415 113.855 1.26299C114.462 1.66444 114.972 2.27152 115.304 2.91775L113.983 3.7892Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 138,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/constants/svgs.tsx",
        lineNumber: 133,
        columnNumber: 5
    }, this);
_c16 = LogoAmbosSVG;
const LogoIdeaSVG = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "130",
        height: "50",
        viewBox: "0 0 130 50",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5.19769 10.3954C8.06829 10.3954 10.3954 8.06829 10.3954 5.19769C10.3954 2.32708 8.06829 0 5.19769 0C2.32708 0 0 2.32708 0 5.19769C0 8.06829 2.32708 10.3954 5.19769 10.3954Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 143,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14.8224 49.8877H14.2969V47.6958H14.8224V49.8877Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 144,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M17.1162 49.8877H16.5906L15.8151 48.5226V49.8877H15.2832V47.6958H15.8151L16.5906 49.0609V47.6958H17.1162V49.8877Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 145,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M19.2652 48.106H18.605V49.8941H18.0731V48.106H17.4258V47.6958H19.2588V48.106H19.2652Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 146,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20.9374 48.9584H20.1042V49.4839H21.0848V49.8877H19.5723V47.6958H21.0848V48.106H20.0978V48.5674H20.931V48.9584H20.9374Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 147,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M22.211 49.1122H21.9226V49.8877H21.3906V47.6958H22.2558C22.5186 47.6958 22.7173 47.7535 22.8647 47.8688C23.0121 47.9842 23.0826 48.1444 23.0826 48.3559C23.0826 48.5097 23.0506 48.6379 22.9865 48.7341C22.9224 48.8366 22.8262 48.9135 22.6981 48.9776L23.1531 49.862V49.8877H22.5891L22.2046 49.1122H22.211ZM21.9226 48.7084H22.2558C22.3584 48.7084 22.4353 48.6828 22.4802 48.6315C22.5314 48.5802 22.5571 48.5033 22.5571 48.4136C22.5571 48.3239 22.5314 48.247 22.4802 48.1893C22.4289 48.138 22.352 48.106 22.2558 48.106H21.9226V48.7084Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 148,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M25.333 49.8877H24.8074L24.0319 48.5226V49.8877H23.5V47.6958H24.0319L24.8074 49.0609V47.6958H25.333V49.8877Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 149,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M27.0062 49.4775H26.282L26.1538 49.8877H25.5898L26.391 47.6958H26.8909L27.6984 49.8877H27.128L26.9998 49.4775H27.0062ZM26.4102 49.0737H26.8845L26.6473 48.3111L26.4102 49.0737Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 150,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M29.4976 48.106H28.8375V49.8941H28.3055V48.106H27.6582V47.6958H29.4912V48.106H29.4976Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 151,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M30.3771 49.8877H29.8516V47.6958H30.3771V49.8877Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 152,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M32.6922 48.8364C32.6922 49.0479 32.6538 49.2401 32.5705 49.4068C32.4935 49.5734 32.3782 49.7016 32.2308 49.7849C32.0834 49.8682 31.9167 49.9195 31.7309 49.9195C31.545 49.9195 31.3784 49.8746 31.2374 49.7913C31.09 49.708 30.981 49.5798 30.8977 49.426C30.8144 49.2658 30.7759 49.0863 30.7695 48.8748V48.753C30.7695 48.5351 30.808 48.3493 30.8849 48.1826C30.9618 48.016 31.0772 47.8942 31.2246 47.8045C31.372 47.7148 31.5386 47.6699 31.7245 47.6699C31.9103 47.6699 32.077 47.7148 32.2244 47.8045C32.3718 47.8942 32.4807 48.016 32.564 48.1826C32.6474 48.3493 32.6858 48.5351 32.6858 48.7466V48.8492L32.6922 48.8364ZM32.1539 48.7466C32.1539 48.5287 32.1154 48.3621 32.0449 48.2531C31.9744 48.1378 31.8655 48.0865 31.7309 48.0865C31.4681 48.0865 31.3271 48.2852 31.3079 48.6825V48.8428C31.3079 49.0607 31.3399 49.2209 31.4104 49.3363C31.4809 49.4516 31.5899 49.5093 31.7309 49.5093C31.8719 49.5093 31.968 49.4516 32.0385 49.3363C32.109 49.2209 32.1475 49.0607 32.1475 48.8492V48.7466H32.1539Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 153,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M34.8896 49.8877H34.3641L33.5886 48.5226V49.8877H33.0566V47.6958H33.5886L34.3641 49.0609V47.6958H34.8896V49.8877Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 154,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M36.5629 49.4775H35.8387L35.7105 49.8877H35.1465L35.9476 47.6958H36.4475L37.255 49.8877H36.6846L36.5565 49.4775H36.5629ZM35.9668 49.0737H36.4411L36.204 48.3111L35.9668 49.0737Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 155,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M38.0412 49.4839H38.9641V49.8877H37.5156V47.6958H38.0476V49.4839H38.0412Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 156,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M40.7013 49.8877H40.1758V47.6958H40.7013V49.8877Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 157,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M42.9892 49.8877H42.4637L41.6882 48.5226V49.8877H41.1562V47.6958H41.6882L42.4637 49.0609V47.6958H42.9892V49.8877Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 158,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M44.5492 49.3043C44.5492 49.2274 44.5235 49.1697 44.4659 49.1248C44.4082 49.08 44.3121 49.0351 44.1775 48.9902C44.0429 48.9454 43.9275 48.9005 43.8378 48.8556C43.5558 48.7146 43.4084 48.5224 43.4084 48.2788C43.4084 48.1571 43.4468 48.0481 43.5173 47.9584C43.5878 47.8687 43.6904 47.7918 43.8186 47.7405C43.9467 47.6892 44.0942 47.6636 44.2544 47.6636C44.4146 47.6636 44.5556 47.6892 44.6774 47.7469C44.7991 47.8046 44.9017 47.8815 44.9658 47.984C45.0363 48.0866 45.0683 48.2083 45.0683 48.3429H44.5428C44.5428 48.2532 44.5171 48.1827 44.4595 48.1378C44.4082 48.0866 44.3313 48.0609 44.2351 48.0609C44.139 48.0609 44.0685 48.0802 44.0108 48.125C43.9596 48.1635 43.9275 48.2212 43.9275 48.2852C43.9275 48.3429 43.9596 48.3942 44.0172 48.4391C44.0749 48.4839 44.1839 48.5288 44.3377 48.5801C44.4915 48.6313 44.6133 48.6826 44.7094 48.7403C44.9465 48.8749 45.0683 49.0671 45.0683 49.3043C45.0683 49.4965 44.9978 49.6439 44.8504 49.7529C44.703 49.8619 44.5043 49.9195 44.2544 49.9195C44.0749 49.9195 43.9147 49.8875 43.7737 49.8234C43.6327 49.7593 43.5238 49.6696 43.4468 49.5606C43.3763 49.4517 43.3379 49.3235 43.3379 49.1761H43.8698C43.8698 49.2915 43.9019 49.3812 43.9596 49.4389C44.0172 49.4965 44.1198 49.5222 44.2544 49.5222C44.3441 49.5222 44.4082 49.503 44.4595 49.4645C44.5107 49.426 44.5364 49.3748 44.5364 49.3043H44.5492Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 159,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M47.1636 48.106H46.5035V49.8941H45.9715V48.106H45.3242V47.6958H47.1572V48.106H47.1636Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 160,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M48.0451 49.8877H47.5195V47.6958H48.0451V49.8877Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 161,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M50.2261 48.106H49.566V49.8941H49.034V48.106H48.3867V47.6958H50.2197V48.106H50.2261Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 162,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M52.2636 47.6959V49.1315C52.2636 49.2917 52.2316 49.4327 52.1611 49.5545C52.0906 49.6762 51.9945 49.766 51.8599 49.8236C51.7253 49.8813 51.5779 49.9198 51.3984 49.9198C51.1292 49.9198 50.9177 49.8493 50.7703 49.7147C50.6165 49.5737 50.5396 49.3878 50.5332 49.1443V47.6959H51.0652V49.1507C51.0652 49.3878 51.1805 49.5096 51.3984 49.5096C51.5074 49.5096 51.5907 49.4776 51.6484 49.4199C51.706 49.3622 51.7317 49.2597 51.7317 49.1251V47.6895H52.2636V47.6959Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 163,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M54.4038 48.106H53.7437V49.8941H53.2118V48.106H52.5645V47.6958H54.3974V48.106H54.4038Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 164,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M56.0839 48.9584H55.2507V49.4839H56.2313V49.8877H54.7188V47.6958H56.2313V48.106H55.2443V48.5674H56.0775V48.9584H56.0839Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 165,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M58.7828 49.0161H57.9304V49.8877H57.3984V47.6958H58.8661V48.106H57.9304V48.6123H58.7828V49.0161Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 166,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M61.0379 48.8364C61.0379 49.0479 60.9995 49.2401 60.9162 49.4068C60.8393 49.5734 60.7239 49.7016 60.5765 49.7849C60.4291 49.8682 60.2624 49.9195 60.0766 49.9195C59.8907 49.9195 59.7241 49.8746 59.5831 49.7913C59.4357 49.708 59.3267 49.5798 59.2434 49.426C59.1601 49.2658 59.1216 49.0863 59.1152 48.8748V48.753C59.1152 48.5351 59.1537 48.3493 59.2306 48.1826C59.3075 48.016 59.4229 47.8942 59.5703 47.8045C59.7177 47.7148 59.8843 47.6699 60.0702 47.6699C60.256 47.6699 60.4227 47.7148 60.5701 47.8045C60.7175 47.8942 60.8264 48.016 60.9098 48.1826C60.9931 48.3493 61.0315 48.5351 61.0315 48.7466V48.8492L61.0379 48.8364ZM60.4996 48.7466C60.4996 48.5287 60.4611 48.3621 60.3906 48.2531C60.3201 48.1378 60.2112 48.0865 60.0766 48.0865C59.8138 48.0865 59.6728 48.2852 59.6536 48.6825V48.8428C59.6536 49.0607 59.6856 49.2209 59.7561 49.3363C59.8266 49.4516 59.9356 49.5093 60.0766 49.5093C60.2176 49.5093 60.3137 49.4516 60.3842 49.3363C60.4547 49.2209 60.4932 49.0607 60.4932 48.8492V48.7466H60.4996Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 167,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M62.2168 49.1122H61.9284V49.8877H61.3965V47.6958H62.2617C62.5245 47.6958 62.7231 47.7535 62.8705 47.8688C63.018 47.9842 63.0885 48.1444 63.0885 48.3559C63.0885 48.5097 63.0564 48.6379 62.9923 48.7341C62.9282 48.8366 62.8321 48.9135 62.7039 48.9776L63.159 49.862V49.8877H62.595L62.2104 49.1122H62.2168ZM61.9348 48.7084H62.2681C62.3707 48.7084 62.4476 48.6828 62.4924 48.6315C62.5437 48.5802 62.5693 48.5033 62.5693 48.4136C62.5693 48.3239 62.5437 48.247 62.4924 48.1893C62.4411 48.138 62.3642 48.106 62.2681 48.106H61.9348V48.7084Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 168,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M64.3697 49.8877V47.6958H65.0747C65.2669 47.6958 65.44 47.7407 65.6002 47.8304C65.754 47.9201 65.8758 48.0419 65.9591 48.2021C66.0424 48.3623 66.0873 48.5418 66.0937 48.7405V48.843C66.0937 49.0417 66.0488 49.2211 65.9655 49.3814C65.8822 49.5416 65.7604 49.6634 65.6066 49.7531C65.4528 49.8428 65.2798 49.8877 65.0875 49.8877H64.3633H64.3697ZM64.8952 48.106V49.4839H65.0811C65.2349 49.4839 65.3503 49.4326 65.4336 49.3237C65.5169 49.2147 65.5554 49.0545 65.5554 48.843V48.7469C65.5554 48.5354 65.5169 48.3752 65.4336 48.2662C65.3503 48.1572 65.2349 48.106 65.0811 48.106H64.9016H64.8952Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 169,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M67.8182 48.9584H66.9851V49.4839H67.9656V49.8877H66.4531V47.6958H67.9656V48.106H66.9787V48.5674H67.8118V48.9584H67.8182Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 170,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M68.9726 47.6958L69.4596 49.2211L69.9467 47.6958H70.6453V49.8877H70.1134V49.375L70.1646 48.3239L69.6327 49.8877H69.2802L68.7483 48.3239L68.7995 49.375V49.8877H68.2676V47.6958H68.9597H68.9726Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 171,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M72.9266 48.8364C72.9266 49.0479 72.8881 49.2401 72.8048 49.4068C72.7279 49.5734 72.6126 49.7016 72.4652 49.7849C72.3177 49.8682 72.1511 49.9195 71.9653 49.9195C71.7794 49.9195 71.6128 49.8746 71.4718 49.7913C71.3244 49.708 71.2154 49.5798 71.1321 49.426C71.0488 49.2658 71.0103 49.0863 71.0039 48.8748V48.753C71.0039 48.5351 71.0424 48.3493 71.1193 48.1826C71.1962 48.016 71.3115 47.8942 71.4589 47.8045C71.6064 47.7148 71.773 47.6699 71.9588 47.6699C72.1447 47.6699 72.3113 47.7148 72.4587 47.8045C72.6062 47.8942 72.7151 48.016 72.7984 48.1826C72.8817 48.3493 72.9202 48.5351 72.9202 48.7466V48.8492L72.9266 48.8364ZM72.3947 48.7466C72.3947 48.5287 72.3562 48.3621 72.2857 48.2531C72.2152 48.1378 72.1063 48.0865 71.9717 48.0865C71.7089 48.0865 71.5679 48.2852 71.5487 48.6825V48.8428C71.5487 49.0607 71.5807 49.2209 71.6512 49.3363C71.7217 49.4516 71.8307 49.5093 71.9717 49.5093C72.1127 49.5093 72.2088 49.4516 72.2793 49.3363C72.3498 49.2209 72.3882 49.0607 72.3882 48.8492V48.7466H72.3947Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 172,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M75.0673 49.1441C75.0609 49.2979 75.0161 49.4325 74.9456 49.5479C74.8687 49.6632 74.7661 49.753 74.6315 49.8171C74.4969 49.8811 74.3431 49.9132 74.1637 49.9132C73.8753 49.9132 73.651 49.8171 73.4843 49.6312C73.3177 49.4453 73.2344 49.1762 73.2344 48.8365V48.7275C73.2344 48.5096 73.2728 48.3238 73.3497 48.1635C73.4266 48.0033 73.5292 47.8751 73.6702 47.7918C73.8112 47.7021 73.9714 47.6572 74.1573 47.6572C74.42 47.6572 74.6379 47.7277 74.7982 47.8687C74.9584 48.0097 75.0545 48.202 75.0738 48.4455H74.5482C74.5482 48.3109 74.5098 48.2148 74.4457 48.1571C74.3816 48.0994 74.2855 48.0674 74.1573 48.0674C74.0291 48.0674 73.9265 48.1187 73.8689 48.2148C73.8112 48.3109 73.7727 48.4712 73.7727 48.6891V48.8429C73.7727 49.08 73.8048 49.2467 73.8625 49.3428C73.9201 49.4389 74.0227 49.4902 74.1637 49.4902C74.2855 49.4902 74.3752 49.4646 74.4393 49.4069C74.5034 49.3492 74.5354 49.2595 74.5418 49.1313H75.0673V49.1441Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 173,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M76.2266 49.1122H75.9382V49.8877H75.4062V47.6958H76.2715C76.5342 47.6958 76.7329 47.7535 76.8803 47.8688C77.0277 47.9842 77.0982 48.1444 77.0982 48.3559C77.0982 48.5097 77.0662 48.6379 77.0021 48.7341C76.938 48.8366 76.8419 48.9135 76.7137 48.9776L77.1687 49.862V49.8877H76.6047L76.2202 49.1122H76.2266ZM75.9382 48.7084H76.2715C76.374 48.7084 76.4509 48.6828 76.4958 48.6315C76.547 48.5802 76.5727 48.5033 76.5727 48.4136C76.5727 48.3239 76.547 48.247 76.4958 48.1893C76.4445 48.138 76.3676 48.106 76.2715 48.106H75.9382V48.7084Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 174,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M78.764 49.4775H78.0398L77.9116 49.8877H77.3477L78.1488 47.6958H78.6487L79.4562 49.8877H78.8858L78.7576 49.4775H78.764ZM78.1616 49.0737H78.6359L78.3987 48.3111L78.1616 49.0737Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 175,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M81.4892 49.1441C81.4828 49.2979 81.4379 49.4325 81.3674 49.5479C81.2905 49.6632 81.188 49.753 81.0534 49.8171C80.9188 49.8811 80.765 49.9132 80.5856 49.9132C80.2971 49.9132 80.0728 49.8171 79.9062 49.6312C79.7396 49.4453 79.6562 49.1762 79.6562 48.8365V48.7275C79.6562 48.5096 79.6947 48.3238 79.7716 48.1635C79.8485 48.0033 79.9511 47.8751 80.0921 47.7918C80.2331 47.7021 80.3933 47.6572 80.5791 47.6572C80.8419 47.6572 81.0598 47.7277 81.22 47.8687C81.3803 48.0097 81.4764 48.202 81.4956 48.4455H80.9701C80.9701 48.3109 80.9316 48.2148 80.8675 48.1571C80.8035 48.0994 80.7073 48.0674 80.5791 48.0674C80.451 48.0674 80.3484 48.1187 80.2907 48.2148C80.2331 48.3109 80.1946 48.4712 80.1946 48.6891V48.8429C80.1946 49.08 80.2266 49.2467 80.2843 49.3428C80.342 49.4389 80.4446 49.4902 80.5856 49.4902C80.7073 49.4902 80.797 49.4646 80.8611 49.4069C80.9252 49.3492 80.9573 49.2595 80.9637 49.1313H81.4892V49.1441Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 176,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M82.6285 48.6507L83.0322 47.6958H83.6026L82.8976 49.0994V49.8877H82.3593V49.0994L81.6543 47.6958H82.2247L82.6285 48.6507Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 177,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M85.9633 49.4775H85.239L85.1109 49.8877H84.5469L85.348 47.6958H85.8479L86.6554 49.8877H86.085L85.9568 49.4775H85.9633ZM85.3672 49.0737H85.8415L85.6044 48.3111L85.3672 49.0737Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 178,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M88.7431 49.8877H88.2176L87.4421 48.5226V49.8877H86.9102V47.6958H87.4421L88.2176 49.0609V47.6958H88.7431V49.8877Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 179,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M89.1744 49.8877V47.6958H89.8794C90.0716 47.6958 90.2447 47.7407 90.4049 47.8304C90.5587 47.9201 90.6805 48.0419 90.7638 48.2021C90.8471 48.3623 90.892 48.5418 90.8984 48.7405V48.843C90.8984 49.0417 90.8535 49.2211 90.7702 49.3814C90.6869 49.5416 90.5651 49.6634 90.4113 49.7531C90.2575 49.8428 90.0844 49.8877 89.8922 49.8877H89.168H89.1744ZM89.6999 48.106V49.4839H89.8858C90.0396 49.4839 90.155 49.4326 90.2383 49.3237C90.3216 49.2147 90.36 49.0545 90.36 48.843V48.7469C90.36 48.5354 90.3216 48.3752 90.2383 48.2662C90.155 48.1572 90.0396 48.106 89.8858 48.106H89.7063H89.6999Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 180,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M93.4804 48.9584H92.6472V49.4839H93.6278V49.8877H92.1152V47.6958H93.6278V48.106H92.6408V48.5674H93.4739V48.9584H93.4804Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 181,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M94.4669 49.4839H95.3898V49.8877H93.9414V47.6958H94.4734V49.4839H94.4669Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 182,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M97.0643 48.9584H96.2312V49.4839H97.2117V49.8877H95.6992V47.6958H97.2117V48.106H96.2248V48.5674H97.0579V48.9584H97.0643Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 183,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M99.2998 49.1441C99.2934 49.2979 99.2485 49.4325 99.178 49.5479C99.1011 49.6632 98.9985 49.753 98.864 49.8171C98.7294 49.8811 98.5755 49.9132 98.3961 49.9132C98.1077 49.9132 97.8834 49.8171 97.7167 49.6312C97.5501 49.4453 97.4668 49.1762 97.4668 48.8365V48.7275C97.4668 48.5096 97.5052 48.3238 97.5822 48.1635C97.6591 48.0033 97.7616 47.8751 97.9026 47.7918C98.0436 47.7021 98.2038 47.6572 98.3897 47.6572C98.6525 47.6572 98.8704 47.7277 99.0306 47.8687C99.1908 48.0097 99.2869 48.202 99.3062 48.4455H98.7806C98.7806 48.3109 98.7422 48.2148 98.6781 48.1571C98.614 48.0994 98.5179 48.0674 98.3897 48.0674C98.2615 48.0674 98.159 48.1187 98.1013 48.2148C98.0436 48.3109 98.0051 48.4712 98.0051 48.6891V48.8429C98.0051 49.08 98.0372 49.2467 98.0949 49.3428C98.1526 49.4389 98.2551 49.4902 98.3961 49.4902C98.5179 49.4902 98.6076 49.4646 98.6717 49.4069C98.7358 49.3492 98.7678 49.2595 98.7742 49.1313H99.2998V49.1441Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 184,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M101.318 48.106H100.658V49.8941H100.126V48.106H99.4785V47.6958H101.311V48.106H101.318Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 185,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M103.446 48.8364C103.446 49.0479 103.408 49.2401 103.324 49.4068C103.247 49.5734 103.132 49.7016 102.985 49.7849C102.837 49.8682 102.671 49.9195 102.485 49.9195C102.299 49.9195 102.132 49.8746 101.991 49.7913C101.844 49.708 101.735 49.5798 101.652 49.426C101.568 49.2658 101.53 49.0863 101.523 48.8748V48.753C101.523 48.5351 101.562 48.3493 101.639 48.1826C101.716 48.016 101.831 47.8942 101.978 47.8045C102.126 47.7148 102.293 47.6699 102.478 47.6699C102.664 47.6699 102.831 47.7148 102.978 47.8045C103.126 47.8942 103.235 48.016 103.318 48.1826C103.401 48.3493 103.44 48.5351 103.44 48.7466V48.8492L103.446 48.8364ZM102.908 48.7466C102.908 48.5287 102.869 48.3621 102.799 48.2531C102.728 48.1378 102.619 48.0865 102.485 48.0865C102.222 48.0865 102.081 48.2852 102.062 48.6825V48.8428C102.062 49.0607 102.094 49.2209 102.164 49.3363C102.235 49.4516 102.344 49.5093 102.485 49.5093C102.626 49.5093 102.722 49.4516 102.792 49.3363C102.863 49.2209 102.901 49.0607 102.901 48.8492V48.7466H102.908Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 186,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M104.633 49.1122H104.344V49.8877H103.812V47.6958H104.678C104.94 47.6958 105.139 47.7535 105.287 47.8688C105.434 47.9842 105.504 48.1444 105.504 48.3559C105.504 48.5097 105.472 48.6379 105.408 48.7341C105.344 48.8366 105.248 48.9135 105.12 48.9776L105.575 49.862V49.8877H105.011L104.626 49.1122H104.633ZM104.344 48.7084H104.678C104.78 48.7084 104.857 48.6828 104.902 48.6315C104.953 48.5802 104.979 48.5033 104.979 48.4136C104.979 48.3239 104.953 48.247 104.902 48.1893C104.851 48.138 104.774 48.106 104.678 48.106H104.344V48.7084Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 187,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M107.164 49.4775H106.44L106.312 49.8877H105.748L106.549 47.6958H107.049L107.857 49.8877H107.286L107.158 49.4775H107.164ZM106.568 49.0737H107.043L106.806 48.3111L106.568 49.0737Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 188,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M108.645 49.4839H109.568V49.8877H108.119V47.6958H108.651V49.4839H108.645Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 189,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M111.983 49.4775H111.259L111.13 49.8877H110.566L111.368 47.6958H111.867L112.675 49.8877H112.105L111.976 49.4775H111.983ZM111.387 49.0737H111.861L111.624 48.3111L111.387 49.0737Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 190,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M114.065 49.3043C114.065 49.2274 114.039 49.1697 113.982 49.1248C113.924 49.08 113.828 49.0351 113.693 48.9902C113.559 48.9454 113.443 48.9005 113.353 48.8556C113.071 48.7146 112.924 48.5224 112.924 48.2788C112.924 48.1571 112.962 48.0481 113.033 47.9584C113.103 47.8687 113.206 47.7918 113.334 47.7405C113.462 47.6892 113.61 47.6636 113.77 47.6636C113.93 47.6636 114.071 47.6892 114.193 47.7469C114.315 47.8046 114.417 47.8815 114.481 47.984C114.552 48.0866 114.584 48.2083 114.584 48.3429H114.058C114.058 48.2532 114.033 48.1827 113.975 48.1378C113.924 48.0866 113.847 48.0609 113.751 48.0609C113.655 48.0609 113.584 48.0802 113.526 48.125C113.475 48.1635 113.443 48.2212 113.443 48.2852C113.443 48.3429 113.475 48.3942 113.533 48.4391C113.591 48.4839 113.7 48.5288 113.853 48.5801C114.007 48.6313 114.129 48.6826 114.225 48.7403C114.462 48.8749 114.584 49.0671 114.584 49.3043C114.584 49.4965 114.513 49.6439 114.366 49.7529C114.219 49.8619 114.02 49.9195 113.77 49.9195C113.591 49.9195 113.43 49.8875 113.289 49.8234C113.148 49.7593 113.039 49.6696 112.962 49.5606C112.892 49.4517 112.854 49.3235 112.854 49.1761H113.385C113.385 49.2915 113.418 49.3812 113.475 49.4389C113.533 49.4965 113.635 49.5222 113.77 49.5222C113.86 49.5222 113.924 49.503 113.975 49.4645C114.026 49.426 114.052 49.3748 114.052 49.3043H114.065Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 191,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M116.084 49.3043C116.084 49.2274 116.059 49.1697 116.001 49.1248C115.943 49.08 115.847 49.0351 115.713 48.9902C115.578 48.9454 115.463 48.9005 115.373 48.8556C115.091 48.7146 114.944 48.5224 114.944 48.2788C114.944 48.1571 114.982 48.0481 115.052 47.9584C115.123 47.8687 115.226 47.7918 115.354 47.7405C115.482 47.6892 115.629 47.6636 115.79 47.6636C115.95 47.6636 116.091 47.6892 116.213 47.7469C116.334 47.8046 116.437 47.8815 116.501 47.984C116.571 48.0866 116.603 48.2083 116.603 48.3429H116.078C116.078 48.2532 116.052 48.1827 115.995 48.1378C115.943 48.0866 115.866 48.0609 115.77 48.0609C115.674 48.0609 115.604 48.0802 115.546 48.125C115.495 48.1635 115.463 48.2212 115.463 48.2852C115.463 48.3429 115.495 48.3942 115.552 48.4391C115.61 48.4839 115.719 48.5288 115.873 48.5801C116.027 48.6313 116.148 48.6826 116.245 48.7403C116.482 48.8749 116.603 49.0671 116.603 49.3043C116.603 49.4965 116.533 49.6439 116.386 49.7529C116.238 49.8619 116.039 49.9195 115.79 49.9195C115.61 49.9195 115.45 49.8875 115.309 49.8234C115.168 49.7593 115.059 49.6696 114.982 49.5606C114.911 49.4517 114.873 49.3235 114.873 49.1761H115.405C115.405 49.2915 115.437 49.3812 115.495 49.4389C115.552 49.4965 115.655 49.5222 115.79 49.5222C115.879 49.5222 115.943 49.503 115.995 49.4645C116.046 49.426 116.072 49.3748 116.072 49.3043H116.084Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 192,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M117.547 49.8877H117.021V47.6958H117.547V49.8877Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 193,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M119.137 49.3043C119.137 49.2274 119.111 49.1697 119.054 49.1248C118.996 49.08 118.9 49.0351 118.765 48.9902C118.631 48.9454 118.515 48.9005 118.426 48.8556C118.144 48.7146 117.996 48.5224 117.996 48.2788C117.996 48.1571 118.035 48.0481 118.105 47.9584C118.176 47.8687 118.278 47.7918 118.406 47.7405C118.535 47.6892 118.682 47.6636 118.842 47.6636C119.002 47.6636 119.143 47.6892 119.265 47.7469C119.387 47.8046 119.49 47.8815 119.554 47.984C119.624 48.0866 119.656 48.2083 119.656 48.3429H119.131C119.131 48.2532 119.105 48.1827 119.047 48.1378C118.996 48.0866 118.919 48.0609 118.823 48.0609C118.727 48.0609 118.656 48.0802 118.599 48.125C118.547 48.1635 118.515 48.2212 118.515 48.2852C118.515 48.3429 118.547 48.3942 118.605 48.4391C118.663 48.4839 118.772 48.5288 118.926 48.5801C119.079 48.6313 119.201 48.6826 119.297 48.7403C119.534 48.8749 119.656 49.0671 119.656 49.3043C119.656 49.4965 119.586 49.6439 119.438 49.7529C119.291 49.8619 119.092 49.9195 118.842 49.9195C118.663 49.9195 118.503 49.8875 118.362 49.8234C118.221 49.7593 118.112 49.6696 118.035 49.5606C117.964 49.4517 117.926 49.3235 117.926 49.1761H118.458C118.458 49.2915 118.49 49.3812 118.547 49.4389C118.605 49.4965 118.708 49.5222 118.842 49.5222C118.932 49.5222 118.996 49.503 119.047 49.4645C119.099 49.426 119.124 49.3748 119.124 49.3043H119.137Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 194,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M121.751 48.106H121.091V49.8941H120.559V48.106H119.912V47.6958H121.745V48.106H121.751Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 195,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M123.127 49.4775H122.403L122.275 49.8877H121.711L122.512 47.6958H123.012L123.819 49.8877H123.249L123.121 49.4775H123.127ZM122.531 49.0737H123.006L122.768 48.3111L122.531 49.0737Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 196,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M125.909 49.8877H125.384L124.608 48.5226V49.8877H124.076V47.6958H124.608L125.384 49.0609V47.6958H125.909V49.8877Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 197,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M128.114 49.1441C128.108 49.2979 128.063 49.4325 127.992 49.5479C127.916 49.6632 127.813 49.753 127.678 49.8171C127.544 49.8811 127.39 49.9132 127.211 49.9132C126.922 49.9132 126.698 49.8171 126.531 49.6312C126.365 49.4453 126.281 49.1762 126.281 48.8365V48.7275C126.281 48.5096 126.32 48.3238 126.397 48.1635C126.474 48.0033 126.576 47.8751 126.717 47.7918C126.858 47.7021 127.018 47.6572 127.204 47.6572C127.467 47.6572 127.685 47.7277 127.845 47.8687C128.005 48.0097 128.101 48.202 128.121 48.4455H127.595C127.595 48.3109 127.557 48.2148 127.493 48.1571C127.428 48.0994 127.332 48.0674 127.204 48.0674C127.076 48.0674 126.973 48.1187 126.916 48.2148C126.858 48.3109 126.82 48.4712 126.82 48.6891V48.8429C126.82 49.08 126.852 49.2467 126.909 49.3428C126.967 49.4389 127.07 49.4902 127.211 49.4902C127.332 49.4902 127.422 49.4646 127.486 49.4069C127.55 49.3492 127.582 49.2595 127.589 49.1313H128.114V49.1441Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 198,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M129.812 48.9584H128.979V49.4839H129.96V49.8877H128.447V47.6958H129.96V48.106H128.973V48.5674H129.806V48.9584H129.812Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 199,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M15.2829 43.1264H14.3984V32.699H15.2829V43.1264Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 200,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M18.7325 35.3715L18.7581 36.6981C19.0465 36.2239 19.4118 35.8585 19.8476 35.6086C20.2834 35.3586 20.7641 35.2305 21.2896 35.2305C22.1228 35.2305 22.7381 35.4676 23.1418 35.9355C23.5456 36.4033 23.7507 37.1083 23.7571 38.044V43.1327H22.9047V38.0376C22.9047 37.3454 22.7509 36.8263 22.4625 36.493C22.1741 36.1534 21.7126 35.9867 21.0781 35.9867C20.5462 35.9867 20.0783 36.1534 19.6682 36.4866C19.258 36.8199 18.9568 37.2685 18.7645 37.8325V43.1392H17.9121V35.3907H18.726L18.7325 35.3715Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 201,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M27.3056 33.3848V35.3716H28.9078V36.0765H27.3056V41.2486C27.3056 41.678 27.3825 41.9984 27.5363 42.2099C27.6901 42.4214 27.9529 42.524 28.3118 42.524C28.4528 42.524 28.6835 42.4983 29.004 42.4535L29.0424 43.1521C28.8181 43.2354 28.5105 43.2738 28.1259 43.2738C27.5363 43.2738 27.1133 43.1008 26.8441 42.7611C26.575 42.4214 26.4404 41.9151 26.4404 41.255V36.0829H25.0176V35.378H26.4404V33.3912H27.2992L27.3056 33.3848Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 202,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M33.6905 43.2674C33.0303 43.2674 32.4343 43.1072 31.9024 42.7803C31.3704 42.4535 30.9538 42.0048 30.659 41.4216C30.3642 40.8384 30.2168 40.1911 30.2168 39.4669V39.1592C30.2168 38.4158 30.3642 37.7429 30.6526 37.1468C30.941 36.5508 31.3448 36.0829 31.8575 35.7368C32.3702 35.3972 32.9342 35.2241 33.5367 35.2241C34.4788 35.2241 35.2222 35.5446 35.7734 36.1855C36.3246 36.8264 36.6001 37.7044 36.6001 38.8196V39.3002H31.0692V39.4669C31.0692 40.3449 31.3191 41.0755 31.8255 41.6652C32.3318 42.2484 32.9663 42.5432 33.7289 42.5432C34.1904 42.5432 34.5941 42.4599 34.9402 42.2932C35.2927 42.1266 35.6132 41.8574 35.8952 41.4921L36.4335 41.9023C35.8054 42.8124 34.8889 43.2738 33.6905 43.2738V43.2674ZM33.5302 35.9612C32.8829 35.9612 32.3446 36.1983 31.9024 36.6726C31.4601 37.1468 31.191 37.7813 31.0948 38.576H35.7413V38.4799C35.7157 37.7364 35.5042 37.1276 35.1004 36.6597C34.6967 36.1919 34.1711 35.9547 33.5238 35.9547L33.5302 35.9612Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 203,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M41.8488 36.1022C41.6693 36.0701 41.4771 36.0509 41.2656 36.0509C40.7336 36.0509 40.2786 36.1983 39.9069 36.4995C39.5352 36.8007 39.2724 37.2301 39.1122 37.8005V43.12H38.2598V35.3715H39.0993L39.1122 36.6021C39.5672 35.6856 40.2914 35.2241 41.2976 35.2241C41.5348 35.2241 41.727 35.2562 41.8616 35.3203L41.8424 36.1022H41.8488Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 204,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M44.021 35.3715L44.053 36.6981C44.3414 36.2239 44.7067 35.8585 45.1425 35.6086C45.5784 35.3586 46.059 35.2305 46.5846 35.2305C47.4177 35.2305 48.033 35.4676 48.4368 35.9355C48.8405 36.4033 49.0456 37.1083 49.052 38.044V43.1327H48.1996V38.0376C48.1996 37.3454 48.0458 36.8263 47.7574 36.493C47.469 36.1598 47.0076 35.9867 46.3731 35.9867C45.8411 35.9867 45.3733 36.1534 44.9631 36.4866C44.5529 36.8199 44.2517 37.2685 44.0594 37.8325V43.1392H43.207V35.3907H44.021V35.3715Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 205,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M56.1532 43.1263C56.0699 42.8827 56.0122 42.5238 55.9866 42.0432C55.6853 42.4341 55.3008 42.7353 54.8394 42.9468C54.3715 43.1583 53.878 43.2673 53.3589 43.2673C52.6154 43.2673 52.013 43.0622 51.5515 42.6456C51.0901 42.229 50.8594 41.7035 50.8594 41.069C50.8594 40.3127 51.1734 39.7167 51.8015 39.2809C52.4296 38.8387 53.3076 38.6208 54.4292 38.6208H55.9866V37.7427C55.9866 37.1916 55.8135 36.7557 55.4738 36.4353C55.1342 36.1148 54.6343 35.961 53.9806 35.961C53.3845 35.961 52.891 36.1148 52.5001 36.4225C52.1091 36.7301 51.9104 37.0954 51.9104 37.5248H51.0516C51.0516 36.9032 51.34 36.3648 51.9104 35.9162C52.4808 35.4675 53.1858 35.2368 54.0254 35.2368C54.865 35.2368 55.57 35.4547 56.0699 35.8841C56.5698 36.3135 56.8261 36.9224 56.839 37.6915V41.3574C56.839 42.1072 56.9159 42.6712 57.0761 43.043V43.1263H56.1596H56.1532ZM53.4614 42.5046C54.0318 42.5046 54.5445 42.3636 54.9996 42.088C55.4482 41.8124 55.7815 41.4407 55.9866 40.9793V39.2745H54.4548C53.6024 39.2873 52.9295 39.4411 52.4488 39.7423C51.9681 40.0436 51.7246 40.4601 51.7246 40.9921C51.7246 41.4279 51.8848 41.7868 52.2053 42.0752C52.5257 42.3636 52.9487 42.5046 53.4614 42.5046Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 206,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M60.454 33.3848V35.3716H62.0563V36.0765H60.454V41.2486C60.454 41.678 60.5309 41.9984 60.6847 42.2099C60.8386 42.4214 61.1013 42.524 61.4602 42.524C61.6012 42.524 61.832 42.4983 62.1524 42.4535L62.1909 43.1521C61.9665 43.2354 61.6589 43.2738 61.2744 43.2738C60.6847 43.2738 60.2618 43.1008 59.9926 42.7611C59.7234 42.4214 59.5888 41.9151 59.5888 41.255V36.0829H58.166V35.378H59.5888V33.3912H60.4476L60.454 33.3848Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 207,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M63.7793 33.1349C63.7793 32.9747 63.8306 32.8401 63.9395 32.7247C64.0421 32.6158 64.1895 32.5581 64.3689 32.5581C64.5484 32.5581 64.6958 32.6158 64.8047 32.7247C64.9137 32.8337 64.965 32.9747 64.965 33.1349C64.965 33.2951 64.9137 33.4297 64.8047 33.5387C64.6958 33.6476 64.5548 33.7053 64.3689 33.7053C64.1831 33.7053 64.0421 33.6476 63.9395 33.5387C63.837 33.4297 63.7793 33.2951 63.7793 33.1349ZM64.7919 43.1265H63.9331V35.3781H64.7919V43.1265Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 208,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M66.649 39.1335C66.649 38.3901 66.7964 37.7172 67.0848 37.1211C67.3732 36.5251 67.7834 36.0572 68.3089 35.7304C68.8345 35.3971 69.4369 35.2305 70.1034 35.2305C71.1353 35.2305 71.9684 35.5894 72.6093 36.3136C73.2502 37.0378 73.5707 37.9927 73.5707 39.1912V39.3707C73.5707 40.1205 73.4233 40.7935 73.1349 41.3959C72.8465 41.9984 72.4363 42.4598 71.9108 42.7803C71.3852 43.1071 70.7892 43.2673 70.1098 43.2673C69.0844 43.2673 68.2512 42.9084 67.6039 42.1842C66.963 41.46 66.6426 40.5051 66.6426 39.3066V39.1335H66.649ZM67.5078 39.3707C67.5078 40.3 67.7449 41.0562 68.2256 41.6523C68.7063 42.2483 69.3344 42.5431 70.1163 42.5431C70.8981 42.5431 71.5198 42.2483 71.9941 41.6523C72.4748 41.0562 72.7119 40.2743 72.7119 39.3002V39.1335C72.7119 38.5439 72.6029 37.9992 72.385 37.5057C72.1671 37.0122 71.8595 36.634 71.4621 36.3649C71.0648 36.0957 70.6097 35.9611 70.1034 35.9611C69.3408 35.9611 68.7191 36.2623 68.232 36.8583C67.7513 37.4608 67.5078 38.2427 67.5078 39.2104V39.3707Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 209,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M76.1563 35.3715L76.1819 36.6981C76.4703 36.2239 76.8356 35.8585 77.2714 35.6086C77.7073 35.3586 78.1879 35.2305 78.7135 35.2305C79.5466 35.2305 80.1619 35.4676 80.5657 35.9355C80.9694 36.4033 81.1745 37.1083 81.1809 38.044V43.1327H80.3285V38.0376C80.3285 37.3454 80.1747 36.8263 79.8863 36.493C79.5979 36.1534 79.1365 35.9867 78.502 35.9867C77.97 35.9867 77.5022 36.1534 77.092 36.4866C76.6818 36.8199 76.3806 37.2685 76.1883 37.8325V43.1392H75.3359V35.3907H76.1499L76.1563 35.3715Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 210,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M88.288 43.1263C88.2046 42.8827 88.147 42.5238 88.1213 42.0432C87.8201 42.4341 87.4356 42.7353 86.9741 42.9468C86.5063 43.1583 86.0128 43.2673 85.4936 43.2673C84.7502 43.2673 84.1478 43.0622 83.6863 42.6456C83.2249 42.229 82.9941 41.7035 82.9941 41.069C82.9941 40.3127 83.3082 39.7167 83.9363 39.2809C84.5643 38.8387 85.4424 38.6208 86.564 38.6208H88.1213V37.7427C88.1213 37.1916 87.9483 36.7557 87.6086 36.4353C87.2689 36.1148 86.769 35.961 86.1153 35.961C85.5193 35.961 85.0258 36.1148 84.6348 36.4225C84.2439 36.7301 84.0452 37.0954 84.0452 37.5248H83.1864C83.1864 36.9032 83.4748 36.3648 84.0452 35.9162C84.6156 35.4675 85.3206 35.2368 86.1602 35.2368C86.9998 35.2368 87.7047 35.4547 88.2046 35.8841C88.7045 36.3135 88.9609 36.9224 88.9737 37.6915V41.3574C88.9737 42.1072 89.0506 42.6712 89.2109 43.043V43.1263H88.2944H88.288ZM85.5962 42.5046C86.1666 42.5046 86.6793 42.3636 87.1343 42.088C87.583 41.8124 87.9162 41.4407 88.1213 40.9793V39.2745H86.5896C85.7372 39.2873 85.0642 39.4411 84.5836 39.7423C84.1029 40.0436 83.8594 40.4601 83.8594 40.9921C83.8594 41.4279 84.0196 41.7868 84.34 42.0752C84.6605 42.3636 85.0835 42.5046 85.5962 42.5046Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 211,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M92.2162 43.1263H91.3574V32.1221H92.2162V43.1263Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 212,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M99.727 43.1264H97.0801V32.1157H99.727V43.1264Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 213,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M101.516 43.1264V32.1157H105.06C106.035 32.1157 106.906 32.3336 107.682 32.7758C108.457 33.2181 109.066 33.8397 109.502 34.6409C109.938 35.442 110.155 36.3457 110.162 37.3455V37.8518C110.162 38.858 109.95 39.7616 109.521 40.5628C109.092 41.3639 108.496 41.9856 107.72 42.4406C106.945 42.8892 106.086 43.12 105.131 43.1264H101.51H101.516ZM104.169 34.1666V41.0819H105.092C105.855 41.0819 106.438 40.8127 106.848 40.268C107.259 39.7232 107.464 38.9221 107.464 37.8518V37.3775C107.464 36.3136 107.259 35.5125 106.848 34.9741C106.438 34.4358 105.849 34.1666 105.067 34.1666H104.176H104.169Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 214,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M118.204 38.4542H114.032V41.0819H118.961V43.1264H111.379V32.1157H118.98V34.1666H114.039V36.4867H118.211V38.4542H118.204Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 215,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M126.5 41.0691H122.866L122.231 43.1264H119.398L123.436 32.1157H125.929L129.999 43.1264H127.147L126.506 41.0691H126.5ZM123.494 39.0182H125.859L124.673 35.1984L123.494 39.0182Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 216,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M19.4965 10.3954C22.3671 10.3954 24.6942 8.06829 24.6942 5.19769C24.6942 2.32708 22.3671 0 19.4965 0C16.6259 0 14.2988 2.32708 14.2988 5.19769C14.2988 8.06829 16.6259 10.3954 19.4965 10.3954Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 217,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M0 11.8308V39.492C0 45.2344 4.65292 49.8874 10.3954 49.8874V22.2262C10.3954 16.4837 5.74245 11.8308 0 11.8308Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 218,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M24.6942 11.8311C18.9518 11.8311 14.2988 16.484 14.2988 22.2264V27.7253C20.0413 27.7253 24.6942 23.0724 24.6942 17.33V11.8311Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 219,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/constants/svgs.tsx",
        lineNumber: 142,
        columnNumber: 5
    }, this);
_c17 = LogoIdeaSVG;
const LogoBicentarioSVG = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "133",
        height: "42",
        viewBox: "0 0 133 42",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M51.0215 4.97461H53.5262V15.0977H51.0215V4.97461Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 224,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M54.7793 7.8502H57.0057V8.83584H57.052C57.3303 8.44158 57.6434 8.14009 57.9913 7.93137C58.3508 7.73424 58.7798 7.62988 59.29 7.62988C59.6843 7.62988 60.0438 7.69946 60.3568 7.83861C60.6699 7.97775 60.9366 8.16329 61.1453 8.4068C61.3541 8.65031 61.528 8.9402 61.6439 9.26488C61.7599 9.60116 61.8179 9.97222 61.8179 10.3781V15.0975H59.5103V10.8535C59.5103 10.4708 59.4176 10.1578 59.232 9.91424C59.0465 9.67073 58.7566 9.55477 58.3855 9.55477C58.0145 9.55477 57.6898 9.69392 57.4579 9.98381C57.226 10.2737 57.11 10.6332 57.11 11.0854V15.0975H54.8025V7.8502H54.7793Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 225,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M65.9333 15.3177C64.8665 15.3177 64.02 15.0858 63.3938 14.6336C62.7677 14.1813 62.443 13.5436 62.4082 12.7435H64.5882C64.6346 13.1029 64.7737 13.3696 64.9941 13.5552C65.226 13.7407 65.5275 13.8219 65.9101 13.8219C66.258 13.8219 66.5363 13.7639 66.7334 13.6363C66.9305 13.5088 67.0349 13.3349 67.0349 13.1029C67.0349 12.9406 66.9885 12.813 66.8842 12.7087C66.7798 12.6043 66.6407 12.5347 66.4783 12.4652C66.316 12.3956 66.1072 12.3608 65.8869 12.326C65.6666 12.2912 65.4347 12.2565 65.2028 12.2101C64.8897 12.1521 64.5766 12.0825 64.2635 12.0013C63.9504 11.9202 63.6721 11.8042 63.417 11.6419C63.1619 11.4795 62.9648 11.2708 62.8141 10.9925C62.6633 10.7258 62.5821 10.3779 62.5821 9.9489C62.5821 9.56624 62.6633 9.24156 62.8257 8.94008C62.988 8.65018 63.2199 8.40667 63.4982 8.20954C63.7765 8.01242 64.1128 7.87327 64.4955 7.76891C64.8781 7.66455 65.2839 7.61816 65.7014 7.61816C66.7334 7.61816 67.5219 7.82689 68.0669 8.24433C68.6119 8.66178 68.9134 9.22997 68.9714 9.9489H66.8494C66.803 9.61263 66.6754 9.39231 66.4783 9.27635C66.2696 9.16039 66.0145 9.10242 65.6898 9.10242C65.4115 9.10242 65.168 9.16039 64.9708 9.26476C64.7737 9.36912 64.681 9.54305 64.681 9.76337C64.681 9.89092 64.7274 9.99529 64.8201 10.0765C64.9129 10.1576 65.0404 10.2156 65.2028 10.2736C65.3651 10.32 65.5507 10.3663 65.7594 10.4127C65.9681 10.4591 66.1884 10.4939 66.4203 10.5287C66.745 10.5867 67.0697 10.6562 67.3944 10.7374C67.7191 10.8186 68.0205 10.9461 68.2872 11.1085C68.5539 11.2824 68.7743 11.5027 68.9482 11.7926C69.1221 12.0825 69.2033 12.4536 69.2033 12.9174C69.2033 13.3117 69.1221 13.6595 68.9598 13.961C68.7974 14.2625 68.5655 14.5176 68.2756 14.7147C67.9857 14.9119 67.6379 15.0626 67.232 15.167C66.8262 15.2713 66.3856 15.3177 65.9101 15.3177H65.9333Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 226,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M72.6468 15.1785C72.3106 15.1785 71.9975 15.1437 71.7192 15.0858C71.4409 15.0278 71.1974 14.9234 70.9886 14.7727C70.7799 14.6219 70.6176 14.4132 70.5016 14.1581C70.3857 13.903 70.3277 13.5783 70.3277 13.1841V9.2879H69.3652V7.83843H70.3277V5.54248H72.5773V7.83843H73.8992V9.2879H72.5773V12.6854C72.5773 12.9637 72.6468 13.1609 72.7976 13.2536C72.9483 13.3464 73.1454 13.3928 73.389 13.3928C73.4933 13.3928 73.5861 13.3928 73.6905 13.3928C73.7832 13.3928 73.8528 13.3928 73.8992 13.3928V15.0742C73.7948 15.0974 73.6325 15.1321 73.4237 15.1553C73.215 15.1785 72.9483 15.1901 72.6352 15.1901L72.6468 15.1785Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 227,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M74.7461 4.97461H77.0536V6.84152H74.7461V4.97461ZM74.7461 7.85035H77.0536V15.0977H74.7461V7.85035Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 228,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M81.0316 15.1788C80.6953 15.1788 80.3822 15.144 80.1039 15.086C79.8256 15.028 79.5821 14.9237 79.3734 14.7729C79.1647 14.6222 79.0023 14.4135 78.8864 14.1583C78.7704 13.9032 78.7124 13.5786 78.7124 13.1843V9.28814H77.75V7.83868H78.7124V5.54272H80.962V7.83868H82.2839V9.28814H80.962V12.6857C80.962 12.964 81.0316 13.1611 81.1823 13.2539C81.3331 13.3466 81.5302 13.393 81.7737 13.393C81.8781 13.393 81.9708 13.393 82.0752 13.393C82.1679 13.393 82.2375 13.393 82.2839 13.393V15.0744C82.1796 15.0976 82.0172 15.1324 81.8085 15.1556C81.5998 15.1788 81.3331 15.1904 81.02 15.1904L81.0316 15.1788Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 229,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M85.6116 15.3061C84.7767 15.3061 84.1389 15.0626 83.7099 14.564C83.2809 14.0654 83.0605 13.416 83.0605 12.6043V7.8501H85.3565V12.1289C85.3565 12.5232 85.4493 12.8247 85.6232 13.045C85.7972 13.2537 86.0754 13.3581 86.4465 13.3581C86.8408 13.3581 87.1538 13.2189 87.3858 12.9522C87.6177 12.6855 87.722 12.326 87.722 11.897V7.8501H90.0296V15.0974H87.8148V14.2046H87.7684C87.5017 14.564 87.2002 14.8423 86.8639 15.0278C86.5277 15.2134 86.1102 15.3061 85.6 15.3061H85.6116Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 230,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M94.0199 15.1785C93.6836 15.1785 93.3705 15.1437 93.0922 15.0858C92.8139 15.0278 92.5704 14.9234 92.3617 14.7727C92.153 14.6219 91.9906 14.4132 91.8747 14.1581C91.7587 13.903 91.7007 13.5783 91.7007 13.1841V9.2879H90.7383V7.83843H91.7007V5.54248H93.9503V7.83843H95.2722V9.2879H93.9503V12.6854C93.9503 12.9637 94.0199 13.1609 94.1706 13.2536C94.3214 13.3464 94.5185 13.3928 94.762 13.3928C94.8664 13.3928 94.9591 13.3928 95.0635 13.3928C95.1563 13.3928 95.2258 13.3928 95.2722 13.3928V15.0742C95.1679 15.0974 95.0055 15.1321 94.7968 15.1553C94.5881 15.1785 94.3214 15.1901 94.0083 15.1901L94.0199 15.1785Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 231,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M99.5955 15.3185C99.0041 15.3185 98.4823 15.2257 98.0069 15.0286C97.5315 14.8314 97.1256 14.5647 96.7778 14.2169C96.4415 13.869 96.1748 13.4631 95.9892 12.9993C95.8037 12.5355 95.7109 12.0253 95.7109 11.4803C95.7109 10.9353 95.8037 10.4251 95.9892 9.96123C96.1748 9.49741 96.4299 9.09155 96.7778 8.74368C97.114 8.39581 97.5315 8.12911 98.0069 7.93198C98.4823 7.73486 99.0157 7.64209 99.5955 7.64209C100.175 7.64209 100.709 7.73486 101.184 7.93198C101.66 8.12911 102.065 8.39581 102.402 8.74368C102.738 9.09155 102.993 9.49741 103.179 9.96123C103.364 10.4251 103.457 10.9353 103.457 11.4803C103.457 12.0253 103.364 12.5355 103.179 12.9993C102.993 13.4631 102.738 13.869 102.402 14.2169C102.065 14.5647 101.66 14.8314 101.184 15.0286C100.709 15.2257 100.175 15.3185 99.5955 15.3185ZM99.5839 13.6835C100.094 13.6835 100.477 13.4863 100.743 13.0805C100.999 12.6746 101.138 12.1528 101.138 11.4919C101.138 10.8309 101.01 10.2975 100.743 9.89166C100.488 9.48581 100.094 9.28868 99.5839 9.28868C99.0737 9.28868 98.691 9.48581 98.4359 9.89166C98.1808 10.2975 98.0533 10.8309 98.0533 11.4919C98.0533 12.1528 98.1808 12.6862 98.4359 13.0805C98.691 13.4863 99.0737 13.6835 99.5839 13.6835Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 232,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M51.0097 21.9622H55.8914C56.4248 21.9622 56.8771 22.0201 57.2597 22.1477C57.6424 22.2752 57.9787 22.4376 58.2454 22.6579C58.8252 23.1449 59.1267 23.7827 59.1267 24.5944C59.1267 25.1046 58.9991 25.522 58.7556 25.8351C58.5121 26.1598 58.1642 26.4033 57.712 26.5773V26.6236C58.2686 26.7976 58.7092 27.0991 59.0339 27.5397C59.3586 27.9803 59.5209 28.5021 59.5209 29.1051C59.5209 29.6153 59.4281 30.056 59.2542 30.427C59.0803 30.7981 58.8251 31.1112 58.4889 31.3663C57.8743 31.8533 57.0394 32.0852 55.9958 32.0852H50.998V21.9622H51.0097ZM55.5204 25.9743C55.8798 25.9743 56.1697 25.8815 56.4017 25.7076C56.6336 25.5336 56.7379 25.2785 56.7379 24.9539C56.7379 24.6292 56.6336 24.3857 56.4133 24.2117C56.1929 24.0378 55.903 23.945 55.532 23.945H53.4795V25.9743H55.5204ZM55.7175 30.0792C56.135 30.0792 56.4596 29.9748 56.6916 29.7545C56.9235 29.5342 57.051 29.2443 57.051 28.8964C57.051 28.4905 56.9235 28.1891 56.6568 27.9803C56.3901 27.7716 56.077 27.6788 55.6827 27.6788H53.4679V30.0908H55.7059L55.7175 30.0792Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 233,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M60.3672 21.9622H62.6748V23.8291H60.3672V21.9622ZM60.3672 24.8379H62.6748V32.0852H60.3672V24.8379Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 234,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M67.301 32.3175C66.7212 32.3175 66.1878 32.2247 65.7124 32.0276C65.2369 31.8305 64.8311 31.5638 64.5064 31.2159C64.1701 30.868 63.915 30.4622 63.7295 29.9983C63.544 29.5345 63.4512 29.0243 63.4512 28.4793C63.4512 27.9343 63.544 27.4241 63.7179 26.9603C63.8918 26.4964 64.1469 26.0906 64.4832 25.7427C64.8079 25.3948 65.2137 25.1281 65.6776 24.931C66.1414 24.7339 66.6632 24.6411 67.243 24.6411C67.73 24.6411 68.1822 24.7107 68.5765 24.8498C68.9823 24.989 69.3186 25.1745 69.6201 25.418C69.91 25.6615 70.1535 25.9514 70.3275 26.2993C70.5014 26.6356 70.6289 27.0066 70.6869 27.4125H68.4605C68.3794 27.0762 68.2518 26.8211 68.0547 26.624C67.8575 26.4269 67.6025 26.3341 67.2662 26.3341C66.7676 26.3341 66.3965 26.5196 66.153 26.9023C65.9095 27.2849 65.7819 27.8067 65.7819 28.4677C65.7819 29.1287 65.9095 29.6389 66.153 30.0099C66.3965 30.3926 66.7676 30.5781 67.2662 30.5781C68.0083 30.5781 68.4257 30.1607 68.5301 29.3374H70.7449C70.7217 29.7548 70.6289 30.1375 70.4666 30.5085C70.3043 30.868 70.0723 31.1927 69.7709 31.4594C69.4694 31.7261 69.1099 31.9348 68.6925 32.0856C68.275 32.2363 67.8112 32.3175 67.301 32.3175Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 235,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M75.0254 32.3056C74.434 32.3056 73.889 32.2129 73.4136 32.0157C72.9266 31.8186 72.5207 31.5519 72.1961 31.204C71.8598 30.8562 71.6163 30.4503 71.4307 29.9749C71.2568 29.4995 71.1641 28.9893 71.1641 28.4443C71.1641 27.8993 71.2568 27.4006 71.4307 26.9368C71.6047 26.473 71.8598 26.0671 72.1961 25.7193C72.5207 25.3714 72.915 25.1047 73.3672 24.9076C73.8195 24.7104 74.3297 24.6177 74.8863 24.6177C75.4081 24.6177 75.8719 24.6988 76.2777 24.8612C76.6836 25.0235 77.0547 25.2438 77.3562 25.5221C77.7852 25.9164 78.1099 26.4266 78.3302 27.0296C78.5389 27.6326 78.6433 28.3167 78.6317 29.0472H73.4252C73.5064 29.5343 73.6687 29.9285 73.9354 30.2068C74.2021 30.4851 74.5732 30.6359 75.0486 30.6359C75.3501 30.6359 75.6052 30.5779 75.8024 30.4387C75.9995 30.3112 76.1502 30.1372 76.2546 29.9053H78.5041C78.423 30.2416 78.2838 30.5547 78.0751 30.8446C77.8664 31.1461 77.5997 31.4012 77.2866 31.6215C76.9851 31.8418 76.6488 32.0041 76.2777 32.1201C75.9067 32.2361 75.4893 32.294 75.0254 32.294V32.3056ZM76.301 27.6905C76.2546 27.2615 76.1038 26.9136 75.8603 26.6585C75.6168 26.4034 75.3037 26.2759 74.9211 26.2759C74.4804 26.2759 74.1326 26.4034 73.9006 26.6585C73.6687 26.9136 73.5064 27.2615 73.4368 27.6905H76.301Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 236,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M79.4199 24.838H81.6463V25.8236H81.6927C81.971 25.4294 82.2841 25.1279 82.6319 24.9192C82.9914 24.722 83.4204 24.6177 83.9306 24.6177C84.3249 24.6177 84.6844 24.6873 84.9975 24.8264C85.3105 24.9655 85.5772 25.1511 85.786 25.3946C86.0063 25.6381 86.1686 25.928 86.2846 26.2643C86.4005 26.6005 86.4585 26.9716 86.4585 27.3775V32.0969H84.151V27.8529C84.151 27.4702 84.0582 27.1571 83.8727 26.9136C83.6871 26.6817 83.3972 26.5542 83.0262 26.5542C82.6551 26.5542 82.3304 26.6933 82.0985 26.9832C81.8666 27.2615 81.7506 27.6326 81.7506 28.0848V32.0969H79.4431V24.8496L79.4199 24.838Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 237,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M90.2152 32.1785C89.8789 32.1785 89.5658 32.1437 89.2875 32.0858C89.0092 32.0278 88.7657 31.9234 88.557 31.7727C88.3483 31.6219 88.1859 31.4132 88.07 31.1581C87.954 30.903 87.8961 30.5783 87.8961 30.1841V26.2879H86.9336V24.8384H87.8961V22.5425H90.1456V24.8384H91.4675V26.2879H90.1456V29.6854C90.1456 29.9637 90.2152 30.1609 90.366 30.2536C90.5167 30.3464 90.7138 30.3928 90.9573 30.3928C91.0617 30.3928 91.1544 30.3928 91.2588 30.3928C91.3516 30.3928 91.4211 30.3928 91.4675 30.3928V32.0742C91.3632 32.0974 91.2008 32.1321 90.9921 32.1553C90.7834 32.1785 90.5167 32.1901 90.2036 32.1901L90.2152 32.1785Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 238,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M95.7813 32.3059C95.1899 32.3059 94.6449 32.2131 94.1695 32.016C93.6825 31.8189 93.2766 31.5522 92.9519 31.2043C92.6156 30.8564 92.3721 30.4506 92.1866 29.9751C92.0127 29.4997 91.9199 28.9895 91.9199 28.4445C91.9199 27.8995 92.0127 27.4009 92.1866 26.9371C92.3605 26.4732 92.6156 26.0674 92.9519 25.7195C93.2766 25.3716 93.6709 25.1049 94.1231 24.9078C94.5753 24.7107 95.0855 24.6179 95.6421 24.6179C96.1639 24.6179 96.6278 24.6991 97.0336 24.8614C97.4395 25.0238 97.8105 25.2441 98.112 25.5224C98.5411 25.9166 98.8658 26.4269 99.0861 27.0298C99.2948 27.6328 99.3992 28.317 99.3876 29.0475H94.1811C94.2622 29.5345 94.4246 29.9288 94.6913 30.2071C94.958 30.4854 95.3291 30.6361 95.8045 30.6361C96.106 30.6361 96.3611 30.5781 96.5582 30.439C96.7553 30.3114 96.9061 30.1375 97.0104 29.9056H99.26C99.1788 30.2418 99.0397 30.5549 98.831 30.8448C98.6222 31.1463 98.3555 31.4014 98.0425 31.6217C97.741 31.8421 97.4047 32.0044 97.0336 32.1204C96.6626 32.2363 96.2451 32.2943 95.7813 32.2943V32.3059ZM97.0568 27.6908C97.0104 27.2617 96.8597 26.9139 96.6162 26.6588C96.3727 26.4037 96.0596 26.2761 95.6769 26.2761C95.2363 26.2761 94.8884 26.4037 94.6565 26.6588C94.4246 26.9139 94.2622 27.2617 94.1927 27.6908H97.0568Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 239,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M100.176 24.8382H102.402V25.8239H102.449C102.727 25.4296 103.04 25.1281 103.388 24.9194C103.747 24.7223 104.176 24.6179 104.686 24.6179C105.081 24.6179 105.44 24.6875 105.753 24.8266C106.066 24.9658 106.333 25.1513 106.542 25.3948C106.762 25.6383 106.924 25.9282 107.04 26.2645C107.156 26.6008 107.214 26.9719 107.214 27.3777V32.0972H104.907V27.8531C104.907 27.4705 104.814 27.1574 104.629 26.9139C104.443 26.682 104.153 26.5544 103.782 26.5544C103.411 26.5544 103.086 26.6936 102.854 26.9834C102.622 27.2617 102.507 27.6328 102.507 28.085V32.0972H100.199V24.8498L100.176 24.8382Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 240,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M110.38 32.2709C110.02 32.2709 109.684 32.2245 109.383 32.1317C109.081 32.0389 108.815 31.8998 108.594 31.7027C108.374 31.5171 108.212 31.2852 108.084 31.0069C107.956 30.7286 107.898 30.4155 107.898 30.0561C107.898 29.6618 107.968 29.3255 108.119 29.0588C108.27 28.7921 108.467 28.5718 108.722 28.3979C108.977 28.2239 109.267 28.0848 109.603 27.992C109.939 27.8993 110.299 27.8297 110.67 27.7833C111.354 27.7021 111.829 27.6094 112.096 27.505C112.374 27.4007 112.502 27.2267 112.502 26.9832C112.502 26.7397 112.421 26.5542 112.27 26.415C112.119 26.2759 111.864 26.2063 111.516 26.2063C111.145 26.2063 110.867 26.2875 110.681 26.4498C110.496 26.6121 110.38 26.8441 110.345 27.1455H108.223C108.223 26.8093 108.304 26.4846 108.455 26.1831C108.594 25.8816 108.803 25.6149 109.07 25.3946C109.336 25.1627 109.673 24.9887 110.078 24.8612C110.484 24.7336 110.96 24.6641 111.505 24.6641C112.05 24.6641 112.514 24.7104 112.896 24.8148C113.279 24.9192 113.592 25.0583 113.859 25.2554C114.172 25.4874 114.404 25.7657 114.554 26.1251C114.705 26.473 114.786 26.8788 114.786 27.3311V30.9837C114.786 31.2736 114.798 31.5055 114.833 31.6679C114.867 31.8302 114.937 31.9462 115.041 32.0157V32.1201H112.803C112.745 32.0505 112.699 31.9346 112.664 31.807C112.629 31.6679 112.595 31.5055 112.56 31.32H112.537C112.316 31.6215 112.038 31.865 111.713 32.0389C111.377 32.2129 110.937 32.3056 110.392 32.3056L110.38 32.2709ZM111.122 30.7982C111.551 30.7982 111.911 30.6822 112.177 30.4387C112.444 30.1952 112.583 29.8821 112.583 29.4879V28.6298C112.432 28.711 112.258 28.7689 112.05 28.8385C111.841 28.8965 111.632 28.9545 111.389 29.0125C110.948 29.1168 110.623 29.2328 110.426 29.3719C110.229 29.5111 110.125 29.7198 110.125 29.9865C110.125 30.2764 110.218 30.4851 110.403 30.6127C110.589 30.7402 110.832 30.7982 111.11 30.7982H111.122Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 241,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M115.91 24.8381H118.125V25.9745H118.171C118.426 25.5455 118.705 25.2208 119.018 25.0237C119.331 24.8265 119.702 24.7222 120.154 24.7222C120.375 24.7222 120.525 24.7454 120.606 24.7801V26.763H120.548C119.841 26.6587 119.273 26.7746 118.855 27.1225C118.438 27.4704 118.229 28.0385 118.229 28.8271V32.0855H115.922V24.8381H115.91Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 242,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M121.326 21.9624H123.634V23.8293H121.326V21.9624ZM121.326 24.8381H123.634V32.0855H121.326V24.8381Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 243,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M128.297 32.3175C127.717 32.3175 127.183 32.2247 126.708 32.0276C126.233 31.8305 125.827 31.5638 125.479 31.2159C125.131 30.868 124.876 30.4622 124.69 29.9983C124.505 29.5345 124.412 29.0243 124.412 28.4793C124.412 27.9343 124.505 27.4241 124.69 26.9603C124.876 26.4964 125.131 26.0906 125.479 25.7427C125.815 25.3948 126.233 25.1281 126.708 24.931C127.183 24.7339 127.717 24.6411 128.297 24.6411C128.876 24.6411 129.41 24.7339 129.885 24.931C130.361 25.1281 130.767 25.3948 131.103 25.7427C131.439 26.0906 131.694 26.4964 131.88 26.9603C132.065 27.4241 132.158 27.9343 132.158 28.4793C132.158 29.0243 132.065 29.5345 131.88 29.9983C131.694 30.4622 131.439 30.868 131.103 31.2159C130.767 31.5638 130.361 31.8305 129.885 32.0276C129.41 32.2247 128.876 32.3175 128.297 32.3175ZM128.285 30.6709C128.795 30.6709 129.178 30.4738 129.445 30.0679C129.7 29.6621 129.839 29.1403 129.839 28.4793C129.839 27.8183 129.711 27.2849 129.445 26.8791C129.178 26.4732 128.795 26.2645 128.285 26.2645C127.775 26.2645 127.392 26.4732 127.137 26.8791C126.882 27.2849 126.754 27.8183 126.754 28.4793C126.754 29.1403 126.882 29.6737 127.137 30.0679C127.392 30.4738 127.775 30.6709 128.285 30.6709Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 244,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M0 20.7329H20.7216V41.4545C9.2882 41.4545 0 32.1663 0 20.7329Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 245,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20.7227 20.7329H41.4442V41.4545C30.0108 41.4545 20.7227 32.1663 20.7227 20.7329Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 246,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M0 0H20.7216V20.7216C9.2882 20.7216 0 11.4334 0 0Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 247,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20.7227 0H41.4442V20.7216C30.0108 20.7216 20.7227 11.4334 20.7227 0Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 248,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/constants/svgs.tsx",
        lineNumber: 223,
        columnNumber: 5
    }, this);
_c18 = LogoBicentarioSVG;
const GoToFestivalSVG = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        style: {
            minWidth: 121,
            width: 121
        },
        height: "90",
        viewBox: "0 0 121 70",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M83.2754 67L115 35L83.2754 3",
                stroke: "currentColor",
                strokeWidth: "8"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 253,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M115 35H0",
                stroke: "currentColor",
                strokeWidth: "8"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 254,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/constants/svgs.tsx",
        lineNumber: 252,
        columnNumber: 5
    }, this);
_c19 = GoToFestivalSVG;
const GoToFestival2SVG = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "129",
        height: "76",
        viewBox: "0 0 129 76",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M86.8965 71L120 38L86.8965 5",
                stroke: "currentColor",
                strokeWidth: "12"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 259,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M120 38H0",
                stroke: "currentColor",
                strokeWidth: "12"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 260,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/constants/svgs.tsx",
        lineNumber: 258,
        columnNumber: 5
    }, this);
_c20 = GoToFestival2SVG;
const GoToFestivalShortSVG = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "63",
        height: "48",
        viewBox: "0 0 63 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M36 45L57 24L36 3",
                stroke: "black",
                strokeWidth: "8"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 265,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M57 24L0 24",
                stroke: "black",
                strokeWidth: "8"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 266,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/constants/svgs.tsx",
        lineNumber: 264,
        columnNumber: 5
    }, this);
_c21 = GoToFestivalShortSVG;
const FbSVG = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "10",
        height: "18",
        viewBox: "0 0 10 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M6.62152 18V10.125H9.34537L9.86456 6.86613H6.62152V4.75403C6.62152 3.86129 7.07299 2.99032 8.52521 2.99032H10V0.217742C10 0.217742 8.66065 0 7.38149 0C4.71031 0 2.96464 1.56048 2.96464 4.38387V6.86613H0V10.125H2.96464V18H6.614H6.62152Z",
            fill: "black"
        }, void 0, false, {
            fileName: "[project]/src/constants/svgs.tsx",
            lineNumber: 271,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/constants/svgs.tsx",
        lineNumber: 270,
        columnNumber: 5
    }, this);
_c22 = FbSVG;
const IgSVG = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "19",
        height: "19",
        viewBox: "0 0 19 19",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M13.8735 3.69324C13.2881 3.69324 12.8125 4.16888 12.8125 4.75428C12.8125 5.33968 13.2881 5.81532 13.8735 5.81532C14.4589 5.81532 14.9346 5.33968 14.9346 4.75428C14.9346 4.16888 14.4589 3.69324 13.8735 3.69324Z",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 276,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9.14678 5.05432C6.68078 5.05432 4.67578 7.05932 4.67578 9.52532C4.67578 11.9913 6.68078 13.9963 9.14678 13.9963C11.6128 13.9963 13.6178 11.9913 13.6178 9.52532C13.6178 7.05932 11.6128 5.05432 9.14678 5.05432ZM9.14678 12.3865C7.5662 12.3865 6.28563 11.0986 6.28563 9.52532C6.28563 7.95206 7.57352 6.66417 9.14678 6.66417C10.72 6.66417 12.0079 7.95206 12.0079 9.52532C12.0079 11.0986 10.72 12.3865 9.14678 12.3865Z",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 277,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12.6959 18.599H5.45155C2.44405 18.599 0 16.1549 0 13.1474V5.90309C0 2.89559 2.44405 0.451538 5.45155 0.451538H12.6959C15.7034 0.451538 18.1474 2.89559 18.1474 5.90309V13.1474C18.1474 16.1549 15.7034 18.599 12.6959 18.599ZM5.45155 2.15652C3.38801 2.15652 1.70498 3.83955 1.70498 5.90309V13.1474C1.70498 15.211 3.38801 16.894 5.45155 16.894H12.6959C14.7594 16.894 16.4425 15.211 16.4425 13.1474V5.90309C16.4425 3.83955 14.7594 2.15652 12.6959 2.15652H5.45155Z",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 278,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/constants/svgs.tsx",
        lineNumber: 275,
        columnNumber: 5
    }, this);
_c23 = IgSVG;
const CompareSVG = ({ color = '#fff' })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "20",
        height: "8",
        style: {
            height: 17
        },
        viewBox: "0 0 20 8",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.35355 4.35355C8.54882 4.15829 8.54882 3.84171 8.35355 3.64645L5.17157 0.464466C4.97631 0.269204 4.65973 0.269204 4.46447 0.464466C4.2692 0.659728 4.2692 0.976311 4.46447 1.17157L7.29289 4L4.46447 6.82843C4.2692 7.02369 4.2692 7.34027 4.46447 7.53553C4.65973 7.7308 4.97631 7.7308 5.17157 7.53553L8.35355 4.35355ZM0 4V4.5H8V4V3.5H0V4Z",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 283,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11.6464 3.64645C11.4512 3.84171 11.4512 4.15829 11.6464 4.35355L14.8284 7.53553C15.0237 7.7308 15.3403 7.7308 15.5355 7.53553C15.7308 7.34027 15.7308 7.02369 15.5355 6.82843L12.7071 4L15.5355 1.17157C15.7308 0.97631 15.7308 0.659728 15.5355 0.464466C15.3403 0.269203 15.0237 0.269203 14.8284 0.464466L11.6464 3.64645ZM20 4L20 3.5L12 3.5L12 4L12 4.5L20 4.5L20 4Z",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 284,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/constants/svgs.tsx",
        lineNumber: 282,
        columnNumber: 5
    }, this);
_c24 = CompareSVG;
const DeleteIconSVG = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                children: "delete_2_line"
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 289,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                id: "页面-1",
                stroke: "none",
                strokeWidth: "1",
                fill: "none",
                fillRule: "evenodd",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    id: "System",
                    transform: "translate(-576.000000, -192.000000)",
                    fillRule: "nonzero",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        id: "delete_2_line",
                        transform: "translate(576.000000, 192.000000)",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z",
                                id: "MingCute",
                                fillRule: "nonzero"
                            }, void 0, false, {
                                fileName: "[project]/src/constants/svgs.tsx",
                                lineNumber: 293,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M14.2792,2 C15.1401,2 15.9044,2.55086 16.1766,3.36754 L16.7208,5 L20,5 C20.5523,5 21,5.44772 21,6 C21,6.55227 20.5523,6.99998 20,7 L19.9975,7.07125 L19.9975,7.07125 L19.1301,19.2137 C19.018,20.7837 17.7117,22 16.1378,22 L7.86224,22 C6.28832,22 4.982,20.7837 4.86986,19.2137 L4.00254,7.07125 C4.00083,7.04735 3.99998,7.02359 3.99996,7 C3.44769,6.99998 3,6.55227 3,6 C3,5.44772 3.44772,5 4,5 L7.27924,5 L7.82339,3.36754 C8.09562,2.55086 8.8599,2 9.72076,2 L14.2792,2 Z M17.9975,7 L6.00255,7 L6.86478,19.0712 C6.90216,19.5946 7.3376,20 7.86224,20 L16.1378,20 C16.6624,20 17.0978,19.5946 17.1352,19.0712 L17.9975,7 Z M10,10 C10.51285,10 10.9355092,10.386027 10.9932725,10.8833761 L11,11 L11,16 C11,16.5523 10.5523,17 10,17 C9.48715929,17 9.06449214,16.613973 9.00672766,16.1166239 L9,16 L9,11 C9,10.4477 9.44771,10 10,10 Z M14,10 C14.5523,10 15,10.4477 15,11 L15,16 C15,16.5523 14.5523,17 14,17 C13.4477,17 13,16.5523 13,16 L13,11 C13,10.4477 13.4477,10 14,10 Z M14.2792,4 L9.72076,4 L9.38743,5 L14.6126,5 L14.2792,4 Z",
                                id: "形状",
                                fill: "#09244B"
                            }, void 0, false, {
                                fileName: "[project]/src/constants/svgs.tsx",
                                lineNumber: 296,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/constants/svgs.tsx",
                        lineNumber: 292,
                        columnNumber: 17
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/constants/svgs.tsx",
                    lineNumber: 291,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/constants/svgs.tsx",
                lineNumber: 290,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/constants/svgs.tsx",
        lineNumber: 288,
        columnNumber: 5
    }, this);
_c25 = DeleteIconSVG;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22, _c23, _c24, _c25;
__turbopack_context__.k.register(_c, "Logo");
__turbopack_context__.k.register(_c1, "LogoWhite");
__turbopack_context__.k.register(_c2, "IconInsta");
__turbopack_context__.k.register(_c3, "IconFb");
__turbopack_context__.k.register(_c4, "IconTikTok");
__turbopack_context__.k.register(_c5, "IconWhatsApp");
__turbopack_context__.k.register(_c6, "BurgerMenu");
__turbopack_context__.k.register(_c7, "CloseSVG");
__turbopack_context__.k.register(_c8, "CloseTwoSVG");
__turbopack_context__.k.register(_c9, "BurgerMenuSVG");
__turbopack_context__.k.register(_c10, "OpenListSVG");
__turbopack_context__.k.register(_c11, "ClosedListSVG");
__turbopack_context__.k.register(_c12, "LeftArrowSVG");
__turbopack_context__.k.register(_c13, "BackArrowSVG");
__turbopack_context__.k.register(_c14, "ForwardArrowSVG");
__turbopack_context__.k.register(_c15, "SearchSVG");
__turbopack_context__.k.register(_c16, "LogoAmbosSVG");
__turbopack_context__.k.register(_c17, "LogoIdeaSVG");
__turbopack_context__.k.register(_c18, "LogoBicentarioSVG");
__turbopack_context__.k.register(_c19, "GoToFestivalSVG");
__turbopack_context__.k.register(_c20, "GoToFestival2SVG");
__turbopack_context__.k.register(_c21, "GoToFestivalShortSVG");
__turbopack_context__.k.register(_c22, "FbSVG");
__turbopack_context__.k.register(_c23, "IgSVG");
__turbopack_context__.k.register(_c24, "CompareSVG");
__turbopack_context__.k.register(_c25, "DeleteIconSVG");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/constants/index.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "capitalize_first_letter": (()=>capitalize_first_letter),
    "companies": (()=>companies),
    "example_summary": (()=>example_summary),
    "logos_black": (()=>logos_black),
    "logos_white": (()=>logos_white),
    "photos_cabildos": (()=>photos_cabildos),
    "photos_festivals": (()=>photos_festivals),
    "topics": (()=>topics)
});
const capitalize_first_letter = (str)=>{
    return str.charAt(0).toUpperCase() + str.slice(1);
};
const companies = [
    {
        id: 1,
        name_company: "Alternativas Inclusivas y Sostenibles para la Vida - AVIDA",
        description: "Trabajan por el desarrollo sostenible en el norte del Perú, promoviendo la equidad, igualdad y el bienestar de las comunidades.",
        email: "avida@avida.org.pe",
        networks: "https://www.facebook.com/avidaongperu/",
        keywords: [
            "inclusión",
            "discapacidad"
        ]
    },
    {
        id: 2,
        name_company: "Impacta - Jóvenes por la Gestión Pública",
        description: "¡Juventud en acción por un cambio real! Movilizan a jóvenes para transformar la gestión pública y construir un país más justo.",
        email: "d.leguiaballon@gmail.com",
        networks: "https://www.facebook.com/impacta.pe/",
        keywords: [
            "gestión pública",
            "participación ciudadana",
            "ciudadanía",
            "veeduría",
            "capacitación"
        ]
    },
    {
        id: 3,
        name_company: "Instituto de Democracia y Derechos Humanos (Idehpucp)",
        description: "Un espacio para el diálogo, la formación y la investigación sobre democracia y derechos humanos. Líderes que promueven una sociedad más justa y equitativa.",
        email: "impacto_idehpucp@pucp.pe",
        networks: "https://www.facebook.com/IDEHPUCP/",
        keywords: [
            "derechos humanos",
            "diálogo",
            "democracia",
            "liderazgo"
        ]
    },
    {
        id: 4,
        name_company: "Asociación Siembra un Árbol Arequipa",
        description: "Aire más puro, paisajes más verdes y una comunidad más conectada. Siembra un Árbol Arequipa lo hace posible.",
        email: "siembraunarbolarequipa@gmail.com",
        phones: [
            "967311436"
        ],
        networks: "https://www.facebook.com/SiembraArbolArequipa",
        keywords: [
            "medio ambiente",
            "áreas verdes",
            "forestación"
        ]
    },
    {
        id: 5,
        name_company: "United Peruvian Youth",
        description: "El futuro de Perú en manos de sus jóvenes. Brindan herramientas para promover el cambio y la participación desde la educación.",
        email: "lcevallos@unitedperuvianyouth.com",
        networks: "https://www.facebook.com/unitedperuvianyouth",
        keywords: [
            "liderazgo",
            "juventudes",
            "educación",
            "ods"
        ]
    },
    {
        id: 6,
        name_company: "Asociación Cultural Dreams Imagination",
        description: "Conectan el arte y la educación en Trujillo con proyectos que inspiran creatividad y transforman el aprendizaje.",
        email: "dreamsimaginationperu@gmail.com",
        networks: "http://www.facebook.com/teatroDi",
        keywords: [
            "arte",
            "cultura",
            "teatro"
        ]
    },
    {
        id: 7,
        name_company: "Sci Lab",
        description: "Acercan la ciencia a la comunidad con proyectos que hacen del conocimiento algo emocionante y accesible para todos.",
        email: "mamanihuamanpaloma@gmail.com",
        networks: "https://www.facebook.com/scilabciencia",
        keywords: [
            "educación",
            "ciencia",
            "divulgación científica"
        ]
    },
    {
        id: 8,
        name_company: "Asociación Equipo21",
        description: "Trabajan para que las personas con Síndrome de Down en Arequipa sean parte activa y valorada en todos los espacios de la sociedad.",
        phones: [
            "941778261",
            "956820020"
        ],
        networks: "https://www.facebook.com/people/Asociaci%C3%B3n-Equipo21-Arequipa/100064353114898/",
        keywords: [
            "inclusión",
            "discapacidad",
            "síndrome de down"
        ]
    },
    {
        id: 9,
        name_company: "Agrupación Desarrollo Estudiantil (ADE)",
        description: "Son una comunidad juvenil que crea espacios donde el aprendizaje y el crecimiento se mezclan para generar cambios positivos en la forma en que vivimos juntos.",
        email: "milagrocarrion17@gmail.com",
        networks: "https://es-la.facebook.com/adeeconomia/",
        keywords: [
            "gremio estudiantil",
            "economía"
        ]
    },
    {
        id: 10,
        name_company: "Asociación de desarrollo y crecimiento personal",
        description: "Apoyo personalizado para personas con discapacidad. Trabajan de la mano con el SINAPEDIS para mejorar su calidad de vida.",
        email: "evillafuerte@pucp.edu.pe",
        networks: "https://www.facebook.com/AdecepONG/?ref=page_internal",
        keywords: [
            "inclusión",
            "discapacidad",
            "derechos"
        ]
    },
    {
        id: 11,
        name_company: "Asociación Capaz Perú",
        description: "Metodologías participativas que resaltan las diversas capacidades en los ámbitos cultural, educativo y organizacional, generando un impacto real y transformador.",
        email: "contacto@capaz.org.pe",
        networks: "https://www.facebook.com/capazperu/",
        keywords: [
            "inclusión",
            "discapacidad",
            "arte",
            "cultura",
            "teatro"
        ]
    },
    {
        id: 12,
        name_company: "Asociación Psico Inclusiva Kipu Llaxta",
        description: "Impulsan la inclusión de personas con discapacidad en Perú, a través de iniciativas de desarrollo social y progreso sostenible.",
        email: "contacto@kipullaxta.org.pe",
        phones: [
            "997184424"
        ],
        networks: "https://www.facebook.com/KipuLlaxta/",
        keywords: [
            "inclusión",
            "discapacidad",
            "psicología"
        ]
    },
    {
        id: 13,
        name_company: "Asociación Luchando Contra Viento y Marea",
        description: "Brindan asistencia legal para defender los derechos de personas con discapacidad, luchando contra viento y marea por su igualdad.",
        email: "asoc.lcvm@gmail.com",
        networks: "https://www.facebook.com/luchandocontravientoymarea/",
        keywords: [
            "inclusión",
            "discapacidad",
            "derechos"
        ]
    },
    {
        id: 14,
        name_company: "Asociación Síndrome de Down Provincia Ica - ASDPI",
        description: "Padres que apoyan la integración de niños, jóvenes y adultos con Síndrome de Down en Ica, promoviendo su inclusión y desarrollo en la comunidad.",
        email: "asdpi_21@hotmail.com",
        networks: "https://www.facebook.com/ASDPI/",
        keywords: [
            "inclusión",
            "discapacidad",
            "síndrome de down"
        ]
    },
    {
        id: 15,
        name_company: "Asociación de Desórdenes del Ciclo de la Urea y Metabólicas - ADCUM",
        description: "Brindan apoyo e información sobre los Desórdenes del Ciclo de la Urea y enfermedades metabólicas, orientando a pacientes y cuidadores.",
        email: "adcumperu@gmail.com",
        networks: "https://www.facebook.com/adcum.peru/",
        keywords: [
            "salud",
            "pacientes"
        ]
    },
    {
        id: 16,
        name_company: "Asociación de padres y amigos de personas con trastorno del espectro autista - ASPAU",
        description: "Calidad de vida para personas con TEA en Perú, impulsando su integración en la sociedad y la comunidad.",
        email: "aspauperu4@gmail.com",
        networks: "https://www.facebook.com/AUTISMO.ASPAU.PERU/?locale=es_LA",
        keywords: [
            "inclusión",
            "discapacidad",
            "autismo"
        ]
    },
    {
        id: 17,
        name_company: "Andares",
        description: "Educación, terapia y oportunidades laborales para personas con discapacidad, respaldados por más de 21 años de transformar vidas.",
        networks: "https://www.facebook.com/centroandares.lima/?locale=es_LA",
        keywords: [
            "inclusión",
            "discapacidad",
            "educación"
        ]
    },
    {
        id: 18,
        name_company: "Academy Champions Kids Ramon Robles",
        description: "Impulsan la inclusión y el desarrollo de niños migrantes y refugiados, construyendo un Perú que acoja a todos.",
        email: "academychampionskidsramonroble@gmail.com",
        phones: [
            "981787985"
        ],
        networks: "https://www.facebook.com/p/Champions-Kids-Ram%C3%B3n-Robles-100091377174563/?paipv=0&eav=AfZxEYdzGi584L1lzhFyLRxdgxGzNIMz6bPuHVk5o4-dwdoQ-I2wqxPvJvD_hBC-Aa0&_rdr",
        keywords: [
            "refugiados",
            "migrantes",
            "infancias",
            "deporte",
            "baseball"
        ]
    },
    {
        id: 19,
        name_company: "Acción contra el Hambre",
        description: "Luchan contra el hambre en más de 50 países, enfrentando sus causas y efectos con acciones humanitarias.",
        email: "info@accioncontraelhambre.pe",
        networks: "https://www.facebook.com/accioncontraelhambreperu/?locale=es_LA",
        keywords: [
            "alimentación",
            "ayuda humanitaria",
            "desnutrición"
        ]
    },
    {
        id: 20,
        name_company: "Acción y Desarrollo",
        description: "Luchan contra la violencia de género, promoviendo la igualdad y colaborando con el Estado y la sociedad civil en Junín, Huancavelica y Lima Metropolitana.",
        email: "info@accionydesarrollo.org",
        networks: "https://www.facebook.com/accionydesarrollo.org/?locale=es_LA",
        keywords: [
            "género",
            "violencia",
            "derechos",
            "interculturalidad"
        ]
    },
    {
        id: 21,
        name_company: "Agencia Adventista para el Desarrollo y Recursos Asistenciales (ADRA)",
        description: "Brindan ayuda de emergencia y desarrollo a personas vulnerables en todo el mundo, como parte de la Iglesia Adventista.",
        email: "plinio.vergara@adra.org.pe",
        networks: "https://www.facebook.com/adraperu/",
        keywords: [
            "desarrollo sostenible",
            "ayuda humanitaria",
            "capacitación",
            "microfinanzas"
        ]
    },
    {
        id: 22,
        name_company: "Aldeas Infantiles",
        description: "Trabajan en 13 regiones del país por el derecho a vivir en familia, por eso apoyan a niñas, niños y adolescentes que han perdido o están en riesgo de perder ese cuidado.",
        phones: [
            "+5112007800"
        ],
        networks: "www.facebook.com/AldeasInfantilesSOS.Pe",
        keywords: [
            "infancias",
            "acogida de niños",
            "migración",
            "derechos",
            "ayuda humanitaria"
        ]
    },
    {
        id: 23,
        name_company: "Amnistía Internacional",
        description: "Son un movimiento global independiente que defiende y promueve los derechos humanos en todo el mundo.",
        email: "m.navarro@amnistia.org.pe",
        networks: "www.facebook.com/aiperu/",
        keywords: [
            "derechos humanos",
            "activismo",
            "derechos"
        ]
    },
    {
        id: 24,
        name_company: "Angeles del Camino",
        description: "En Arequipa, acompañan a migrantes, refugiados y solicitantes de refugio, brindando asesoría en salud, educación y trámites migratorios para abrir nuevas oportunidades.",
        email: "944 519 220",
        networks: "https://www.facebook.com/profile.php?id=100064173395529&_rdc=1&_rdr",
        keywords: [
            "refugiados",
            "migrantes",
            "acceso a servicios",
            "orientación"
        ]
    },
    {
        id: 26,
        name_company: "ASOCIACION CCEFIRO",
        description: "Luchan por el derecho a la salud de comunidades excluidas, ofreciendo apoyo comunitario a quienes enfrentan VIH/SIDA, tuberculosis y adicciones.",
        email: "juliorc28_2@yahoo.es",
        networks: "https://www.facebook.com/asociacion.ccefiro/?locale=es_LA",
        keywords: [
            "salud",
            "pacientes",
            "vih"
        ]
    },
    {
        id: 27,
        name_company: "Asociación Pasos Firmes",
        description: "Ayudan a mujeres migrantes a dar pasos firmes, ofreciéndoles apoyo y fortaleciéndolas para enfrentar los desafíos de la migración.",
        email: "asociacionpasosfirmes@gmail.com",
        phones: [
            "905451524"
        ],
        networks: "https://www.facebook.com/AsociacionPasosFirmes",
        keywords: [
            "refugiados",
            "migrantes",
            "género",
            "discriminación"
        ]
    },
    {
        id: 28,
        name_company: "Asociación de Venezolanos en Trujillo (Asoventru)",
        description: "Orientación gratuita a migrantes venezolanos en Trujillo, promoviendo su integración y bienestar para encontrar un nuevo comienzo.",
        email: "directivaasoventru@gmail.com",
        phones: [
            "929953192"
        ],
        networks: "https://www.facebook.com/asociaciondevenezolanosentrujillo/?locale=es_LA",
        keywords: [
            "refugiados",
            "migrantes",
            "orientación"
        ]
    },
    {
        id: 31,
        name_company: "CAPLAB - Centro de Servicios para la Capacitación Laboral y el Desarrollo",
        description: "Transforman el capital humano con proyectos innovadores que responden a las necesidades sociales y económicas, tanto en la ciudad como en el campo.",
        email: "caplab@caplab.org.pe                                                ",
        phones: [
            "+5114801663"
        ],
        networks: "https://facebook.com/caplabcentral",
        keywords: [
            "juventudes",
            "capacitación",
            "empleabilidad",
            "emprendimientos"
        ]
    },
    {
        id: 32,
        name_company: "CAPS",
        description: "Salud mental y derechos humanos para todos, con un enfoque psicosocial que impulsa el bienestar y el desarrollo personal.",
        email: "psico@caps.org.pe",
        networks: "https://www.facebook.com/CentroDeAtencionPsicosocial/?locale=es_LA",
        keywords: [
            "salud mental",
            "violencia",
            "derechos humanos",
            "migración"
        ]
    },
    {
        id: 33,
        name_company: "CARE",
        description: "Impulsan proyectos de desarrollo social que transforman la vida de millones de personas vulnerables.",
        email: "jfontela@caps.org.pe",
        networks: "https://www.facebook.com/CAREenPeru/",
        keywords: [
            "género",
            "emprendimientos",
            "agricultura",
            "empleabilidad",
            "violencia",
            "salud",
            "ayuda humanitaria",
            "alimentación"
        ]
    },
    {
        id: 34,
        name_company: "Cáritas",
        description: "Transforman comunidades vulnerables con proyectos de desarrollo humano, basados en justicia, solidaridad y el respeto a la dignidad de cada persona.",
        email: "manuel.huapaya@caritas.org.pe",
        networks: "https://www.facebook.com/caritasdelperu/",
        keywords: [
            "ayuda humanitaria",
            "incidencia",
            "emergencias",
            "medio ambiente"
        ]
    },
    {
        id: 35,
        name_company: "Casa Ronald Mc Donald",
        description: "Un hogar lejos de casa para familias que llegan a Lima buscando tratamiento médico para sus hijos.",
        email: "contactenos@casaronald.org.pe",
        networks: "https://www.facebook.com/CasaRonaldPeru",
        keywords: [
            "salud",
            "acogida"
        ]
    },
    {
        id: 36,
        name_company: "CEDEH (Centro de Desarrollo Humano)",
        description: "¡Derechos culturales y sociales para Puno! Impulsan el desarrollo humano a través de capacitación y defensa en comunidades vulnerables.",
        email: "cedeh@cedeh.org.pe",
        phones: [
            "+511208623"
        ],
        networks: "https://web.cedeh.org.pe/blog/",
        keywords: [
            "derechos",
            "defensa legal",
            "investigación",
            "participación ciudadana"
        ]
    },
    {
        id: 37,
        name_company: "CEDRO (Centro de Información y Educación para la Prevencion del Abuso de Drogas)",
        description: "Impulsan el desarrollo sostenible y la inclusión económica, promoviendo estilos de vida saludables y fortaleciendo comunidades vulnerables.",
        email: "contacto@cedro.org.pe",
        phones: [
            "+5114467046"
        ],
        networks: "https://www.facebook.com/cedroperu/",
        keywords: [
            "salud",
            "bionegocios",
            "investigación",
            "prevención de drogas"
        ]
    },
    {
        id: 38,
        name_company: "CESAL",
        description: "Impulsan el desarrollo económico, empleo y gobernabilidad, mientras cuidan el medio ambiente, apoyando a comunidades vulnerables y migrantes en Lima, Ucayali, Apurímac y Puno.",
        email: "peru@cesal.org",
        phones: [
            "+5112784300"
        ],
        networks: "https://www.facebook.com/ONGCESAL/",
        keywords: [
            "acción humanitaria",
            "migración",
            "empleabilidad",
            "salud",
            "gobernabilidad",
            "medio ambiente"
        ]
    },
    {
        id: 39,
        name_company: "CHS Alternativo",
        description: "Luchan contra la trata y explotación, protegiendo a las víctimas y promoviendo la restitución de sus derechos vulnerados.",
        email: "direccion@chsalternativo.org",
        networks: "https://www.facebook.com/chsperu",
        keywords: [
            "trata de personas",
            "migración",
            "violencia"
        ]
    },
    {
        id: 40,
        name_company: "Comité Internacional de la Cruz Roja (CICR)",
        description: "¡Justicia y dignidad! Monitorean conflictos, apoyamos a personas detenidas y trabajamos en la búsqueda de desaparecidos.",
        phones: [
            "+5112419904"
        ],
        networks: "https://www.facebook.com/ICRCespanol",
        keywords: [
            "conflictos armados",
            "derechos humanos",
            "acceso a servicios"
        ]
    },
    {
        id: 41,
        name_company: "Sociedad Nacional de la Cruz Roja Peruana",
        description: "Asistencia y apoyo en momentos críticos. Gestionan riesgos de desastres y brindamos ayuda humanitaria a las comunidades más vulnerables.",
        email: "contacto@cruzroja.org.pe",
        networks: "https://www.facebook.com/CruzRojaPeruana",
        keywords: [
            "acción humanitaria",
            "desastres"
        ]
    },
    {
        id: 42,
        name_company: "Ciudadanía sin Fronteras",
        description: "Construyen puentes de inclusión trabajando en políticas públicas para integrar a migrantes y refugiados en una sociedad más justa.",
        networks: "https://www.instagram.com/ciudadaniasinfronteras/",
        keywords: [
            "refugiados",
            "migrantes",
            "emprendimientos",
            "investigación",
            "educación",
            "acceso a servicios"
        ]
    },
    {
        id: 43,
        name_company: "Conferencia Episcopal Peruana",
        description: "Unidos por la fe reunen a obispos para trabajar en conjunto en temas pastorales y potenciar el impacto de la Iglesia en el Perú.",
        phones: [
            "+5114631010"
        ],
        networks: "https://www.facebook.com/confepiscopalperu/",
        keywords: [
            "religión",
            "católicos"
        ]
    },
    {
        id: 44,
        name_company: "Consejo Interreligioso - Religiones por la Paz",
        description: "Construyen puentes interreligiosos a través del diálogo y la cooperación en favor de la justicia, la paz y la solidaridad.",
        email: "laurav1948@gmail.com",
        networks: "https://www.facebook.com/ConsejoInterreligiosoPeru/",
        keywords: [
            "religión"
        ]
    },
    {
        id: 46,
        name_company: "Encuentros Servicio Jesuita a Migrantes",
        description: "Refugiados y migrantes encuentran apoyo para integrarse y defender sus derechos en Perú con su acompañamiento cercano en Lima, Arequipa, Tacna e Ica.",
        phones: [
            "+59162500080"
        ],
        networks: "https://www.facebook.com/sjmPeru",
        keywords: [
            "refugiados",
            "migrantes",
            "acceso a servicios",
            "orientación",
            "capacitación",
            "emprendimiento",
            "empleabilidad",
            "finanzas",
            "derechos"
        ]
    },
    {
        id: 47,
        name_company: "Equilibrium CenDE",
        description: "Piensan en grande para América Latina, investigando y debatiendo soluciones sociales y económicas que transformen la región.",
        email: "gbrauckmeyer@equilibriumbdc.com",
        networks: "https://www.facebook.com/EquilibriumCenDE?mibextid=2JQ9oc",
        keywords: [
            "investigación",
            "refugiados",
            "migrantes",
            "juventudes",
            "diversidades",
            "género",
            "lgtbiq+"
        ]
    },
    {
        id: 48,
        name_company: "Food for the Hungry - FH Perú",
        description: "Educación y alimentación que cambian vidas. Trabajan junto a comunidades vulnerables para impulsar su desarrollo.",
        email: "onorhelp@fh.org",
        networks: "https://www.facebook.com/foodforthehungry/",
        keywords: [
            "alimentación",
            "acción humanitaria",
            "género"
        ]
    },
    {
        id: 51,
        name_company: "Instituto de Defensa Legal (IDL)",
        description: "Paz, derechos y democracia. Son una voz independiente que trabaja por un Perú y una región más equitativa.",
        email: "comunicacioninstitucionalidl@idl.org.pe",
        phones: [
            "+5116175700"
        ],
        networks: "https://www.facebook.com/ideele/?ref=br_rs",
        keywords: [
            "derechos humanos",
            "democracia",
            "justicia",
            "periodismo"
        ]
    },
    {
        id: 52,
        name_company: "Más Igualdad",
        description: "Diversidad y derechos para todos. Luchan por la visibilidad y el reconocimiento familiar de las personas LGBTIQ+ en Perú.",
        email: "ahernandez@masigualdad.pe",
        networks: "https://www.facebook.com/masigualdadpe/",
        keywords: [
            "igualdad",
            "lgtbiq+",
            "derechos humanos",
            "feminismo"
        ]
    },
    {
        id: 53,
        name_company: "Plan International",
        description: "Infancias protegidas y con oportunidades. Transforman las vidas de niñas, niños y adolescentes a través de educación y cuidado.",
        email: "veronique.henry@plan-international.org",
        networks: "https://www.facebook.com/PlanPeru/",
        keywords: [
            "infancias",
            "adolescentes",
            "género",
            "educación",
            "protección infantil",
            "igualdad",
            "liderazgo",
            "violencia",
            "empleabilidad"
        ]
    },
    {
        id: 54,
        name_company: "PRISMA",
        description: "Investigación y acción para un futuro mejor. Desarrollan proyectos que fortalecen capacidades y abren oportunidades para una inclusión sostenible.",
        email: "cgutierrez@prisma.org.pe",
        networks: "https://www.facebook.com/PrismaONG",
        keywords: [
            "desarrollo sostenible",
            "salud pública",
            "equidad",
            "educación",
            "agricultura",
            "investigación",
            "capacitación"
        ]
    },
    {
        id: 55,
        name_company: "PROSA",
        description: "Vivir con calidad y derechos. Ofrecen apoyo integral para personas con VIH/SIDA, promoviendo autoayuda y dignidad.",
        email: "juliocesar@prosa.org.pe",
        networks: "https://www.facebook.com/asociacion.prosa/",
        keywords: [
            "salud",
            "vih",
            "empoderamiento",
            "prevención"
        ]
    },
    {
        id: 56,
        name_company: "Asociación Civil Quinta Ola",
        description: "Empoderamiento feminista en acción. Educan y generan cambios culturales para garantizar los derechos de niñas y mujeres.",
        email: "gianina@quintaola.org",
        networks: "https://www.facebook.com/QuintaOlaPeru/",
        keywords: [
            "género",
            "feminismo",
            "empoderamiento",
            "juventudes",
            "activismo"
        ]
    },
    {
        id: 57,
        name_company: "RET Americas",
        description: "Transforman crisis en oportunidades sostenibles para comunidades de América Latina.",
        email: "t.rubio@RETAmericas.org",
        networks: "https://www.facebook.com/RETAmericas",
        keywords: [
            "migración",
            "refugiados",
            "ayuda humanitaria",
            "integración"
        ]
    },
    {
        id: 58,
        name_company: "Unión Venezolana",
        description: "Mano amiga para migrantes. Facilitan la integración de venezolanos en Perú, conectándolos con aliados estratégicos.",
        email: "oscarpt2002@gmail.com",
        networks: "https://www.facebook.com/unionveperu/",
        keywords: [
            "migración",
            "refugiados",
            "acceso a servicios",
            "orientación"
        ]
    },
    {
        id: 59,
        name_company: "Oxfam",
        description: "Desigualdad no es destino. Trabajan por una democracia inclusiva que cierre brechas de pobreza y exclusión.",
        email: "alejandra.alayza@oxfam.org",
        networks: "https://www.facebook.com/oxfamenperu/",
        keywords: [
            "derechos indígenas",
            "género",
            "participación ciudadana",
            "ayuda humanitaria"
        ]
    },
    {
        id: 60,
        name_company: "Lutheran World Relief",
        description: "Futuro resiliente desde la raíz. Impulsan medios de vida sostenibles junto a agricultores y gobiernos, fortaleciendo sectores como el cacao.",
        email: "econtreras@lwr.org",
        networks: "https://www.facebook.com/LuthWorldRelief/",
        keywords: [
            "alimentación",
            "medio ambiente",
            "género",
            "agua"
        ]
    },
    {
        id: 61,
        name_company: "Asociación Nacional de Centros",
        description: "Unión para el cambio. Defienden y fortalecen a las ONGD peruanas para que su impacto siga creciendo.",
        email: "pinahuaman@gmail.com",
        networks: "https://www.facebook.com/ANCPERU/?locale=es_LA",
        keywords: [
            "defensa legal",
            "incidencia política",
            "capacitaciones"
        ]
    },
    {
        id: 62,
        name_company: "Asociación Evangélica Luterana de Ayuda para el Desarrollo Comunal (Diaconía)",
        description: "Agua, salud y oportunidades. Transforman comunidades vulnerables con programas que siembran sostenibilidad y empoderamiento.",
        email: "edelvis.rodriguez@diaconiaperu.org",
        networks: "https://www.facebook.com/DiaconiaPeru",
        keywords: [
            "género",
            "indígenas",
            "agricultura"
        ]
    },
    {
        id: 63,
        name_company: "Salvamento Auxilio y Rescate (SAR) Perú",
        description: "Juntos ante los desastres. Previenen riesgos para reducir el impacto de emergencias en el Perú.",
        email: "jperez@sarperu.org",
        networks: "https://www.facebook.com/OngSarPeru/?locale=es_ES",
        keywords: [
            "búsqueda y rescate",
            "emergencias",
            "ayuda humanitaria",
            "prevención de desastres"
        ]
    },
    {
        id: 64,
        name_company: "PROMSEX",
        description: "El derecho a decidir y vivir con justicia. Promueven la autonomía en derechos sexuales y reproductivos a través de incidencia política y alianzas estratégicas.",
        email: "elidaguerra@promdsr.org",
        networks: "https://www.facebook.com/promsex/?locale=es_LA",
        keywords: [
            "salud sexual",
            "género",
            "derechos sexuales",
            "educación sexual",
            "prevención violencia"
        ]
    },
    {
        id: 65,
        name_company: "JUNTOS CATOLICA",
        description: "Estudiar no tiene que ser un camino solitario. Acompañan a estudiantes con actividades que potencian su desarrollo académico y social en la universidad.",
        email: "70358355@ucsm.edu.pe",
        phones: [
            "985556964"
        ],
        networks: "https://www.instagram.com/juntos.catolica/",
        keywords: [
            "gremio estudiantil"
        ]
    },
    {
        id: 66,
        name_company: "Presente",
        description: "Diversidad en acción. Crean espacios colaborativos y alianzas estratégicas para avanzar los derechos de la comunidad LGBTIQ+.",
        email: "contacto@presente.pe",
        networks: "https://www.facebook.com/presenteong",
        keywords: [
            "lgbtiq+"
        ]
    },
    {
        id: 67,
        name_company: "NUEVA FACE",
        description: "Un grupo estudiantil con grandes propósitos. La UCSM trabaja por la democracia y los derechos humanos en Arequipa.",
        email: "olga.humpire@ucsm.edu.pe",
        networks: "https://www.instagram.com/nueva_face/?hl=es",
        keywords: [
            "gremio estudiantil"
        ]
    },
    {
        id: 68,
        name_company: "Save the Children",
        description: "Salud, educación y protección son derechos, no privilegios. Trabajan por el bienestar de la niñez, especialmente de migrantes y refugiados.",
        email: "William.Campbell@savethechildren.org",
        networks: "https://www.facebook.com/SavetheChildrenPeru/",
        keywords: [
            "infancias",
            "salud",
            "medio ambiente",
            "ayuda humanitaria",
            "educación"
        ]
    },
    {
        id: 69,
        name_company: "Terre des Hommes Suisse",
        description: "Solidaridad sin fronteras. Actúan en once países defendiendo derechos humanos y construyendo sociedades más justas.",
        email: "oscar.vasquez@tdh.ch",
        networks: "https://www.facebook.com/tdhsperu/",
        keywords: [
            "infancias",
            "derechos",
            "violencia",
            "juventudes",
            "medio ambiente",
            "trata de personas"
        ]
    },
    {
        id: 70,
        name_company: "Socios en Salud",
        description: "Diseñan e implementan programas basados en evidencia para comunidades vulnerables, replicando modelos efectivos de justicia social.",
        email: "sesperu@pih.org",
        networks: "https://www.facebook.com/SociosEnSalud",
        keywords: [
            "salud",
            "prevención",
            "acceso a servicios"
        ]
    },
    {
        id: 71,
        name_company: "Centro de la Mujer Peruana Flora Tristán",
        description: "La igualdad es un compromiso constante. Desde 1979 trabajan por los derechos de las mujeres y la igualdad de género en todas sus dimensiones.",
        email: "postmast@flora.org.pe",
        phones: [
            "+5114331457"
        ],
        networks: "https://www.facebook.com/CMPFloraTristan",
        keywords: [
            "género",
            "derechos",
            "empoderamiento",
            "violencia"
        ]
    },
    {
        id: 72,
        name_company: "Voces Ciudadanas",
        description: "La democracia se fortalece con diálogo. Conectan a la sociedad y el Estado para generar propuestas que impulsen el cambio desde el análisis crítico.",
        email: "edson.aguilar@vocesciudadanas.pe",
        networks: "https://www.facebook.com/VocesCiudadanas",
        keywords: [
            "participación política",
            "democracia",
            "dipalogo",
            "ciudadanía"
        ]
    },
    {
        id: 73,
        name_company: "Acción por los Niños",
        description: "Trabajan por el desarrollo integral de niñas, niños y adolescentes, protegiéndolos y educándolos para un mejor futuro.",
        email: "lourdes.febres@accionporlosninos.org.pe",
        networks: "https://www.facebook.com/accionxlosninos",
        keywords: [
            "infancias",
            "educación",
            "derechos"
        ]
    },
    {
        id: 74,
        name_company: "IPRODES",
        description: "Diversidad que transforma. Promueven derechos humanos, igualdad de género y gobernanza mediante proyectos interculturales.",
        email: "sgarcia@iprodes.org",
        networks: "https://www.facebook.com/Iprodes/",
        keywords: [
            "derechos humanos",
            "interculturalidad",
            "medio ambiente"
        ]
    },
    {
        id: 76,
        name_company: "International Rescue Committee /Comité Internacional de Rescate (IRC)",
        description: "Protegen y empoderan. Diseñamos programas en salud, protección infantil y apoyo a comunidades vulnerables para crear resiliencia.",
        email: "nicole.kast@rescue.org",
        networks: "https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.rescue.org%2Fcountry%2Fperu",
        keywords: [
            "refugiados",
            "migrantes",
            "ayuda humanitaria",
            "refugiados",
            "salud"
        ]
    },
    {
        id: 77,
        name_company: "Venezolanos Organizados (Veo Perú)",
        description: "Un nuevo comienzo. Organizan asistencia y facilitamos la integración de refugiados venezolanos con acceso a servicios esenciales.",
        email: "asocveo2023@gmail.com",
        networks: "https://www.rescue.org/somos-irc",
        keywords: [
            "refugiados",
            "migrantes",
            "asistencia legal"
        ]
    },
    {
        id: 78,
        name_company: "VENINTEGRA",
        description: "Migrar no te debe dejar fuera. En Lima, te ayudan a acceder a salud, educación y servicios básicos si más lo necesitas",
        email: "citasenlineaveneintegra@gmail.com",
        phones: [
            "+51917622611"
        ],
        networks: "https://www.instagram.com/veneintegra/",
        keywords: [
            "refugiados",
            "migrantes",
            "acceso a servicios",
            "orientación"
        ]
    },
    {
        id: 79,
        name_company: "Asociacion Qosqo Maki",
        description: "En Cusco, los niños encuentran un hogar. Más de 30 años dando educación y refugio a chicos en situación de calle",
        email: "web.qosqomaki@gmail.com",
        networks: "https://www.facebook.com/asociacionqosqomaki",
        keywords: [
            "infancias",
            "capacitación",
            "calle",
            "capacitaciones"
        ]
    },
    {
        id: 80,
        name_company: "World Vision",
        description: "En Lima, Áncash, La Libertad, Huancavelica, Ayacucho, Cusco, Tacna, Tumbes y Loreto, crean oportunidades para jóvenes y familias para que tengan un futuro justo",
        email: "sandra_contreras@wvi.org",
        networks: "https://www.facebook.com/WorldVisionPeru/",
        keywords: [
            "infancias",
            "educación",
            "juventudes",
            "empoderamiento"
        ]
    },
    {
        id: 81,
        name_company: "Fútbol Más (El balón no tiene fronteras)",
        description: "El fútbol cambia vidas en Lima, Piura, La Libertad, Lambayeque, Callao, Arequipa, Junín, Cusco e Ica. Llevan deporte y bienestar a escuelas y barrios donde más se necesita",
        email: "ivonne.gonzalez@futbolmas.org",
        networks: "https://www.facebook.com/FutbolMasPE/",
        keywords: [
            "infancias",
            "deporte",
            "fútbol"
        ]
    },
    {
        id: 82,
        name_company: "Movimiento Migrante",
        description: "En Lima Norte y Callao, unimos a migrantes y refugiados para que tengan redes de apoyo y puedan salir adelante juntos",
        email: "a.social@movimientomigrante.org",
        phones: [
            "+51925637345"
        ],
        networks: "https://www.facebook.com/movimientomigrante/",
        keywords: [
            "migración",
            "refugiados",
            "derechos humanos",
            "apoyo legal"
        ]
    },
    {
        id: 83,
        name_company: "Warmi Huasi",
        description: "En Lima, impulsan el liderazgo y la participación de niños, adolescentes y familias en sus barrios",
        email: "warmihuasi@gmail.com",
        networks: "https://www.facebook.com/Warmi-Huasi-266161226767465/",
        keywords: [
            "infancias",
            "empoderamiento",
            "género",
            "derechos",
            "igualdad"
        ]
    },
    {
        id: 84,
        name_company: "Programa Conjunto de las Naciones Unidas sobre el VIH/SIDA (ONUSIDA)",
        description: "En Lima, Amazonas y otras regiones, trabajan para que todos puedan prevenir y tratar el VIH sin barreras ni prejuicios",
        email: "velasquezCl@unaids.org",
        networks: "http://www.facebook.com/UNAIDS",
        keywords: [
            "salud",
            "vih/sida",
            "prevención",
            "tratamiento",
            "derechos humanos",
            "salud pública"
        ]
    },
    {
        id: 85,
        name_company: "Programa de Naciones Unidas para el Desarrollo (PNUD)",
        description: "En Arequipa, Piura, Puno, Ica, La Libertad, Lambayeque, Ancash, Cusco, Huánuco, Lima, Ucayali, Loreto, Pasco, San Martín, Madre de Dios, Tacna, Amazonas, Cajamarca, Huancavelica, Junín, Apurímac y Ayacucho, luchan contra la pobreza y apoyamos a comunidades a construir un futuro sostenible",
        email: "Bettina.woll@undp.org",
        networks: "https://www.facebook.com/PNUDPe/",
        keywords: [
            "pobreza",
            "gobernanza",
            "cambio climático",
            "inclusión social"
        ]
    },
    {
        id: 87,
        name_company: "Organización Panamericana de la Salud / Organización Mundial de la Salud (OPS/OMS)",
        description: "Buscan que todos tengan acceso a salud de calidad en Amazonas, Cusco, Lima, Ucayali, Piura, Arequipa, San Martín, Ayacucho, La Libertad, Madre de Dios, Loreto y Pasco",
        email: "birminghamm@paho.org",
        networks: "https://www.facebook.com/OPSOMSPeru/",
        keywords: [
            "salud pública",
            "prevención"
        ]
    },
    {
        id: 89,
        name_company: "Organización Internacional para las Migraciones (OIM)",
        description: "En Callao, Lima, Piura, Tacna, Tumbes, Puno, Amazonas, San Martín y Arequipa, apoyan a migrantes y gobiernos para que moverse sea seguro y justo para todos",
        email: "gcrocetti@iom.int",
        networks: "https://www.facebook.com/IOM",
        keywords: [
            "migración",
            "refugiados",
            "ayuda humanitaria",
            "integración",
            "derechos humanos"
        ]
    },
    {
        id: 90,
        name_company: "Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura (UNESCO)",
        description: "En Amazonas, Cusco, Junín, Ucayali, Loreto, Arequipa, La Libertad y Piura, usan la educación, la ciencia y la cultura para construir paz y combatir la pobreza",
        email: "g.alonso@unesco.org",
        networks: "https://www.facebook.com/UNESCOes/?locale=es_LA",
        keywords: [
            "educación",
            "cultura",
            "ciencia",
            "patrimonio",
            "diversidad cultural"
        ]
    },
    {
        id: 91,
        name_company: "Fondo de Población de las Naciones Unidas (UNFPA)",
        description: "Defienden la salud sexual y reproductiva en Piura, Amazonas, Ayacucho, Loreto, Lambayeque y Tumbes para que cada embarazo sea deseado y cada parto seguro",
        email: "gonzalez@unfpa.org",
        networks: "https://www.facebook.com/UNFPAPeru",
        keywords: [
            "salud sexual y reproductiva",
            "población",
            "derechos reproductivos",
            "igualdad de género",
            "planificación familiar"
        ]
    },
    {
        id: 92,
        name_company: "Organización Internacional del Trabajo (OIT)",
        description: "Defienden los derechos laborales y humanos en Lima, Piura, Cusco, Loreto, San Martín, Ucayali, Puno y Arequipa para que todos tengan un trabajo justo y digno",
        email: "cardona@ilo.org",
        networks: "https://www.facebook.com/OITAmericas/?brand_redir=488782827814626#",
        keywords: [
            "trabajo decente",
            "derechos laborales",
            "empleo",
            "seguridad social"
        ]
    },
    {
        id: 93,
        name_company: "Alto Comisionado de las Naciones Unidas para los Derechos Humanos (ACNUDH)",
        description: "En todo el Perú, apoyan a fortalecer instituciones y proteger los derechos humanos",
        email: "anttila@un.org",
        networks: "https://www.facebook.com/onudh/",
        keywords: [
            "derechos humanos",
            "justicia"
        ]
    },
    {
        id: 94,
        name_company: "Fondo de las Naciones Unidas para la Infancia (UNICEF)",
        description: "Trabajan por el bienestar y los derechos de niñas, niños y adolescentes en Lima, Loreto, Ucayali, Tumbes y Huancavelica",
        email: "jalvarez@unicef.org",
        networks: "https://www.facebook.com/unicefperu",
        keywords: [
            "infancias",
            "derechos",
            "educación",
            "protección",
            "salud"
        ]
    },
    {
        id: 96,
        name_company: "Fondo Internacional de Desarrollo Agrícola (FIDA)",
        description: "En Apurímac, Ayacucho, Cusco, Huancavelica, Junín, Amazonas, Ancash, Cajamarca, Lima y San Martín, apoyan a comunidades rurales para que salgan de la pobreza y mejoren su vida diaria",
        email: "j.ruizcumplido@ifad.org",
        networks: "https://www.facebook.com/IFAD/",
        keywords: [
            "desarrollo rural",
            "agricultura",
            "alimentación"
        ]
    },
    {
        id: 97,
        name_company: "Alto Comisionado de las Naciones Unidas para los Refugiados (ACNUR)",
        description: "Protegen a refugiados y desplazados en Tumbes, La Libertad, Lima, Arequipa, Tacna, Puno y Madre de Dios para que puedan empezar de nuevo con dignidad",
        email: "almirall@unhcr.org",
        networks: "https://www.facebook.com/ACNUR",
        keywords: [
            "refugiados",
            "migrantes",
            "asilo",
            "derechos humanos",
            "ayuda humanitaria"
        ]
    },
    {
        id: 98,
        name_company: "Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO)",
        description: "Trabajan para que nadie pase hambre y todos tengan acceso a comida sana en Tumbes, Piura, Lambayeque, La Libertad, Ancash, Lima, Arequipa, Moquegua, Tacna, Cajamarca, Huánuco, Pasco, Junín, Huancavelica, Ayacucho, Apurímac, Cusco, Puno, Loreto, Ucayali, San Martín, Madre de Dios y Amazonas",
        email: "Mariana.EscobarArango@fao.org",
        networks: "https://www.facebook.com/ICAOSAM/",
        keywords: [
            "acción humanitaria",
            "alimentación",
            "agricultura",
            "desarrollo rural",
            "nutrición"
        ]
    },
    {
        id: 100,
        name_company: "Programa de las Naciones Unidas para los Asentamientos Humanos (ONU-HABITAT)",
        description: "En Lima, promueven ciudades más sostenibles y viviendas dignas para todos",
        email: "roi.chiti@un.org",
        networks: "https://www.facebook.com/ONUHabitat.es/",
        keywords: [
            "desarrollo urbano",
            "vivienda social",
            "medio ambiente"
        ]
    },
    {
        id: 101,
        name_company: "Programa Mundial de Alimentos (WFP)",
        description: "Llevan alimentos a quienes lo necesitan y ayudan a comunidades a ser más fuertes frente a emergencias en Lima, Callao, Cusco, Arequipa, Puno, Tumbes, Lambayeque, San Martín, Ayacucho, Amazonas, Ancash, Apurímac, Cajamarca, Huancavelica, Huánuco, Junín, La Libertad, Loreto, Piura y Tacna",
        email: "sarah.laughton@wfp.org",
        networks: "https://www.facebook.com/ProgramaMundialdeAlimentos/",
        keywords: [
            "seguridad alimentaria",
            "nutrición",
            "acción humanitaria",
            "emergencia"
        ]
    },
    {
        id: 102,
        name_company: "Oficina de Coordinación de Asuntos Humanitarios (OCHA)",
        description: "Coordinan la ayuda humanitaria desde Lima para responder rápido y bien ante emergencias en Perú",
        email: "cheatham@un.org",
        networks: "https://www.facebook.com/UNOCHAAmericas/",
        keywords: [
            "ayuda humanitaria",
            "emergencias",
            "gestión de crisis"
        ]
    },
    {
        id: 104,
        name_company: "ONU Mujeres",
        description: "En Lima, defienden los derechos de mujeres y niñas para que tengan las mismas oportunidades que todos",
        email: "mariapia.molero@unwomen.org",
        networks: "https://www.facebook.com/unwomen",
        keywords: [
            "género",
            "empoderamiento",
            "derechos de las mujeres",
            "violencia",
            "liderazgo"
        ]
    },
    {
        id: 105,
        name_company: "Peace and Hope International (Paz y Esperanza)",
        description: "En Lima, Huánuco, San Martín, Ayacucho y Apurímac, enfrentan la violencia con programas de justicia y apoyo",
        email: "jarcobocco@pazyesperanza.org",
        networks: "https://web.facebook.com/pazyesperanzaperu/",
        keywords: [
            "derechos humanos",
            "justicia",
            "educación",
            "apoyo a víctimas",
            "violencia"
        ]
    },
    {
        id: 106,
        name_company: "Welthungerhilfe",
        description: "En todo el Perú, impulsan proyectos rurales y acceso a agua potable para que más peruanos vivan mejor",
        email: "Susanna.Daag@welthungerhilfe.de",
        networks: "https://www.facebook.com/welthungerhilfesouthamerica/",
        keywords: [
            "alimentación",
            "desarrollo rural",
            "agricultura",
            "ayuda humanitaria"
        ]
    },
    {
        id: 107,
        name_company: "Asociación Solidaridad Países Emergentes",
        description: "En Lima, promueven inclusión y desarrollo para quienes más lo necesitan",
        email: "mzevallos@aspem.org.pe",
        networks: "https://www.facebook.com/ASPEm.PERU/",
        keywords: [
            "desarrollo sostenible",
            "apoyo social"
        ]
    },
    {
        id: 108,
        name_company: "Humanity & Inclusion",
        description: "Dan asistencia técnica y defendemos los derechos de migrantes y refugiados vulnerables en Perú",
        email: "m.berche@hi.org",
        networks: "https://www.facebook.com/HumanityAndInclusionLAC",
        keywords: [
            "refugiados",
            "migrantes",
            "discapacidad",
            "ayuda humanitaria"
        ]
    },
    {
        id: 109,
        name_company: "Médicos del Mundo",
        description: "En todo el Perú, llevan salud a donde más se necesita, respondiendo a emergencias",
        email: "presidencia@mdm.org.ar",
        networks: "https://www.medicosdelmundo.org/",
        keywords: [
            "salud",
            "atención médica",
            "emergencia",
            "derechos humanos",
            "acceso a servicios"
        ]
    },
    {
        id: 110,
        name_company: "RICH (Red Internacional de Cooperación Humanitaria)",
        description: "En La Libertad, unen ONG para apoyar a refugiados y comunidades vulnerables",
        email: "red.coop.hm@gmail.com",
        networks: "https://www.facebook.com/profile.php?id=61560186960160",
        keywords: [
            "refugiados",
            "migrantes",
            "acción humanitaria"
        ]
    },
    {
        id: 111,
        name_company: "Asociación Misioneros De San Carlos Scalabrinianos",
        description: "En Lima, Tumbes y Tacna, apoyamos a migrantes y refugiados con ayuda integral desde nuestra misión religiosa",
        email: "luiz.doarte@simn-global.or",
        networks: "https://www.facebook.com/Scalabrinianos/?locale=es_LA",
        keywords: [
            "refugiados",
            "migrantes",
            "acción humanitaria"
        ]
    },
    {
        id: 112,
        name_company: "Idea Internacional",
        description: "En todo el Perú, trabajamos por una democracia sostenible.",
        phones: [
            "+51999850097"
        ],
        networks: "www.idea.int",
        keywords: [
            "democracia",
            "ciudadanía",
            "asistencia electoral",
            "capacitación política"
        ]
    },
    {
        id: 113,
        name_company: "Asociación Civil Transparencia",
        description: "En todo el país, impulsan la transparencia y la participación ciudadana para construir un Perú más justo.",
        phones: [
            "+51970935400"
        ],
        networks: "https://www.facebook.com/transparenciaperu?_rdc=1&_rdr",
        keywords: [
            "transparencia",
            "democracia",
            "participación ciudadana"
        ]
    },
    {
        id: 114,
        name_company: "Pro-Dialogo",
        description: "En Lima, ayudan a resolver conflictos y fortalecer la cohesión política a través del diálogo.",
        phones: [
            "+51987555695"
        ],
        networks: "https://www.facebook.com/prodialogoperu/?locale=es_LA",
        keywords: [
            "diálogo",
            "ciudadanía",
            "democracia"
        ]
    },
    {
        id: 115,
        name_company: "Coalición Ciudadana",
        description: "En todo el Perú, defienden los derechos de la gente promoviendo la participación activa de la ciudadanía.",
        phones: [
            "+51987555695"
        ],
        networks: "https://www.facebook.com/coalicion.pe/",
        keywords: [
            "ciudadanía",
            "democracia",
            "incidencia política"
        ]
    },
    {
        id: 116,
        name_company: "Ashanti Peru",
        description: "En Lima, apoyan y empoderan a la juventud afroperuana para que defienda sus derechos y participe en la vida política.",
        email: "ashantiperu@ashantiperu.org",
        networks: "https://www.facebook.com/ashantiperu",
        keywords: [
            "afroperuanos",
            "ciudadanía",
            "incidencia política",
            "capacitaciones",
            "activismo"
        ]
    },
    {
        id: 117,
        name_company: "Articulación de Lesbianas Feministas de Lima",
        description: "En Lima, mujeres lesbianas luchan juntas para lograr igualdad y justicia de género.",
        email: "articulacionlesbianaslima2012@gmail.com",
        networks: "https://www.facebook.com/p/Articulaci%C3%B3n-de-Lesbianas-Feministas-de-Lima-100064601953339/",
        keywords: [
            "lgtbiq+",
            "feminismo",
            "género",
            "activismo",
            "diversidad"
        ]
    },
    {
        id: 118,
        name_company: "Lesbianas Independientes Feministas Socialistas",
        description: "En Lima, defienden los derechos de mujeres lesbianas desde el feminismo socialista.",
        email: "lifperu@gmail.com",
        networks: "https://www.facebook.com/lifsperu",
        keywords: [
            "lgtbiq+",
            "feminismo",
            "activismo",
            "igualdad",
            "justicia social"
        ]
    },
    {
        id: 119,
        name_company: "Católicas por el Derecho a Decidir - Perú",
        description: "En Lima, trabajan por la justicia social y los derechos sexuales de las mujeres desde la fe.",
        email: "cddperu@cddperu.org",
        networks: "https://www.facebook.com/catolicasperu/?locale=es_LA",
        keywords: [
            "salud sexual",
            "feminismo",
            "derechos"
        ]
    },
    {
        id: 120,
        name_company: "Movimiento Manuela Ramos",
        description: "Desde Lima, construyen igualdad y empoderamiento femenino en Perú desde 1978.",
        email: "postmast@manuela.org.pe",
        networks: "https://web.facebook.com/manuela.peru/",
        keywords: [
            "género",
            "feminismo",
            "derechos",
            "igualdad",
            "empoderamiento"
        ]
    },
    {
        id: 121,
        name_company: "CLADEM Perú",
        description: "En Lima, unen fuerzas para proteger los derechos de las mujeres y luchar contra la violencia.",
        email: "cladem.peru@gmail.com",
        networks: "https://www.facebook.com/REDCLADEM",
        keywords: [
            "género",
            "derechos",
            "feminismo",
            "igualdad",
            "violencia"
        ]
    },
    {
        id: 122,
        name_company: "Colectivo Sonqo Warmi Cusco",
        description: "En Cusco, mujeres unidas impulsan igualdad y justicia para fortalecer sus comunidades.",
        email: "sonqowarmicusco@gmail.com",
        networks: "https://www.facebook.com/p/Colectivo-Sonqo-Warmi-Cusco-100066895913167/",
        keywords: [
            "género",
            "indígenas",
            "derechos",
            "feminismo",
            "cultura",
            "empoderamiento"
        ]
    },
    {
        id: 124,
        name_company: "ALTERNATIVA Centro de Investigación Social y Educación Popular",
        description: "En Lima, promueven la educación y el conocimiento para transformar realidades y construir desarrollo.",
        email: "rodolfoalva@alter.org.pe",
        networks: "https://www.facebook.com/centroalternativa",
        keywords: [
            "investigación",
            "educación"
        ]
    },
    {
        id: 125,
        name_company: "Forum Solidaridad Perú",
        description: "Defienden los derechos de comunidades indígenas en la Amazonía peruana a través de alianzas estratégicas.",
        email: "alonsogondel@gmail.com",
        networks: "https://www.facebook.com/people/Forum-Solidaridad-Per%C3%BA/100063709982424/",
        keywords: [
            "pueblos indígenas",
            "derechos",
            "incidencia política"
        ]
    },
    {
        id: 126,
        name_company: "Grupo de Trabajo sobre Pueblos Indígenas de la Coordinadora Nacional de Derechos Humanos",
        description: "Apoyan a organizaciones indígenas en sus procesos sociales y técnicos para fortalecer su autonomía.",
        email: "balbuena.pj@pucp.pe",
        networks: "https://www.instagram.com/cnddhhperu/?hl=en",
        keywords: [
            "pueblos indígenas",
            "derechos",
            "defensa territorial"
        ]
    },
    {
        id: 127,
        name_company: "Resucita Perú Ahora",
        description: "Construyen redes de solidaridad entre la Iglesia y la sociedad civil para el bien común en Perú.",
        email: "resucitaperuahora@gmail.com",
        networks: "https://www.facebook.com/resucitaperuahora",
        keywords: [
            "acción humanitaria",
            "derechos"
        ]
    },
    {
        id: 128,
        name_company: "Asociación Servicios Educativos Rurales (SER)",
        description: "En Lima, Cajamarca, Ayacucho y Puno, mejoran la calidad de vida en los Andes y la Amazonía con educación y acceso a agua potable.",
        email: "ser@ser.org.pe",
        networks: "https://www.facebook.com/1980Asociacion.SER/",
        keywords: [
            "desarrollo rural",
            "educación",
            "derechos"
        ]
    },
    {
        id: 129,
        name_company: "Movimiento Ciudadano frente al Cambio Climático (MOCICC)",
        description: "Promueven una ciudadanía comprometida con la sostenibilidad ambiental en todo el Perú.",
        email: "info@mocicc.org",
        networks: "https://www.facebook.com/MOCICCPeru",
        keywords: [
            "medio ambiente",
            "sostenibilidad",
            "incidencia política",
            "justicia ambiental"
        ]
    },
    {
        id: 130,
        name_company: "Centro de Estudios y Prevención de Desastres – PREDES",
        description: "En Lima, Cusco, Arequipa y Moquegua, ayudan a las comunidades a estar preparadas ante desastres.",
        email: "postmast@predes.org.pe",
        networks: "http://www.facebook.com/sharer/sharer.php?u=https://predes.org.pe/institucional/",
        keywords: [
            "gestión de riesgos",
            "prevención de desastres",
            "resiliencia",
            "educación"
        ]
    },
    {
        id: 131,
        name_company: "Fomento de la Vida (FOVIDA)",
        description: "En Lima, Junín y Huancavelica, trabajamos por territorios sostenibles y comunidades más fuertes.",
        email: "mcuentas@fovida.org.pe",
        networks: "https://www.facebook.com/fomentodelavida",
        keywords: [
            "salud",
            "prevención",
            "derechos humanos"
        ]
    },
    {
        id: 132,
        name_company: "Centro de Investigación, Documentación y Asesoría Poblacional (Cidap)",
        description: "En Lima, luchan contra la pobreza urbana y facilitan el acceso igualitario a los servicios.",
        email: "consulta@cidap.org.pe",
        networks: "https://www.facebook.com/cidap/?locale=es_LA",
        keywords: [
            "investigación",
            "salud sexual",
            "políticas públicas"
        ]
    },
    {
        id: 133,
        name_company: "Centro de Estudios Sociales y Publicaciones (CESIP)",
        description: "En todo el Perú, defienden los derechos de la infancia y adolescencia desde 1976.",
        email: "postmast@cesip.org.pe",
        networks: "https://www.facebook.com/Cesip.org",
        keywords: [
            "investigación",
            "derechos humanos",
            "políticas públicas"
        ]
    },
    {
        id: 134,
        name_company: "El Movimiento Homosexual de Lima (MHOL)",
        description: "En Lima, Ayacucho y Lambayeque, luchan por los derechos LGTB con compromiso y valentía.",
        email: "mholperu@mhol.pe",
        networks: "https://www.facebook.com/mholperu/?locale=es_LA",
        keywords: [
            "lgtbiq+",
            "activismo",
            "igualdad",
            "salud sexual",
            "derechos"
        ]
    },
    {
        id: 135,
        name_company: "Instituto Bartolomé de Las Casas",
        description: "En Lima, Ayacucho y Lambayeque, impulsan el cambio hacia la justicia social y el desarrollo sostenible desde la fe.",
        email: "comunicacion@bcasas.org.pe",
        networks: "https://www.facebook.com/Institutobartolomedelascasas/",
        keywords: [
            "indígenas",
            "desarrollo sostenible",
            "investigación",
            "políticas públicas"
        ]
    },
    {
        id: 136,
        name_company: "Centro de Culturas Indígenas del Perú (CHIRAPAQ)",
        description: "Fortalecen la identidad indígena con proyectos educativos y culturales en todo el Perú.",
        email: "ayllu@chirapaq.org.pe",
        networks: "https://www.facebook.com/chirapaqoficial/",
        keywords: [
            "indígenas",
            "cultura",
            "interculturalidad"
        ]
    },
    {
        id: 137,
        name_company: "IDMA",
        description: "En Lima, Huánuco y Apurímac, promueven desarrollo sostenible con inclusión social y conciencia ambiental.",
        email: "directorejecutivo@idmaperu.org",
        networks: "https://www.facebook.com/IdmaInstitutoDeDesarrolloYMedioAmbiente",
        keywords: [
            "medio ambiente y derechos humanos"
        ]
    },
    {
        id: 138,
        name_company: "Proetica",
        description: "En todo el Perú, combaten la corrupción con transparencia y participación ciudadana.",
        email: "csanchez@proetica.org.pe",
        networks: "https://www.facebook.com/ProeticaPeru/",
        keywords: [
            "democracia",
            "ética",
            "transparencia",
            "derechos humanos"
        ]
    },
    {
        id: 139,
        name_company: "Instituto Prensa y Sociedad (IPYS)",
        description: "En Lima, promueven el periodismo de investigación y el acceso libre a la información.",
        email: "contacto@ipys.org",
        networks: "https://www.facebook.com/ipys.org/",
        keywords: [
            "periodismo",
            "libertad de prensa"
        ]
    },
    {
        id: 140,
        name_company: "Observatorio de los Derechos Sexuales y Reproductivos de las Personas con Discapacidad – ODISEX PERÚ",
        description: "En Lima, apoyan la inclusión de personas con discapacidad en sus derechos sexuales.",
        email: "mmogollonch@gmail.com",
        networks: "https://www.facebook.com/Odisex-Per%C3%BA-489540701477323",
        keywords: [
            "salud sexual",
            "discapacidad",
            "inclusión",
            "derechos"
        ]
    },
    {
        id: 141,
        name_company: "Veneactiva",
        description: "En Lima, Tumbes, Trujillo y Piura, protegen y promueven la integración de migrantes que buscan nuevas oportunidades.",
        email: "info@veneactiva.org",
        networks: "https://www.facebook.com/Veneactivaorg",
        keywords: [
            "refugiados",
            "migrantes",
            "derechos"
        ]
    },
    {
        id: 142,
        name_company: "VeneIca",
        description: "En Ica, trabajan por una migración inclusiva y alianzas que garanticen derechos para todos.",
        email: "andy@veneica.org",
        networks: "https://www.facebook.com/VeneIcaOficial/",
        keywords: [
            "refugiados",
            "migrantes",
            "derechos"
        ]
    },
    {
        id: 143,
        name_company: "WWF Perú",
        description: "En todo el país, conservan la naturaleza y luchamos contra el cambio climático para un futuro mejor.",
        email: "comunicaciones@wwfperu.org",
        networks: "https://www.facebook.com/OficialWWFPeru/",
        keywords: [
            "medio ambiente",
            "conservación",
            "biodiversidad",
            "desarrollo sostenible"
        ]
    },
    {
        id: 144,
        name_company: "AIDESEP",
        description: "En todo el Perú, apoyan a comunidades indígenas amazónicas para proteger sus derechos y territorios.",
        networks: "https://aidesep.org.pe/",
        keywords: [
            "pueblos indígenas",
            "territorio"
        ]
    },
    {
        id: 145,
        name_company: "Asociación Regional de Pueblos Indígenas de la Selva Central (ARPI SC)",
        description: "En Junín, Pasco, Huánuco y Ucayali, promueven el desarrollo sostenible y la gestión territorial en comunidades locales",
        email: "arpiselvacentral@yahoo.es",
        networks: "https://www.facebook.com/arpiselvacentral/",
        keywords: [
            "pueblos indígenas",
            "defensa territorial",
            "desarrollo sostenible"
        ]
    },
    {
        id: 146,
        name_company: "Coordinadora de Desarrollo y Defensa de los Pueblos Indígenas de la región San Martín (CODEPISAM)",
        description: "En San Martín, fortalecen la autonomía y capacidades de las comunidades amazónicas.",
        email: "codepisamcomu@gmail.com",
        networks: "https://www.facebook.com/people/Codepisam/61559059515573/?_rdr",
        keywords: [
            "pueblos indígenas",
            "desarrollo sostenible",
            "defensa territorial"
        ]
    },
    {
        id: 147,
        name_company: "Consejo Machiguenga del Río Urubamba (COMARU)",
        description: "En Cusco, defienden los derechos y territorios de las comunidades urubambinas.",
        email: "comaruc@gmail.com",
        networks: "https://www.facebook.com/people/Consejo-Machiguenga-del-Rio-Urubamba/100064403031266/?_rdr",
        keywords: [
            "pueblos indígenas",
            "derechos",
            "cultura",
            "territorio"
        ]
    },
    {
        id: 148,
        name_company: "Coordinadora Regional de los Pueblos Indígenas de San Lorenzo (CORPI-SL)",
        description: "En Loreto, coordinan la defensa de recursos y derechos indígenas.",
        email: "corpi.sl@gmail.com",
        networks: "https://www.facebook.com/corpisl.cosmovisionindigena.7",
        keywords: [
            "pueblos indígenas",
            "derechos",
            "defensa territorial"
        ]
    },
    {
        id: 149,
        name_company: "Coordinadora Regional de los Pueblos Indígenas de AIDESEP Atalaya (CORPIAA)",
        description: "En Ucayali, unen comunidades nativas para gestionar su territorio de forma sostenible.",
        email: "corpiaa2018@gmail.com",
        networks: "https://www.facebook.com/corpiaa",
        keywords: [
            "pueblos indígenas",
            "derechos",
            "defensa territorial"
        ]
    },
    {
        id: 150,
        name_company: "Federación Nativa del Río Madre de Dios y Afluentes (FENAMAD)",
        description: "En Madre de Dios, representan a comunidades indígenas en la defensa de su cultura y tierras.",
        email: "fenamad@fenamad.com.pe",
        networks: "https://www.facebook.com/FENAMAD",
        keywords: [
            "pueblos indígenas",
            "territorio",
            "desarrollo sostenible"
        ]
    },
    {
        id: 151,
        name_company: "Organización Regional Aidesep Ucayali (ORAU)",
        description: "En Huánuco, Ucayali y Loreto, trabajan por el desarrollo integral y la identidad de los pueblos indígenas.",
        email: "orauo347@gmail.com",
        networks: "https://www.facebook.com/OrauOficial",
        keywords: [
            "pueblos indígenas",
            "derechos",
            "defensa territorial"
        ]
    },
    {
        id: 152,
        name_company: "Organización Regional de Pueblos Indígenas de la Amazonía Norte del Perú (ORPIAN–P)",
        description: "En Cajamarca y Amazonas, los pueblos Wampis y Awajun defienden sus territorios y derechos.",
        email: "awasa1@hotmail.com",
        networks: "https://www.facebook.com/profile.php?id=100020423652582",
        keywords: [
            "pueblos indígenas",
            "derechos",
            "defensa territorial"
        ]
    },
    {
        id: 153,
        name_company: "Organización Regional de Pueblos Indígenas del Oriente (ORPIO)",
        description: "En Loreto, quince cuencas indígenas se unen para proteger su herencia territorial.",
        email: "orpio-baseregional_aidesep@hotmail.com",
        networks: "https://www.facebook.com/orpioloreto",
        keywords: [
            "pueblos indígenas",
            "derechos",
            "defensa territorial"
        ]
    },
    {
        id: 154,
        name_company: "Red inclusiva de gestión de riesgos desastres y discapacidad de América Latina y el Caribe (RED GIRDD-LAC)",
        description: "Promueven la inclusión de personas con discapacidad en la gestión de riesgos en América Latina y el Caribe.",
        email: "orauramari@gmail.com",
        networks: "https://www.facebook.com/RedGIRDD/",
        keywords: [
            "inclusión",
            "discapacidad",
            "gestión de riesgos"
        ]
    },
    {
        id: 155,
        name_company: "INPPARES",
        description: "En Lima, Arequipa, Ancash y Lambayeque, brindan servicios de salud sexual y reproductiva sin barreras.",
        email: "informes@inppares.org",
        networks: "https://www.facebook.com/INPPARES",
        keywords: [
            "salud sexual",
            "derechos",
            "género"
        ]
    },
    {
        id: 157,
        name_company: "Valientes en Acción",
        description: "En Lima, brindan asistencia social y cultural para el bienestar de migrantes y la cohesión comunitaria.",
        email: "ValientesEnAccionVen@gmail.com",
        phones: [
            "+519455604881"
        ],
        networks: "https://www.facebook.com/p/Valientes-En-Acci%C3%B3n-100076528400492/?_rdr",
        keywords: [
            "refugiados",
            "migrantes",
            "empoderamiento"
        ]
    },
    {
        id: 158,
        name_company: "We World - GVC",
        description: "En Apurímac, Piura, Lambayeque y La Libertad, promueven agricultura sostenible y derechos humanos en los Andes.",
        email: "info@weworld.it",
        networks: "https://www.facebook.com/WeWorldGlobal",
        keywords: [
            "ayuda humanitaria",
            "agricultura",
            "derechos humanos"
        ]
    },
    {
        id: 159,
        name_company: "ENGADI",
        description: "En Lima, ofrecen programas contra el analfabetismo que fortalecen las habilidades y oportunidades de los niños.",
        email: "maikolchirino@gmail.com",
        phones: [
            "+51977454743"
        ],
        networks: "https://www.facebook.com/profile.php?id=100084384435002",
        keywords: [
            "refugiados",
            "migrantes",
            "educación"
        ]
    },
    {
        id: 160,
        name_company: "Sembrando Esperanzas MV",
        description: "Mujeres venezolanas en [región] ofrecen apoyo emocional a quienes buscan un nuevo comienzo.",
        phones: [
            "+51918521895"
        ],
        networks: "https://www.facebook.com/sembrandoesperanzamv/",
        keywords: [
            "género",
            "empoderamiento",
            "violencia",
            "capacidades"
        ]
    },
    {
        id: 161,
        name_company: "Swisscontact",
        description: "En Lima, Piura, Cusco, Arequipa, Junín, La Libertad, Lambayeque e Ica, impulsan vivienda, educación y emprendimiento sostenible para transformar vidas y economías",
        email: "pe.info@swisscontact.org",
        networks: "https://www.facebook.com/swisscontactlatam/",
        keywords: [
            "desarrollo económico",
            "capacitación",
            "empleabilidad"
        ]
    },
    {
        id: 162,
        name_company: "OCASIVEN",
        description: "En Lima, ofrecen apoyo integral y servicios para que migrantes venezolanos tengan más oportunidades y puedan salir adelante.",
        email: "migrantesvulnerables@ocasiven.org",
        networks: "https://www.facebook.com/ocasiven?mibextid=LQQJ4d",
        keywords: [
            "refugiados",
            "migrantes",
            "orientación",
            "asistencia legal",
            "salud"
        ]
    },
    {
        id: 163,
        name_company: "OEI Perú",
        description: "Acerca la tecnología a la educación desde la infancia. Usa la innovación para abrir más oportunidades desde los primeros años",
        email: "oei.per@oei.int",
        networks: "https://www.facebook.com/OEIPERU.ORG",
        keywords: [
            "educación",
            "ciencia",
            "cultura",
            "tecnología",
            "democracia"
        ]
    },
    {
        id: 164,
        name_company: "Fundación Panamericana para el Desarrollo (PADF)",
        description: "Construye ciudades del futuro en Lima. Usa STEM, democracia y derechos humanos para integrar a migrantes y refugiados y fortalecer comunidades resilientes",
        email: "connect@padf.org",
        networks: "https://facebook.com/padf.org",
        keywords: [
            "educación",
            "ciencia",
            "tecnología",
            "refugiados",
            "migrantes",
            "empleabilidad",
            "ciudadanía",
            "democracia"
        ]
    },
    {
        id: 165,
        name_company: "Unión Internacional para la Conservación de la Naturaleza (UICN)",
        description: "Protege la biodiversidad en todo el país. Aplica conservación y sostenibilidad para cuidar lo que la naturaleza nos da.",
        email: "samerica@iucn.org",
        networks: "https://iucn.org/es",
        keywords: [
            "medio ambiente",
            "biodiversidad",
            "conservación"
        ]
    },
    {
        id: 166,
        name_company: "Instituto Internacional de Derecho y Sociedad (IIDS)",
        description: "Fortalece comunidades indígenas en todo el país. Impulsa políticas inclusivas desde su identidad, autonomía y fuerza colectiva.",
        email: "iids@derechoysociedad.org",
        networks: "https://www.facebook.com/InstitutoInternacionalDeDerechoYSociedad/",
        keywords: [
            "pueblos indígenas",
            "derechos",
            "justicia"
        ]
    },
    {
        id: 167,
        name_company: "Sociedad Peruana de Derecho Ambiental",
        description: "Mediante el derecho, resguardan la naturaleza, así como a las personas que la protegen y dependen de ella.",
        email: "icalle@spda.org.pe",
        networks: "https://www.facebook.com/spdaorg/?locale=es_LA",
        keywords: [
            "medio ambiente",
            "conservación",
            "incidencia",
            "pueblos indígenas"
        ]
    },
    {
        id: 168,
        name_company: "Caminando Juntos",
        description: "Mejoran la vida de personas en vulnerabilidad entregando calzado en buen estado a niñas, niños y adolescentes del Perú.",
        phones: [
            "012713323"
        ],
        networks: "https://www.facebook.com/caminandojuntos.pe",
        keywords: [
            "niñez",
            "zapatos",
            "donaciones"
        ]
    },
    {
        id: 169,
        name_company: "Enseña Perú",
        description: "Contribuyen a transformar la educación en Perú, formando una red de agentes de cambio que impulsen el desarrollo de cada estudiante.",
        email: "angela.bravo@ensenaperu.org",
        networks: "https://www.facebook.com/EnsenaPeru/",
        keywords: [
            "educación",
            "capacitación docente"
        ]
    },
    {
        id: 170,
        name_company: "Es hoy",
        description: "Movimiento de líderes empresariales que trabaja en los grandes desafíos del Perú. Moviliza recursos y capacidades del sector privado para impulsar iniciativas en educación, mypes, empleo, entre otros.",
        email: "vsifuentes@eshoy.pe",
        networks: "http://www.facebook.com/eshoyperu/",
        keywords: [
            "educación",
            "empleo",
            "institucionalidad",
            "mype",
            "emergencias",
            "articulación",
            "empresariado"
        ]
    },
    {
        id: 171,
        name_company: "EPA",
        description: "Trabaja para que más jóvenes y adultos terminen la educación básica, articulando con el Estado, empresas y sociedad civil para mejorar el acceso y la calidad educativa.",
        email: "programaeba@eshoy.pe",
        networks: "https://eshoy.pe/epa/",
        keywords: [
            "educación",
            "adultos"
        ]
    },
    {
        id: 172,
        name_company: "DVV",
        description: "Promueve la educación de personas jóvenes y adultas",
        email: "xvelasquez@dvv-international.edu.pe",
        networks: "https://www.facebook.com/@DVV.International.pe/?locale=es_LA",
        keywords: [
            "educación",
            "adultos",
            "jóvenes"
        ]
    },
    {
        id: 173,
        name_company: "Dispurse",
        description: "Impulsa la alfabetización digital y educativa de mujeres que no pudieron ir a la escuela, para su aprendizaje y empoderamiento.",
        email: "contacto@dispurse.org",
        networks: "https://www.facebook.com/Dispurse",
        keywords: [
            "educación",
            "género",
            "alfabetización",
            "empoderamiento"
        ]
    },
    {
        id: 174,
        name_company: "Nunca es tarde para aprender",
        description: "Servicio educativo para personas mayores de 14 años con primaria o secundaria incompleta en Cusco.",
        email: "contacto@dispurse.org",
        networks: "https://www.facebook.com/p/EBA-Nunca-es-tarde-para-aprender-100063578172013/?locale=es_LA",
        keywords: [
            "educación",
            "adultos",
            "jóvenes"
        ]
    },
    {
        id: 175,
        name_company: "Grandes",
        description: "Brinda la oportunidad a jóvenes y adultos de Amazonas de acceder y culminar su educación básica.",
        email: "lucyvallejosbenites@gmail.com",
        networks: "https://www.facebook.com/GrandesPeru/?locale=es_LA",
        keywords: [
            "educación",
            "adultos",
            "jóvenes"
        ]
    },
    {
        id: 176,
        name_company: "Derecho, Ambiente y Recursos Naturales (DAR)",
        description: "Trabaja por los derechos de los pueblos indígenas y el respeto de los derechos humanos y colectivos de los pueblos indígenas, promoviendo la equidad, la justicia y la diversidad cultural desde el Estado y las propias organizaciones indígenas.",
        email: "hchepiu@dar.org.pe",
        networks: "https://dar.org.pe/amazonia/#",
        keywords: [
            "pueblos indígenas",
            "derecho",
            "conservación",
            "justicia"
        ]
    },
    {
        id: 177,
        name_company: "Mongabay",
        description: "Organización periodística que informa sobre la naturaleza y los desafíos planetarios con una red global de periodistas locales.",
        networks: "https://www.facebook.com/mongabay",
        keywords: [
            "periodismo",
            "medio ambiente"
        ]
    },
    {
        id: 178,
        name_company: "Conservamos por Naturaleza",
        description: "Brinda apoyo a iniciativas de conservación voluntaria e involucra a más personas en acciones estratégicas para contribuir al cuidado de la naturaleza.",
        email: "conservamos@spda.org.pe",
        networks: "https://www.facebook.com/conservamospornaturaleza",
        keywords: [
            "medio ambiente",
            "áreas naturales protegidas",
            "biodiversidad"
        ]
    },
    {
        id: 179,
        name_company: "Centro Amazónico de Antropología y Aplicación Práctica (CAAP)",
        description: "Promueve la equidad, la interculturalidad y la defensa de los derechos humanos y ambientales, trabajando con organizaciones indígenas y el Estado para construir una democracia intercultural y justa.",
        email: "caaaperu@caaap.org.pe",
        networks: "https://www.facebook.com/centro.amazonico/",
        keywords: [
            "pueblos indígenas",
            "derechos",
            "interculturalidad",
            "justicia"
        ]
    },
    {
        id: 180,
        name_company: "OCEANA",
        description: "Oceana pretende lograr cambios políticos para aumentar la biodiversidad y la abundancia de la vida marina.",
        networks: "https://www.facebook.com/oceanaperu",
        keywords: [
            "medio ambiente",
            "conservación marina",
            "biodiversidad",
            "pesca sostenible"
        ]
    },
    {
        id: 181,
        name_company: "Helvetas",
        description: "Implementa proyectos de desarrollo en agua, agricultura, educación, economía, medio ambiente y más, y también brinda ayuda humanitaria en situaciones de emergencia.",
        email: "Kaspar.Schmidt@helvetas.org",
        networks: "https://www.facebook.com/HelvetasPeru",
        keywords: [
            "acción humanitaria",
            "desarrollo rural",
            "agricultura sostenible"
        ]
    },
    {
        id: 182,
        name_company: "Amautas Mineros",
        description: "Llevan las buenas prácticas de la minería moderna a estudiantes y comunidades. ¡Por una minería responsable y consciente!",
        email: "amautasmineros@gmail.com",
        networks: "https://www.facebook.com/AmautasMinerosPeru/?locale=es_LA",
        keywords: [
            "derechos laborales",
            "minería"
        ]
    },
    {
        id: 183,
        name_company: "Patria C",
        description: "Pone en manos de los jóvenes las claves para comprender, construir y fortalecer una democracia inclusiva y participativa.",
        email: "patriacperu@gmail.com",
        networks: "https://web.facebook.com/PatriaCPeru/?_rdc=1&_rdr",
        keywords: [
            "democracia",
            "capacitación",
            "ciudadanía",
            "liderazgo"
        ]
    },
    {
        id: 185,
        name_company: "Ruralia",
        description: "Impulsa la educación rural en Perú, acelerando intervenciones de organizaciones y reconociendo a empresas que apuestan por este reto con impacto y compromiso.",
        email: "ruralia@eshoy.pe",
        networks: "https://www.facebook.com/RuraliaPeru/",
        keywords: [
            "educación",
            "desarrollo rural",
            "articulación"
        ]
    },
    {
        id: 186,
        name_company: "GRADE",
        description: "Es un centro de investigación de temas clave como educación, desarrollo rural y medio ambiente en todo el país para aportar a políticas públicas que mejoren la vida de las personas.",
        email: "proyectos@grade.org.pe",
        networks: "https://www.facebook.com/grupodeanalisisparaeldesarrollo",
        keywords: [
            "investigación",
            "políticas públicas"
        ]
    },
    {
        id: 187,
        name_company: "Minkando",
        description: "Comunidad de jóvenes voluntarios que lleva educación divertida a niñas y niños en Lima, Arequipa, Ayacucho e Ica.",
        networks: "https://www.facebook.com/ONG.MINKANDO/?locale=es_LA",
        keywords: [
            "educación",
            "niñez",
            "voluntariado",
            "educación"
        ]
    },
    {
        id: 188,
        name_company: "ACCIONA ORG PERU",
        description: "Mejora el acceso al agua segura en Cajamarca, Loreto, Cusco e Ica, impulsando soluciones sostenibles en comunidades vulnerables.",
        networks: "https://www.facebook.com/Accionaorg-The-Energy-Water-Foundation-156386327712435/",
        keywords: [
            "agua",
            "saneamiento",
            "infraestructura",
            "energías renovables"
        ]
    },
    {
        id: 189,
        name_company: "ADDMEWORK",
        description: "Conecta a personas con discapacidad con empresas que puedan emplearlos en Lima.",
        email: "hola@addmework.com",
        networks: "https://web.facebook.com/AddmeWork/?locale=es_LA&_rdc=1&_rdr",
        keywords: [
            "inclusión",
            "discapacidad",
            "empleo"
        ]
    },
    {
        id: 190,
        name_company: "AGENTE CASH",
        description: "Ofrece servicios financieros en Cajamarca para que más personas accedan al ahorro, pagos y cobros de forma segura.",
        email: "red.comercial@agentecash.net",
        networks: "https://www.facebook.com/agentecash/",
        keywords: [
            "inclusión financiera",
            "finanzas"
        ]
    },
    {
        id: 191,
        name_company: "AMA SACRED VALLEY",
        description: "Desde el turimo en el Valle Sagrado de Cusco, impulsa iniciativas que buscan fortalecer a mujeres y actores locales, mejorando sus vidas.",
        email: "amavallesagrado@gmail.com",
        networks: "https://www.facebook.com/AmaSacredValley",
        keywords: [
            "turismo",
            "género",
            "cultura"
        ]
    },
    {
        id: 192,
        name_company: "AMAZONIA SIN FRONTERAS",
        description: "Desde Loreto, trabaja en conjunto con comunidades nativas, organizaciones sin fines de lucro, empresas, universidades, y otros actores para proteger la Amazonía, promoviendo la sostenibilidad, la educación y la protección de los derechos humanos de las comunidades en la región.",
        email: "info@amazoniasinfronteras.org",
        networks: "https://m.facebook.com/amazoniasinfronteras",
        keywords: [
            "pueblos indígenas",
            "educación",
            "conservación",
            "derechos"
        ]
    },
    {
        id: 193,
        name_company: "ALLIN KAWSAY",
        description: "Impulsa la educación en Puno, Cusco, Iquitos, con proyectos que buscan cerrar brechas y mejorar oportunidades para jóvenes y comunidades.",
        email: "informes@allinkawsay.org.pe",
        networks: "https://www.facebook.com/a.allinkawsay/?locale=es_LA",
        keywords: [
            "educación",
            "paz",
            "democracia",
            "interculturalidad"
        ]
    },
    {
        id: 194,
        name_company: "ASOCIACIÓN ARARIWA",
        description: "Trabaja en Cusco fortaleciendo capacidades, derechos e identidad cultural de las personas, impulsando la democracia, la participación ciudadana y un crecimiento económico justo para lograr una vida digna y sostenible.",
        email: "arariwa.cusco@gmail.com",
        networks: "https://www.facebook.com/Arariwa/?locale=es_LA",
        keywords: [
            "pueblos indígenas",
            "derechos",
            "educación",
            "interculturalidad"
        ]
    },
    {
        id: 196,
        name_company: "Asociacion Campesina Forestal",
        description: "Trabaja en Cusco, creando un bosque comunitario sostenible con 1 millón de árboles, en conjunto con la comunidad campesina de Qquencco.",
        email: "info@campesinaforestal.org",
        networks: "https://www.facebook.com/campesinaforestal/",
        keywords: [
            "medio ambiente",
            "árboles",
            "bosques",
            "sembrado",
            "bosque comunitario"
        ]
    },
    {
        id: 197,
        name_company: "Asociación de Emprendedores del Perú (ASEP)",
        description: "Promueve y defiende el derecho del emprendimiento en los peruanos.",
        email: "info@asep.pe",
        networks: "https://www.facebook.com/AsepPeru/",
        keywords: [
            "emprendimiento",
            "desarrollo económico",
            "innovación"
        ]
    },
    {
        id: 198,
        name_company: "Asociación Peruana de Seguridad, Salud Ocupacional y Medio Ambiente (APSSOMA)",
        description: "Hace que más trabajos sean seguros en todo el Perú. Enseña a prevenir riesgos y lleva 5 años formando a trabajadores y cuidando miles de espacios laborales.",
        email: "contacto@apssoma.org",
        networks: "https://www.facebook.com/apssoma",
        keywords: [
            "seguridad laboral",
            "salud ocupacional",
            "medio ambiente"
        ]
    },
    {
        id: 199,
        name_company: "Asociación Civil Chibolito",
        description: "Promueve el cuidado de los niños, niñas y adolescentes de Cajamarca, a través de la prevención de riesgos psicosociales",
        email: "asociacionchibolitos@yahoo.es",
        networks: "https://www.facebook.com/asociacionchibolitos?mibextid=2JQ9oc",
        keywords: [
            "niñez",
            "salud mental",
            "educación"
        ]
    },
    {
        id: 200,
        name_company: "Corazones Unidos",
        description: "Promueve la inclusión de personas con discapacidad en Lima, creando oportunidades reales de participación.",
        email: "Administracion@corazonesunidos.org",
        networks: "https://www.facebook.com/CorazonesUnidosPeru",
        keywords: [
            "inclusión",
            "discapacidad",
            "iglesias",
            "capacitación"
        ]
    },
    {
        id: 201,
        name_company: "Intirunakunaq Wasin",
        description: "Trabaja en Cusco brindando servicios educativos complementarios a la niños y adolescentes en situación de riesgo",
        email: "info@intirunakunaqwasin.org",
        networks: "https://www.facebook.com/intirunakunaqwasin",
        keywords: [
            "educación",
            "niñez",
            "adolescentes",
            "capacitaciones"
        ]
    },
    {
        id: 202,
        name_company: "Asociación Civil ONG Camina Conmigo",
        description: "Trabaja en Cajamarca mejorando la calidad de vida de niños con habilidades diferentes que viven en comunidades de extrema pobreza",
        email: "calidosacajamarca@gmail.com",
        networks: "https://www.facebook.com/CaminaConmigoCaj/",
        keywords: [
            "niñez",
            "discapacidad",
            "inclusión",
            "desarrollo rural"
        ]
    },
    {
        id: 203,
        name_company: "Asociacion Civil Pachamama Raymi, Aprender de los Mejores",
        description: "Apoya a comunidades rurales de Cusco para que vivan mejor, cuidando sus recursos naturales de forma sostenible.",
        email: "hola@pachamamaraymi.org",
        networks: "https://www.facebook.com/PachamamaRaymi/",
        keywords: [
            "árboles",
            "bosques",
            "desarrollo rural",
            "capacitación"
        ]
    },
    {
        id: 204,
        name_company: "Asociacion Civil Selva Amazonica",
        description: "Se dedica a la investigación clínica científica de programas de prevención del ITS y VIH-SIDA en Iquitos",
        email: "contacto@acsaperu.org",
        networks: "https://www.facebook.com/selvaamazonicaperu/?locale=es_LA",
        keywords: [
            "salud",
            "vih/sida",
            "prevención",
            "tratamiento",
            "investigación"
        ]
    },
    {
        id: 205,
        name_company: "Asociación Abrazos",
        description: "Trabaja en Cusco orientando a las personas sobre el autismo.",
        phones: [
            "+51984132633"
        ],
        networks: "https://www.facebook.com/p/Abrazos-Cusco-100064452292395/",
        keywords: [
            "inclusión",
            "autismo",
            "capacitación",
            "salud mental",
            "soporte",
            "comunidad"
        ]
    },
    {
        id: 206,
        name_company: "ONG Ñañachaykuna",
        description: "Preserva la identidad cultural de las mujeres artesanas y productoras rurales de Cusco",
        email: "nanachaykunaong@gmail.com",
        networks: "https://www.facebook.com/ongnanachaykuna",
        keywords: [
            "pueblos indígenas",
            "artesanía",
            "identidad"
        ]
    },
    {
        id: 207,
        name_company: "La Asociación Kusi Warma",
        description: "Trabaja por los derechos de niñas, niños y adolescentes en situación vulnerable, protegiendo su salud, educación y bienestar.",
        email: "kusiwarma@kusiwarma.org",
        networks: "https://web.facebook.com/asociacion.kusiwarma/?_rdc=1&_rdr#",
        keywords: [
            "niñez",
            "derechos",
            "género",
            "medio ambiente"
        ]
    },
    {
        id: 208,
        name_company: "Asociación Compromiso",
        description: "Impulsa el empoderamiento de mujeres y jóvenes en Loreto a través de préstamos y modelos de microfinanzas",
        email: "info@compromiso.org.pe",
        networks: "https://web.facebook.com/AsociacionCompromiso?_rdc=1&_rdr",
        keywords: [
            "género",
            "inclusión financiera",
            "empoderamiento"
        ]
    },
    {
        id: 209,
        name_company: "Asociación Cultural Angel del Folklore",
        description: "Promueve el arte y el deporte como forma de expresar la identidad cultural del Perú, con talleres para niños, jóvenes y adultos, en Arequipa",
        email: "info@afiperuinternacional.com",
        networks: "https://web.facebook.com/AsociacionAFIPERU",
        keywords: [
            "pueblos indígenas"
        ]
    },
    {
        id: 210,
        name_company: "Asociacion de Productores Agropecuarios el Gran Mirador  Coffee",
        description: "Trabaja con productores cafetaleros para mejorar su producción en San Ignacio, Cajamarca.",
        networks: "https://granmiradorcoffee.com.pe/",
        keywords: [
            "agricultura",
            "desarrollo rural",
            "café"
        ]
    },
    {
        id: 211,
        name_company: "La Asociación de Promoción y Bienestar Familiar – APROBIF",
        description: "Apoyan a niños y familias en situación vulnerable en Arequipa.",
        email: "contacto@aprobif.org.pe",
        networks: "https://web.facebook.com/APROBIF/?locale=es_LA&_rdc=1&_rdr#",
        keywords: [
            "niñez",
            "protección"
        ]
    },
    {
        id: 212,
        name_company: "Asociación Dignidad Perú",
        description: "Ayuda a que las personas en situación de cárcel puedan recuperar su libertad con dignidad como ciudadanos dignos y útiles a la sociedad",
        networks: "https://web.facebook.com/dignidadhumanaysolidaridad?_rdc=1&_rdr",
        keywords: [
            "empleo",
            "inclusión",
            "cárceles",
            "rehabilitación"
        ]
    },
    {
        id: 213,
        name_company: "Escalo-Thérapie",
        description: "Psicoterapeutas en Arequipa utilizan la escalada como herramienta terapéutica para mejorar la coordinación, el tono muscular, la atención, la motricidad fina y la autoestima de personas neurodivergentes.",
        email: "escalo.therapie@outlook.com",
        networks: "https://www.facebook.com/escaloterapia/?locale=es_LA",
        keywords: [
            "salud mental",
            "deporte",
            "terapia",
            "escalada"
        ]
    },
    {
        id: 214,
        name_company: "Asociación Familia Sana",
        description: "Promociona los derechos y la salud integral de las mujeres más vulnerables en Cajamarca.",
        phones: [
            "+51976770044"
        ],
        networks: "https://www.facebook.com/p/Familia-Sana-100064732296651/?locale=es_LA",
        keywords: [
            "género",
            "salud sexual"
        ]
    },
    {
        id: 215,
        name_company: "Asociación Los Andes de Cajamarca (ALAC)",
        description: "Impulsa mejoras en la educación, fortalecimiento de capacidades productivas y empresariales , y fomenta la inversión de recursos públicos y privados en infraestructura social, especialmente en el abastecimiento de agua de calidad.",
        email: "asociacion@losandes.org.pe",
        networks: "https://www.facebook.com/AndesdeCajamarca",
        keywords: [
            "agua",
            "emprendimiento",
            "desarrollo económico",
            "desarrollo rural",
            "capacitaciones",
            "gobernanza"
        ]
    },
    {
        id: 216,
        name_company: "Asociación para la Ciencia e Innovación Agraria para la Red Norte - AGRORED NORTE",
        description: "Impulsa innovación y conocimiento en la agricultura del norte del Perú.",
        email: "info@agroednorte.org.pe",
        networks: "https://www.facebook.com/p/Agrored-Norte-61555651453436/",
        keywords: [
            "agricultura",
            "innovación",
            "biodiversidad",
            "investigación",
            "divulgación"
        ]
    },
    {
        id: 217,
        name_company: "Talento sin Límites",
        description: "Fortalece educación y habilidades de niños y adolescentes en Piura.",
        networks: "https://www.facebook.com/profile.php?id=100076165123996",
        keywords: [
            "educación",
            "niñez"
        ]
    },
    {
        id: 218,
        name_company: "ASPAPPUKU",
        description: "Agrupa pescadores artesanales de paiche en Loreto.",
        email: "aspappuku@gmail.com",
        networks: "https://www.facebook.com/profile.php?id=100088274101119",
        keywords: [
            "pesca",
            "pueblos indígenas",
            "amazonía"
        ]
    },
    {
        id: 219,
        name_company: "Coalición para la Economía Verde",
        description: "Promueve la economía verde para beneficiar a personas y el ambiente en Perú.",
        email: "coalicion@economiaverde.pe",
        networks: "https://economiaverde.pe/",
        keywords: [
            "medio ambiente",
            "mypes",
            "emprendimientos"
        ]
    },
    {
        id: 220,
        name_company: "Ayudando Abrigando",
        description: "Ayuda a personas necesitadas en Lima y cuida el ambiente reciclando botellas plásticas.",
        email: "info@ayudandoabrigando.org",
        networks: "https://web.facebook.com/ayudandoabrigando/?_rdc=1&_rdr",
        keywords: [
            "medio ambiente",
            "reciclaje",
            "abrigo",
            "caridad"
        ]
    },
    {
        id: 221,
        name_company: "Bety Linares Fundacion",
        description: "Crea programas para mejorar la vida de adultos mayores en Arequipa.",
        email: "bettylinaresfundacion@hotmail.com",
        networks: "https://web.facebook.com/bettylinaresfundacion/?locale=es_LA&_rdc=1&_rdr#",
        keywords: [
            "adultos mayores",
            "caridad"
        ]
    },
    {
        id: 222,
        name_company: "Corazon de los Apus",
        description: "Apoya a niños en extrema pobreza para mejorar su vida en Cusco.",
        email: "apussonperu@gmail.com",
        networks: "https://web.facebook.com/corazondelosapusvolunteerwork/?locale=es_LA&_rdc=1&_rdr",
        keywords: [
            "niñez",
            "caridad",
            "turismo"
        ]
    },
    {
        id: 223,
        name_company: "Centro de Rescate Amazonico (CREA)",
        description: "Protege animales silvestres víctimas del tráfico ilegal en Loreto.",
        email: "luisjavi.vv@gmail.com",
        networks: "https://web.facebook.com/CentroRescateAmazonicoCREA?_rdc=1&_rdr#",
        keywords: [
            "medio ambiente",
            "conservación",
            "rescate animal",
            "biodiversidad"
        ]
    },
    {
        id: 224,
        name_company: "Centro Ideas",
        description: "Promueve desarrollo humano y agricultura ecológica en Piura y Cajamarca.",
        email: "ideas_piura@ideas.org.pe",
        networks: "https://web.facebook.com/centroideas.programapiura/?_rdc=1&_rdr",
        keywords: [
            "agricultura",
            "niñez",
            "adolescencia",
            "mujeres",
            "liderazgo",
            "género"
        ]
    },
    {
        id: 225,
        name_company: "Centro de Investigación y Promoción del Campesinado - Cipca",
        description: "Trabaja por el desarrollo sostenible y la igualdad en zonas rurales de Piura.",
        email: "cipca@cipca.pe ",
        networks: "https://web.facebook.com/profile.php?id=100064470048692",
        keywords: [
            "agricultura",
            "capacitación",
            "finanzas",
            "desarrollo rural",
            "género",
            "salud sexual",
            "diálogo"
        ]
    },
    {
        id: 226,
        name_company: "Code en mi Cole",
        description: "Enseña programación a escolares en Lima.",
        email: "contacto@codenmicole.com",
        networks: "https://web.facebook.com/Code.en.mi.Cole/?locale=es_LA&_rdc=1&_rdr#",
        keywords: [
            "educación",
            "programación",
            "capacitación"
        ]
    },
    {
        id: 227,
        name_company: "Compadre",
        description: "Apoya a pequeños agricultores con pago justo y acompañamiento en Lima.",
        email: "hola@compadre.pe",
        networks: "https://web.facebook.com/cafe.compadre/",
        keywords: [
            "agricultura",
            "justicia",
            "medio ambiente",
            "sostenibilidad"
        ]
    },
    {
        id: 228,
        name_company: "Consejo Regional de la Juventud - COREJU Cusco",
        description: "Espacio de consulta y propuestas políticas para jóvenes en Cusco.",
        email: "corejucusco@regioncusco.gob.pe",
        networks: "https://web.facebook.com/p/Consejo-Regional-de-la-Juventud-COREJU-Cusco-100079778203403/?_rdc=1&_rdr#",
        keywords: [
            "democracia",
            "juventud",
            "participación"
        ]
    },
    {
        id: 229,
        name_company: "Banco del Estudiante",
        description: "Fomenta educación e inclusión financiera en jóvenes usando reciclaje en Arequipa y Lima.",
        email: "informes@bancodelestudiante.org",
        networks: "https://web.facebook.com/bancodel.estudiante/?locale=es_LA&_rdc=1&_rdr#",
        keywords: [
            "educación",
            "finanzas",
            "emprendimiento",
            "medio ambiente",
            "niñez",
            "jóvenes"
        ]
    },
    {
        id: 230,
        name_company: "Fundación Crees por Manu",
        description: "Promueve conciencia ambiental con base científica en Madre de Dios y Cusco.",
        email: "network@crees-manu.org",
        networks: "https://www.facebook.com/creesfoundation",
        keywords: [
            "medio ambiente",
            "educación",
            "conservación",
            "investigación",
            "biodiversidad",
            "sostenibilidad"
        ]
    },
    {
        id: 231,
        name_company: "Descubriendo Juntxs",
        description: "Fortalece habilidades blandas y liderazgo de jóvenes en Perú.",
        email: "saddit.siuce@gmail.com",
        networks: "https://www.facebook.com/p/Descubriendo-Juntxs-100083237715538/",
        keywords: [
            "educación",
            "liderazgo",
            "habilidades blandas"
        ]
    },
    {
        id: 232,
        name_company: "Eagle Condor Humanitarian",
        description: "Amplía oportunidades para personas en pobreza en Perú.",
        email: "info@eagle-condor.org",
        networks: "https://www.facebook.com/EagleCondor/",
        keywords: [
            "capacitación",
            "emprendimiento",
            "infraestructura"
        ]
    },
    {
        id: 233,
        name_company: "EcoSwell",
        description: "Implementa proyectos sostenibles junto a comunidades en Piura.",
        email: "info@ecoswell.org",
        networks: "https://www.facebook.com/EcoSwell",
        keywords: [
            "turismo",
            "energía renovable",
            "agua",
            "conservación",
            "medio ambiente",
            "salud",
            "investigación"
        ]
    },
    {
        id: 234,
        name_company: "Fundación Ayuda en Acción",
        description: "Apoya a comunidades vulnerables para que niños y jóvenes accedan a educación y empleo digno.",
        phones: [
            "+51950426002"
        ],
        networks: "https://www.facebook.com/ayudaenaccion.peru/?_gl=1*hvhfld*_gcl_au*NjExNjE2MjIwLjE3MzcwNDc5NDQ.",
        keywords: [
            "niñez",
            "juventudes",
            "educación",
            "empleo",
            "emprendimiento",
            "capacitación",
            "gestión de riesgos",
            "ayuda humanitaria"
        ]
    },
    {
        id: 235,
        name_company: "Future of Fish",
        description: "Empodera comunidades pesqueras artesanales para que sean competitivas y sostenibles en Piura.",
        email: "communications@futureoffish.org",
        networks: "https://www.facebook.com/FutureofFishLATAM",
        keywords: [
            "pesca",
            "sostenibilidad",
            "innovación",
            "articulación"
        ]
    },
    {
        id: 236,
        name_company: "Global Shapers",
        description: "Jóvenes que  forman parte de una red global para liderar cambios en sus comunidades.",
        email: "limashapers@gmail.com",
        networks: "https://www.facebook.com/limahub/",
        keywords: [
            "liderazgo",
            "jóvenes",
            "innovación"
        ]
    },
    {
        id: 237,
        name_company: "Sin Tabues",
        description: "Promueve educación sexual integral en colegios de Lima.",
        email: "sintabues.org@gmail.com",
        networks: "https://www.facebook.com/sintabuesrs",
        keywords: [
            "salud sexual",
            "educación",
            "adolescentes"
        ]
    },
    {
        id: 238,
        name_company: "Hacedoras",
        description: "Impulsa que más mujeres participen en decisiones públicas en Latinoamérica.",
        networks: "https://www.hacedoras.org/",
        keywords: [
            "gestión pública",
            "empoderamiento",
            "género",
            "liderazgo"
        ]
    },
    {
        id: 239,
        name_company: "Heroínas Peruanas",
        description: "Promueve educación e igualdad mostrando ejemplos de mujeres peruanas emblemáticas.",
        email: "heroinasperuanas@gmail.com",
        networks: "https://www.facebook.com/HeroinasPeruanas/",
        keywords: [
            "género",
            "empoderamiento",
            "educación"
        ]
    },
    {
        id: 241,
        name_company: "Kaysay Centro de Formación Ambiental",
        description: "Enseña a cuidar la naturaleza usando saberes ancestrales y modernos en Cusco.",
        email: "info@pukllasunchis.org",
        networks: "https://www.facebook.com/profile.php?id=100083370180873",
        keywords: [
            "medio ambiente",
            "educación"
        ]
    },
    {
        id: 242,
        name_company: "Ludoteca Gotitas de Amor",
        description: "Enseña valores a niños a través de juegos en Piura.",
        email: "ludotecagotitasdeamor@gmail.com",
        networks: "https://www.facebook.com/GotitasdeAmor.Ludoteca/?locale=es_LA",
        keywords: [
            "niñez",
            "educación",
            "caridad"
        ]
    },
    {
        id: 243,
        name_company: "Mujeres en STEAM",
        description: "Impulsa que más mujeres y niñas participen en ciencia, tecnología, arte y matemáticas en Perú.",
        email: "mujeresensteam@gmail.com",
        networks: "https://www.facebook.com/MujeresEnSTEAM/",
        keywords: [
            "género",
            "educación",
            "ciencia",
            "tecnología",
            "empoderamiento"
        ]
    },
    {
        id: 244,
        name_company: "ÑAÑAYKUNA",
        description: "Promueve igualdad de género e identidad cultural en Cusco.",
        email: "nanaykunacusco@gmail.com",
        networks: "https://www.facebook.com/Nanaykuna/",
        keywords: [
            "género",
            "capacitación",
            "salud sexual",
            "salud mental",
            "violencia"
        ]
    },
    {
        id: 245,
        name_company: "ONG PACHAMAMA YAKU",
        description: "Trabaja en proyectos de reforestación y producción agrícola que buscan generar impacto real en comunidades rurales de Piura.",
        email: "pachamamayaku.ong@gmail.com",
        networks: "https://www.facebook.com/PachamamaYaku.18",
        keywords: [
            "medio ambiente",
            "conservación",
            "reforestación",
            "árboles",
            "agricultura",
            "desarrollo rural"
        ]
    },
    {
        id: 246,
        name_company: "Plastic Corporation",
        description: "Convierte residuos plásticos en muebles y estructuras en Sullana.",
        email: "plasticcorporationsac@gmail.com",
        networks: "https://www.facebook.com/p/Plastic-Corporation-100089185130766/",
        keywords: [
            "medio ambiente",
            "reciclaje",
            "infraestructura"
        ]
    },
    {
        id: 247,
        name_company: "PROA",
        description: "Conecta voluntarios y donantes con organizaciones que necesitan ayuda en Lima.",
        email: "info@proa.pe",
        networks: "https://www.facebook.com/proa.pe",
        keywords: [
            "articulación",
            "ayuda",
            "voluntarios",
            "donaciones"
        ]
    },
    {
        id: 248,
        name_company: "Canchiqmy Kany",
        description: "Promueve educación inclusiva y mejor aprendizaje en Cañete.",
        phones: [
            "+51964600368"
        ],
        networks: "https://www.facebook.com/Canchiqmy/?profile_tab_item_selected=mentions&_rdr",
        keywords: [
            "niñez",
            "caridad"
        ]
    },
    {
        id: 249,
        name_company: "Sonrisas Solidarias",
        description: "Busca mejorar la salud bucal en zonas rurales de Cusco.",
        email: "sonrisassolidariascusco@gmail.com",
        networks: "https://www.facebook.com/sonrisassolidariascusco/?locale=es_LA",
        keywords: [
            "salud",
            "salud bucal"
        ]
    },
    {
        id: 250,
        name_company: "Suyay",
        description: "Trabaja por una Amazonía más justa. Lleva educación y salud a niños y adultos en Loreto, promoviendo igualdad, desarrollo personal y compromiso ciudadano.",
        email: "info@suyay.es",
        networks: "https://www.facebook.com/suyay.ongd/?locale=es_LA",
        keywords: [
            "educación",
            "género",
            "capacitación",
            "salud",
            "infraestructura",
            "derechos humanos"
        ]
    },
    {
        id: 251,
        name_company: "Triangulo Naranja",
        description: "Une familias y profesionales para mejorar la vida de personas con TDAH en Piura.",
        email: "hola@triangulonaranja.org",
        networks: "https://www.facebook.com/unidosporeltdah/?locale=es_LA",
        keywords: [
            "salud mental",
            "comunidad",
            "capacitación",
            "educación"
        ]
    },
    {
        id: 252,
        name_company: "Un Millón de Niños Lectores",
        description: "Promueve la lectura en niños y niñas construyendo bibliotecas en Perú.",
        email: "bibliotecas@millondeninoslectores.org.",
        networks: "https://web.facebook.com/UNMILLONDENINOSLECTORES/#",
        keywords: [
            "niñez",
            "educación",
            "lectura",
            "ciudadanía",
            "bibliotecas",
            "alfabetización"
        ]
    },
    {
        id: 253,
        name_company: "Lima como vamos",
        description: "Fomenta ciudadanía activa y uso de datos para mejorar la vida urbana en Lima.",
        email: "observatorio@limacomovamos.org",
        networks: "https://web.facebook.com/limacomovamos?_rdc=1&_rdr#",
        keywords: [
            "urbanismo",
            "ciudad",
            "espacios públicos",
            "investigación"
        ]
    },
    {
        id: 254,
        name_company: "Fundación Peruana de Cancer",
        description: "Apoya a pacientes con cáncer que más lo necesitan en Perú.",
        email: "fundacion@fpc.pe",
        networks: "https://web.facebook.com/FundacionPeruanaDeCancer/?_rdc=1&_rdr#",
        keywords: [
            "salud",
            "cáncer",
            "prevención"
        ]
    },
    {
        id: 255,
        name_company: "Juguete Pendiente",
        description: "Lleva soluciones sostenibles a comunidades vulnerables en Perú, a través de ayuda humanitaria, rehabilitación de espacios y desarrollo de capacidades.",
        email: "contacto@juguetependiente.org",
        networks: "https://web.facebook.com/JuguetePendiente/",
        keywords: [
            "ayuda humanitaria",
            "niñez",
            "capacitación",
            "medio ambiente",
            "espacios públicos",
            "comunidad"
        ]
    },
    {
        id: 256,
        name_company: "Kantaya",
        description: "Mejora la vida de niños vulnerables con programas educativos en Callao, Áncash, Piura, Lima, Cusco, Huancavelica.",
        email: "donacion@kantayaperu.com",
        networks: "https://web.facebook.com/kantayaperu?_rdc=1&_rdr#",
        keywords: [
            "niñez",
            "educación",
            "capacitación",
            "talleres"
        ]
    },
    {
        id: 257,
        name_company: "Caifai Amazonas",
        description: "Promueve igualdad y bienestar de la comunidad LGTB+ en Chachapoyas.",
        email: "organizacionlgbtcaifai@gmail.com",
        networks: "https://web.facebook.com/caifaiamazonas/?locale=es_ES&_rdc=1&_rdr#",
        keywords: [
            "lgbtiq+",
            "derechos",
            "activismo"
        ]
    },
    {
        id: 258,
        name_company: "Maricas Perú",
        description: "Visibiliza y apoya a hombres gays y bisexuales en Lima a través de la investigación y sistematización de proyectos.",
        email: "maricasperu@gmail.com",
        networks: "https://web.facebook.com/maricasperu/?_rdc=1&_rdr#",
        keywords: [
            "lgbtiq+",
            "investigación",
            "academia"
        ]
    },
    {
        id: 259,
        name_company: "Amantani",
        description: "Promueve inclusión y oportunidades para jóvenes rurales en Cusco y Loreto, a través de oportunidades en educación, empleo y comercio justo.",
        email: "info@amantani.org.pe",
        networks: "https://web.facebook.com/amantaniuk/?_rdc=1&_rdr#",
        keywords: [
            "pueblos indígenas",
            "artesanía",
            "educación",
            "jóvenes",
            "adolescentes",
            "empleabilidad",
            "comercio justo",
            "desarrollo rural"
        ]
    },
    {
        id: 260,
        name_company: "Misión Huascarán",
        description: "Crea oportunidades educativas y económicas respetando la cultura en Ancash.",
        email: "comunicaciones@misionesrurales.org.pe",
        networks: "https://web.facebook.com/misionhuascaran/?_rdc=1&_rdr#",
        keywords: [
            "educación",
            "salud",
            "niñez",
            "desarrollo rural",
            "capacitación",
            "agricultura",
            "infraestructura",
            "vivienda"
        ]
    },
    {
        id: 261,
        name_company: "Viernes por el Futuro Perú",
        description: "Moviliza jóvenes contra la crisis climática en Perú.",
        email: "fridaysforfutureperu@gmail.com",
        networks: "https://web.facebook.com/fridaysforfutureperu/?locale=es_LA&_rdc=1&_rdr#",
        keywords: [
            "medio ambiente",
            "activismo",
            "ciudadanía"
        ]
    },
    {
        id: 262,
        name_company: "Colectivo PAS",
        description: "Difunde información sobre minería ilegal y delitos asociados en Perú.",
        networks: "https://web.facebook.com/queremospas.pe/?_rdc=1&_rdr#",
        keywords: [
            "medio ambiente",
            "activismo",
            "minería"
        ]
    },
    {
        id: 263,
        name_company: "It Gets Better Perú",
        description: "Apoya a jóvenes LGBTQ+ con recursos educativos y apoyo psicológico en Lima.",
        email: "contacto@itgetsbetterperu.org",
        networks: "https://web.facebook.com/itgetsbetterperu/?_rdc=1&_rdr#",
        keywords: [
            "lgtbiq+",
            "jóvenes",
            "salud mental",
            "educación",
            "capacitaciones",
            "salud sexual"
        ]
    },
    {
        id: 264,
        name_company: "Atmosphera Central",
        description: "Impulsa proyectos sostenibles para el desarrollo en Arequipa.",
        email: "https://www.instagram.com/atmosphera.central/",
        networks: "Impulsa proyectos sostenibles para el desarrollo en Arequipa.",
        keywords: [
            "medio ambiente",
            "talleres",
            "limpieza",
            "educación",
            "comunidad",
            "liderazgo"
        ]
    },
    {
        id: 265,
        name_company: "Creas Más",
        description: "Apoya a personas vulnerables con oportunidades y productos esenciales en Perú.",
        networks: "https://www.facebook.com/Creamasperu/?locale=es_LA",
        keywords: [
            "educación",
            "niñez",
            "adultos mayores"
        ]
    },
    {
        id: 266,
        name_company: "Red de Estudios para el Desarrollo",
        description: "Conecta Estado, academia y ciudadanía para impulsar el desarrollo en Perú.",
        email: "contacto@redesarrollo.pe",
        networks: "https://www.facebook.com/redesarrollope/",
        keywords: [
            "gestión pública",
            "investigación"
        ]
    },
    {
        id: 268,
        name_company: "Actúa.pe",
        description: "Plataforma que conecta y apoya acciones ciudadanas contra la desigualdad en Perú.",
        email: "actua.pe@gmail.com",
        networks: "https://www.facebook.com/ActuaPe1",
        keywords: [
            "ciudadanía",
            "activismo",
            "diálogo",
            "divulgación",
            "jóvenes"
        ]
    },
    {
        id: 269,
        name_company: "PeruTeQuiero",
        description: "Fortalece la sociedad civil para un Perú más solidario e inclusivo.",
        email: "secretariaejecutivaptq@mosaicolab.org",
        networks: "https://www.facebook.com/Perutequiero.pe",
        keywords: [
            "democracia",
            "activismo",
            "salud mental",
            "educación",
            "liderazgo",
            "capacitación"
        ]
    },
    {
        id: 270,
        name_company: "Recambio",
        description: "Busca renovar la política y fortalecer la democracia en Perú.",
        email: "recambioproyecto@gmail.com",
        networks: "https://www.facebook.com/RecambioPe/",
        keywords: [
            "democracia",
            "ciudadanía",
            "política",
            "capacitación"
        ]
    },
    {
        id: 271,
        name_company: "Konrad-Adenauer-Stiftung",
        description: "Fortalece la democracia y las instituciones en Lima.",
        email: "kasperu@kas.de",
        networks: "https://www.facebook.com/kasenperu",
        keywords: [
            "democracia",
            "educación",
            "política",
            "gobernanza"
        ]
    },
    {
        id: 272,
        name_company: "Niños del Arco Iris",
        description: "Da educación, nutrición y salud a niños vulnerables en Cusco.",
        email: "info@ninosdelarcoiris.edu.pe",
        networks: "https://www.facebook.com/fundacionninosdelarcoiriscusco/",
        keywords: [
            "educación",
            "niñez",
            "nutrición",
            "salud"
        ]
    },
    {
        id: 273,
        name_company: "Diálogo Político",
        description: "Espacio para el diálogo democrático entre líderes políticos en Latinoamérica.",
        email: "info@dialogopolitico.org",
        networks: "https://www.facebook.com/dialogopoliticolatinoamerica",
        keywords: [
            "periodismo",
            "análisis político"
        ]
    },
    {
        id: 274,
        name_company: "Jovenes Peruanos Frente al Cambio Climático",
        description: "Une a jóvenes para buscar soluciones frente al cambio climático en Perú.",
        email: "jpcc2021@gmail.com",
        networks: "https://www.facebook.com/jpccperu",
        keywords: [
            "medio ambiente"
        ]
    },
    {
        id: 275,
        name_company: "Global Changemakers",
        description: "Impulsa a jóvenes a crear soluciones a los grandes retos del país.",
        email: "info@global-changemakers.net",
        networks: "https://www.facebook.com/WeAreGCM/?_rdc=1&_rdr#",
        keywords: [
            "liderazgo"
        ]
    },
    {
        id: 276,
        name_company: "Conservación Internacional (CI)",
        description: "Protege los ecosistemas esenciales en la Amazonía.",
        email: "contactoPE@conservation.org",
        networks: "https://www.facebook.com/ciperu",
        keywords: [
            "medio ambiente"
        ]
    },
    {
        id: 277,
        name_company: "Xapiri Ground",
        description: "Difunde el arte y cultura viva de la Amazonía en Cusco.",
        email: "info@xapiriground.org",
        networks: "https://www.facebook.com/xapiriground?_rdc=1&_rdr#",
        keywords: [
            "arte y cultura"
        ]
    },
    {
        id: 278,
        name_company: "Convoca",
        description: "Hace periodismo de investigación e innovación para generar cambios en Lima.",
        email: "convocaredes@gmail.com",
        networks: "https://www.facebook.com/Convoca/",
        keywords: [
            "periodismo"
        ]
    },
    {
        id: 279,
        name_company: "La Buena Pesca",
        description: "Promueve pesca y consumo responsable en Lima.",
        email: "labuenapesca@futureoffish.org",
        networks: "https://www.facebook.com/labuenapescaperu/",
        keywords: [
            "desarrollo económico"
        ]
    },
    {
        id: 280,
        name_company: "Hazla por tu Ola",
        description: "Busca proteger las olas y espacios marinos para el deporte en Perú.",
        email: "conservamos@spda.org.pe",
        networks: "https://www.facebook.com/conservamospornaturaleza",
        keywords: [
            "medio ambiente"
        ]
    },
    {
        id: 281,
        name_company: "Ania ORG",
        description: "Ayuda a jóvenes a conectar con la naturaleza y ser agentes de cambio en Perú.",
        email: "info@aniaorg.pe",
        networks: "https://www.facebook.com/Aniaorg/",
        keywords: [
            "medio ambiente"
        ]
    },
    {
        id: 282,
        name_company: "On Think Tanks",
        description: "Plataforma global que impulsa el cambio social basado en evidencia",
        email: "info@onthinktanks.org",
        networks: "https://www.facebook.com/onthinktanks",
        keywords: [
            "investigación"
        ]
    },
    {
        id: 283,
        name_company: "AGUAPAN, Guardianes de la Papa",
        description: "Protege y promueve la papa nativa del Perú en Lima y Trujillo.",
        email: "guardianesdelapapa@gmail.com",
        networks: "https://www.facebook.com/miski.papa",
        keywords: [
            "desarrollo económico"
        ]
    },
    {
        id: 284,
        name_company: "Amazónicos por la Amazonía (AMPA)",
        description: "Conserva el patrimonio natural y cultural y mejora la vida en comunidades de la Amazonía andina.",
        email: "ampa@ampaperu.info",
        networks: "https://www.facebook.com/AMPAPERU/?locale=es_LA",
        keywords: [
            "medio ambiente"
        ]
    },
    {
        id: 285,
        name_company: "Ciudad Saludable",
        description: "Mejora la calidad de vida con sistemas innovadores de gestión ambiental en San Martín y Lima.",
        phones: [
            "5114466323"
        ],
        networks: "https://www.facebook.com/ciudadsaludable.org/about_details?locale=es_LA",
        keywords: [
            "urbanismo",
            "ciudad",
            "medio ambiente",
            "innovación"
        ]
    },
    {
        id: 286,
        name_company: "Los Tambopatas",
        description: "Vigilan y protegen la Reserva Nacional de Tambopata contra la minería ilegal.",
        email: "patronato.tambopata@gmail.com",
        networks: "https://www.facebook.com/SomosTambopata/",
        keywords: [
            "medio ambiente",
            "minería"
        ]
    },
    {
        id: 287,
        name_company: "AIDER Perú",
        description: "Impulsa conservación ambiental y desarrollo sostenible en comunidades nativas de Perú.",
        email: "comunicaciones@aider.com.pe",
        networks: "https://www.facebook.com/aiderperu",
        keywords: [
            "medio ambiente",
            "pueblos indígenas",
            "capacitaciones",
            "cultivos alternativos",
            "bosques"
        ]
    },
    {
        id: 288,
        name_company: "Faiths for Forests",
        description: "Une religiones para proteger los bosques tropicales en la Amazonía.",
        email: "peru@interfaithrainforest.org",
        networks: "https://www.facebook.com/faiths4forests",
        keywords: [
            "medio ambiente"
        ]
    },
    {
        id: 289,
        name_company: "Celebración de las Áreas Protegidas y Conservadas LAC",
        description: "Fomenta la conservación de áreas protegidas en Latinoamérica.",
        email: "info@celebracionareasprotegidas.org",
        networks: "https://www.facebook.com/celebracionapclac/",
        keywords: [
            "medio ambiente"
        ]
    },
    {
        id: 290,
        name_company: "Red de Conservación Voluntaria de Amazonas",
        description: "Reúne iniciativas para conservar el ambiente en Amazonas.",
        email: "info@www.redama.org",
        networks: "https://www.facebook.com/red.ama.amazonas",
        keywords: [
            "medio ambiente",
            "áreas protegidas",
            "comunidades"
        ]
    },
    {
        id: 291,
        name_company: "Recicla Latam Perú",
        description: "Promueve reciclaje formal y economía circular en Perú, Colombia y Ecuador.",
        networks: "https://www.facebook.com/reciclalatamperu",
        keywords: [
            "medio ambiente",
            "reciclaje",
            "economía circular",
            "plástico",
            "botellas"
        ]
    },
    {
        id: 292,
        name_company: "Earth Rights Intl",
        description: "Apoya a comunidades que defienden el ambiente y derechos humanos en Latinoamérica.",
        email: "infoperu@earthrights.org.",
        networks: "https://www.facebook.com/EarthRightsIntl",
        keywords: [
            "medio ambiente",
            "defensa legal",
            "pueblos indígenas"
        ]
    },
    {
        id: 293,
        name_company: "Pro Delphinus Perú",
        description: "Investiga y protege especies marinas en peligro en la costa peruana y Ucayali.",
        email: "prodelphinus@gmail.com",
        networks: "https://www.facebook.com/ProDelphinus",
        keywords: [
            "medio ambiente",
            "investigación",
            "divulgación",
            "educación",
            "delfines",
            "ballenas",
            "tortugas",
            "fauna marina",
            "fauna de río"
        ]
    },
    {
        id: 294,
        name_company: "Saving The Amazon",
        description: "Planta árboles con comunidades indígenas para combatir la crisis climática en la Amazonía y otros ecosistemas",
        email: "wvalentina@savingtheamazon.org",
        networks: "https://www.facebook.com/fundacionsavingtheamazon/",
        keywords: [
            "medio ambiente",
            "árboles",
            "manglares",
            "bosques"
        ]
    },
    {
        id: 295,
        name_company: "Hazla por tu Playa",
        description: "Limpia playas y ecosistemas acuáticos en todo el Perú.",
        email: "hazlaportuplaya@gmail.com",
        networks: "https://www.facebook.com/HAZlaPlaya/?locale=es_LA",
        keywords: [
            "medio ambiente",
            "limpieza",
            "voluntariado"
        ]
    },
    {
        id: 296,
        name_company: "Ecoladrillos Perú",
        description: "Enseña a aprovechar residuos y crear ecoladrillos en Lima.",
        email: "ecoladrillos.peru@gmail.com",
        networks: "https://www.facebook.com/ecoladrillerosperu",
        keywords: [
            "medio ambiente",
            "plástico",
            "reciclaje",
            "construcción"
        ]
    },
    {
        id: 297,
        name_company: "Cool Earth",
        description: "Apoya a comunidades indígenas para proteger bosques tropicales.",
        email: "info@coolearth.org",
        networks: "https://www.facebook.com/coolearth",
        keywords: [
            "pueblos indígenas",
            "medio ambiente",
            "bosques"
        ]
    },
    {
        id: 298,
        name_company: "Comunidad en Marcha",
        description: "Promueve el desarrollo integral y solidario en Arequipa.",
        email: "info@comunidadenmarcha.org",
        networks: "https://www.facebook.com/ComunidadMarcha",
        keywords: [
            "desarrollo económico",
            "calidad de vida",
            "investigación"
        ]
    },
    {
        id: 299,
        name_company: "Asociación Civil Japiqay, Memoria y Ciudadanía",
        description: "Promueve memoria y verdad para luchar contra la corrupción en Perú.",
        email: "contacto@japiqay.org",
        networks: "https://www.facebook.com/JapiqayPe/",
        keywords: [
            "derechos humanos",
            "corrupción",
            "activismo"
        ]
    },
    {
        id: 300,
        name_company: "Asociación de Familias por la Diversidad Sexual Perú",
        description: "Apoya a familias con miembros LGBTIQ+ en Perú.",
        email: "asociacionfdsperu@gmail.com",
        networks: "https://www.facebook.com/afdsperu/",
        keywords: [
            "lgbtiq+",
            "derechos",
            "soporte",
            "familias"
        ]
    },
    {
        id: 301,
        name_company: "Asociacion Amar C",
        description: "Empodera a mujeres y brinda información sobre salud sexual en Amazonas.",
        email: "asociacionamarc@gmail.com",
        networks: "http://web.facebook.com/ASOCIACIONAMARC/?_rdc=1&_rdr#",
        keywords: [
            "salud sexual",
            "salud",
            "mujeres",
            "educación",
            "activismo",
            "violencia"
        ]
    },
    {
        id: 302,
        name_company: "Asociacion Humanidad Libre",
        description: "Trabaja por el empoderamiento de mujeres y la igualdad en Arequipa.",
        email: "ashumanidadlibre@yahoo.es",
        networks: "https://web.facebook.com/AsociacionHumanidadLibre/about_contact_and_basic_info?locale=es_LA",
        keywords: [
            "género",
            "activismo",
            "feminismo",
            "violencia",
            "prevención",
            "investigación"
        ]
    },
    {
        id: 303,
        name_company: "Capitalismo Consciente Perú",
        description: "Impulsa empresas conscientes para mejorar la sociedad en Perú.",
        email: "movimiento@capitalismoconsciente.pe",
        networks: "https://web.facebook.com/CapitalismoConscientePeru",
        keywords: [
            "empresas",
            "democracia",
            "cooperación",
            "liderazgo"
        ]
    },
    {
        id: 304,
        name_company: "Centro de Desarrollo de la Mujer Negra Peruana CEDEMUNEP",
        description: "Defiende derechos y mejora la vida de mujeres afroperuanas en Lima.",
        email: "cedemunep@hotmail.com",
        networks: "https://www.facebook.com/centro.cedemunep/?locale=es_LA&_rdc=2&_rdr#",
        keywords: [
            "soporte legal",
            "salud mental",
            "capacitaciones",
            "liderazgo",
            "afroperuanos",
            "derechos humanos",
            "igualdad"
        ]
    },
    {
        id: 305,
        name_company: "CiudadanosTodos",
        description: "Forma ciudadanos responsables y conscientes de sus derechos en Lima.",
        email: "ciudadtodos.boletin@gmail.com",
        networks: "https://www.facebook.com/profile.php?%20id=61561812667195&mibextid=LQQJ4d&rdid=p1aepuqK7yr2Rvr8&share_url=https%20%3A%2F%2Fwww.facebook.com%2Fshare%2FQnYASe9Msb1qHgb3%2F%3Fmibextid%20%3DLQQJ4d",
        keywords: [
            "democracia"
        ]
    },
    {
        id: 306,
        name_company: "Foro Regional por los Derechos Sexuales y Reproductivos FORDES Arequipa",
        description: "Promueve la salud mental y combate el estigma en todo el país.",
        email: "fordesarequipa@gmail.com",
        networks: "https://www.facebook.com/FORDES.AREQUIPA",
        keywords: [
            "salud mental",
            "salud sexual",
            "capacitaciones",
            "adolescentes",
            "incidencias",
            "investigación"
        ]
    },
    {
        id: 307,
        name_company: "Fundación Peruanos Power",
        description: "Defiende derechos sexuales y reproductivos en Arequipa.",
        email: "informes@peruanospower.org",
        networks: "https://www.facebook.com/share/15YUifbB8R/?mibextid=wwXIfr",
        keywords: [
            "lectura",
            "libros",
            "capacidades",
            "niñez"
        ]
    },
    {
        id: 308,
        name_company: "DEMUS - Estudio para la defensa de los derechos de la mujer",
        description: "Da oportunidades y recursos para que niños y jóvenes desarrollen su potencial en Lima y Junín.",
        phones: [
            "5114638515"
        ],
        networks: "https://www.facebook.com/DemusPeru",
        keywords: [
            "género",
            "feminismo",
            "lgtbiq+",
            "derechos",
            "inclusión",
            "violencia."
        ]
    },
    {
        id: 309,
        name_company: "Mujeres Solidarias de la Región Lambayeque",
        description: "Defiende derechos sexuales y reproductivos de mujeres en Lima.",
        networks: "https://web.facebook.com/profile.php?id=100006692740086&locale=es_LA",
        keywords: [
            "salud sexual",
            "ginecología"
        ]
    },
    {
        id: 310,
        name_company: "Plataforma ciudadana para la formulación de políticas públicas en Salud y derechos Humanos",
        description: "Promueve la prevención del cáncer en Lambayeque.",
        email: "info@saludyderechos.org",
        phones: [
            "977155642"
        ],
        networks: "https://www.facebook.com/Plataforma-Salud-y-Derechos-104383344644388/",
        keywords: [
            "salud",
            "diálogo",
            "capacitación",
            "políticas públicas"
        ]
    },
    {
        id: 311,
        name_company: "Social Good Peru",
        description: "Busca mejorar los servicios de salud y superar la crisis sanitaria en Perú.",
        email: "socialgoodperu@gmail.com",
        networks: "https://web.facebook.com/SocialGoodPeru/?_rdc=1&_rdr#",
        keywords: [
            "medio ambiente",
            "emprendimiento",
            "jóvenes"
        ]
    },
    {
        id: 312,
        name_company: "Sense Internacional Peru",
        description: "Jóvenes que promueven el desarrollo sostenible y el cuidado del ambiente en Lima.",
        email: "sense@senseintperu.org",
        networks: "https://www.senseintperu.org/contactanos/#",
        keywords: [
            "inclusión y discapacidad",
            "sordoceguera",
            "capacitación",
            "rehabilitación",
            "incidencia"
        ]
    },
    {
        id: 313,
        name_company: "ONGD asociación equilibrio",
        description: "Apoya a personas con sordoceguera y discapacidad múltiple en todo el país.",
        email: "contacto@equilibrio.org.pe",
        networks: "https://www.facebook.com/113727953664448?referrer=whatsapp",
        keywords: [
            "salud mental",
            "comunidad",
            "talleres",
            "familias"
        ]
    },
    {
        id: 314,
        name_company: "Women CEO Peru",
        description: "Promueve el liderazgo de mujeres en espacios de decisión en Perú.",
        email: "informes@womenceoperu.org",
        networks: "https://www.facebook.com/womenceoperu",
        keywords: [
            "género",
            "mujeres",
            "empoderamiento",
            "liderazgo",
            "capacitación"
        ]
    },
    {
        id: 319,
        name_company: "Caene",
        description: "Ofrece consultorías y formación en economía y empresas en Lima.",
        email: "informes@caene.org.pe",
        networks: "https://www.facebook.com/caene.educacion",
        keywords: [
            "capacitación",
            "empresas",
            "jóvenes"
        ]
    },
    {
        id: 320,
        name_company: "Piensa.pe",
        description: "Difunde información clara y basada en evidencia sobre temas importantes en Perú.",
        email: "cm@piensa.pe",
        networks: "https://www.facebook.com/profile.php?id=100064544362300",
        keywords: [
            "democracia",
            "libertad",
            "medio de comunicación"
        ]
    },
    {
        id: 321,
        name_company: "Asociación de Contribuyentes Perú",
        description: "Defiende el derecho a servicios estatales de calidad para los contribuyentes en Perú.",
        email: "info@tucontribuyes.org",
        networks: "https://www.facebook.com/contribuyentesperuanos/?locale=es_LA",
        keywords: [
            "derechos",
            "contribuyentes",
            "gestión pública"
        ]
    },
    {
        id: 322,
        name_company: "EsLibertad",
        description: "Apoya a estudiantes que promueven la libertad en Perú.",
        email: "azanabria@eslibertad.org",
        networks: "https://www.facebook.com/EsLibertadPeru/",
        keywords: [
            "democracia",
            "libertad",
            "capacitaciones",
            "liderazgo"
        ]
    },
    {
        id: 323,
        name_company: "IPL Libertad",
        description: "Propone ideas para el desarrollo del país basadas en la libertad y la democracia en Lima.",
        email: "ipl@iplperu.org",
        networks: "https://www.facebook.com/ipllibertad/",
        keywords: [
            "democracia",
            "libertad",
            "ciudadanía",
            "capacitaciones",
            "liderazgo",
            "debates"
        ]
    },
    {
        id: 325,
        name_company: "Centro para el desarrollo de la familia",
        description: "Fortalece e integra familias con programas y capacitaciones en Lima.",
        email: "informes@centrofamilia.org",
        networks: "https://www.facebook.com/centrofamiliaperu",
        keywords: [
            "familia",
            "capacitación",
            "biblia"
        ]
    },
    {
        id: 326,
        name_company: "Voluntarios.pe",
        description: "Articula esfuerzos de la sociedad civil, sector privado, academia y Estado, diseñando soluciones sostenibles junto a las comunidades.",
        networks: "https://www.voluntarios.pe/",
        keywords: [
            "ayuda humanitaria",
            "voluntariado",
            "conexión"
        ]
    },
    {
        id: 327,
        name_company: "Urban Action Foundation e.V.",
        description: "Impulsa el desarrollo integral y participativo de ciudades informales en América Latina para mejorar la calidad de vida urbana.",
        networks: "https://urbanactionfoundation.com/",
        keywords: [
            "urbanismo",
            "escuelas",
            "arquitectura",
            "investigación"
        ]
    },
    {
        id: 328,
        name_company: "WIM - Women in Mining",
        description: "Impulsan a la mujer en la minería peruana en Cajamarca",
        email: "https://www.facebook.com/WiMPeru/",
        networks: "https://www.facebook.com/WiMPeru/",
        keywords: [
            "género",
            "liderazgo",
            "minería"
        ]
    },
    {
        id: 329,
        name_company: "Openmind",
        description: "Se dedican a la investigación, proyección social y difusión de contenido en Cajamarca",
        email: "https://www.facebook.com/openmindperuof/",
        networks: "https://www.facebook.com/openmindperuof/",
        keywords: [
            "liderazgo",
            "investigación",
            "academia",
            "proyección social"
        ]
    },
    {
        id: 330,
        name_company: "Acer Montaña",
        description: "Defensa y preservación de la biodiversidad, ecosistema y ambiente y difusión de la cultura y lugares ecoturísticos de la provincia de Chota, Cajamarca",
        email: "https://www.facebook.com/acermontania/?locale=es_LA",
        networks: "https://www.facebook.com/acermontania/?locale=es_LA",
        keywords: [
            "turismo",
            "diversidad",
            "cultura",
            "medio ambiente"
        ]
    },
    {
        id: 331,
        name_company: "Asimet UPN Cajamarca",
        description: "Apoyan a los jóvenes en obtener más habilidades para el trabajo en Cajamarca",
        email: "https://www.facebook.com/p/Asimet-UPN-100063703884626/",
        networks: "https://www.facebook.com/p/Asimet-UPN-100063703884626/",
        keywords: [
            "capacitación",
            "empleo",
            "jóvenes"
        ]
    },
    {
        id: 332,
        name_company: "Young Peruvian Leaders",
        description: "Impulsan el liderazgo, el emprendimiento y la participación activa de la juventud peruana como agentes de cambio en sus comunidades. Trabajan en Cajamarca, Lima, La Libertad, Cusco, Arequipa y Ancash.",
        email: "https://www.facebook.com/YPLPeru2030/?ref=_xav_ig_profile_page_web#",
        networks: "https://www.facebook.com/YPLPeru2030/?ref=_xav_ig_profile_page_web#",
        keywords: [
            "liderazgo",
            "jóvenes",
            "capacitación"
        ]
    },
    {
        id: 333,
        name_company: "Resurgir Verde",
        description: "Buscan contribuir al desarrollo sostenible a través de la educación ambiental, la participación juvenil y la acción colectiva en Cajamarca",
        email: "https://www.facebook.com/profile.php?id=100093592653386",
        networks: "https://www.facebook.com/profile.php?id=100093592653386",
        keywords: [
            "medio ambiente",
            "jóvenes",
            "educación",
            "activismo"
        ]
    },
    {
        id: 334,
        name_company: "Red Interquorum",
        description: "Trabajan por el fortalecimiento de la democracia, los derechos humanos y la sostenibilidad ambiental, sin fines de lucro, ni filiación partidaria ni religiosa.",
        email: "https://www.facebook.com/RedInterquorum",
        networks: "https://www.facebook.com/RedInterquorum",
        keywords: [
            "democracia",
            "activismo",
            "jóvenes"
        ]
    },
    {
        id: 335,
        name_company: "Sinergia: consciencia y bienestar",
        description: "Busca generar consciencia ante las desigualdades de género en Cajamarca. Así como crear redes de apoyo donde la historia de cada persona sea la inspiración y aprendizaje de otras.",
        email: "https://www.instagram.com/sinergia_conscienciaybienestar/",
        networks: "https://www.instagram.com/sinergia_conscienciaybienestar/",
        keywords: [
            "equidad",
            "género",
            "arte",
            "cultura",
            "emprendimiento"
        ]
    }
];
const photos_cabildos = [
    {
        id: 1,
        url: 'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/gallery/gallery_1.jpg'
    },
    {
        id: 2,
        url: 'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/gallery/gallery_2.jpg'
    },
    {
        id: 3,
        url: 'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/gallery/gallery_3.jpg'
    },
    {
        id: 4,
        url: 'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/gallery/gallery_4.jpg'
    },
    {
        id: 5,
        url: 'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/gallery/gallery_5.jpg'
    },
    {
        id: 6,
        url: 'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/gallery/gallery_6.jpg'
    },
    {
        id: 7,
        url: 'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/gallery/gallery_7.jpg'
    },
    {
        id: 8,
        url: 'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/gallery/gallery_8.jpg'
    },
    {
        id: 9,
        url: 'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/gallery/gallery_9.jpg'
    },
    {
        id: 10,
        url: 'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/gallery/gallery_10.jpg'
    },
    {
        id: 11,
        url: 'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/gallery/gallery_11.jpg'
    },
    {
        id: 12,
        url: 'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/gallery/gallery_12.jpg'
    },
    {
        id: 13,
        url: 'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/gallery/gallery_13.jpg'
    },
    {
        id: 14,
        url: 'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/gallery/gallery_14.jpg'
    },
    {
        id: 15,
        url: 'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/gallery/gallery_15.jpg'
    },
    {
        id: 16,
        url: 'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/gallery/gallery_16.jpg'
    },
    {
        id: 17,
        url: 'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/gallery/gallery_17.jpg'
    },
    {
        id: 18,
        url: 'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/gallery/gallery_18.jpg'
    },
    {
        id: 19,
        url: 'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/gallery/gallery_19.jpg'
    },
    {
        id: 20,
        url: 'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/gallery/gallery_20.jpg'
    },
    {
        id: 21,
        url: 'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/gallery/gallery_21.jpg'
    },
    {
        id: 22,
        url: 'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/gallery/gallery_22.jpg'
    },
    {
        id: 23,
        url: 'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/gallery/gallery_23.jpg'
    },
    {
        id: 24,
        url: 'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/gallery/gallery_24.jpg'
    },
    {
        id: 25,
        url: 'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/gallery/gallery_25.jpg'
    },
    {
        id: 26,
        url: 'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/gallery/gallery_26.jpg'
    },
    {
        id: 27,
        url: 'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/gallery/gallery_27.jpg'
    },
    {
        id: 28,
        url: 'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/gallery/gallery_28.jpg'
    }
];
const photos_festivals = [
    {
        id: 1,
        url: 'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/festivals/festival_1.JPG'
    },
    {
        id: 2,
        url: 'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/festivals/festival_2.JPG'
    },
    {
        id: 3,
        url: 'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/festivals/festival_3.JPG'
    },
    {
        id: 4,
        url: 'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/festivals/festival_4.JPG'
    },
    {
        id: 5,
        url: 'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/festivals/festival_5.JPG'
    },
    {
        id: 6,
        url: 'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/festivals/festival_6.JPG'
    },
    {
        id: 7,
        url: 'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/festivals/festival_7.JPG'
    },
    {
        id: 8,
        url: 'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/festivals/festival_8.JPG'
    },
    {
        id: 9,
        url: 'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/festivals/festival_9.JPG'
    },
    {
        id: 10,
        url: 'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/festivals/festival_10.JPG'
    },
    {
        id: 11,
        url: 'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/festivals/festival_11.JPG'
    },
    {
        id: 12,
        url: 'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/festivals/festival_12.JPG'
    }
];
const logos_black = [
    'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/footer_black/Studio92.png',
    'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/footer_black/Corazo%CC%81n.png',
    'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/footer_black/La+Zona.png',
    'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/footer_black/Cara.png',
    'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/footer_black/Patria+C.png',
    'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/footer_black/Recambio.png',
    'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/footer_black/Oranch.png',
    'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/footer_black/Invisible.png',
    'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/footer_black/Datum.png',
    'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/footer_black/Resurgir.png',
    'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/footer_black/Amautas.png',
    'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/footer_black/Openmind.png',
    'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/footer_black/Arequipa+(1).png',
    'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/footer_black/Casona.png',
    'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/footer_black/USMP.png',
    'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/footer_black/UAF.png',
    'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/footer_black/CAA.png',
    'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/footer_black/GRPP.png',
    'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/footer_black/Selvamonos.png',
    'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/footer_black/RPP.png'
];
const logos_white = [
    'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/footer_white/Studio92.png',
    'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/footer_white/Corazo%CC%81n.png',
    'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/footer_white/La+Zona.png',
    'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/footer_white/Cara.png',
    'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/footer_white/Patria+C.png',
    'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/footer_white/Recambio.png',
    'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/footer_white/Oranch.png',
    'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/footer_white/Invisible.png',
    'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/footer_white/Datum.png',
    'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/footer_white/Resurgir.png',
    'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/footer_white/Amautas.png',
    'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/footer_white/Openmind.png',
    'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/footer_white/Arequipa+(1).png',
    'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/footer_white/Casona.png',
    'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/footer_white/USMP.png',
    'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/footer_white/UAF.png',
    'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/footer_white/CAA.png',
    'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/footer_white/GRPP.png',
    'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/footer_white/Selvamonos.png',
    'https://ya-toca-web-imgs.nyc3.cdn.digitaloceanspaces.com/footer_white/RPP.png'
];
const topics = [
    {
        id: 1,
        text: 'Acceso a la educación superior y becas',
        percentage: 58,
        num_mentions: 198,
        summary: 'Proporciona una visión general de los datos, destacando las características principales y tendencias.',
        age: [
            '16-29'
        ],
        gender: [
            'Mujer'
        ],
        region: [
            'Cusco'
        ],
        medio: [
            'Whatsapp'
        ]
    },
    {
        id: 2,
        text: 'Violencia de género y protección de víctimas',
        percentage: 45,
        num_mentions: 173,
        summary: 'Se analizan las medidas actuales y las necesidades urgentes para prevenir y atender casos de violencia.',
        age: [
            '16-29'
        ],
        gender: [
            'Mujer'
        ],
        region: [
            'Cusco'
        ],
        medio: [
            'Whatsapp'
        ]
    },
    {
        id: 3,
        text: 'Salud mental y bienestar emocional',
        percentage: 52,
        num_mentions: 185,
        summary: 'Resumen de las preocupaciones sobre la salud mental, especialmente en jóvenes y población vulnerable.',
        age: [
            '16-29'
        ],
        gender: [
            'Mujer'
        ],
        region: [
            'Cusco'
        ],
        medio: [
            'Whatsapp'
        ]
    },
    {
        id: 4,
        text: 'Empleo juvenil y oportunidades laborales',
        percentage: 49,
        num_mentions: 160,
        summary: 'Se destacan los principales retos que enfrentan los jóvenes para acceder a empleos dignos.',
        age: [
            '16-29'
        ],
        gender: [
            'Mujer'
        ],
        region: [
            'Cusco'
        ],
        medio: [
            'Whatsapp'
        ]
    },
    {
        id: 5,
        text: 'Cambio climático y políticas ambientales',
        percentage: 38,
        num_mentions: 142,
        summary: 'Opiniones sobre cómo mitigar los efectos del cambio climático desde lo local.',
        age: [
            '16-29'
        ],
        gender: [
            'Mujer'
        ],
        region: [
            'Cusco'
        ],
        medio: [
            'Whatsapp'
        ]
    },
    {
        id: 6,
        text: 'Transporte público y movilidad urbana',
        percentage: 41,
        num_mentions: 150,
        summary: 'Los participantes mencionan la necesidad de mejorar el acceso, seguridad y eficiencia del transporte.',
        age: [
            '16-29'
        ],
        gender: [
            'Mujer'
        ],
        region: [
            'Cusco'
        ],
        medio: [
            'Whatsapp'
        ]
    },
    {
        id: 7,
        text: 'Derechos de pueblos indígenas y comunidades rurales',
        percentage: 36,
        num_mentions: 120,
        summary: 'Demandas de inclusión y respeto a los derechos culturales y territoriales.',
        age: [
            '16-29'
        ],
        gender: [
            'Mujer'
        ],
        region: [
            'Cusco'
        ],
        medio: [
            'Whatsapp'
        ]
    },
    {
        id: 8,
        text: 'Acceso a servicios básicos: agua, luz y saneamiento',
        percentage: 47,
        num_mentions: 168,
        summary: 'Resumen de los desafíos para garantizar servicios básicos en zonas marginadas.',
        age: [
            '16-29'
        ],
        gender: [
            'Mujer'
        ],
        region: [
            'Cusco'
        ],
        medio: [
            'Whatsapp'
        ]
    },
    {
        id: 9,
        text: 'Inseguridad ciudadana y violencia urbana',
        percentage: 53,
        num_mentions: 190,
        summary: 'Refleja la preocupación por el aumento de la criminalidad y la falta de respuesta estatal.',
        age: [
            '16-29'
        ],
        gender: [
            'Mujer'
        ],
        region: [
            'Cusco'
        ],
        medio: [
            'Whatsapp'
        ]
    },
    {
        id: 10,
        text: 'Transparencia y lucha contra la corrupción',
        percentage: 50,
        num_mentions: 175,
        summary: 'Se identifican demandas para una mayor rendición de cuentas y vigilancia ciudadana.',
        age: [
            '16-29'
        ],
        gender: [
            'Mujer'
        ],
        region: [
            'Cusco'
        ],
        medio: [
            'Whatsapp'
        ]
    }
];
const example_summary = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet vehicula nunc, at vestibulum tortor. Nam egestas suscipit lacus. Phasellus purus sapien, semper eu finibus non, vulputate a mi. Quisque sollicitudin dolor velit, at vulputate ligula malesuada at. Phasellus feugiat rhoncus justo, et consequat elit. In felis dui, mollis suscipit orci at, posuere commodo massa. Curabitur nibh tellus, feugiat at sem nec, eleifend placerat nisi. Vivamus blandit scelerisque placerat. In ornare, magna ac commodo aliquet, urna massa congue sapien, id ullamcorper nisl eros in ex. Integer suscipit dictum nunc vitae posuere. Vestibulum consequat ut enim eget accumsan. Nulla turpis sapien, ornare nec finibus eu, ultrices ut felis. Donec scelerisque nisl sed lacus dapibus, eget gravida dolor euismod.';
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/basic/footer-mobile/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$basic$2f$safe$2d$area$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/basic/safe-area/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$texts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/texts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$svgs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/svgs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/index.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
const FooterMobile = ({ color = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$texts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].BLACK })=>{
    const logos = color !== __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$texts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].BLACK ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logos_black"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logos_white"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "footer-mobile w100",
        style: {
            color: color === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$texts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].BLACK ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$texts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].WHITE : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$texts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].BLACK,
            backgroundColor: color
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$basic$2f$safe$2d$area$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "footer-body-mobile",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "thunder-fw-bold-lc fs96 mb20 pointer",
                                    style: {
                                        width: 'fit-content',
                                        borderBottom: `8px solid ${color === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$texts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].BLACK ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$texts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].WHITE : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$texts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].BLACK}`,
                                        paddingBottom: '14px'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "mailto:conectemos@yatoca.pe",
                                        children: "SÚMATE."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/basic/footer-mobile/index.tsx",
                                        lineNumber: 20,
                                        columnNumber: 222
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/basic/footer-mobile/index.tsx",
                                    lineNumber: 20,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "footer-p-mobile fw300",
                                    children: "Si quieres ser parte del Ya Toca Fest, escríbenos a conectemos@yatoca.pe"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/basic/footer-mobile/index.tsx",
                                    lineNumber: 21,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "footer-p-mobile fw300",
                                    children: "(no te vamos a dejar en visto)."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/basic/footer-mobile/index.tsx",
                                    lineNumber: 22,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/basic/footer-mobile/index.tsx",
                            lineNumber: 19,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "logos-grid-mobile",
                            children: logos.map((logo, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: logo,
                                    alt: `Logo ${index}`,
                                    className: logo.includes('Resurgir') ? 'logo-img-resurgir' : logo.includes('RPP') ? 'logo-img-rpp' : logo.includes('Openmind') ? 'logo-img-openmind' : 'logo-img'
                                }, index, false, {
                                    fileName: "[project]/src/components/basic/footer-mobile/index.tsx",
                                    lineNumber: 26,
                                    columnNumber: 33
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/basic/footer-mobile/index.tsx",
                            lineNumber: 24,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                height: 90
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/basic/footer-mobile/index.tsx",
                            lineNumber: 35,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "footer-networks-mobile",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "fw400 fs24",
                                    children: "Síguenos en:"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/basic/footer-mobile/index.tsx",
                                    lineNumber: 37,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        height: 24
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/basic/footer-mobile/index.tsx",
                                    lineNumber: 38,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: "fs24 fw400 footer-networks-item-mobile",
                                    href: "https://www.instagram.com/yatoca.pe?igsh=MTBuenQ1MHY2ZnA3ag==",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$svgs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconInsta"], {
                                            color: color === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$texts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].BLACK ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$texts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].WHITE : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$texts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].BLACK
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/basic/footer-mobile/index.tsx",
                                            lineNumber: 43,
                                            columnNumber: 59
                                        }, this),
                                        "Instagram"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/basic/footer-mobile/index.tsx",
                                    lineNumber: 39,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: "fs24 fw400 footer-networks-item-mobile",
                                    href: "https://www.facebook.com/share/1CWrVyGAfg/?mibextid=LQQJ4d",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$svgs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconFb"], {
                                            color: color === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$texts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].BLACK ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$texts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].WHITE : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$texts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].BLACK
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/basic/footer-mobile/index.tsx",
                                            lineNumber: 48,
                                            columnNumber: 59
                                        }, this),
                                        "Facebook"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/basic/footer-mobile/index.tsx",
                                    lineNumber: 44,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: "fs24 fw400 footer-networks-item-mobile",
                                    href: "https://www.tiktok.com/@yatoca.pe?_t=ZM-8xEYtCXpEbW&_r=1",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$svgs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconTikTok"], {
                                            color: color === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$texts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].BLACK ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$texts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].WHITE : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$texts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].BLACK
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/basic/footer-mobile/index.tsx",
                                            lineNumber: 53,
                                            columnNumber: 59
                                        }, this),
                                        "Tik Tok"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/basic/footer-mobile/index.tsx",
                                    lineNumber: 49,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: "fs24 fw400 footer-networks-item-mobile",
                                    href: "https://wa.me/51922824173",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$svgs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconWhatsApp"], {
                                            color: color === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$texts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].BLACK ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$texts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].WHITE : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$texts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].BLACK
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/basic/footer-mobile/index.tsx",
                                            lineNumber: 58,
                                            columnNumber: 59
                                        }, this),
                                        "Whatsapp"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/basic/footer-mobile/index.tsx",
                                    lineNumber: 54,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/basic/footer-mobile/index.tsx",
                            lineNumber: 36,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/basic/footer-mobile/index.tsx",
                    lineNumber: 18,
                    columnNumber: 21
                }, this)
            }, void 0, false)
        }, void 0, false, {
            fileName: "[project]/src/components/basic/footer-mobile/index.tsx",
            lineNumber: 16,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/basic/footer-mobile/index.tsx",
        lineNumber: 15,
        columnNumber: 9
    }, this);
};
_c = FooterMobile;
const __TURBOPACK__default__export__ = FooterMobile;
var _c;
__turbopack_context__.k.register(_c, "FooterMobile");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/basic/wrapper/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$texts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/texts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$svgs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/svgs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$basic$2f$footer$2d$mobile$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/basic/footer-mobile/index.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
;
const Wrapper = ({ children, color = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$texts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].GRAY2 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "wrapper",
        style: {
            backgroundColor: color
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "app-header",
                role: "banner",
                "aria-label": "Site header",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "app-header__inner",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/",
                            className: "app-header__brand",
                            "aria-label": "Home",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$svgs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LogoWhite"], {}, void 0, false, {
                                fileName: "[project]/src/components/basic/wrapper/index.tsx",
                                lineNumber: 19,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/basic/wrapper/index.tsx",
                            lineNumber: 18,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "app-header__spacer"
                        }, void 0, false, {
                            fileName: "[project]/src/components/basic/wrapper/index.tsx",
                            lineNumber: 22,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/basic/wrapper/index.tsx",
                    lineNumber: 17,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/basic/wrapper/index.tsx",
                lineNumber: 16,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 10
                },
                className: "wrapper-children",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/basic/wrapper/index.tsx",
                lineNumber: 26,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$basic$2f$footer$2d$mobile$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/basic/wrapper/index.tsx",
                lineNumber: 27,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/basic/wrapper/index.tsx",
        lineNumber: 15,
        columnNumber: 9
    }, this);
};
_c = Wrapper;
const __TURBOPACK__default__export__ = Wrapper;
var _c;
__turbopack_context__.k.register(_c, "Wrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/cabildos/station-three/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Page)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Composer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Composer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$basic$2f$safe$2d$area$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/basic/safe-area/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$basic$2f$wrapper$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/basic/wrapper/index.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$basic$2f$wrapper$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "admin-topics",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$basic$2f$safe$2d$area$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                mv: 32,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-semibold",
                            children: "Estación 3: Yo Presidente"
                        }, void 0, false, {
                            fileName: "[project]/src/app/cabildos/station-three/page.tsx",
                            lineNumber: 11,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "help",
                            children: "Cuéntanos cómo te sentiste después de la conversación..."
                        }, void 0, false, {
                            fileName: "[project]/src/app/cabildos/station-three/page.tsx",
                            lineNumber: 12,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Composer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            kind: "station3"
                        }, void 0, false, {
                            fileName: "[project]/src/app/cabildos/station-three/page.tsx",
                            lineNumber: 13,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/cabildos/station-three/page.tsx",
                    lineNumber: 10,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/cabildos/station-three/page.tsx",
                lineNumber: 9,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/cabildos/station-three/page.tsx",
            lineNumber: 8,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/cabildos/station-three/page.tsx",
        lineNumber: 7,
        columnNumber: 9
    }, this);
}
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_3cebc3d6._.js.map