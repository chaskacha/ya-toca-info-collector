(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/OnboardingForm.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>OnboardingForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const DEMO = {
    gender: [
        'Masculino',
        'Femenino',
        'Otro',
        'Prefiero no contestar'
    ],
    age: [
        'Menos de 16',
        '16-29',
        '30-45',
        '46 a +',
        'Prefiero no contestar'
    ],
    population: [
        'Pueblo afroperuano',
        'Comunidad LGTBIQ+',
        'Pueblos indígenas u originarios',
        'Personas con discapacidad',
        'Ninguna de las anteriores',
        'Prefiero no contestar'
    ],
    ethnicity: [
        'Quechua',
        'Aimara',
        'Indígena de la Amazonía',
        'Afroperuano',
        'Blanco',
        'Mestizo',
        'Asiático o nikkei',
        'Otro',
        'Prefiero no contestar'
    ],
    occupation: [
        'Estudiante',
        'Trabajador dependiente',
        'Trabajador independiente',
        'Emprendedor',
        'Servidor público',
        'Representante comunitario',
        'Sin ocupación fija',
        'Otro',
        'Prefiero no contestar'
    ],
    education: [
        'Sin instrucción',
        'Primaria',
        'Secundaria',
        'Superior técnica o universitaria',
        'Postgrado',
        'Otro',
        'Prefiero no contestar'
    ]
};
function OnboardingForm() {
    _s();
    const { register, handleSubmit, formState: { isSubmitting } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        defaultValues: {
            consent: 'yes'
        }
    });
    const onSubmit = async (d)=>{
        const res = await fetch('/api/profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                cabildoName: d.cabildoName,
                demographics: {
                    gender: d.gender,
                    age: d.age,
                    population: d.population,
                    ethnicity: d.ethnicity,
                    occupation: d.occupation,
                    education: d.education
                },
                consent: d.consent
            })
        });
        if (!res.ok) {
            alert('Error al guardar');
            return;
        }
        window.location.href = '/cabildos/station-one';
    };
    const Select = ({ name, options, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block space-y-1",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "label",
                    children: label
                }, void 0, false, {
                    fileName: "[project]/src/components/OnboardingForm.tsx",
                    lineNumber: 42,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    className: "input",
                    ...register(name, {
                        required: true
                    }),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: "",
                            disabled: true,
                            hidden: true,
                            children: "Selecciona…"
                        }, void 0, false, {
                            fileName: "[project]/src/components/OnboardingForm.tsx",
                            lineNumber: 44,
                            columnNumber: 17
                        }, this),
                        options.map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: o,
                                children: o
                            }, o, false, {
                                fileName: "[project]/src/components/OnboardingForm.tsx",
                                lineNumber: 45,
                                columnNumber: 37
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/OnboardingForm.tsx",
                    lineNumber: 43,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/OnboardingForm.tsx",
            lineNumber: 41,
            columnNumber: 9
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit(onSubmit),
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block space-y-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "label",
                        children: "Nombre del Cabildo"
                    }, void 0, false, {
                        fileName: "[project]/src/components/OnboardingForm.tsx",
                        lineNumber: 54,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: "input",
                        placeholder: "Ej. Cabildo San Miguel",
                        ...register('cabildoName', {
                            required: true
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/OnboardingForm.tsx",
                        lineNumber: 55,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/OnboardingForm.tsx",
                lineNumber: 53,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                name: 'gender',
                options: DEMO.gender,
                label: "Género"
            }, void 0, false, {
                fileName: "[project]/src/components/OnboardingForm.tsx",
                lineNumber: 59,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                name: 'age',
                options: DEMO.age,
                label: "Edad"
            }, void 0, false, {
                fileName: "[project]/src/components/OnboardingForm.tsx",
                lineNumber: 60,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                name: 'population',
                options: DEMO.population,
                label: "Población"
            }, void 0, false, {
                fileName: "[project]/src/components/OnboardingForm.tsx",
                lineNumber: 61,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                name: 'ethnicity',
                options: DEMO.ethnicity,
                label: "Grupo étnico"
            }, void 0, false, {
                fileName: "[project]/src/components/OnboardingForm.tsx",
                lineNumber: 62,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                name: 'occupation',
                options: DEMO.occupation,
                label: "Ocupación"
            }, void 0, false, {
                fileName: "[project]/src/components/OnboardingForm.tsx",
                lineNumber: 63,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                name: 'education',
                options: DEMO.education,
                label: "Nivel de instrucción"
            }, void 0, false, {
                fileName: "[project]/src/components/OnboardingForm.tsx",
                lineNumber: 64,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                        className: "label",
                        children: "¿Autorizas uso anónimo de tus respuestas?"
                    }, void 0, false, {
                        fileName: "[project]/src/components/OnboardingForm.tsx",
                        lineNumber: 68,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "radio",
                                value: "yes",
                                ...register('consent', {
                                    required: true
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/OnboardingForm.tsx",
                                lineNumber: 69,
                                columnNumber: 60
                            }, this),
                            " Sí, acepto"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/OnboardingForm.tsx",
                        lineNumber: 69,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "radio",
                                value: "no",
                                ...register('consent', {
                                    required: true
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/OnboardingForm.tsx",
                                lineNumber: 70,
                                columnNumber: 60
                            }, this),
                            " No acepto"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/OnboardingForm.tsx",
                        lineNumber: 70,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/OnboardingForm.tsx",
                lineNumber: 67,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "btn",
                disabled: isSubmitting,
                children: "Guardar y continuar"
            }, void 0, false, {
                fileName: "[project]/src/components/OnboardingForm.tsx",
                lineNumber: 74,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/OnboardingForm.tsx",
        lineNumber: 52,
        columnNumber: 9
    }, this);
}
_s(OnboardingForm, "CwCj8ZTSr9AXBAZI91QlYLA8HEQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c = OnboardingForm;
var _c;
__turbopack_context__.k.register(_c, "OnboardingForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_components_OnboardingForm_tsx_92b676ef._.js.map