class Ders {
    constructor(numara, ad) {
        this.numara = numara;
        this.ad = ad;
        this.araSinavPuani = 0;
        this.finalSinavPuani = 0;
        this.gecmeNotu = 0;
    }

    notlariGir() {
        this.araSinavPuani = parseFloat(prompt("Ara Sınav Puanı: "));
        this.finalSinavPuani = parseFloat(prompt("Final Sınavı Puanı: "));
        this.notHesapla();
    }

    notHesapla() {
        this.gecmeNotu = (this.araSinavPuani * 0.3) + (this.finalSinavPuani * 0.7);
        this.durum = this.gecmeNotu >= 50 ? "Geçtiniz" : "Geçemediniz";
    }
}

function dersIsimleriListele(dersler) {
    const table = document.getElementById("dersler-table");
    
    dersler.forEach(ders => {
        const row = table.insertRow(-1);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.innerHTML = ders.numara;
        cell2.innerHTML = ders.ad;

        row.addEventListener("click", function() {
            ders.notlariGir();
            notlariGoster(ders);
        });
    });
}

function notlariGoster(ders) {
    alert(`
        Seçilen Dersin Notları:
        No: ${ders.numara}
        Ders: ${ders.ad}
        Ara Sınav: ${ders.araSinavPuani}
        Final Sınavı: ${ders.finalSinavPuani}
        Geçme Notu: ${ders.gecmeNotu}
        Durum: ${ders.durum}
    `);
}

const dersler = [
    new Ders(1, "TEMEL BİLGİ TEKNOLOJİLERİ I"),
    new Ders(2, "HALKLA İLİŞKİLER VE İLETİŞİM"),
    new Ders(3, "TEMEL SAĞLIK VE HASTALIK BİLGİSİ"),
    new Ders(4, "TIBBİ BELGELEME"),
    new Ders(5, "TIP TERİMLERİ")
];

dersIsimleriListele(dersler);
