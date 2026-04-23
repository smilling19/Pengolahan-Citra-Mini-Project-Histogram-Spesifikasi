/**
 * Menjumlahkan nilai histogram secara kumulatif
 * @param {Array} hist - Array frekuensi histogram
 * @returns {Array} Array akumulasi histogram (CDF)
 */
function calculateCDF(hist) {
    const cdf = new Array(256).fill(0);
    cdf[0] = hist[0];
    for (let i = 1; i < 256; i++) {
        cdf[i] = cdf[i - 1] + hist[i];
    }
    return cdf;
}
