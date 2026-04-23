/**
 * Menganalisis parameter visual dasar gambar (Nilai Min, Max, Rata-rata intensitas)
 * @param {Uint8Array} pixels - Array pixel obyek target
 * @returns {Object} Data min, max, dan mean stat (format 2 angka dibelakang koma)
 */
function calculateStatistics(pixels) {
    let min = 255, max = 0, sum = 0;
    for (let i = 0; i < pixels.length; i++) {
        let v = pixels[i];
        if (v < min) min = v;
        if (v > max) max = v;
        sum += v;
    }
    return {
        min: min,
        max: max,
        mean: (sum / pixels.length).toFixed(2)
    };
}
