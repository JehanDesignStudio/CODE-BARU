document.addEventListener('DOMContentLoaded', function () {
  const ctx = document.getElementById('myChart');
  const buku = parseInt(ctx.dataset.buku) || 0;
  const pengunjung = parseInt(ctx.dataset.pengunjung) || 0;
  const pinjaman = parseInt(ctx.dataset.pinjaman) || 0;

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Buku', 'Pengunjung', 'Peminjaman'],
      datasets: [{
        label: 'Statistik',
        data: [buku, pengunjung, pinjaman],
        backgroundColor: ['#0d6efd', '#198754', '#ffc107'],
        borderRadius: 5
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: { mode: 'index', intersect: false }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 1
          }
        }
      }
    }
  });
});
