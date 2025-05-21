export function renderYUVToASCII(
  yuv: Uint8Array,
  width: number,
  height: number,
  outWidth: number
): string {
  const ascii = "@%#*+=-:. "; // from dark to bright
  const scale = width / outWidth;
  const outHeight = Math.floor(height / scale / 2); // half height for terminal look

  let output = "";
  for (let y = 0; y < outHeight; y++) {
    for (let x = 0; x < outWidth; x++) {
      const srcX = Math.floor(x * scale);
      const srcY = Math.floor(y * scale * 2);
      const lum = yuv[srcY * width + srcX];
      const ch = ascii[Math.floor((lum / 255) * (ascii.length - 1))];
      output += ch;
    }
    output += "\n";
  }
  return output;
}
