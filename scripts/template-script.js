// Load the template from template.html to class .template
$(document).ready(function () {
    var href = window.location.href;
    var template = (href.search('-mod') == -1) ? 'template.html' : 'template-mod.html';
    $('#template').load(template);

    $('footer').html('<p>© CCAPDEV X22 Team 3 <br> Dela Cruz, Gubat, Ramos</p>');

    var navlist = $('#navlist');

    var li = "<li class='res-16'><a class='navlinks' href='link.html'>content</a></li>";

    console.log(href);
    // if (href.search('-mod')) {
    //     var modlist = { students: 'STUDENTS', settings: 'SETTINGS', logout: 'LOG OUT' };
    //     console.log(href.search('mod'));

    //     navlist.remove();

    //     for (const key in modlist) {
    //         li.replace('link', key);
    //         li.replace('content', modlist[key]);
    //         console.log(li);
    //         navlist.append(li);
    //     }
    // }
});
