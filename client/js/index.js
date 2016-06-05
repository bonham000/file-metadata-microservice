

$(document).ready(function() {

	$(".details").hide();

});

$("#details").click(function() {

	$(".details").slideDown(400);

});


$("#close").click(function() {

	$(".details").slideUp(400);

});

$('input:file').on("change", function() {
    $('input:submit').prop('disabled', !$(this).val()); 
});