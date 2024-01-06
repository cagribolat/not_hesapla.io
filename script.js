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
    console.log("%-5s %-40s", "No", "Ders");
    for (const ders of dersler) {
        console.log("%-5s %-40s", ders.numara, ders.ad);
    }
}

function notlariGoster(ders) {
    console.log("\nSeçilen Dersin Notları:");
    console.log("%-5s %-40s %-15s %-15s %-15s %-15s", "No", "Ders", "Ara Sınav", "Final Sınavı", "Geçme Notu", "Durum");
    console.log("%-5s %-40s %-15s %-15s %-15s %-15s", ders.numara, ders.ad, ders.araSinavPuani, ders.finalSinavPuani, ders.gecmeNotu, ders.durum);
}

const dersler = [
    new Ders(1, "TEMEL BİLGİ TEKNOLOJİLERİ I"),
    new Ders(2, "HALKLA İLİŞKİLER VE İLETİŞİM"),
    new Ders(3, "TEMEL SAĞLIK VE HASTALIK BİLGİSİ"),
    new Ders(4, "TIBBİ BELGELEME"),
    new Ders(5, "TIP TERİMLERİ")
];

while (true) {
    dersIsimleriListele(dersler);
    const secim = prompt("\nHangi dersin notlarını girmek istiyorsunuz? (Çıkış için 'q'): ");

    if (secim.toLowerCase() === 'q') {
        break;
    }

    let dersBulundu = false;
    for (const ders of dersler) {
        if (!isNaN(secim) && parseInt(secim) === ders.numara) {
            ders.notlariGir();
            notlariGoster(ders);
            dersBulundu = true;
            break;
        }
    }

    if (!dersBulundu) {
        console.log("Hatalı ders numarası, lütfen tekrar deneyin.");
    }

    // Sadece geçme notu açıklandıktan sonra mesajı göster
    if (dersBulundu) {
        console.log("");
        break;
    }
}
