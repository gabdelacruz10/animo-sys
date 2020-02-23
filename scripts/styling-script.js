var list = document.getElementById('navlist').children;

console.log(list);

for (let i = 0; i < list.length; i++) {
    var file = document.location.href.match(/[^\/]+$/)[0] || 'index.html';
    if (file == list[i].firstElementChild.getAttribute('href')) {
        console.log(list[i].firstElementChild.getAttribute('href'));
        list[i].firstElementChild.id = 'active';
    }
}