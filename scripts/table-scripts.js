var rows = document.getElementsByTagName('tr');

for (let i = 1; i < rows.length; i++) {
    console.log(rows[i].children);
    var row = rows[i];
    var cell = row.insertCell(-1);
    var button = document.createElement('button');

    button.innerHTML = 'Remove';
    cell.appendChild(button);
    cell.style.border = 'none';
};

// delete specific row
$("button").click(function () {
    $(this).closest('tr').remove();
});


function deleteRow(button) {
    $(button).click(function() {
        $(this).closest('tr').remove();
    })
};