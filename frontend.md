# HTML, CSS, JavaScript
  - materials and homework:
    - html + css
    - bootstrap
    - javascript expressions, control flow, dom, fetch, promise
  - outline
    - html + css + bootstrap mat review
    - 1-2 simple html + css task
    - 1-2 bootstrap more complex task
    - lunch
    - js mat review
    - 3-4 simple js control flow
    - 4-5 simple js DOM manipulation using control flow
    - 2-3 fetch & promise

## Házi feladat

https://netacademia.hu/courses/take/websuperhero/lessons/6489306-web-superher-01-fejlesztoeszkozok-megismerese-kozos-telepitese-1


## HTML és CSS

### Házi feladat ellenőrzés

- Anatomy of an HTML element
- Nesting elements
- Block versus inline elements
- Empty elements
- Core elements
  - `div`
  - `span`
  - `h1` - `h6`
  - `p`
  - `a`
  - `img`
  - `ul`
  - `ol`
  - `li`
- Semantic elements
- Attributes
- Anatomy of an HTML document
- Whitespaces in HTML
- HTML comments
- Forms
  - `form`
  - `input`
  - `textarea`
  - `label`
  - `fieldset`
  - `legend`
- MDN Web Docs
- Anatomy of a CSS ruleset
- Selecting multiple elements
- Different types of selectors
  - Elements
  - Class
- The box model
- Core properties
  - `padding`
  - `border`
  - `margin`
  - `height`
  - `width`
  - `background`
  - `color`
  - `font-size`
- Bootstrap
  - Basic components
    - alert
    - button
    - card
    - form
    - nav
  - Grid
    - container
    - row
    - columns
    - offset
  - Color styles
    - success, warning, danger, info
    - primary, secondary
    - light, dark


### Feladatok

#### Feladat 1

![](assets/exercise-01.png)

#### Feladat 2

![](assets/exercise-02.png)

#### Feladat 3

![](assets/exercise-03.png)

#### Feladat 4

![](assets/exercise-04.png)

#### Feladat 5

![](assets/exercise-05.png)

#### Feladat 6

![](assets/exercise-06.png)

## JavaScript

### Házi feladat ellenőrzés
- Node.js
- Comments
- `console`
- Variables
  - `var`
  - `let`
  - `const`
- Types
  - number
  - string
  - boolean
  - null
  - undefined
- Operators
  - arithmetic
  - logical
  - comparison
  - assignment
  - `typeof`
- Control structures
  - `if`
  - `while`
  - `for`
  - `break`
  - `continue`

```javascript
const b = 20;

if (b < 10) {
  console.log('Yaaay! The value of the \'b\' variable is lower than 10') // This block will NOT run
} else {
  console.log('Yaaay! The value of the \'b\' variable is higher than 10') // This block will run
}

for (let i = 0; i < 100; i++) {
  console.log(i); // Prints the numbers from 0 to 99
}
```

```HTML
<script>
  console.log('Hello World!');
</script>

<script src="something.js"></script>
```
- Window object, window.document object
- DOM
  - getElementById
  - getElementsByClassName
  - querySelectorAll
- Elements
  - Element / Node
  - createElement
  - appendChild
  - innerText, innerHTML
  - attributes
  - className, classList, toggle
  - onclick

```javascript
const king = document.getElementById('b325');
const lamplighter = document.querySelector('.b329');
const asteroids = document.querySelectorAll('div.asteroid');

for (let i = 0; i < asteroids.length; i++) {
  console.log(asteroids[i]);
}
```

- promise
  - `.resolve()`
  - `.reject()`
  - `.then()`
  - `.catch()`
  - `.finally()`
  -  chaining
- Fetch API
  - `fetch()`
- `await`

```javascript
fetch(URL)
  .then(response => response.json())
  .then(myJson => console.log(myJson));
```

### Feladatok

#### Feladat 7

Mutasd be magad változók segítségével! Hozz létre három változót egyet a nevednek, egyet a korodnak és egyet a kedvenc gyümölcsödnek.
Írd ki a konzolra a következőket a változók használatával:
```
Sziasztok, Ádám vagyok 30 éves!
A kedvenc gyümölcsöm a dinnye.
```

#### Feladat 8

Írd ki a konzolra százszor, hogy "Nem fogok csalni a vizsgán."

#### Feladat 9

Írd ki a konzolra a számokat 1-től 100-ig úgy, hogy ha a szám osztható 3-mal, akkor azt írod a szám helyett, hogy "Piff", ha osztható 7-tel, akkor azt, hogy "Puff", ha mindkettővel, akkor pedig azt, hogy "PiffPuff".

#### Feladat 10

Hozz létre egy változót `sorokSzama` néven, amit tölts fel értékkel, pl. `4`. Készíts programot, amely ezt rajzolja ki a konzolra, úgy hogy pont annyi sor legyen, amennyi épp a változó értéke:
```
    *
   ***
  *****
 *******
```

#### Feladat 11

Készíts scriptet az első feladathoz, amelynek segítségével átírod azt a szöveget, hogy "Zerda" arra, hogy "Chama".

#### Feladat 12

Készíts scriptet a második feladathoz, amelynek segítségével mindegyik szöveg fekete színű lesz.

#### Feladat 13

Készíts scriptet a harmadik feladathoz, amelyben létrehozol egy tömb változót, amelybe az alábbi szövegeket tedd: "JavaScript", "HTML", "CSS".
A script segítségével a tömb minden elemét add hozzá HTML-ben található `ul` listához.

#### Feladat 14

Készítsd el az alábbi weblapot, majd készíts hozzá scriptet, amely a gomb megnyomására megnöveli a számot.

![](assets/exercise-14.png)

#### Feladat 15

Készíts el egy weblapot, amely tartalmaz egy üres `div`-et és egy gombot "Gimme a joke" felirattal. A gombra kattintva indíts `HTTP GET` lekérést erre az url-re: http://api.icndb.com/jokes/random, nézd meg a választ és add hozzá a benne lévő `joke` értékét a `div`-hez.

![](assets/exercise-15.png)
