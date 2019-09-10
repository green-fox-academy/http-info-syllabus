# Objektum orientált programozás

  - materials and homework:
    - expressions & control flow
    - functions & arrays
    - oo
  - outline
    - exp & control flow + func & arrays mat review
    - 1-2 exp
    - 2-3 arr
    - 2-3 func
    - lunch
    - oo mat reivew
    - 3-4 simple oo
    - 1-2 complex oo


## Házi feladat

| Tananyag | Hossz |
| -------- | ----- |
|  |  |

## Programozás alapok

### Házi feladat ellenőrzés

### Feladatok

#### Feladat 1

Mutasd be magad változók segítségével! Hozz létre három változót egyet a nevednek, egyet a korodnak és egyet a kedvenc gyümölcsödnek.
Írd ki a konzolra a következőket a változók használatával:
```
Sziasztok, Ádám vagyok 30 éves!
A kedvenc gyümölcsöm a dinnye.
```

#### Feladat 2

Készíts programot, amely a konzolon bekér a felhasználótól két egész számot. Az első a farmer csirkéinek száma, a második pedig a farmer malacainak a száma. Ezután a program kiírja, hogy a farmer összes állatának mennyi lába van.

```
Csirkek szama:
5
Malacok szama:
3
Labak osszesen: 22
```

#### Feladat 3
Készíts programot, amely bekér egy egész számot a felhasználótól, majd kiírja a szorzótáblát 1-10-ig:

```
Mi legyen a szam?
15
1 * 15 = 15
2 * 15 = 30
3 * 15 = 45
4 * 15 = 60
5 * 15 = 75
6 * 15 = 90
7 * 15 = 105
8 * 15 = 120
9 * 15 = 135
10 * 15 = 150
```

#### Feladat 4

Készíts programot, amely bekér egy egész számot, majd "kirajzol" egy annyi soros háromszöget csillagokból:

```
Mennyi sor legyen?
4
*
**
***
****
```

#### Feladat 5
- Készíts egy üres listát, amely neveket (stringeket) fog tartalmazni
- Írd ki a konzolra, hogy jelenleg mennyi eleme van a listának
- Add a listához Jánost
- Írd ki a konzolra, hogy a lista üres vagy nem üres
- Add a listához Vilmost
- Add a listához Amandát
- Írd ki a konzolra, hogy jelenleg mennyi eleme van a listának
- Írd ki a konzolra a lista harmadik elemét
- Menj végig a listán és írd ki mindegyik nevet
```
János
Vilmos
Amanda
```
- Menj végig a listán és írd ki a neveket egy sorszámmal
```
1. János
2. Vilmos
3. Amanda
```
- Töröld a második elemet (Vilmost)
- Menj végig a listán visszafelé és írd ki a neveket
```
Amanda
János
```
- Töröld az összes elemet

#### Feladat 6
- Készíts egy gyümölcs listát az alábbi elemekkel, legyen a neve `gyumik`
```
Alma, Dinnye, Körte, Málna, Szilva
```
- Készíts egy másik listát `masik` néven, a gyümik lista összes elemével
- Írd ki a konzolra, hogy a gyümik tartalmaz-e Málnát vagy nem
- Töröld ki a Málnát a másik listából
- Add hozzá a Kiwit a gyümik listához a Dinnye után
- Hasonlítsd össze a gyümik és a másik lista méretét
- Írd ki a konzolra az Alma index-ét a gyümik listában
- Írd ki a Málna index-ét a másik listában
- Add hozzá a másik listához a Licsit és a Pomelót egy utasítással
- Írd ki a gyümik harmadik elemét

#### Feladat 7
- Create a string variable named `typo` and assign the value `Chinchill` to it
- Készíts egy `hianyos` nevű változót, add meg neki a `Csincsill` értéket
- Készíts egy `hozzafuzA` függvényt, amely egy string paraméterrel rendelkezik és hozzáfűz egy "a" betűt a paraméterben kapott string-hez és visszatér vele
- Írd ki a konzolra `hozzafuzA(hianyos)` eredményét

#### Feladat 8

> Az anagramma a szójátékok egy fajtája, melyben értelmes szavak vagy mondatok betűinek sorrendjét úgy változtatjuk meg, hogy az eredmény szintén értelmes szó vagy mondat legyen. Sok anagramma esetén az eredeti és a végeredmény között humoros vagy egyéb kapcsolat van, ez növeli az anagramma érdekességét, értékét. [bővebben a Wikipédián](https://hu.wikipedia.org/wiki/Anagramma)

- Készíts egy függvényt `anagrammak` néven, amely a két input paramétereről eldönti, hogy egymás anagrammái-e és visszatér egy boolean értékkel:

| input 1 | input 2 | output |
| :-----: | :-----: | :----: |
|  "gyomorrontas"  |  "toronymorgas"  |  true  |
| "green" |  "fox"  |  false |

## Objektum orientált programozás

### Házi feladat ellenőrzés

### Feladatok

#### Feladat 9

Készítés egy PosztIt osztályt, amelynek van 3 osztályváltozója:
- `hatterSzin`
- `szoveg` ami rajta van
- `szovegSzin`
Készíts pár példa objektumot:
- sárga posztit kék szöveggel: "Első ötlet"
- rózsaszínű posztit fekete szöveggel: "Hurrá!"
- zöld posztit barna szöveggel: "Szuper!"

#### Feladat 10
- Készíts egy Allat osztályt
- Minden állatnak van éhsége, ami egy egész szám
- Minden állatnak van szomja, ami egy egész szám
- Amikor egy állat létrejön 50-es az éhsége és 50-es a szomja
- Minden állat tud csinálni dolgokat:
  - eszik() az éhsége csökken eggyel
  - iszik() a szomja csökken eggyel
  - jatszik() az éhsége és szomja növekszik eggyel

#### Feladat 11

Másold magadhoz az elkészített Pokemon osztályt:

```java
public class Pokemon {
    String nev;
    String tipus;
    String ellenfel;

    public Pokemon(String nev, String tipus, String ellenfel) {
        this.nev = nev;
        this.tipus = tipus;
        this.ellenfel = ellenfel;
    }

    boolean hatasosEllene(Pokemon masik) {
        return this.ellenfel.equals(anotherPokemon.tipus);
    }
}
```

Illetve használd ezen osztály main metódusát, benne kommentként láthatod a feladatot:

```java
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<Pokemon> ashPokemonjai = initializePokemons();

        // Minden pokémonnak van neve és típusa.
        // Bizonyos tipusok hatásosak más típusokkal szemben, pl. víz hatásos tűz ellen.

        // Ash-nek van néhány pokémonja.
        // Felbukkant egy vad pokémon!

        Pokemon vadPokemon = new Pokemon("Oddish", "fű", "víz");

        // Melyik pokémonját válassza Ash a küzdelemhez?

        System.out.print("..., téged választalak!");
    }

    private static List<Pokemon> initializePokemons() {
        List<Pokemon> pokemon = new ArrayList<>();

        pokemon.add(new Pokemon("Balbasaur", "fű", "víz"));
        pokemon.add(new Pokemon("Pikatchu", "elektromos", "víz"));
        pokemon.add(new Pokemon("Charizard", "tűz", "fű"));
        pokemon.add(new Pokemon("Balbasaur", "víz", "tűz"));
        pokemon.add(new Pokemon("Kingler", "víz", "tűz"));

        return pokemon;
    }
}
```

#### Feladat 12

A feladat egy iskola adminsztrációjához szükséges alkalmazás készítése, ehhez több osztály létrehozása. [Tovább a feladathoz](feladatok/iskola.md)

#### Feladat 13

A feladat egy növénykert nyilvántartásához szükséges alkalmazás készítése, több osztály létrehozása. [Tovább a feladathoz](feladatok/kert.md)
