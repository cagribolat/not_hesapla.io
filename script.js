<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        .pass {
            border: 2px solid green;
        }

        .fail {
            border: 2px solid red;
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
    <div id="resultContainer"></div>

    <script>
        // JavaScript kodu buraya gelecek
    </script>
</body>
</html>
