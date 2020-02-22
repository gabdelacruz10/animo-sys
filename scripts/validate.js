function validate() {
    var idNumber = document.getElementById("idNumber");
    var password = document.getElementById("password");
    var errMsg = document.getElementById('errMsg');
    var bg = '#F09A97';
    var err = 0;

    if (idNumber.value == '' || isNaN(idNumber.value)) {
        err++;
    }

    if (password.value == '') {
        err++;
    }

    if (err == 0) {
        window.location.href = '/index.html';
    } else {
        idNumber.style.borderColor = bg;
        password.style.borderColor = bg;
        errMsg.style.color = bg;
        errMsg.innerHTML = "Invalid ID Number/Password.";
    }


}
