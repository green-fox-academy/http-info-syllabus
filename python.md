# Python Alapok

## A Környezet telepítése

A fejlesztéshez szükséges a Python 3 és a Visual Studio Code telepítése.
Ez a [videó](https://www.youtube.com/watch?v=U4tBaFuLEzY&end=328) megmutatja,
hogy kell a telepítést véghez vinni. Elég a videót 5:28-ig megnézni.

### Linkek a telepítéshez

- <https://www.python.org/>
- <https://code.visualstudio.com/>

## Házi Feladat

| Tananyag | Hossz |
| -------- | ----- |
| [Python - Bevezetés és telepítés](https://www.youtube.com/watch?v=kr-pmSBeKzM) | 8:41 |
| [Python - Változók és típusok](https://www.youtube.com/watch?v=ss_ZR2XkL-E) | 14:27 |
| [Python - Helló, világ!](https://www.youtube.com/watch?v=zY2lLb-2Q88) | 11:12 |
| [Python - Karakterlánc (szöveg)](https://www.youtube.com/watch?v=uapT_JPjrBk) | 15:48 |
| [Python - Logikai változók (Boolean)](https://www.youtube.com/watch?v=_DBOiV4R9rg) | 14:03 |
| [Python - Feltételes elágazás](https://www.youtube.com/watch?v=BYdQLRIkWC0) | 14:39 |
| [Python - Lista](https://www.youtube.com/watch?v=hoJBELib22Y) | 18:09 |
| [Python - Ismétlés vagy ciklus](https://www.youtube.com/watch?v=mNrG0yImpvA) | 17:32 |
| [Python - Tuple](https://www.youtube.com/watch?v=hHu7z2p-Dxk) | 15:15 |
| [Python - Szótár](https://www.youtube.com/watch?v=TzuhLLs8Oa0) | 16:29 |
| [Python - Függvények](https://www.youtube.com/watch?v=P_l6dzefLsE) | 17:27 |

### Házi Feladat Ellenőrzés

- Python a világban
- Python Verziók
- Interpretált nyelvek
- Python futtatása parancssorból és Visual Studio Code-ból
- `print()`
- Kommentek
- Változók
- Típusok
  - `type()`
  - `int`
  - `float`
  - `bool`
  - `string`
  - `list`
  - `tuple`
  - `dictionary`
  - `None`
- Operátorok
  - `=`
  - `+`  (int, float, bool, string, list, tuple)
  - `-`  (int, float, bool)
  - `*`  (int, float, bool, string, list, tuple)
  - `/`  (int, float)
  - `//` (int, float)
  - `%`  (int, float, string)
  - `**` (int, float)
  - `>`, `<`, `>=`, `<=`, `==`, `!=`  (int, float, bool, string, list, tuple)
  - `+=`, `-=`, `*=`, `/=`, `//=`, `%=`
  - `[]`, `[:]`, `[::]`
  - `not`, `or`, `and`
  - `in`, `not in`
  - `is`, `is not`
- `input()`
- Vezérlési szerkezetek
  - `if`, `else`, `elif`
  - `for`
  - `range()`
  - `while`
  - `break`
  - `pass`
- Függvények
  - `def`
  - paraméterek
  - `return`
  - scope

### Feladatok a hétvégi alkalomra

A következő feladatokat a workshop során fogjuk megcsinálni, nem kell őket előre
elkészíteni.

#### Feladat 1

Mutasd be magad változók segítségével! Hozz létre három változót egyet a nevednek, egyet a korodnak és egyet a kedvenc gyümölcsödnek.
Írd ki a konzolra a következőket a változók használatával:
```
Sziasztok, Béla vagyok 40 éves!
A kedvenc gyümölcsöm a dinnye.
```

#### Feladat 2

Írd ki a konzolra százszor, hogy "Nem fogok csalni a vizsgán."

#### Feladat 3

Írd ki a konzolra a számokat 1-től 100-ig úgy, hogy ha a szám osztható 3-mal, akkor azt írod a szám helyett, hogy "Piff", ha osztható 7-tel, akkor azt, hogy "Puff", ha mindkettővel, akkor pedig azt, hogy "PiffPuff".

#### Feladat 4

Hozz létre egy változót `sorokSzama` néven, amit tölts fel értékkel, pl. `4`. Készíts programot, amely ezt rajzolja ki a konzolra, úgy hogy pont annyi sor legyen, amennyi épp a változó értéke:
```
    *
   ***
  *****
 *******
```

#### Feladat 5

Írj egy függvényt ami egy szám-listát vesz be paraméterként és visszaadja a számok átlagát,

#### Feladat 6

Írj egy függvényt ami egy számok mátrix-át veszi be paraméterül (szám-listák listája) és a mátrixot elforgatja 90 fokkal balra.

##### Példa bemenet:

```
[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
```

##### Példa kimenet:

```
[
    [3, 6, 9],
    [2, 5, 8],
    [1, 4, 7]
]
```

#### Feladat 7

Írj egy függvényt ami paraméterként átvesz egy szöveget, és visszatér a 3 leggyakoribb karakterrel ami szerepel a szövekben gyakorisággal csökkenő sorrendben egy listaként.

#### Feladat 8

Írj egy függvényt ami palindromokat keres egy szövegben. Paraméterként vegyen át szöveget, és térjen vissza egy listával ami tartalmazza a szovegben legalább 3 betűs palindromokat.

##### Példák
|              bemenet             |                         kimenet                         |
14
| :------------------------------: | :-----------------------------------------------------: |
15
| "dog goat dad duck doodle never" | \["og go", "g g", " dad ", "dad", "d d", "dood", "eve"] |
16
|              "apple"             |                            []                           |
17
|             "racecar"            |               \["racecar", "aceca", "cec"]              |
18
|                ""                |                            []                           |

#### Feladat 9

Írj egy függvényt ami egy bemeneti számról edönti, hogy [Armstrong-szám](https://hu.wikipedia.org/wiki/Armstrong-sz%C3%A1m)-e

#### Feladat 10

Írj egy függvényt ami megvalósítja Conway [életjátékának](https://hu.wikipedia.org/wiki/%C3%89letj%C3%A1t%C3%A9k) egy körét.
A bemenete legyen egy szám mátrix ahol az élő sejtek 1-es, a halottak pedig 0-ás értéket vesznek fel.
A kimenete legyen egz új mátrix.
