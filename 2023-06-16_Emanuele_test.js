{
    console.log(`\n\n`)
    /*Ex 1: Set + algoritmi
    crea una funzione che prende in ingresso due set di 5 parole e restituisce la differenza tra il
    numero di parole aventi lunghezza pari presenti nel primo set e il numero di parole che terminano
    in 'a' presenti nel secondo set.
    chiamare la funzione con valori a piacere per stampare il risultato.*/

    const set_1 = new Set(['patate', 'carote', 'cavolfiori', 'sassi', 'alberi']);
    const set_2 = new Set(['sedie', 'libreria', 'automobile', 'camicia', 'cinture']);

    function difference(setX, SetY) {
        let counterEvenWords = 0
        let counterAWords = 0
        setX.forEach(el => {
            if (el.length % 2 == 0) {
                counterEvenWords++
            }
        })
        SetY.forEach(el => {
            if (el[el.length - 1] == 'a') {
                counterAWords++
            }
        })
        //console.log(counterEvenWords)
        //console.log(counterAWords)
        let result = `la differenza tra le parole pari del set 1 e le parole che finiscono con la lettera 'a' del set 2 corrisponde a:\n\t'${(counterEvenWords - counterAWords)}'`
        return result
    }

    console.log(difference(set_1, set_2))

}

{
    console.log('-----------------------')
    /*Ex 2: Funzioni + array + oggetti + algoritmi
    Scrivi una funzione che prenda in input un array di 3 oggetti rappresentanti persone (nome,
    cognome, età) e restituisca un nuovo array contenente le 3 persone ordinate per età crescente
    (dal più giovane al più anziano).
    Chiamare la funzione per produrre l'array, e successivamente iterare su questo array per stampare
    le informazioni di tutte e 3 le persone.
    Ad esempio:
    dammiPersoneOrdinate ( [ {mario rossi, 32}, {luigi verdi, 25}, {peach pink, 30} ] )
    produce: [{luigi verdi, 25}, {peach pink, 30}, {mario rossi, 32}, ]*/

    let myArr = [
        {
            nome: 'mario',
            cognome: 'rossi',
            età: 32
        },
        {
            nome: 'luigi',
            cognome: 'verdi',
            età: 25
        },
        {
            nome: 'peach',
            cognome: 'pink',
            età: 30
        }
    ]

    function dammiPersoneOrdinate(arr) {
        let sortedArr = myArr.sort((a, b) => a.età - b.età)
        //console.log(sortedArr)
        console.log(`lista dei nomi ordinati per età crescente:`)

        for (let i = 0; i < arr.length; i++) {
            console.log(`-persona n'${[i + 1]}:`)
            for (let k in arr[i]) {
                console.log(`\t ${arr[i][k]}\n`)
            }
        }
    }

    dammiPersoneOrdinate(myArr)

}

{

    console.log('-----------------------')
    /*Ex 3: Map + algoritmi
    Crea un array di 6 stringhe a piacere.
    Successivamente, crea una mappa che avrà come chiavi le parole contenute nell'array e per valori
    le loro lunghezze.
    Itera sulla mappa per stampare, per ogni coppia al suo interno, la frase:
    la parola … contiene … caratteri*/

    let myArr = ['quercia', 'spiaggia', 'auto', 'hotel', 'cane', 'computer']
    let myMap = new Map()

    function setMap(arr, map) {
        arr.forEach(el => {
            map.set(el, el.length)
        })
        return map
    }

    setMap(myArr, myMap)

    myMap.forEach(function (value, key) {
        console.log(`la parola ${key} contiene ${value} caratteri`)

    })

}

{
    console.log('-----------------------')
    /*Ex 4: date + JSON
    Dato il seguente JSON:
    {
    "date1": "1990-10-10",
    "date2": "1980-10-10",
    "date3": "1970-10-10",
    "date4": "1960-10-10"
    }
    trova la strategia corretta per stampare in output la data più "piccola" e la data più "grande" tra
    quelle fornite.*/

    let json = `{
        "date1": "1990-10-10",
        "date2": "1980-10-10",
        "date3": "1970-10-10",
        "date4": "1960-10-10"
        }`

    let obj_1 = JSON.parse(json)
    //console.log(obj_1)


    function itera(obj) {
        //console.log('castori') print test
        let dataRecente = 0
        let dateMenoRecente = new Date()
        dateMenoRecente.setTime(Date.now())
        //console.log(dateMenoRecente)

        for (let k in obj) {
            if (new Date(obj[k]) > new Date(dataRecente)) {
                dataRecente = obj[k]
            }
            //console.log(dataRecente)
        }
        for (let k in obj) {
            if (new Date(obj[k]) < new Date(dateMenoRecente)) {
                dateMenoRecente = obj[k]
            }
            //console.log(dateMenoRecente)
        }
        result = [dataRecente, dateMenoRecente]
        console.log(`- la data più recente è: ${dataRecente} \n- la data meno recente è: ${dateMenoRecente}`)
        return result
    }

    itera(obj_1)


}

{

    console.log('-----------------------')
    /*Ex 5: Algoritmi
    Data una stringa s a piacere, stampare solo i caratteri univoci, ovvero i caratteri che compaiono
    SOLO una volta nella lista.
    Ad esempio:
    abbazia -> zi*/

    let mystring = 'sonoo'

    function counterOcc(strg) {
        let contatore = {}
        let optStrg = ''
        for (let i = 0; i < strg.length; i++) {
            // console.log(strg[i])
            if (contatore[strg[i]]) {
                //console.log('castori') print test
                contatore[strg[i]] += 1

            }
            else {
                //console.log('patate') print test
                contatore[strg[i]] = 1

            }
        }
        for (let k in contatore) {
            if (contatore[k] < 2) {
                optStrg += '-' + [k] + ' '
            }
        }
        let result = `i caratteri ad occorrenza univoca sono: ${optStrg}`
        return result
    }

    console.log(counterOcc(mystring))

}

{
    console.log('-----------------------')
    /*Ex 1: Array + algoritmi
    crea un array di 6 numeri interi e stampa in console la differenza tra il numero di numeri maggiori
    di 10 e il numero di numeri inferiori a 1.
    Inoltre, se il valore calcolato è pari a 0, stampa tutti i numeri dell'array in senso invertito,
    altrimenti, stampa solo il primo e l'ultimo numero dell'array.*/

    let myArr = [-13, 25, 7, -42, 56, 3]

    function calc(arr) {
        let counterMagg = arr[0]
        let counterMin = arr[0]
        let arrInv = []

        arr.forEach(el => {
            if (el > counterMagg) {
                counterMagg = el
            }
        })
        console.log(`la cifra maggiore dell'array è:\n- ${counterMagg}`)
        arr.forEach(el => {
            if (el < counterMin) {
                counterMin = el
            }
        })
        //console.log(counterMin)
        let diffMaxMin = (counterMagg + counterMin)
        console.log(`la cifra minore dell'array è:\n- ${counterMin}`)

        if (diffMaxMin % 2 == 0) {
            for (let i = arr.length - 1; i >= 0; i--) {
                arrInv.push(arr[i])
            }
            console.log(`i numeri dell'array ciclati al contrario sono:\n${arrInv}`)
        }

        else { console.log(`il primo e l'ultimo N dell'array sono:\n ${arr[0]} ; ${arr[arr.length - 1]}`) }

    }


    calc(myArr)

}

{

    console.log('-----------------------')
    /*Ex 2: Array + funzioni + oggetti + algoritmi
    crea una funzione che prende in ingresso due set di 5 numeri e restituisce un oggetto.
    Questo oggetto avrà le seguenti proprietà:
    winner -> avrà valore 1 se il primo set ha più proprietà del secondo, altrimenti 2, e 0 se hanno
    numero pari di proprietà
    morePositive: avrà valore 1 se il primo set ha più numeri positivi (> 0) del secondo, altrimenti 2, e 0
    se hanno numero pari di proprietà
    chiama la funzione per stampare proprietà e valori dell'oggetto restituito*/

    const set_1 = new Set([1, 5, 18, 21, -47, -2])
    const set_2 = new Set([5, 21, 84, -12, -31, -74])

    function calc(setX, setY) {
        let objResult = {}
        let countNumPos = [0, 0]
        let result = ''
        if (setX.size > setY.size) {
            objResult[winner] = 1
        }
        else if (setX.size < setY.size) {
            objResult.winner = 2
        }
        else {
            objResult.winner = 0
        }
        //console.log(objResult)

        setX.forEach(el => {
            if (el > 0) {
                countNumPos[0] += 1
            }
        })
        setY.forEach(el => {
            if (el > 0) {
                countNumPos[1] += 1
            }
        })
        //console.log(countNumPos)
        if (countNumPos[0] > countNumPos[1]) {
            objResult.morePositive = 1
        }
        else if (countNumPos[0] < countNumPos[1]) {
            objResult.morePositive = 2
        }
        else {
            objResult.morePositive = 0
        }
        //console.log(objResult)

        for (let k in objResult) {
            result += `le coppie chiavi valore dell'oggetto risultante sono\n -${k} -> ${objResult[k]}\n`
        }
        return result

    }

    console.log(calc(set_1, set_2))

    //return objResult

}

{

    console.log('-----------------------')
    /*Ex 3: Funzioni + oggetti + algoritmi
    crea una funzione che prende in ingresso 2 oggetti che rappresentano due rettangoli, che avranno
    questa struttura: {x: valore numerico, y: valore numerico}, e una stringa che può avere i seguenti
    valori:
    - perimetro
    - area
    Se il terzo parametro ha valore 'perimetro' la funzione restituisce la differenza tra il perimetro del
    primo rettangolo e il perimetro del secondo rettangolo.
    Se il terzo parametro ha valore 'area' la funzione restituisce la somma tra l'area del primo
    rettangolo e l'area del secondo rettangolo.
    Ad esempio:
    opeRettangolo( rect1, rect2, 'area' ) -> risultato
    opeRettangolo( rect1, rect2, 'perimetro' ) -> risultato
    Chiama la funzione 2 volte per stampare i valori prodotti, usando valori a piacere.*/

    const rett_1 = {
        'b': 5,
        'h': 6
    }
    const rett_2 = {
        'b': 4,
        'h': 3
    }

    function calc(rettX, rettY, strg) {
        let result = ''
        let perX = rettX.b * 2 + rettX.h * 2
        let perY = rettY.b * 2 + rettY.h * 2
        let areaX = rettX.b * rettX.h
        let areaY = rettY.b * rettY.h
        if (strg == 'perimetro') {
            result = `the value of the differance of the two perimeters corresponds to:\n- ${perX - perY}`
        }
        else if (strg == 'area') {
            result = `the value of the sum of the two areas corresponds to:\n- ${areaX + areaY}`
        }
        else { result = `check your ipt` }

        return result
    }

    console.log(calc(rett_1, rett_2, 'perimetro'))
    console.log(calc(rett_1, rett_2, 'area'))

}

{

    console.log('-----------------------')
    /*Ex 4: Funzioni di funzioni + algoritmi
    Creare una funzione chiamata opeStringa che accetta 2 parametri:
    - una stringa
    - una funzione che prende in ingresso una stringa e restituisce una nuova stringa,
    trasformata
    La funzione opeStringa deve restituire la stringa prodotta dalla funzione passata come secondo
    parametro.
    In fase di chiamata di opeStringa, operare nel seguente modo:
    - chiamare opeStringa con una stringa "javascript" e una funzione che produca la versione
    maiuscola
    - chiamare opeStringa con una stringa "javascript" e una funzione che produca una stringa
    contenente solo i caratteri alla posizione dispari
    - chiamare opeStringa con una stringa "javascript" e una funzione che produca la stringa
    invertita
    Ad esempio:
    s = javascript
    opeStringa(s, uc) -> produce JAVASCRIPT
    opeStringa(s, odd) -> produce aacit
    opeStringa(s, invert) -> produce tpircsavaj
    Stampare in output i risultati.*/

    //console.log('java'.toUpperCase())

    function opeStringa(strg, fn) {
        return fn(strg)
    }

    function upp(strg) {
        return `la stringa in maiuscolo corrisponde a:\n\t- ${strg.toUpperCase()}`
    }
    function odd(strg) {
        result = ''
        for (let i = 0; i < strg.length; i++) {
            if ([i] % 2 == 0) {
                result += strg[i]
            }
        }
        return `i caratteri dispari della stringa corrispondono a:\n\t- ${result}`
    }
    function invt(strg) {
        result = ''
        for (let i = strg.length - 1; i >= 0; i--) {
            result += strg[i]
        }
        return `la stringa invertita corrisponde a:\n\t- ${result}`
    }

    console.log(opeStringa('javascript', upp))
    console.log(opeStringa('javascript', odd))
    console.log(opeStringa('javascript', invt))

}

{

    console.log('-----------------------')
    /*Ex 1
    Dato il seguente JSON:
    [{
    "autore": "mario rossi",
    "titolo": "jerry potter",
    "data": "1990-10-10"
    },
    {
    "autore": "luigi verdi",
    "titolo": "la storia finita",
    "data": "1960-10-10"
    },
    {
    "autore": "peach rosi",
    "titolo": "metti la cera",
    "data": "1970-10-10"
    },
    {
    "autore": "mario rossi",
    "titolo": "togli la cerca",
    "data": "1980-10-10"
    },
    {
    "autore": "luigi verdi",
    "titolo": "mma kid",
    "data": "1950-10-10"
    },
    {
    "autore": "lucia bianchi",
    "titolo": "javascript non è java",
    "data": "1940-10-10"
    },
    {
    "autore": "anna neri",
    "titolo": "java non è javascript",
    "data": "1930-10-10"
    }
    ]
    che rappresenta un array di oggetti rappresentanti libri con le proprietà "titolo", "autore" e "data",
    scrivi una funzione che prenda in input l'array e restituisca un nuovo array di oggetti contenente
    solo i libri scritti da autori diversi, per evitare che ci siano nell'array oggetti con autori identici.
    L'array contiene quindi 1 libro per autore, il primo trovato nel parsing.
    Dall'array prodotto dalla funzione stampare il libro più vecchio e il libro più recente*/

    let json = `[{
        "autore": "mario rossi",
        "titolo": "jerry potter",
        "data": "1990-10-10"
        },
        {
        "autore": "luigi verdi",
        "titolo": "la storia finita",
        "data": "1960-10-10"
        },
        {
        "autore": "peach rosi",
        "titolo": "metti la cera",
        "data": "1970-10-10"
        },
        {
        "autore": "mario rossi",
        "titolo": "togli la cerca",
        "data": "1980-10-10"
        },
        {
        "autore": "luigi verdi",
        "titolo": "mma kid",
        "data": "1950-10-10"
        },
        {
        "autore": "lucia bianchi",
        "titolo": "javascript non è java",
        "data": "1940-10-10"
        },
        {
        "autore": "anna neri",
        "titolo": "java non è javascript",
        "data": "1930-10-10"
        }]`

    let authors = JSON.parse(json)

    //console.log(authors)

    function iter(autList) {
        let newArr = []
        let result = []


        let youngestBook = { data: new Date('0000-01-01') }

        let oldestBook = { 'data': new Date(Date.now()) }

        autList.forEach(el => {
            //console.log(el.autore)
            let flag = false
            for (let i = 0; i < newArr.length; i++) {
                if (newArr[i].autore == el.autore) {
                    flag = true
                    break
                }
            }
            if (flag != true) { newArr.push(el) }
            //else{console.log('castori')} test
        })
        //console.log(newArr)
        newArr.forEach(el => {
            if (new Date(el.data) > new Date(youngestBook.data)) {
                youngestBook = el
            }
        })
        newArr.forEach(el => {
            if (new Date(el.data) < new Date(oldestBook.data)) {
                oldestBook = el
            }
        })
        console.log(`info about the youngest book\n`)
        for (let k in youngestBook) {
            console.log(`\t${youngestBook[k]}\n`)
        }
        console.log(`info about the oldest book\n`)
        for (let k in oldestBook) {
            console.log(`\t${oldestBook[k]}\n`)
        }
        return

    }

    iter(authors)


}

{
    /*Level: DOM (Npt per esercizio) - OPZIONALE
    Ex 1
    Creare 3 campi input:
    -
    -
    -
    il primo, stabilisce un colore di sfondo
    il secondo, stabilisce un colore di testo
    il terzo, stabilisce un contenuto
    e un pulsante con testo "crea".
    Al click sul pulsante, viene creato un div 200px x 200px che avrà sfondo, colore del testo e
    contenuto dettati dagli input digitati, come sopra descritto.
    Ogni volta che viene premuto il pulsante "crea" l'elemento creato viene aggiunto al precedente.*/

    function gett(id) {
        return document.getElementById(id)
    }

    let btn = gett('btn')
    let bgCol = gett('bgCol').value
    let txtCol = gett('txtCol').value
    let txt = gett('txt').value
    let newDiv = gett('newDiv')
    //console.log(bgCol) test
    //console.log(typeof(bgCol.value)) test


    btn.addEventListener('click', () => {
        //console.log('castori') test
        let el = document.createElement('div')
        el.innerText = txt
        el.classList.add('newDivClass')
        el.style.backgroundColor = bgCol
        el.style.color = txtCol
        newDiv.appendChild(el)

    })


}