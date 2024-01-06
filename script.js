jQuery(document).ready(function($) {

    function FilterInput(event) {
        var keyCode = ('which' in event) ? event.which : event.keyCode;
        var isNotWanted = (keyCode == 50 || keyCode == 51 || keyCode == 52 || keyCode == 53 || keyCode == 54 || keyCode == 55 || keyCode == 56 || keyCode == 57 || keyCode == 98 || keyCode == 99 || keyCode == 100 || keyCode == 101 || keyCode == 102 || keyCode == 103 || keyCode == 104 || keyCode == 105);
        return !isNotWanted;
    }

    function handlePaste(e) {
        var clipboardData, pastedData;
        clipboardData = e.clipboardData || window.clipboardData;
        pastedData = clipboardData.getData('Text').toUpperCase();

        if (pastedData.indexOf('E') > -1) {
            e.stopPropagation();
            e.preventDefault();
        }
    }

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
        if (e.which == 38 || e.which == 40)
            e.preventDefault();
    });

});
