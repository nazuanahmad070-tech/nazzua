// ===== DASHBOARD APP =====
document.addEventListener('DOMContentLoaded', function() {
    // Update statistik
    document.getElementById('totalSiswa').textContent = DATA.siswa.length;
    document.getElementById('totalGuru').textContent = DATA.guru.length;
    document.getElementById('totalKelas').textContent = DATA.kelas.length;
    document.getElementById('totalNilai').textContent = DATA.nilai.length;

    // Tampilkan siswa terbaru (5 teratas)
    const tbody = document.getElementById('siswaTerbaru');
    DATA.siswa.slice(0, 5).forEach(siswa => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${siswa.nis}</td>
            <td>${siswa.nama}</td>
            <td>${siswa.kelas}</td>
            <td><span class="badge ${siswa.status === 'Aktif' ? 'aktif' : 'tidak-aktif'}">${siswa.status}</span></td>
        `;
        tbody.appendChild(row);
    });

    // Chart distribusi siswa per kelas
    const chart = document.getElementById('chartKelas');
    const maxJumlah = Math.max(...DATA.kelas.map(k => k.jumlah));

    DATA.kelas.forEach(kelas => {
        const height = (kelas.jumlah / maxJumlah) * 180;
        const barItem = document.createElement('div');
        barItem.className = 'bar-item';
        barItem.innerHTML = `
            <span class="bar-value">${kelas.jumlah}</span>
            <div class="bar" style="height: ${height}px;"></div>
            <span class="bar-label">${kelas.nama}</span>
        `;
        chart.appendChild(barItem);
    });
});

// ===== UTILITY FUNCTIONS =====
function formatTanggal(date) {
    return new Date(date).toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
}
