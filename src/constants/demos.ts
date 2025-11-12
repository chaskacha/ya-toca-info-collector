// constants/demos.ts
export const REGIONES_PERU = [
    'Amazonas',
    'Áncash',
    'Apurímac',
    'Arequipa',
    'Ayacucho',
    'Cajamarca',
    'Callao',
    'Cusco',
    'Huancavelica',
    'Huánuco',
    'Ica',
    'Junín',
    'La Libertad',
    'Lambayeque',
    'Lima Metropolitana',
    'Lima Provincias',
    'Loreto',
    'Madre de Dios',
    'Moquegua',
    'Pasco',
    'Piura',
    'Puno',
    'San Martín',
    'Tacna',
    'Tumbes',
    'Ucayali',
    'Otro / extranjero'
] as const;

// Si ya tienes DEMO definido, añade:
export const DEMO = {
    gender: ['Masculino', 'Femenino', 'Otro', 'Prefiero no contestar'],
    age: ['Menos de 16', '16-29', '30-45', '46 a +', 'Prefiero no contestar'],
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
    ],

    // NUEVAS:
    originRegion: REGIONES_PERU,
    cabildoRegion: REGIONES_PERU,
} as const;
