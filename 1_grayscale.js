/**
 * 1. Mengkonversi citra RGB menjadi grayscale menggunakan rumus Luma (Rec. 601)
 * @param {HTMLImageElement} img - Objek gambar sumber
 * @param {HTMLCanvasElement} canvas - Canvas tersembunyi untuk ekstraksi pixel
 * @param {CanvasRenderingContext2D} ctx - Konteks raster 2D
 * @returns {Object} { width, height, pixels: Uint8Array }
 */
function convertToGrayscale(img, canvas, ctx) {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
    const imageData = ctx.getImageData(0, 0, img.width, img.height);
    const data = imageData.data;
    const grayPixels = new Uint8Array(img.width * img.height);

    let j = 0;
    for (let i = 0; i < data.length; i += 4) {
        // Luma = 0.299R + 0.587G + 0.114B
        grayPixels[j++] = Math.round(0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]);
    }
    return {
        width: img.width,
        height: img.height,
        pixels: grayPixels
    };
}
