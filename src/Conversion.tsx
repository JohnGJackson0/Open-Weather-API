export function getFarenheight(kelvin: number): string {
  return ((kelvin - 273.15) * (9 / 5) + 32).toFixed(2);
}
