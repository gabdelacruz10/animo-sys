var list = document.getElementById('navlist').children;
var href = document.location.href;
console.log(list);

if (href.search('-mod') == -1) {
    for (let i = 0; i < list.length; i++) {
        var file = document.location.href.match(/[^\/]+$/)[0] || 'index.html';
        if (file == list[i].firstElementChild.getAttribute('href')) {
            console.log(list[i].firstElementChild.getAttribute('href'));
            list[i].firstElementChild.id = 'active';
        }
    }
} else {
    var content = document.getElementById('content');
    content.style.marginLeft = 0;
}