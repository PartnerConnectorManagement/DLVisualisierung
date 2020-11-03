function showImage(id) {
  document.getElementById(id).style.visibility = 'visible';
  document.getElementById(id).style.opacity = '1';
}

function hideImage(id) {
  document.getElementById(id).style.visibility = 'hidden';
  document.getElementById(id).style.opacity = '0';
}

function placeImages(inputArray, circleRadius, imageRadius) {
    let angle = 360/Object.keys(inputArray).length;
    var arrayNames = Object.keys(inputArray);

    let numberOfImages = arrayNames.length;
    let circumference = 2 * 3.1415 * circleRadius;

    let maximumImageSize = circumference/(numberOfImages*1.15)/2;
    if (imageRadius > maximumImageSize) {
        imageRadius = maximumImageSize;
    }


    for (var i = 0; i < arrayNames.length; i++) {
        let x = centerX + circleRadius * Math.sin(angle*i* ( Math.PI / 180 ));
        let y = centerY + circleRadius * Math.cos(angle*i* ( Math.PI / 180 ));

        var element = document.getElementById(arrayNames[i]);
        element.style.position = 'absolute';
        showImage(element.id);
        element.style.left = x-imageRadius-shadowRadius+canvasLeft + "px";
        element.style.top = y-imageRadius-shadowRadius+canvasTop + "px";
        element.height = imageRadius*2;
        element.width = imageRadius*2;
        var type = inputArray[arrayNames[i]].type
        if (type === 'SHOP') {
            shops[arrayNames[i]].x = x;
            shops[arrayNames[i]].y = y;
        } else if (type === 'DL') {
            dl[arrayNames[i]].x = x;
            dl[arrayNames[i]].y = y;
        } else if (type === 'WaWi') {
            wawi[arrayNames[i]].x = x;
            wawi[arrayNames[i]].y = y;
        }
    }
}


function setImagesNew() {
    let firstCircle = {};
    let secondCircle = {};
    let thirdCircle = {};

    let firstRadius = outerCircleRadius;
    let secondRadius = innerCircleRadius;
    let thirdRadius = wawiCircleRadius;

    let firstCircleImageRadius = dlRadius;
    let secondCircleImageRadius = shopsRadius;
    let thirdCircleImageRadius = wawiRadius;

    let allDLNames = Object.keys(dl);
    let allShopsNames = Object.keys(shops);
    let allWaWisNames = Object.keys(wawi)

    if (futureVisible) {
        for (var i = 0; i < allDLNames.length; i++) {
            //DL Eigenschaften
            if (checkWaWi && dl[allDLNames[i]].WaWiSystem !== 'X') {
                hideImage(allDLNames[i]);
                continue;
            }
            if (checkShopsystem && dl[allDLNames[i]].Shopsystem !== 'X') {
                hideImage(allDLNames[i]);
                continue;
            }
            if (checkPim && dl[allDLNames[i]].PimSystem !== 'X') {
                hideImage(allDLNames[i]);
                continue;
            }

            //DL Typen
            if (checkFullService && dl[allDLNames[i]].Servicetype === 'FullServiceProvider') {

            } else if (checkSpecialService && dl[allDLNames[i]].Servicetype == 'SpecialServiceProvider') {

            } else if (checkAgentur && dl[allDLNames[i]].Servicetype == 'AgenturProvider') {

            } else if (checkContentProvider && dl[allDLNames[i]].Servicetype == 'ContentProvider') {

            } else if (keineZuordnung && dl[allDLNames[i]].Servicetype == '') {

            } else {
                hideImage(allDLNames[i]);
                continue;
            }

          firstCircle[allDLNames[i]]=(dl[allDLNames[i]]);
          firstCircle[allDLNames[i]].type = 'DL';
          showImage(allDLNames[i]);
        }
        for (var i = 0; i < allShopsNames.length; i++) {
          if (shops[allShopsNames[i]].angebundenZukunft === true) {
              if (checkWaWi && shops[allShopsNames[i]].WaWiSystem !== 'X') {
                  hideImage(allShopsNames[i]);
                  continue;
              }
              if (checkShopsystem && shops[allShopsNames[i]].Shopsystem !== 'X') {
                  hideImage(allShopsNames[i]);
                  continue;
              }
              if (checkPim && shops[allShopsNames[i]].PimSystem !== 'X') {
                  hideImage(allShopsNames[i]);
                  continue;
              }

              if (checkFullService && shops[allShopsNames[i]].Servicetype === 'FullServiceProvider') {

              } else if (checkSpecialService && shops[allShopsNames[i]].Servicetype == 'SpecialServiceProvider') {

              } else if (checkAgentur && shops[allShopsNames[i]].Servicetype == 'AgenturProvider') {

              } else if (checkContentProvider && shops[allShopsNames[i]].Servicetype == 'ContentProvider') {

              } else if (keineZuordnung && dl[allShopsNames[i]].Servicetype == '') {

              } else {
                  hideImage(allShopsNames[i]);
                  continue;
              }
            firstCircle[allShopsNames[i]]=(shops[allShopsNames[i]]);
            firstCircle[allShopsNames[i]].type = 'SHOP';
          } else {
            secondCircle[allShopsNames[i]]=(shops[allShopsNames[i]]);
            secondCircle[allShopsNames[i]].type = 'SHOP';
          }
        }
        for (var i = 0; i < allWaWisNames.length; i++) {
          if (wawi[allWaWisNames[i]].angebundenZukunft === true) {
              if (checkWaWi && wawi[allWaWisNames[i]].WaWiSystem !== 'X') {
                  hideImage(allWaWisNames[i]);
                  continue;
              }
              if (checkShopsystem && wawi[allWaWisNames[i]].Shopsystem !== 'X') {
                  hideImage(allWaWisNames[i]);
                  continue;
              }
              if (checkPim && wawi[allWaWisNames[i]].PimSystem !== 'X') {
                  hideImage(allWaWisNames[i]);
                  continue;
              }

              if (checkFullService && wawi[allWaWisNames[i]].Servicetype === 'FullServiceProvider') {

              } else if (checkSpecialService && wawi[allWaWisNames[i]].Servicetype == 'SpecialServiceProvider') {

              } else if (checkAgentur && wawi[allWaWisNames[i]].Servicetype == 'AgenturProvider') {

              } else if (checkContentProvider && wawi[allWaWisNames[i]].Servicetype == 'ContentProvider') {

              } else if (keineZuordnung && wawi[allWaWisNames[i]].Servicetype == '') {

              } else {
                  hideImage(allWaWisNames[i]);
                  continue;
              }

            firstCircle[allWaWisNames[i]]=(wawi[allWaWisNames[i]]);
            firstCircle[allWaWisNames[i]].type = 'WaWi';
          } else {
            thirdCircle[allWaWisNames[i]]=(wawi[allWaWisNames[i]]);
            thirdCircle[allWaWisNames[i]].type = 'WaWi';
          }
        }
    } else {
        for (var i = 0; i < allDLNames.length; i++) {
          console.log()
            if (dl[allDLNames[i]].angebunden) {
                if (checkWaWi && dl[allDLNames[i]].WaWiSystem !== 'X') {
                    hideImage(allDLNames[i]);
                    continue;
                }
                if (checkShopsystem && dl[allDLNames[i]].Shopsystem !== 'X') {
                    hideImage(allDLNames[i]);
                    continue;
                }
                if (checkPim && dl[allDLNames[i]].PimSystem !== 'X') {
                    hideImage(allDLNames[i]);
                    continue;
                }
                if (checkFullService && dl[allDLNames[i]].Servicetype === 'FullServiceProvider') {

                } else if (checkSpecialService && dl[allDLNames[i]].Servicetype == 'SpecialServiceProvider') {

                } else if (checkAgentur && dl[allDLNames[i]].Servicetype == 'AgenturProvider') {

                } else if (checkContentProvider && dl[allDLNames[i]].Servicetype == 'ContentProvider') {

                } else if (keineZuordnung && dl[allDLNames[i]].Servicetype == '') {

                } else {
                    hideImage(allDLNames[i]);
                    continue;
                }
                firstCircle[allDLNames[i]]=(dl[allDLNames[i]]);
                firstCircle[allDLNames[i]].type = 'DL';
            } else {
              hideImage(allDLNames[i]);
            }
        }
        for (var i = 0; i < allShopsNames.length; i++) {
            if (shops[allShopsNames[i]].angebunden) {
                if (checkWaWi && shops[allShopsNames[i]].WaWiSystem !== 'X') {
                    hideImage(allShopsNames[i]);
                    continue;
                }
                if (checkShopsystem && shops[allShopsNames[i]].Shopsystem !== 'X') {
                    hideImage(allShopsNames[i]);
                    continue;
                }
                if (checkPim && shops[allShopsNames[i]].PimSystem !== 'X') {
                    hideImage(allShopsNames[i]);
                    continue;
                }

                if (checkFullService && shops[allShopsNames[i]].Servicetype === 'FullServiceProvider') {

                } else if (checkSpecialService && shops[allShopsNames[i]].Servicetype == 'SpecialServiceProvider') {

                } else if (checkAgentur && shops[allShopsNames[i]].Servicetype == 'AgenturProvider') {

                } else if (checkContentProvider && shops[allShopsNames[i]].Servicetype == 'ContentProvider') {

                } else if (keineZuordnung && dl[allShopsNames[i]].Servicetype == '') {

                } else {
                    hideImage(allShopsNames[i]);
                    continue;
                }

                firstCircle[allShopsNames[i]]=(shops[allShopsNames[i]]);
                firstCircle[allShopsNames[i]].type = 'SHOP';
            } else {
                secondCircle[allShopsNames[i]]=(shops[allShopsNames[i]]);
                secondCircle[allShopsNames[i]].type = 'SHOP';
            }
        }
        for (var i = 0; i < allWaWisNames.length; i++) {
          if (wawi[allWaWisNames[i]].angebunden === true) {
              if (checkWaWi && wawi[allWaWisNames[i]].WaWiSystem !== 'X') {
                  hideImage(allWaWisNames[i]);
                  continue;
              }
              if (checkShopsystem && wawi[allWaWisNames[i]].Shopsystem !== 'X') {
                  hideImage(allWaWisNames[i]);
                  continue;
              }
              if (checkPim && wawi[allWaWisNames[i]].PimSystem !== 'X') {
                  hideImage(allWaWisNames[i]);
                  continue;
              }

              if (checkFullService && wawi[allWaWisNames[i]].Servicetype === 'FullServiceProvider') {

              } else if (checkSpecialService && wawi[allWaWisNames[i]].Servicetype == 'SpecialServiceProvider') {

              } else if (checkAgentur && wawi[allWaWisNames[i]].Servicetype == 'AgenturProvider') {

              } else if (checkContentProvider && wawi[allWaWisNames[i]].Servicetype == 'ContentProvider') {

              } else if (keineZuordnung && wawi[allWaWisNames[i]].Servicetype == '') {

              } else {
                  hideImage(allWaWisNames[i]);
                  continue;
              }
            firstCircle[allWaWisNames[i]]=(wawi[allWaWisNames[i]]);
            firstCircle[allWaWisNames[i]].type = 'WaWi';
          } else {
            thirdCircle[allWaWisNames[i]]=(wawi[allWaWisNames[i]]);
            thirdCircle[allWaWisNames[i]].type = 'WaWi';
          }
        }
    }

    let angelFirstCircle = 360/Object.keys(firstCircle).length;
    let angelSecondCircle = 360/Object.keys(secondCircle).length;
    let angelThirdCircle = 360/Object.keys(thirdCircle).length;

    if (wawiVisible) {
      for (var i = 0; i < Object.keys(thirdCircle).length; i++) {
        var name = Object.keys(thirdCircle)[i]
        showImage(name);
      }
      placeImages(thirdCircle, thirdRadius, thirdCircleImageRadius);
    } else {
      for (var i = 0; i < Object.keys(thirdCircle).length; i++) {
        var name = Object.keys(thirdCircle)[i]
        hideImage(name);
      }
    }

    placeImages(firstCircle, firstRadius, firstCircleImageRadius);
    placeImages(secondCircle, secondRadius, secondCircleImageRadius);


}
