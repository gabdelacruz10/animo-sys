var file = document.location.href.match(/[^\/]+$/)[0];
var list = document.getElementById('sidebarlist').children;


console.log(list);

for (let i = 0; i < list.length; i++) {
    if (file == list[i].firstElementChild.getAttribute('href')) {
        console.log(list[i].firstElementChild.getAttribute('href'));
        // var active = document.createAttribute('class');
        // active.value = 'active';
        list[i].firstElementChild.id = 'active';
    }
}