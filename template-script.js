

// Load the template from template.html to class .template
$(document).ready(function () {
    var template = 'template.html';
    // assign in replacement the html file containing the content for main
    var replacement = $('#main-content');
    $('#template').load(template);

    $.get(template + '#main', function () {
        $('#main').html(replacement);
    });
});
