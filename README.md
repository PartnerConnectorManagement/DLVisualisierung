# DLVisualisierung


## Content

1. Der generelle Aufbau
1. Erstellung eines DL/WaWi/Shops


## Der generelle Aufbau

Das komplette Projekt ist in HTML, CSS und JS geschrieben. Relevant fuer die Pflegung des Projektes sind jedoch nur wenige Dateien. Grundsaetzlich gibt es die `index.html`, in der die Elemente alle eingetragen sind. Dort gibt es insgesamt drei große Bloecke mit ServiceProvider. Darueber hinaus gibt es noch drei weitere wichtige Dateien: `wawi.js`, `shops.js` und `dl.js`. In diesen werden dann die einzelnen ServiceProvider definiert und deren Eigenschaften gesetzt und bearbeitet.

## Erstellung eines DL/WaWi/Shops

Fuer die Erstellung eines neuen DL/WaWi/Shops, auch wenn es drei unterschiedliche ServiceProvider sind, ist es ein sehr aehnlicher Vorgang. Wichtig ist, dass im gesamten Projekt die gleichen Namen verwendet werden, da das Programm sonst die verschiedenen ServiceProvider nicht finden kann. Der Prozess besteht grundsaetzlich nur aus zwei groben Schritten:

1. Hinzufuegen des Bildes in den images Ordner.
1. Hinzufuegen in die `index.html`
1. Hinzufuegen in `wawi.js`, `shops.js` oder `dl.js`.

### Hinzufuegen des Bildes in den images Ordner.

Zuerst muss das Logo in der beigelegten PowerPoint im Teams erstellt werden. Dann als ein Bild exportieren und in den Ordner images legen.

### Hinzufuegen in die index.html

Erstmal muss geguckt werden, welche Art von ServiceProvider eingetragen werden soll und es muss sich vorab eine id fuer den ServiceProvider ausgedacht werden, die im kompletten Dokument einheitlich verwendet wird. In diesem Beispiel nutzen wir immer die ID `ServiceProvider123`  In der `index.html` wird nun der ServiceProvider eingetragen.

Beachte die Woerter `DL`, `SHOP` und `WaWi`, die immer in der Funktion `onmousedown` und der `class` stehen. Wenn ihr Groß-/ Kleinschreibung nicht richtig sind, funktioniert das Programm nicht.

#### DL
```html
<img alt="test" src="images/ServiceProvider123.png" id="ServiceProvider123" class="DL" onmousedown="press('ServiceProvider123', 'DL')">
```
#### SHOP
```html
<img alt="test" src="images/ServiceProvider123.png" id="ServiceProvider123" class="SHOP" onmousedown="press('ServiceProvider123', 'SHOP')">
```
#### WaWi
```html
<img alt="test" src="images/ServiceProvider123.png" id="ServiceProvider123" class="WaWi" onmousedown="press('ServiceProvider123', 'WaWi')">
```


### Hinzufuegen in wawi.js, shops.js oder dl.js.

Nun muessen noch die Daten in den einzelnen Dateien geplegt werden. Diese sind immer in JS Objekte eingetragen, verhalten sich aber aehnlich zu JSON Dateien. Es gibt hierbei Pflichtattribute und freiwillige Attribute. Diese varrieren zwischen DL, Shop und WaWi. Es gibt Pflichtattribute, die aber dennoch auch leer gelassen werden koennen. Das gilt zum Beispiel fuer die Texte in der Infobox.

#### DL
```json
ServiceProvider123: {
    title: 'ServiceProvider123',
    text: '',
    Shopsystem: 'X',
    PimSystem: 'X',
    WaWiSystem: 'X',
    angebunden: true,
    Servicetype: '',
    shopSysteme: [
        'Shop 1',
        'Shop 2'
    ],
    WaWi: [
        'WaWi 1',
        'WaWi 2',
        'Xentral',
        'Mircosoft',
        'SAP',
        'Pixi',
        'SOG',
        'SelectLine',
        'Softengine',
        'vs4',
        'Evelopment',
        'Ebootis'
    ]
},
```

##### `titel`
Das Attribute Titel ist der Name der in der Sidebar angezeigt wird. Dieser kann varrieren von der ID und kann komplett frei gestaltet werden. Er ist ein Pflichtattribute und sollte auch befuellt werden.

##### `text`
Das Attribute text ist der Beschreibungstext in der Sidebar. Dieser ist ein Pflichtattribute und muss nicht befuellt werden. Er soll den ServiceProvider kurz beschreiben und kann auch ein Marketingtext vom ServiceProvider sein.
