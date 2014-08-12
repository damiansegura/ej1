function footbar(id) {
    var fot = document.getElementById('footer').getElementsByTagName('li');

    for (var i = 0; i < fot.length; i++) {

        fot[i].className= "lista2";

    }

    document.getElementById(id).className= "lista2_1";
}

function myFunction(id) {
    var fot = document.getElementById('menu').getElementsByTagName('li');

    for (var i = 0; i < fot.length; i++) {

        if (fot[i].className == "selected") {

            fot[i].className= "";

        }
    }

    document.getElementById(id).className = "selected";
}
