<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>REAL SKYVIEN</title>
<style>
  /* Reset dan dasar */
  body {
    background: #111;
    color: #0ff;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 20px;
    min-height: 100vh;
  }

  h1, h2 {
    text-align: center;
    color: #0ff;
    text-shadow:
      0 0 5px #0ff,
      0 0 10px #0ff,
      0 0 20px #0ff;
  }

  section {
    background: #000a;
    border: 2px solid #0ff;
    border-radius: 10px;
    margin: 20px auto;
    max-width: 600px;
    padding: 20px;
    box-shadow:
      0 0 10px #0ff,
      0 0 20px #0ff,
      0 0 40px #0ff;
  }

  /* Neon style untuk list */
  ul {
    list-style-type: none;
    padding-left: 0;
  }

  ul li {
    padding: 8px;
    margin-bottom: 8px;
    border-radius: 6px;
    background: #001111aa;
    cursor: pointer;
    transition: 0.3s;
    box-shadow:
      0 0 5px #0ff;
  }

  ul li:hover {
    background: #0ff1;
    box-shadow:
      0 0 10px #0ff,
      0 0 20px #0ff;
  }

  a {
    color: #0ff;
    text-decoration: none;
    font-weight: bold;
  }

  a:hover {
    text-decoration: underline;
  }

  /* PT PRIBADI toggle */
  .pt-item {
    margin-bottom: 15px;
  }

  .pt-header {
    font-size: 1.2em;
    font-weight: 700;
    cursor: pointer;
    user-select: none;
    padding: 8px;
    border: 1px solid #0ff;
    border-radius: 8px;
    background: #002222aa;
    box-shadow:
      0 0 10px #0ff;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .pt-header:hover {
    background: #0ff3;
  }

  .pt-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease;
    margin-top: 8px;
    padding-left: 15px;
  }

  .pt-content.open {
    max-height: 500px;
  }

  /* Icon arrow */
  .arrow {
    transition: transform 0.4s ease;
  }
  .arrow.open {
    transform: rotate(90deg);
  }

  /* Small info text */
  .info-text {
    color: #0ff7;
    font-size: 0.9em;
    text-align: center;
    margin-top: 10px;
  }
</style>
</head>
<body>

<h1>REAL SKYVIEN</h1>

<!-- NOMOR ASLI SKYVIEN -->
<section id="nomor-asli">
  <h2>NOMOR ASLI SKYVIEN</h2>
  <p class="info-text">Tambah atau edit nomor di HTML langsung ya, supaya aman.</p>
  <ul>
    <!-- Edit di sini untuk tambah/ubah nomor -->
    <li><a href="https://wa.me/6281234567890" target="_blank">+62 812-3456-7890</a></li>
    <li><a href="https://wa.me/6289876543210" target="_blank">+62 898-7654-3210</a></li>
  </ul>
</section>

<!-- PT PRIBADI -->
<section id="pt-pribadi">
  <h2>PT PRIBADI</h2>
  
  <!-- Edit di sini untuk tambah PT pribadi -->
  <div class="pt-item">
    <div class="pt-header" onclick="togglePTContent(this)">
      PT. Maju Terus
      <span class="arrow">&#9654;</span>
    </div>
    <div class="pt-content">
      <p>Nomor: <a href="https://wa.me/628111222333" target="_blank">+62 811-222-333</a></p>
      <p>List Jualan:</p>
      <ul>
        <li><a href="https://wa.me/628111222333?text=Order%20Produk%20A" target="_blank">Produk A</a></li>
        <li><a href="https://wa.me/628111222333?text=Order%20Produk%20B" target="_blank">Produk B</a></li>
        <li><a href="https://wa.me/628111222333?text=Order%20Produk%20C" target="_blank">Produk C</a></li>
      </ul>
    </div>
  </div>

  <div class="pt-item">
    <div class="pt-header" onclick="togglePTContent(this)">
      PT. Hebat Selalu
      <span class="arrow">&#9654;</span>
    </div>
    <div class="pt-content">
      <p>Nomor: <a href="https://wa.me/628999888777" target="_blank">+62 899-9888-777</a></p>
      <p>List Jualan:</p>
      <ul>
        <li><a href="https://wa.me/628999888777?text=Order%20Produk%20X" target="_blank">Produk X</a></li>
        <li><a href="https://wa.me/628999888777?text=Order%20Produk%20Y" target="_blank">Produk Y</a></li>
      </ul>
    </div>
  </div>

  <p class="info-text">Tambah PT pribadi dengan cara edit langsung di HTML bagian ini.</p>
</section>

<!-- CLONE -->
<section id="clone">
  <h2>CLONE</h2>
  <p style="text-align:center; font-weight:bold; color:#f00; text-shadow: 0 0 10px #f00;">
    SELAIN NOMOR DIATAS ADALAH CLONE JANGAN TRX
  </p>
</section>

<script>
  // Toggle konten PT pribadi
  function togglePTContent(headerEl) {
    const content = headerEl.nextElementSibling;
    const arrow = headerEl.querySelector('.arrow');
    if(content.classList.contains('open')) {
      content.classList.remove('open');
      arrow.classList.remove('open');
    } else {
      content.classList.add('open');
      arrow.classList.add('open');
    }
  }
</script>

</body>
</html>
