# Python Haladó

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
| [Python programozás kezdőknek - 18 - beépített függvények](https://www.youtube.com/watch?v=8XvGDbpqxwA) | 20:49  |
| [Python programozás kezdőknek - 20 - fájl olvasás](https://www.youtube.com/watch?v=bbgUis2dwig) | 17:59 |
| [Python programozás kezdőknek - 21 - fájl írás](https://www.youtube.com/watch?v=0qe_ioGF_oI) | 11:36 |
| [Python programozás kezdőknek - 22 - kivételkezelés try-except](https://www.youtube.com/watch?v=G8MPFSZFD18) | 20:19 |
| [Python programozás kezdőknek - 25 - modulok és importálás](https://www.youtube.com/watch?v=22E23np8SfI) | 15:03 |
| [Python programozás kezdőknek - 26 - pip, modulok-könyvtárak telepítése](https://www.youtube.com/watch?v=bCPuz5UpVNY) | 17:44 |
| [Python programozás kezdőknek - 27 - osztályok és objektumok](https://www.youtube.com/watch?v=45D_2Cr5xPc) | 8:42 |
| [Python programozás kezdőknek - 28 - metódusok](https://www.youtube.com/watch?v=hiEnslnkhqw) | 12:15 |
| [Python programozás kezdőknek - 29 - __init__ metódus](https://www.youtube.com/watch?v=o68iBiE4HyE) | 13:37 |

### Házi Feladat Ellenőrzés

- Beépített függvények
  - `abs()`
  - `enumerate()`
  - `isinstance()`
  - `max()`
  - `min()`
  - `reversed()`
  - `round()`
  - `sum()`
  - `list.index()`
  - Konverziók
    - `int()`
    - `float()`
    - `list()`
    - `str()`
- File kezelés
  - `open()`
  - `read`, `write` és `append` mód
  - `file.readline()`
  - `file.close()`
  - `file.read()`
  - `file.write()`
  - UTF-8
- Kivétel kezelés
  - `try:`
  - `except:`
  - `else:`
  - `finally:`
  - `except Error as e:`
  - `NameError`
  - `IndexError`
  - `ZeroDivisionError`
- Modulok
  - `import`
  - előre definiált modulok
  - saját modulok
  - `pip`
- Osztályok és Objektumok
  - `class`
  - tagváltozók
  - példányosítás
  - metódusok
  - `self`
  - dinamikus objektumok
  - `__init__`

### Feladatok a hétvégi alkalomra

A következő feladatokat a workshop során fogjuk megcsinálni, nem kell őket előre
elkészíteni.

#### Feladat 1

Készíts egy PostIt osztályt, amelynek van 3 tagváltozója:
- `hatterSzin`
- `szoveg` ami rajta van
- `szovegSzin`
Készíts pár példa objektumot:
- sárga posztit kék szöveggel: "Első ötlet"
- rózsaszínű posztit fekete szöveggel: "Hurrá!"
- zöld posztit barna szöveggel: "Szuper!"

#### Feladat 2
- Készíts egy `Allat` osztályt
- Minden állatnak van éhsége, ami egy szám
- Minden állatnak van szomja, ami egy szám
- Amikor egy állat létrejön 50-es az éhsége és 50-es a szomja
- Minden állat tud csinálni dolgokat:
  - eszik() az éhsége csökken eggyel
  - iszik() a szomja csökken eggyel
  - jatszik() az éhsége és szomja növekszik eggyel

#### Feladat 3

Másold magadhoz az elkészített Pokemon osztályt:

```python
class Pokemon:
    def __init__(self,  nev, tipus, ellenfel):
        self.nev = nev
        self.tipus = tipus
        self.ellenfel = ellenfel

    def hatasos_ellene(self, masik):
        return self.ellenfel == masik.tipus
```

Illetve használd ezen programot, benne kommentként láthatod a feladatot:

```python
def initialize_pokemons():
    pokemon = [];
    pokemon.append(Pokemon("Balbasaur", "fű", "víz"))
    pokemon.append(Pokemon("Pikatchu", "elektromos", "víz"))
    pokemon.append(Pokemon("Charizard", "tűz", "fű"))
    pokemon.append(Pokemon("Balbasaur", "víz", "tűz"))
    pokemon.append(Pokemon("Kingler", "víz", "tűz"))
    return pokemon

ash_pokemonjai = initialize_pokemons()

# Minden pokémonnak van neve és típusa.
# Bizonyos tipusok hatásosak más típusokkal szemben, pl. víz hatásos tűz ellen.

# Ash-nek van néhány pokémonja.
# Felbukkant egy vad pokémon!

vad_pokemon = Pokemon("Oddish", "fű", "víz")

# Melyik pokémonját válassza Ash a küzdelemhez?

print("..., téged választalak!")
```

A class és a program kódja két különböző file-ban legyen.

#### Feladat 4

Másold magadhoz az elkészített Thing és Fleet osztályt:

```python
class Thing:
    def __init__(self, name):
        self.name = name
        self.completed = False

    def complete(self):
        self.completed = True

    def __str__(self):
        return ("[x] " if self.completed else "[ ] ") + self.name
```

```python
class Fleet(object):
    def __init__(self):
        self.things = []

    def add(self, thing):
        self.things.append(thing)

    def __str__(self):
        result = ""
        for i in range(0, len(self.things)):
            result += str(i+1) + ". " + self.things[i].__str__() + "\n"
        return result
```

Illetve használd ezen programot, benne kommentként láthatod a feladatot:

```python
from fleet import Fleet
from thing import Thing

fleet = Fleet()

# Töltsd fel a fleet példányt olyan módon, hogy a következő legyen a kimenet:
# 1. [ ] Get milk
# 2. [ ] Remove the obstacles
# 3. [x] Stand up
# 4. [x] Eat lunch

print(fleet)
```

A class és a program kódja két különböző file-ban legyen.

#### Feladat 5

Hozz létre diák és tanár osztályokat: Student és Teacher néven

##### `Student`

- `learn()`: Kiírja a képernyőre: "A diák tanul valamit"
- `question(teacher)`: calls the teachers answer method

##### `Teacher`

- `teach(student)`: Meghívja a diák `learn()` metódusát
- `answer()`: Kiírja a képernyőre: "A tanár válaszol a diáknak"

##### Program

- Hozz létre egy `Student` és `Teacher` példányt
- Hívd meg a diák `question()` metódusát és a tanár `teach()` metódusát

#### Feladat 6

Hozz létre egy töltőállomás és autó osztályt `Station` és `Car` néven.

##### `Station`

Tagváltozók:

- `gas_amount`: A töltőállomás üzemanyag szintje

Metódusok:

- `refill(car)`: Csökkenti a `gas_amount` tagváltozót az átadott autó által befogadható 
üzemanyag mennyiségének értékével, és megnöveli az autó `gas_amount` tagváltozóját

##### `Car`

Tagváltozók:

- `gas_amount`: Az autó aktuális üzemanyag szintje

- `capacity`: Az autó maximális üzemanyag szintje

Metódusok:

Hozz létre egy konstruktort ami beállítja a következő értékeket:

- `gas_amount`: 0
- `capacity`: 100

#### Feladat 7

Hozz létre egy filctoll és tolltartó osztályt `Sharpie` és `SharpieSet` néven.

##### `Sharpie`

Az osztály tárolja a filc szinét, vastagságát és tinta mennyiségét.

A létrehozott példány tinta mennyisége legyen 100.

Legyen egy `use()` metódusa ami csökkenti a tinta mennyiségét.

##### `SharpieSet`

Az osztály filceket tárol. Rendelkezzen a következő.

- `add(sharpie)`: Hozzáad egy filcet
- `count_usable()`: Visszaadja a számát azoknak a filceknek amikben még van tinta
- `remove_trash()`: Törli az üres filceket

#### Feladat 8

##### `Farm`

Használd újra az `Allat` osztályt.

Hozz létre egy `Farm` osztályt.

 - tároljon állatokat
 - tárolja hogy maximum hány állatot tud tárolni

Metódusok:

- `breed()`: létrehoz egy új állatot ha van neki hely
- `slaughter()`: kiveszi a legkevésbé éhes állatot

#### Feladat 9

##### `BlogPost`

Hozz létre `BlogPost` osztályt aminek van:

- szerző neve
- címe
- szövege
- dátuma

##### `Blog`

Hozz létre `Blog` ami képes:

- `BlogPost`-okat tárolni
- Hozzáadni egyet a listához
- Törölni egyet index alapján
- Megváltoztatni egyet, egy másik pédányra index alapján

