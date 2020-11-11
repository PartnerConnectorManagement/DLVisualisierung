var buttonState = 0;
var buttonStateWaWi = 0;
var futureVisible = false;
var progressVisible = false;
var wawiVisible = false;

function moveButton() {
    if (buttonState === 1) {
        document.getElementById('mover').style.left = '0px';
        document.getElementById('mover').innerHTML = 'Aktuell';
        buttonState = 0;
        futureVisible = false;
        reDrawEverything();
    } else if (buttonState === 0) {
        document.getElementById('mover').style.left = '130px';
        document.getElementById('mover').innerHTML = 'Zukunft';
        buttonState = 1;
        futureVisible = true;
        reDrawEverything();
    }
    reset();
}


function moveButtonState(state) {
    if (state === 0) {
        document.getElementById('mover2').style.left = '0px';
        document.getElementById('mover2').innerHTML = 'Aktuell';
        futureVisible = false;
        progressVisible = false;
    } else if (state === 1) {
        document.getElementById('mover2').style.left = '86.666666px';
        document.getElementById('mover2').innerHTML = 'Anbindung';
        futureVisible = false;
        progressVisible = true;
    } else if (state === 2) {
        document.getElementById('mover2').style.left = '173.3333333px';
        document.getElementById('mover2').innerHTML = 'Zukunft';
        futureVisible = true;
        progressVisible = false;
    }
    reDrawEverything();
    reset();
}

function moveButtonWaWi() {
    if (buttonStateWaWi === 1) {
        document.getElementById('moverWaWi').style.left = '0px';
        buttonStateWaWi = 0;
        wawiVisible = false;
        var allWawi = Object.keys(wawi)
        for (var i = 0; i < allWawi.length; i++) {
            delete wawi[allWawi[i]].x;
            delete wawi[allWawi[i]].y;
        }
        reDrawEverything();
    } else if (buttonStateWaWi === 0) {
        document.getElementById('moverWaWi').style.left = '130px';
        buttonStateWaWi = 1;
        wawiVisible = true;
        reDrawEverything();
    }
    reset();
}
