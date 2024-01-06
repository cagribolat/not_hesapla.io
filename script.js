<!-- ... -->

<body>

    <h1>NOT HESAPLAYICI</h1>

    <!-- Ders listesi -->
    <div>
        <h2>Dersler</h2>
        <ul id="dersListesi"></ul>
    </div>

    <!-- Not hesaplama formu -->
    <div class="form-container">
        <form id="gradeForm">
            <label for="courseNumber">Ders Numarası:</label>
            <input type="text" id="courseNumber" name="courseNumber">

            <label for="midtermGrade">Ara Sınav:</label>
            <input type="number" id="midtermGrade" name="midtermGrade" step="0.1">

            <label for="finalGrade">Final Sınavı:</label>
            <input type="number" id="finalGrade" name="finalGrade" step="0.1">

            <button type="button" onclick="calculateGrade()">Hesapla</button>
        </form>
    </div>

    <!-- Notları gösterme bölümü -->
    <div id="resultContainer"></div>

    <script>
        class Ders {
            // ... (kodun geri kalanı aynı)

        function notlari_goster(ders) {
            var resultContainer = document.getElementById("resultContainer");
            resultContainer.innerHTML = "<h3>Seçilen Dersin Notları</h3>";
            resultContainer.innerHTML += "<p>No: " + ders.numara + "</p>";
            resultContainer.innerHTML += "<p>Ders: " + ders.ad + "</p>";
            resultContainer.innerHTML += "<p>Ara Sınav: " + ders.ara_sinav_puani + "</p>";
            resultContainer.innerHTML += "<p>Final Sınavı: " + ders.final_sinav_puani + "</p>";
            resultContainer.innerHTML += "<p>Geçme Notu: <span class='" + (ders.gecme_notu >= 50 ? "pass" : "fail") + "'>" + ders.gecme_notu + "</span></p>";
            
            // Duruma göre emoji ekleyelim
            var emoji = ders.gecme_notu >= 50 ? "😊" : "😢";
            resultContainer.innerHTML += "<p>Durum: <span class='" + (ders.gecme_notu >= 50 ? "pass" : "fail") + "'>" + ders.durum + " " + emoji + "</span></p>";
        }

        // ... (kodun geri kalanı aynı)
    </script>

</body>
</html>
