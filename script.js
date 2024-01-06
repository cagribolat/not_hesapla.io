function notlari_goster(ders) {
    var resultContainer = document.getElementById("resultContainer");
    resultContainer.innerHTML = "<h3>Seçilen Dersin Notları</h3>";
    resultContainer.innerHTML += "<p>No: " + ders.numara + "</p>";
    resultContainer.innerHTML += "<p>Ders: " + ders.ad + "</p>";
    resultContainer.innerHTML += "<p>Ara Sınav: " + ders.ara_sinav_puani + "</p>";
    resultContainer.innerHTML += "<p>Final Sınavı: " + ders.final_sinav_puani + "</p>";
    resultContainer.innerHTML += "<p>Geçme Notu: " + ders.gecme_notu + "</p>";
    resultContainer.innerHTML += "<p>Durum: " + ders.durum + "</p>";

    // Geçer not ise yeşil, geçer not değilse kırmızı çerçeve uygula
    resultContainer.classList.remove("pass", "fail");
    resultContainer.classList.add(ders.gecme_notu >= 50 ? "pass" : "fail");
}
