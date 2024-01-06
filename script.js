<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NOT HESAPLAYICI</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twemoji/13.1.0/twemoji-awesome.css" integrity="sha512-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" crossorigin="anonymous" />
    <style>
        body {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            background-image: url('https://wallpapercave.com/uwp/uwp4193688.jpeg');
            background-size: cover;
        }
        h1 {
            margin-bottom: 20px;
        }
        #resultContainer {
            padding: 10px;
            border-radius: 10px;
            margin-top: 20px;
            display: inline-block;
        }
        .pass {
            border: 2px solid green;
            display: inline-block;
            padding: 5px;
            border-radius: 5px;
            margin-top: 10px;
        }
        .fail {
            border: 2px solid red;
            display: inline-block;
            padding: 5px;
            border-radius: 5px;
            margin-top: 10px;
        }
        .form-container {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        form {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        #gradeForm button {
            margin-top: 10px;
        }
        #dersListesi {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        #dersListesi li {
            cursor: pointer;
            margin: 5px;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            background-color: #f9f9f9;
        }
        #dersListesi li:hover {
            background-color: #e0e0e0;
        }
        #dersListesi li::before {
            content: none; /* Marker'ları kaldır */
        }
        #dersListesi li:nth-of-type(1) {
            display: none; /* İlk öğeyi gizle */
        }
    </style>
</head>
<body>

    <h1>NOT HESAPLAYICI</h1>

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
            constructor(numara, ad) {
                this.numara = numara;
                this.ad = ad;
                this.ara_sinav_puani = 0;
                this.final_sinav_puani = 0;
                this.gecme_notu = 0;
                this.durum = "";
            }

            notlari_gir() {
                this.ara_sinav_puani = parseFloat(prompt("Ara Sınav Puanı: "));
                this.final_sinav_puani = parseFloat(prompt("Final Sınavı Puanı: "));
                this.not_hesapla();
            }

            not_hesapla() {
                this.gecme_notu = (this.ara_sinav_puani * 0.3) + (this.final_sinav_puani * 0.7);
                this.durum = this.gecme_notu >= 50 ? "Geçtiniz" : "Geçemediniz";
            }
        }

        var dersler = [
            new Ders(1, "TEMEL BİLGİ TEKNOLOJİLERİ I"),
            new Ders(2, "HALKLA İLİŞKİLER VE İLETİŞİM"),
            new Ders(3, "TEMEL SAĞLIK VE HASTALIK BİLGİSİ"),
            new Ders(4, "TIBBİ BELGELEME"),
            new Ders(5, "TIP TERİMLERİ")
        ];

        function ders_isimleri_listele(dersler) {
            var dersListesi = document.getElementById("dersListesi");
            for (var i = 0; i < dersler.length; i++) {
                var listItem = document.createElement("li");
                listItem.textContent = dersler[i].numara + ". " + dersler[i].ad;
                listItem.addEventListener("click", function () {
                    var selectedCourseNumber = this.textContent.split(" ")[0];
                    var selectedDers = null;

                    for (var j = 0; j < dersler.length; j++) {
                        if (dersler[j].numara == selectedCourseNumber) {
                            selectedDers = dersler[j];
                            break;
                        }
                    }

                    if (selectedDers) {
                        selectedDers.notlari_gir();
                        notlari_goster(selectedDers);
                    }
                });
                dersListesi.appendChild(listItem);
            }
        }

        function notlari_goster(ders) {
            var resultContainer = document.getElementById("resultContainer");
            resultContainer.innerHTML = "<h3>Seçilen Dersin Notları</h3>";
            resultContainer.innerHTML += "<p>No: " + ders.numara + "</p>";
            resultContainer.innerHTML += "<p>Ders: " + ders.ad + "</p>";
            resultContainer.innerHTML += "<p>Ara Sınav: " + ders.ara_sinav_puani + "</p>";
            resultContainer.innerHTML += "<p>Final Sınavı: " + ders.final_sinav_puani + "</p>";
            resultContainer.innerHTML += "<p>Geçme Notu: <span class='" + (ders.gecme_notu >= 50 ? "pass" : "fail") + "'>" + ders.gecme_notu + "</span></p>";
            resultContainer.innerHTML += "<p>Durum: <span class='" + (ders.gecme_notu >= 50 ? "pass" : "fail") + "'>" + ders.durum + "</span></p>";

            // Emoji ekleme
            var emojiElement = document.createElement("span");
            emojiElement.innerHTML = ders.gecme_notu >= 50 ? "&#x1F604;" : "&#x1F641;";
            emojiElement.style.fontSize = "24px";
            resultContainer.appendChild(emojiElement);
        }

        // Sayfa yüklendiğinde ders isimlerini göster
        ders_isimleri_listele(dersler);

        function calculateGrade() {
            var selectedCourseNumber = document.getElementById("courseNumber").value;
            var selectedDers = null;

            for (var i = 0; i < dersler.length; i++) {
                if (dersler[i].numara == selectedCourseNumber) {
                    selectedDers = dersler[i];
                    break;
                }
            }

            if (selectedDers) {
                selectedDers.ara_sinav_puani = parseFloat(document.getElementById("midtermGrade").value);
                selectedDers.final_sinav_puani = parseFloat(document.getElementById("finalGrade").value);
                selectedDers.not_hesapla();
                notlari_goster(selectedDers);
            }
        }
    </script>

</body>
</html>
