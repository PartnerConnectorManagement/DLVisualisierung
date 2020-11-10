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
```javascript
ServiceProvider123: {
    title: 'ServiceProvider123',
    text: '',
    Shopsystem: 'X',
    PimSystem: 'X',
    WaWiSystem: 'X',
    bullet1: 'Dies ist ein Bullet Punkt',
    bullet2: 'Dies ist ein Bullet Punkt',
    bullet3: 'Dies ist ein Bullet Punkt',
    angebunden: true,
    Servicetype: '',
    shopSysteme: [
        'Shop 1',
        'Shop 2'
    ],
    WaWi: [
        'WaWi 1',
        'WaWi 2'
    ],
    DL: [
        'DL 1',
        'DL 2'
    ]
}
```

##### `titel`
Das Attribute Titel ist der Name der in der Sidebar angezeigt wird. Dieser kann varrieren von der ID und kann komplett frei gestaltet werden. Er ist ein Pflichtattribute und sollte auch befuellt werden.

##### `text`
Das Attribute text ist der Beschreibungstext in der Sidebar. Dieser ist ein Pflichtattribute und muss nicht befuellt werden. Er soll den ServiceProvider kurz beschreiben und kann auch ein Marketingtext vom ServiceProvider sein.

##### `Shopsystem`, `PimSystem`, `WaWiSystem`
Diese Attribute fuellen die Tabelle in der Sidebar. Diese sind Pflichtattribute und sollten auch befuellt werden. Um es insgesamt einheitlich zu halten, sollte diese mit `''` oder `'X'` befuellt werden.

##### `bullet1`, `bullet2`, `bullet3`
Diese Attribute fuellen die Bulletpoints in der Sidebar und sind keine Pflichtattribute. Es koennen auch nur 1 oder 2 der drei Bulletpoints verwendet werden.

##### `angebunden`
Dieses Attribute definiert, ob der DL aktuell angebunden ist. Wenn er bereits jetzt angebunden ist, dann muss der Value `true` sein. Wenn nicht kann er entweder auf `false` gesetzt werden oder vollstaendig weggelassen. Empfohlen wird, dass der value aber auf `false` gesetzt wird.

##### `Servicetype`
Der Servicetype defineirt, welche Art von ServiceProvider der DL ist. Es gibt insgesamt vier verschiedenen Moeglichkeiten, die im folgenden aufgelistet werden. Hier ist wieder die richtige Schreibweise wichtig.
1. `FullServiceProvider`
2. `SpecialServiceProvider`
3. `AgenturProvider`
4. `ContentProvider`


##### `shopSysteme`
shopSysteme ist eine Liste von allen Shops die an den ServiceProvider angebunden sind. Hier ist wichtig, erneut die richtge Schreibweise zu verwenden.

##### `WaWi`
WaWi ist eine Liste von allen WaWis die an den ServiceProvider angebunden sind. Hier ist wichtig, erneut die richtge Schreibweise zu verwenden.

##### `DL`
DL ist eine Liste von allen Diensleistern die an den ServiceProvider angebunden sind. Hier ist wichtig, erneut die richtge Schreibweise zu verwenden.



#### SHOP
```javascript
ServiceProvider123: {
    title: 'ServiceProvider123',
    text: '',
    bullet1: '',
    bullet2: '',
    bullet3: '',
    verysmall: 'X',
    small: 'X',
    medium: 'X',
    big: 'X',
    verybig: 'X',
    Servicetype: '',
    angebunden: false,
    angebundenZukunft: false,
}
```

##### `titel`
Das Attribute Titel ist der Name der in der Sidebar angezeigt wird. Dieser kann varrieren von der ID und kann komplett frei gestaltet werden. Er ist ein Pflichtattribute und sollte auch befuellt werden.

##### `text`
Das Attribute text ist der Beschreibungstext in der Sidebar. Dieser ist ein Pflichtattribute und muss nicht befuellt werden. Er soll den ServiceProvider kurz beschreiben und kann auch ein Marketingtext vom ServiceProvider sein.

##### `verysmall`, `small`, `medium`, `big`, `verybig`
Diese Attribute fuellen die Tabelle in der Sidebar. Diese sind Pflichtattribute und sollten auch befuellt werden. Um es insgesamt einheitlich zu halten, sollte diese mit `''` oder `'X'` befuellt werden. Sie defienieren, fuer welche Groeße von Partner der Shop geeignet ist.

##### `bullet1`, `bullet2`, `bullet3`
Diese Attribute fuellen die Bulletpoints in der Sidebar und sind keine Pflichtattribute. Es koennen auch nur 1 oder 2 der drei Bulletpoints verwendet werden.

##### `angebunden`
Dieses Attribute definiert, ob der Shop aktuell angebunden ist. Wenn er angebunden ist, dann muss der Value `true` sein. Wenn nicht kann er entweder auf `false` gesetzt werden oder vollstaendig weggelassen. Empfohlen wird, dass der value aber auf `false` gesetzt wird.

##### `angebundenZukunft`
Dieses Attribute definiert, ob der Shop in Zukunft angebunden ist. Wenn er in Zukunft angebunden ist, dann muss der Value `true` sein. Wenn nicht kann er entweder auf `false` gesetzt werden oder vollstaendig weggelassen. Empfohlen wird, dass der Value aber auf `false` gesetzt wird.

##### `Servicetype`
Der Servicetype defineirt, welche Art von ServiceProvider der DL ist. Es gibt insgesamt vier verschiedenen Moeglichkeiten, die im folgenden aufgelistet werden. Hier ist wieder die richtige Schreibweise wichtig.
1. `FullServiceProvider`
2. `SpecialServiceProvider`
3. `AgenturProvider`
4. `ContentProvider`


#### WaWi
```javascript
ServiceProvider123: {
    title: 'ServiceProvider123',
    text: '',
    Shopsystem: 'X',
    PimSystem: 'X',
    WaWiSystem: 'X',
    bullet1: 'Dies ist ein Bullet Punkt',
    bullet2: 'Dies ist ein Bullet Punkt',
    bullet3: 'Dies ist ein Bullet Punkt',
    angebunden: false,
    angebundenZukunft: true,
    Servicetype: '',
    shopSysteme: [
        'Shop 1',
        'Shop 2'
    ]
}
```

##### `titel`
Das Attribute Titel ist der Name der in der Sidebar angezeigt wird. Dieser kann varrieren von der ID und kann komplett frei gestaltet werden. Er ist ein Pflichtattribute und sollte auch befuellt werden.

##### `text`
Das Attribute text ist der Beschreibungstext in der Sidebar. Dieser ist ein Pflichtattribute und muss nicht befuellt werden. Er soll den ServiceProvider kurz beschreiben und kann auch ein Marketingtext vom ServiceProvider sein.

##### `Shopsystem`, `PimSystem`, `WaWiSystem`
Diese Attribute fuellen die Tabelle in der Sidebar. Diese sind Pflichtattribute und sollten auch befuellt werden. Um es insgesamt einheitlich zu halten, sollte diese mit `''` oder `'X'` befuellt werden.

##### `bullet1`, `bullet2`, `bullet3`
Diese Attribute fuellen die Bulletpoints in der Sidebar und sind keine Pflichtattribute. Es koennen auch nur 1 oder 2 der drei Bulletpoints verwendet werden.

##### `angebunden`
Dieses Attribute definiert, ob die WaWi aktuell angebunden ist. Wenn sie bereits jetzt angebunden ist, dann muss der Value `true` sein. Wenn nicht kann es entweder auf `false` gesetzt werden oder vollstaendig weggelassen. Empfohlen wird, dass der Value aber auf `false` gesetzt wird.

##### `angebundenZukunft`
Dieses Attribute definiert, ob die WaWi in Zukunft angebunden ist. Wenn er in Zukunft angebunden ist, dann muss der Value `true` sein. Wenn nicht kann er entweder auf `false` gesetzt werden oder vollstaendig weggelassen. Empfohlen wird, dass der Value aber auf `false` gesetzt wird.


##### `Servicetype`
Der Servicetype defineirt, welche Art von ServiceProvider der DL ist. Es gibt insgesamt vier verschiedenen Moeglichkeiten, die im folgenden aufgelistet werden. Hier ist wieder die richtige Schreibweise wichtig.
1. `FullServiceProvider`
2. `SpecialServiceProvider`
3. `AgenturProvider`
4. `ContentProvider`


##### `shopSysteme`
shopSysteme ist eine Liste von allen Shops die an den ServiceProvider angebunden sind. Hier ist wichtig, erneut die richtge Schreibweise zu verwenden.

##### `WaWi`
WaWi ist eine Liste von allen WaWis die an den ServiceProvider angebunden sind. Hier ist wichtig, erneut die richtge Schreibweise zu verwenden.
