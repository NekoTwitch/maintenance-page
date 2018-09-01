$(document).ready(function () {
    $('.fr').hide();
    $('#en').css("opacity", 0.5);

    $('#en').click(function () {
        $('#en').fadeTo(250, 0.5);
        $('#fr').fadeTo(250, 1);
        $('.en').show();
        $('.fr').hide();
    });

    $('#fr').click(function () {
        $('#fr').fadeTo(250, 0.5);
        $('#en').fadeTo(250, 1);
        $('.fr').show();
        $('.en').hide();
    })
});