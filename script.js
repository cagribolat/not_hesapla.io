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

        // Formu sıfırla
        document.getElementById("courseNumber").value = "";
        document.getElementById("midtermGrade").value = "";
        document.getElementById("finalGrade").value = "";

        // Sayfayı yeniden yükle
        window.location.reload();
    }
}
