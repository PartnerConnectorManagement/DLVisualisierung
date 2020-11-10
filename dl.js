var dlcontent = '<h2 class="typing" id="heading">Dienstleister</h2><h4 style="color: rgb(144, 144, 144)" class="typing" id="type">Keine Service Zuordnung</h4><p id="text" style="margin-top: 20px; text-align: justify" > </p><ul style="margin-top: 30px"><li id="bullet1"></li><li id="bullet2">consectetur adipisicing elit</li><li id="bullet3">sed do eiusmod</li></ul><table id="sideBoxTable"><tr id="tabelHeading"><td>Anforderungen</td><td id="secondCell"></td></tr><tr><td class="caption">Shopsystem</td><td id="Shopsystem"></td></tr><tr><td class="caption">Pim System</td><td id="PimSystem"></td></tr><tr><td class="caption">WaWi</td><td id="WaWi"></td></tr></table><div id="buttonWebseite" >Zur Webseite</div>'


var dl = {
    Brickfox: {
        title: 'Brickfox',
        text: '',
        Shopsystem: '',
        PimSystem: 'X',
        WaWiSystem: '',
        angebunden: true,
        Servicetype: '',
        shopSysteme: [
            'Shopware',
            'Shopify',
            'Oxid',
            'Magento',
            'Intershop',
            'Cosmoshop',
            'Commercetools'
        ],
        WaWi: [
            'Actindo',
            'Sage',
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

    Tradebyte: {
        title: 'Tradebyte',
        text: 'Das Tradebyte Ökosystem gibt Antworten auf die Herausforderungen der digitalen Transformation im Handel und sorgt für eine nahtlose Vernetzung von Herstellern, Händlern und Retailern im digitalen Supply Chain.',
        bullet1: '',
        bullet2: '',
        bullet3: '',
        Shopsystem: '',
        PimSystem: '',
        WaWiSystem: '',
        big: 'X',
        verybig: '',
        angebunden: true,
        Servicetype: '',
        shopSysteme: [
            'Shopware',
            'Oxid'
        ],
        WaWi: [
          'Pixi'
        ]
    },
    Vario: {
        title: 'Vario',
        text: '',
        bullet1: '',
        bullet2: '',
        bullet3: '',
        Shopsystem: '',
        PimSystem: '',
        WaWiSystem: '',
        big: 'X',
        verybig: '',
        angebunden: false,
        Servicetype: '',
        shopSysteme: [
            'Shopware',
            'Shopify',
            'Gambio',
            'Magento',
            'Modified',
            'Oxid',
            'Presta',
            'Woocommerce',
            'xtCommerce'
        ],
        WaWi: [

        ]
    },
    Lengow: {
        title: 'Lengow',
        text: '',
        bullet1: '',
        bullet2: '',
        bullet3: '',
        Shopsystem: '',
        PimSystem: '',
        WaWiSystem: '',
        big: 'X',
        verybig: '',
        angebunden: false,
        Servicetype: '',
        shopSysteme: [
            'Shopware',
            'Shopify',
            'Presta',
            'Woocommerce',
            'Magento'
        ],
        WaWi: [

        ]
    },
    Microtech: {
        title: 'Microtech',
        text: '',
        bullet1: '',
        bullet2: '',
        bullet3: '',
        Shopsystem: '',
        PimSystem: '',
        WaWiSystem: '',
        big: 'X',
        verybig: '',
        angebunden: false,
        Servicetype: '',
        shopSysteme: [
            'Shopware',
            'Oxid',
            'Magento',
            'Gambio',
            'xtCommerce'
        ],
        WaWi: [

        ]
    },
    Channable: {
        title: 'Channable',
        text: '',
        bullet1: '',
        bullet2: '',
        bullet3: '',
        Shopsystem: '',
        PimSystem: '',
        WaWiSystem: '',
        big: 'X',
        verybig: '',
        angebunden: false,
        Servicetype: '',
        shopSysteme: [
            'Shopware',
            'Presta',
            'Magento',
            'Lightspeed',
            'Woocommerce'
        ],
        WaWi: [

        ]
    },
    Plentymarkets: {
        title: 'Plentymarkets',
        text: '',
        bullet1: '',
        bullet2: '',
        bullet3: '',
        Servicetype: 'FullServiceProvider',
        Shopsystem: 'X',
        PimSystem: 'X',
        WaWiSystem: 'X',
        big: 'X',
        verybig: '',
        angebunden: true,
        shopSysteme: [
            'Shopware',
            'Shopify',
            'Oxid',
            'Magento',
            'Woocommerce'

        ],
        WaWi: [
          'Pixi'
        ]
    },
    _004: {
        title: '004',
        text: 'Der B2C Vertrieb auf Marktplätzen ist für viele Markenhersteller eine neue Herausforderung, da er eine kleinteilige Bestellabwicklung voraussetzt. Als E-Commerce Experten übernehmen wir diese Aufgabe für Sie.',
        bullet1: 'Mit unserem Service „004 Marktplatz Fulfillment“ bieten wir Herstellern einen schnellen und kostengünstigen Zugang zu Marktplätzen',
        bullet2: 'Da wir dabei das komplette Fulfillment übernehmen, können Sie als Hersteller auf den Aufbau einer eigenen B2C Infrastruktur verzichten.',
        Shopsystem: '',
        PimSystem: '',
        WaWiSystem: '',
        big: 'X',
        verybig: '',
        angebunden: true,
        Servicetype: 'AgenturProvider',
        shopSysteme: [
        ],
        WaWi: [

        ],
        url: 'https://www.004gmbh.de/marktplatz-fulfillment/'
    },
    Magnalister: {
        title: 'Magnalister',
        text: '',
        bullet1: '',
        bullet2: '',
        bullet3: '',
        Shopsystem: '',
        PimSystem: '',
        WaWiSystem: '',
        big: 'X',
        verybig: '',
        angebunden: false,
        Servicetype: '',
        shopSysteme: [
            'Shopware',
            'Shopify',
            'Presta',
            'Modified',
            'Magento',
            'Gambio',
            'xtCommerce',
            'Woocommerce'
        ],
        WaWi: [

        ]
    },
    Globalsys: {
        title: 'Globalsys',
        text: '',
        bullet1: '',
        bullet2: '',
        bullet3: '',
        Shopsystem: '',
        PimSystem: '',
        WaWiSystem: '',
        big: 'X',
        verybig: '',
        angebunden: false,
        Servicetype: '',
        shopSysteme: [
            'Shopware',
            'Oxid',
            'Magento'
        ],
        WaWi: [

        ]
    },
    novomind: {
        title: 'novomind',
        text: '',
        bullet1: '',
        bullet2: '',
        bullet3: '',
        Shopsystem: 'X',
        PimSystem: 'X',
        WaWiSystem: '',
        big: 'X',
        verybig: '',
        angebunden: true,
        Servicetype: '',
        shopSysteme: [
        ],
        WaWi: [

        ]
    },
    channeladvisor: {
        title: 'channeladvisor',
        text: '',
        bullet1: '',
        bullet2: '',
        bullet3: '',
        Shopsystem: '',
        PimSystem: '',
        WaWiSystem: '',
        big: 'X',
        verybig: '',
        angebunden: true,
        Servicetype: '',
        shopSysteme: [
        ],
        WaWi: [
          'Pixi'
        ]
    },
    Unicorn2: {
        title: 'Unicorn2',
        text: '',
        bullet1: '',
        bullet2: '',
        bullet3: '',
        Shopsystem: '',
        PimSystem: '',
        WaWiSystem: '',
        big: 'X',
        verybig: '',
        angebunden: true,
        Servicetype: '',
        shopSysteme: [
        ],
        WaWi: [
            'JTL'
        ]
    },
    Billbee: {
        title: 'Billbee',
        text: '',
        bullet1: '',
        bullet2: '',
        bullet3: '',
        Shopsystem: '',
        PimSystem: '',
        WaWiSystem: 'X',
        big: 'X',
        verybig: '',
        angebunden: false,
        Servicetype: '',
        shopSysteme: [
          'Azoo',
          'Epages',
          'Gambio',
          'Jimdo',
          'Lightspeed',
          'Magento',
          'Presta',
          'Serverspot',
          'Shopify',
          'Shopware',
          'Versacommerce',
          'Woocommerce'
        ],
        WaWi: [
            'JTL'
        ]
    },
    ODC: {
        title: 'ODC',
        text: '',
        bullet1: '',
        bullet2: '',
        bullet3: '',
        Shopsystem: '',
        PimSystem: '',
        WaWiSystem: '',
        big: 'X',
        verybig: '',
        angebunden: true,
        Servicetype: 'SpecialServiceProvider',
        shopSysteme: [
          'Shopify',
          'Shopware',
          'Woocommerce',
          'Presta',

        ],
        WaWi: [
            'JTL',
            'weclapp',
            'Dreamrobot'
        ],
        DL: [
            'Plentymarkets',
            'Billbee',
            'Tradebyte'
        ]
    },
    onquality: {
        title: 'OnQuality',
        text: '',
        bullet1: '',
        bullet2: '',
        bullet3: '',
        Shopsystem: '',
        PimSystem: 'X',
        WaWiSystem: '',
        angebunden: true,
        Servicetype: 'FullServiceProvider',
        shopSysteme: [

        ],
        WaWi: [

        ],
        DL: [

        ]
    },
    forbeyond: {
        title: 'forbeyond',
        text: '',
        bullet1: '',
        bullet2: '',
        bullet3: '',
        Shopsystem: '',
        PimSystem: 'X',
        WaWiSystem: '',
        angebunden: true,
        Servicetype: '',
        shopSysteme: [

        ],
        WaWi: [

        ],
        DL: [

        ]
    },
    gojungo: {
        title: 'GoJungo',
        text: 'GoJungo ist ein junges Startup-Unternehmen im Marktplatz-Business. Wir bringen Deine Marke schnell und einfach auf die nationalen und internationalen Marktplätze.',
        bullet1: '',
        bullet2: '',
        bullet3: '',
        Shopsystem: '',
        PimSystem: '',
        WaWiSystem: '',
        angebunden: true,
        Servicetype: '',
        shopSysteme: [

        ],
        WaWi: [

        ],
        DL: [

        ]
    }
}
