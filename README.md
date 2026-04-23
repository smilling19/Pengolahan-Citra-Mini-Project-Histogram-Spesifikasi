# Pengolahan-Citra-Mini-Project-Histogram-Spesifikasi
Nama Anggota: ALfian Seftina Sari - 2301020092, M.Bintang Alffajry - 2301020085

# Deskripsi Proyek
Proyek ini merupakan implementasi Histogram Spesifikasi (Histogram Matching) pada pengolahan citra digital. Tujuan utama dari metode ini adalah untuk menyesuaikan distribusi intensitas (histogram) suatu citra agar menyerupai histogram citra target.
Berbeda dengan histogram equalisasi yang hanya meratakan distribusi, histogram spesifikasi memungkinkan kita mengontrol bentuk distribusi akhir berdasarkan citra referensi.

# Tujuan
1. Mengubah distribusi intensitas citra awal agar mengikuti citra target
2. Meningkatkan kualitas visual citra sesuai kebutuhan
3. Memahami konsep transformasi berbasis histogram dalam pengolahan citra

# Metode yang Digunakan
Proses histogram spesifikasi dilakukan melalui beberapa tahap:
1. Histogram Equalisasi Citra Awal
Menghitung jumlah piksel tiap intensitas
Menghitung probabilitas Pr(rk) (PDF)
Menghitung Cumulative Distribution Function (CDF)
Menghasilkan nilai transformasi sk
	​
2. Histogram Equalisasi Citra Target
Menghitung distribusi probabilitas Pz(zk) PDF
Menghitung CDF target
Menghasilkan nilai vk sebagai referensi

3. Pemetaan Histogram (Matching)
Proses inti dilakukan dengan mencocokkan nilai CDF
Setiap nilai sk dari citra awal dicocokkan dengan vk dari citra target
Dipilih nilai yang paling mendekati
Menghasilkan nilai intensitas baru zk
	​
4. Transformasi Citra
Semua piksel pada citra awal diubah berdasarkan hasil mapping
Menghasilkan citra baru dengan distribusi yang menyerupai target

# Output
Proyek ini menghasilkan:
- Tabel histogram citra awal
- Tabel histogram citra target
- Tabel pemetaan intensitas (mapping)
- Distribusi jumlah piksel setelah transformasi

# Kesimpulan
Histogram spesifikasi merupakan teknik penting dalam pengolahan citra yang memungkinkan penyesuaian distribusi intensitas secara fleksibel. Dengan metode ini, citra hasil dapat memiliki karakteristik visual yang lebih sesuai dengan kebutuhan atau referensi tertentu.
