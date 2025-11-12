// helpers/phone.ts
export const PERU_PREFIX = '51';
export const PERU_MOBILE_REGEX = /^51(9\d{8})$/; // 51 + 9 dígitos (móvil peruano)

export function normalizePeruMobile(input: string) {
  // Dejar solo dígitos
  let v = (input || '').replace(/\D/g, '');

  // Evitar prefijos duplicados (51...); si el usuario ya puso 51, no re-agregar
  if (!v.startsWith(PERU_PREFIX)) {
    // Si pegó algo como +51..., 051..., etc. lo limpiamos igual
    v = v.replace(/^0+/, '');
    if (v.startsWith('51')) {
      // ya tiene 51 después de limpiar ceros
    } else {
      v = PERU_PREFIX + v;
    }
  }

  // Limitar longitud total a 11 (51 + 9 dígitos)
  if (v.length > 11) v = v.slice(0, 11);

  return v;
}
