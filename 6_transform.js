/**
 * Menerapkan lookup table (mapping) ke seluruh pixel citra input
 * @param {Uint8Array} srcPixels - Pixel original (grayscale)
 * @param {Array} mapArray - Lookup table hasil sinkronisasi CDF
 * @returns {Uint8Array} Array pixel baru (hasil ekualisasi terspesifikasi)
 */
function applyMappingToPixels(srcPixels, mapArray) {
    const outPixels = new Uint8Array(srcPixels.length);
    for (let i = 0; i < srcPixels.length; i++) {
        outPixels[i] = mapArray[srcPixels[i]];
    }
    return outPixels;
}
