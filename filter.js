var checkWaWi = false;
var checkShopsystem = false;
var checkPim = false;

function checkBoxPressed(checkBoxID, variable) {
    if (variable) {
        variable = false;
        document.getElementById(checkBoxID).style.backgroundColor = 'hidden';
    } else {
        variable = true;
        document.getElementById(checkBoxID).style.visibility = 'hidden';
    }
}

function wawiFilter() {
    if (checkWaWi) {
        checkWaWi = false;
        document.getElementById('WaWiCheck').style.visibility = 'hidden';
    } else {
        checkWaWi = true;
        document.getElementById('WaWiCheck').style.visibility = 'visible';
    }
    reDrawEverything();
}

function shopsystemFilter() {
    if (checkShopsystem) {
        checkShopsystem = false;
        document.getElementById('shopsystemCheck').style.visibility = 'hidden';
    } else {
        checkShopsystem = true;
        document.getElementById('shopsystemCheck').style.visibility = 'visible';
    }
    reDrawEverything();
}

function pimFilter() {
    if (checkPim) {
        checkPim = false;
        document.getElementById('pimCheck').style.visibility = 'hidden';
    } else {
        checkPim = true;
        document.getElementById('pimCheck').style.visibility = 'visible';
    }
    reDrawEverything();
}
