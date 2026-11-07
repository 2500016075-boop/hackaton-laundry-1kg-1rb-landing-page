// Data paket & layanan Laundry 1kg-1rb
const fitur = [
    {
        judul: 'Cuci Komplit Reguler',
        keterangan: 'Mulai Rp1.000-an · Cuci bersih, setrika uap rapi, packing plastik tebal. Estimasi 2 hari.'
    },
    {
        judul: 'Kiloan Kilat Express',
        keterangan: 'Rp15.000 / kg · Solusi darurat selesai dalam 3 - 6 jam, siap pakai untuk kuliah atau kerja.'
    },
    {
        judul: 'Cuci Kering Lipat',
        keterangan: 'Rp6.000 / kg · Pakaian dicuci bersih, wangi, dan dilipat rapi tanpa setrika.'
    },
    {
        judul: 'Sepatu & Tas (Shoe Spa)',
        keterangan: 'Mulai Rp25.000 / pasang · Deep cleaning untuk sneakers, kulit, kanvas, dan tas ransel.'
    },
    {
        judul: 'Bed Cover & Selimut',
        keterangan: 'Mulai Rp30.000 / pcs · Dicuci higienis bebas debu dan tungau dengan mesin kapasitas besar.'
    },
    {
        judul: 'Cuci Karpet & Boneka',
        keterangan: 'Mulai Rp15.000 / m² · Pembersihan karpet kos/masjid dan boneka hingga kering tuntas.'
    }
];

// Menampilkan daftar paket ke dalam grid HTML
function tampilkanFitur() {
    const wadah = document.getElementById('daftar-fitur');
    wadah.innerHTML = '';
    for (const f of fitur) {
        const kartu = document.createElement('article');
        kartu.className = 'kartu';
        kartu.innerHTML = `<h3>${f.judul}</h3><p>${f.keterangan}</p>`;
        wadah.appendChild(kartu);
    }
}

// Handler form pemesanan antar jemput
const form = document.getElementById('form-daftar');
const pesan = document.getElementById('pesan');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nama = form.nama.value.trim();
    const telepon = form.telepon.value.trim();
    const alamat = form.alamat.value.trim();
    const layanan = form.layanan.value;

    pesan.hidden = false;
    if (nama === '' || telepon === '' || alamat === '') {
        pesan.textContent = 'Mohon lengkapi semua data formulir.';
        pesan.className = 'pesan gagal';
        return;
    }

    const teksWA = encodeURIComponent(`Halo Laundry 1kg-1rb, saya ingin pesan antar-jemput laundry:\n- Nama: ${nama}\n- Layanan: ${layanan}\n- No. WA: ${telepon}\n- Alamat: ${alamat}`);
    const linkWA = `https://wa.me/6281234567890?text=${teksWA}`;

    pesan.innerHTML = `Pesanan berhasil dicatat! Terima kasih kak <strong>${nama}</strong>.<br>
    Kurir kami akan segera memproses penjemputan ke alamat Anda.<br>
    <a href="${linkWA}" target="_blank" style="display:inline-block; margin-top:10px; color:#166534; font-weight:bold; text-decoration:underline;">
        👉 Klik di sini untuk konfirmasi langsung via WhatsApp
    </a>`;
    pesan.className = 'pesan berhasil';
    form.reset();
});

tampilkanFitur();
