/**
 * Menyesuaikan komponen warna skala RGB asli menggunakan rasio perubahan kecerahan
 * @param {HTMLImageElement} srcImg - Citra RGB awal
 * @param {Object} srcData - Objek dimensi gambar input
 * @param {Uint8Array} outPixels - Array hasil luminance baru
 * @param {HTMLCanvasElement} canvas - Canvas tersembunyi
 * @param {CanvasRenderingContext2D} ctx - Konteks canvas 2D
 * @returns {string} Data URL (Base64) dari citra berwarna yang telah dimodifikasi
 */
function applyColorScaling(srcImg, srcData, outPixels, canvas, ctx) {
    canvas.width = srcData.width;
    canvas.height = srcData.height;
    ctx.drawImage(srcImg, 0, 0);

    const originalSrcData = ctx.getImageData(0, 0, srcData.width, srcData.height);
    const outImageData = ctx.createImageData(srcData.width, srcData.height);

    for (let i = 0; i < srcData.pixels.length; i++) {
        const oldLuma = srcData.pixels[i];
        const newLuma = outPixels[i];

        const r = originalSrcData.data[i * 4];
        const g = originalSrcData.data[i * 4 + 1];
        const b = originalSrcData.data[i * 4 + 2];

        if (oldLuma === 0) {
            outImageData.data[i * 4] = newLuma;
            outImageData.data[i * 4 + 1] = newLuma;
            outImageData.data[i * 4 + 2] = newLuma;
        } else {
            const ratio = newLuma / oldLuma;
            outImageData.data[i * 4] = Math.min(255, r * ratio);
            outImageData.data[i * 4 + 1] = Math.min(255, g * ratio);
            outImageData.data[i * 4 + 2] = Math.min(255, b * ratio);
        }
        outImageData.data[i * 4 + 3] = 255;
    }
    ctx.putImageData(outImageData, 0, 0);
    return canvas.toDataURL();
}
