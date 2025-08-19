document.addEventListener("DOMContentLoaded", () => {
  const bulanTahun = document.getElementById("bulanTahun");
  const tanggalKalender = document.getElementById("tanggal-id");
  const tombolSatu = document.getElementById("tombol1");
  const tombolDua = document.getElementById("tombol2");
  let tanggalSekarang = new Date();

  function kalenderCUY() {
    const tahun = tanggalSekarang.getFullYear();
    const bulan = tanggalSekarang.getMonth();
    const hariIniCuy = new Date();

    const namaBulan = tanggalSekarang.toLocaleDateString("default", { month: "long" });
    bulanTahun.textContent = `${namaBulan} ${tahun}`;

    const tanggalAwalCuy = new Date(tahun, bulan, 1);
    const hariAwalCuy = tanggalAwalCuy.getDay();
    const tanggalAkhirCuy = new Date(tahun, bulan + 1, 0).getDate();
    const tanggalAKhirnyasebelum = new Date(tahun, bulan, 0).getDate();

    tanggalKalender.innerHTML = "";

    for (let i = hariAwalCuy; i > 0; i--) {
      const tanggal = document.createElement("div");
      tanggal.textContent = tanggalAKhirnyasebelum - i + 1;
      tanggal.classList.add("tanggal-lain");
      tanggalKalender.appendChild(tanggal);
    }

    for (let i = 1; i <= tanggalAkhirCuy; i++) {
      const tanggal = document.createElement("div");
      tanggal.textContent = i;
      if (i === hariIniCuy.getDate() && bulan === hariIniCuy.getMonth() && tahun === hariIniCuy.getFullYear()) {
        tanggal.classList.add("hari-ini");
      }
      tanggalKalender.appendChild(tanggal);
    }

    const totalKotak = hariAwalCuy + tanggalAkhirCuy;
    const kotaknyaKosong = 42 - totalKotak;
    for (let i = 1; i <= kotaknyaKosong; i++) {
      const tanggal = document.createElement("div");
      tanggal.textContent = i;
      tanggal.classList.add("tanggal-lain");
      tanggalKalender.appendChild(tanggal);
    }
  }

  tombolSatu.addEventListener("click", () => {
    tanggalSekarang.setMonth(tanggalSekarang.getMonth() - 1);
    kalenderCUY();
  });

  tombolDua.addEventListener("click", () => {
    tanggalSekarang.setMonth(tanggalSekarang.getMonth() + 1);
    kalenderCUY();
  });

  kalenderCUY();
});
