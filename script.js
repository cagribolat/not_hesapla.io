<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            text-align: top;
        }

        h1 {
            color: #333;
        }

        #dersListesi {
            list-style-type: none;
            padding: 0;
        }

        #gradeForm {
            margin-top: 20px;
            display: inline-block;
        }

        label {
            display: block;
            margin: 5px 0;
        }

        input {
            margin-bottom: 10px;
        }

        button {
            background-color: #4caf50;
            color: white;
            padding: 10px 15px;
            margin-top: 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        button:hover {
            background-color: #45a049;
        }

        #resultContainer {
            margin-top: 20px;
            display: inline-block;
            padding: 10px;
            border: 2px solid;
            border-radius: 5px;
        }

        .pass {
            border-color: green;
        }

        .fail {
            border-color: red;
        }

        #emoji {
            font-size: 30px;
        }
    </style>
    <title>NOT HESAPLAYICI</title>
</head>
<body>

    <h1>NOT HESAPLAYICI</h1>

    <!-- Ders listesi -->
    <div>
        <h2>Dersler</h2>
        <ul id="dersListesi"></ul>
    </div>

    <!-- Not hesaplama formu -->
    <form id="gradeForm">
        <label for="courseNumber">Ders Numarası:</label>
        <input type="text" id="courseNumber" name="courseNumber">

        <label for="midtermGrade">Ara Sınav:</label>
        <input type="number" id="midtermGrade" name="midtermGrade" step="0.1">

        <label for="finalGrade">Final Sınavı:</label>
        <input type="number" id="finalGrade" name="finalGrade" step="0.1">

        <button type="button" onclick="calculateGrade()">Hesapla</button>
    </form>

    <!-- Notları gösterme bölümü -->
    <div id="resultContainer">
        <div id="emoji"></div>
        <div id="notlar"></div>
    </div>

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
                listItem.textContent = dersler[i].numara + " " + dersler[i].ad;
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
            var emojiContainer = document.getElementById("emoji");
            var notlarContainer = document.getElementById("notlar");

            emojiContainer.innerHTML = "";
            notlarContainer.innerHTML = "";

            emojiContainer.innerHTML = "<span style='font-size: 30px;'>" + (ders.gecme_notu >= 50 ? "😊" : "☹️") + "</span>";

            notlarContainer.innerHTML += "<h3>Seçilen Dersin Notları</h3>";
            notlarContainer.innerHTML += "<p>No: " + ders.numara + "</p>";
            notlarContainer.innerHTML += "<p>Ders: " + ders.ad + "</p>";
            notlarContainer.innerHTML += "<p>Ara Sınav: " + ders.ara_sinav_puani + "</p>";
            notlarContainer.innerHTML += "<p>Final Sınavı: " + ders.final_sinav_puani + "</p>";
            notlarContainer.innerHTML += "<p>Geçme Notu: " + ders.gecme_notu + "</p>";
            notlarContainer.innerHTML += "<p>Durum: " + ders.durum + "</p>";

            // Geçer not ise yeşil, geçer not değilse kırmızı çerçeve uygula
            resultContainer.classList.remove("pass", "fail");
            resultContainer.classList.add(ders.gecme_notu >= 50 ? "pass" : "fail");
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
