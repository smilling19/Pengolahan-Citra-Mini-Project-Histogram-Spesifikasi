/**
 * Mencari nilai intensitas citra target (Z) yang distribusinya paling mendekati input (R)
 * @param {Array} srcCdfNorm - CDF ternormalisasi dari citra awal
 * @param {Array} refCdfNorm - CDF ternormalisasi dari citra target
 * @returns {Array} Array mapping (Lookup table)
 */
function createHistogramMapping(srcCdfNorm, refCdfNorm) {
    const mapArray = new Array(256).fill(0);
    for (let i = 0; i < 256; i++) {
        let j = 0;
        // Cari target j dimana CDF target mendekati atau melampaui CDF source[i]
        while (j < 256 && refCdfNorm[j] < srcCdfNorm[i]) {
            j++;
        }
        mapArray[i] = j > 255 ? 255 : j;
    }
    return mapArray;
}
