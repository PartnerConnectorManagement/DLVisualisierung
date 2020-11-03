var checkWaWi = false;
var checkShopsystem = false;
var checkPim = false;

var checkFullService = true;
var checkSpecialService = true;
var checkAgentur = true;
var checkContentProvider = true;
var keineZuordnung = true;

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

function fullServiceFilter() {
    if (checkFullService) {
        checkFullService = false;
        document.getElementById('checkFullService').style.visibility = 'hidden';
    } else {
        checkFullService = true;
        document.getElementById('checkFullService').style.visibility = 'visible';
    }
    reDrawEverything();
}

function specialServiceFilter() {
    if (checkSpecialService) {
        checkSpecialService = false;
        document.getElementById('checkSpecialService').style.visibility = 'hidden';
    } else {
        checkSpecialService = true;
        document.getElementById('checkSpecialService').style.visibility = 'visible';
    }
    reDrawEverything();
}

function agenturFilter() {
    if (checkAgentur) {
        checkAgentur = false;
        document.getElementById('checkAgentur').style.visibility = 'hidden';
    } else {
        checkAgentur = true;
        document.getElementById('checkAgentur').style.visibility = 'visible';
    }
    reDrawEverything();
}

function contentProviderFilter() {
    if (checkContentProvider) {
        checkContentProvider = false;
        document.getElementById('checkContentProvider').style.visibility = 'hidden';
    } else {
        checkContentProvider = true;
        document.getElementById('checkContentProvider').style.visibility = 'visible';
    }
    reDrawEverything();
}

function keineZuordnungFilter() {
    if (keineZuordnung) {
        keineZuordnung = false;
        document.getElementById('checkKeineZuordnung').style.visibility = 'hidden';
    } else {
        keineZuordnung = true;
        document.getElementById('checkKeineZuordnung').style.visibility = 'visible';
    }
    reDrawEverything();
}

function restFilter() {
    document.getElementById('checkSpecialService').style.visibility = 'visible';
    checkSpecialService = true;
    document.getElementById('checkAgentur').style.visibility = 'visible';
    checkAgentur = true;
    document.getElementById('checkContentProvider').style.visibility = 'visible';
    checkContentProvider = true;
    document.getElementById('checkKeineZuordnung').style.visibility = 'visible';
    keineZuordnung = true;
    document.getElementById('WaWiCheck').style.visibility = 'hidden';
    checkWaWi = false;
    document.getElementById('shopsystemCheck').style.visibility = 'hidden';
    checkShopsystem = false;
    document.getElementById('pimCheck').style.visibility = 'hidden';
    checkPim = false;
    reDrawEverything();
}
