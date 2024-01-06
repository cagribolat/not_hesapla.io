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
    resultContainer.innerHTML = "<h3>Seçilen Dersin Notları</h3>";
    resultContainer.innerHTML += "<p>No: " + ders.numara + "</p>";
    resultContainer.innerHTML += "<p>Ders: " + ders.ad + "</p>";
    resultContainer.innerHTML += "<p>Ara Sınav: " + ders.ara_sinav_puani + "</p>";
    resultContainer.innerHTML += "<p>Final Sınavı: " + ders.final_sinav_puani + "</p>";
    resultContainer.innerHTML += "<p>Geçme Notu: " + ders.gecme_notu + "</p>";
    resultContainer.innerHTML += "<p>Durum: " + ders.durum + "</p>";
}

// Sayfa yüklendiğinde ders listesini göster
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
