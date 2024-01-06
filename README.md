
<!-- ... (Önceki HTML kodları) ... -->

<script>

    jQuery(document).ready( function($) {

        function FilterInput(event) {
            var keyCode = ('which' in event) ? event.which : event.keyCode;

            isNotWanted = (keyCode == 50 || keyCode == 51 || keyCode == 52 || keyCode == 53 || keyCode == 54 || keyCode == 55 || keyCode == 56 || keyCode == 57 || keyCode == 98 || keyCode == 99 || keyCode == 100 || keyCode == 101 || keyCode == 102 || keyCode == 103 || keyCode == 104 || keyCode == 105 );
            return !isNotWanted;
        };

        function handlePaste (e) {
            var clipboardData, pastedData;

            // Get pasted data via clipboard API
            clipboardData = e.clipboardData || window.clipboardData;
            pastedData = clipboardData.getData('Text').toUpperCase();

            if(pastedData.indexOf('E')>-1) {
                e.stopPropagation();
                e.preventDefault();
            }
        };
        
        // Disable scroll when focused on a number input.
        $('form').on('focus', 'input[type=number]', function(e) {
            $(this).on('wheel', function(e) {
                e.preventDefault();
            });
        });

        // Restore scroll on number inputs.
        $('form').on('blur', 'input[type=number]', function(e) {
            $(this).off('wheel');
        });

        // Disable up and down keys.
        $('form').on('keydown', 'input[type=number]', function(e) {
            if ( e.which == 38 || e.which == 40 )
                e.preventDefault();
        });  

        // Not Hesaplama Fonksiyonu
        function calculateGrade() {
            var araSinavPuan = parseFloat($("#araSinavPuan").val());
            var finalSinavPuan = parseFloat($("#finalSinavPuan").val());
            var gecmeNotu = (araSinavPuan * 0.3) + (finalSinavPuan * 0.7);

            // Not Hesaplamalarını Göster
            $("#gecmeNotu").val(gecmeNotu.toFixed(2));
            $("#durum").text(gecmeNotu >= 50 ? "Geçtiniz" : "Geçemediniz");
        }

        // Form Gönderildiğinde Not Hesaplamasını Çağır
        $("form").submit(function(e) {
            e.preventDefault();
            calculateGrade();
        });

    });

</script>

<!-- ... (Sonraki HTML kodları) ... -->
