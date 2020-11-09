# DLVisualisierung


## Content

1. Der generelle Aufbau
1. Erstellung eines DL/WaWi/Shops


## Der generelle Aufbau

Das komplette Projekt ist in HTML, CSS und JS geschrieben. Relevant fuer die Pflegung des Projektes sind jedoch nur wenige Dateien. Grundsaetzlich gibt es die index.html, in der die Elemente alle eingetragen sind. Dort gibt es insgesamt drei große Bloecke mit ServiceProvider. Darueber hinaus gibt es noch drei weitere wichtige Dateien: wawi.js, shops.js und dl.js. In diesen werden dann die einzelnen ServiceProvider definiert und deren Eigenschaften gesetzt und bearbeitet.

## Erstellung eines DL/WaWi/Shops

Fuer die Erstellung eines neuen DL/WaWi/Shops, auch wenn es drei unterschiedliche ServiceProvider sind, ist es ein sehr aehnlicher Vorgang. Wichtig ist, dass im gesamten Projekt die gleichen Namen verwendet werden, da das Programm sonst die verschiedenen ServiceProvider nicht finden kann. Der Prozess besteht grundsaetzlich nur aus zwei groben Schritten:

1. Hinzufuegen des Bildes in den images Ordner.
1. Hinzufuegen in die index.HTML
1. Hinzufuegen in wawi.js, shops.js oder dl.js.

Zuerst muss das Logo in der beigelegten PowerPoint im Teams erstellt werden. Dann als ein Bild exportieren und in den Ordner images legen. Erstmal muss geguckt werden, welche Art von ServiceProvider eingetragen werden soll und es muss sich vorab eine id fuer den ServiceProvider ausgedacht werden, die im kompletten Dokument einheitlich verwendet wird. In diesem Beispiel nutzen wir immer die ID `ServiceProvider123`  In der index.html wird nun der ServiceProvider eingetragen.


```html
<img alt="test" src="images/ServiceProvider123.png" id="ServiceProvider123" class="SHOP" onmousedown="press('ServiceProvider123', 'SHOP')">
```
