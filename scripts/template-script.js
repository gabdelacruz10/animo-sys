// Load the template from template.html to class .template
$(document).ready(function () {
    var template = 'template.html';
    $('#template').load(template);

    $('footer').html('<p>© CCAPDEV X22 Team 3 <br> Dela Cruz, Gubat, Ramos</p>');

});
