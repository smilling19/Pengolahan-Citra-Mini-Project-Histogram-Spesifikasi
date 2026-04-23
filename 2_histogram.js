/**
 * Menghitung distribusi frekuensi kemunculan tiap tingkat intensitas (0-255)
 * @param {Uint8Array} pixels - Array 1D berisi pixel grayscale
 * @returns {Array} Array berukuran 256 berisi nilai frekuensi histogram
 */
function calculateHistogram(pixels) {
    const hist = new Array(256).fill(0);
    for (let i = 0; i < pixels.length; i++) {
        hist[pixels[i]]++;
    }
    return hist;
}
