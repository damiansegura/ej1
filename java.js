function selectItem(sectionId, elementId) {
    var fot = document.getElementById(sectionId).getElementsByTagName('li');

    for (var i = 0; i < fot.length; i++) {

        if (fot[i].className == "selected") {

            fot[i].className= "";

        }
    }

    document.getElementById(elementId).className = "selected";
}
