
function toggleDiv(divId) {
    $("#"+divId).slideToggle('slow');
    $('.content').not($("#"+divId)).slideUp();


}
