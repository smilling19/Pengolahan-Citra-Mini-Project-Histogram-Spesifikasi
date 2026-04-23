/**
 * Memetakan CDF murni ke dalam skala intensitas level abu-abu (0-255)
 * @param {Array} cdf - Array CDF murni
 * @param {number} totalPixels - Total pixel dalam gambar (M * N)
 * @returns {Array} Array hasil mapping ekualisasi (CDF yang dinormalisasi)
 */
function normalizeCDF(cdf, totalPixels) {
    const cdfMin = cdf.find(val => val > 0) || 1;
    const cdfNorm = new Array(256).fill(0);
    for (let i = 0; i < 256; i++) {
        let normVal = Math.round(((cdf[i] - cdfMin) / (totalPixels - cdfMin)) * 255);
        cdfNorm[i] = normVal < 0 ? 0 : normVal;
    }
    return cdfNorm;
}
