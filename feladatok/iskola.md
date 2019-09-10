# Az iskola

## Ember

Készíts egy `Ember` osztályt az alábbi osztályváltozókkal:

- `nev`: az ember neve
- `kor`: az ember kora (egy egész szám)
- `nem`: az ember neme (férfi vagy nő)

És az alábbi metódusai vannak:

- `bemutatkozik()`: kiírja, hogy "Szia, `nev` vagyok, `kor` éves `nem`."
- `getCel()`: prints out "Élj a mának!"

Valamint konstruktorai:

- `Ember(nev, kor, nem)`
- `Ember()`: beállítja a `nev`-et Anonim Jancsira, a `kor`-t 30-ra, `nem`-et férfira

## Tanuló

Készíts egy `Tanulo` osztályt, aminek mindene van, ami az `Ember`-nek, valamint még az alábbiak is:

- osztályváltozók:
  - `elozoIskola`: a tanuló előző iskolájának a neve
  - `hianyzottNapok`: napok száma, amennyit eddig hiányzott
- metódusok:
  - `getCel()`: kiírja, hogy "Túljutni az érettségin!"
  - `bemutatkozik()`: "Szia, `nev` vagyok, `kor` éves `nem`, a(z) 
    `elozoIskola` intézményéből jöttem, `hianyzottNapok` napot hiányoztam eddig."
  - `hianyzik(napokSzama)`: megnöveli a `hianyzottNapok`-at `napokSzama`-val

A `Tanulo` ilyen konstruktorokkal rendelkezik:

- `Tanulo(nev, kor, nem, elozoIskola)`: a paramétereken kívül beállítja a `hianyzottNapok`-at 0-ra
- `Tanulo()`: beállítja a `nev`-et Anonim Jancsira, a `kor`-t 30-ra, `nem`-et férfira, az `elozoIskola`-t az Élet Iskolája, a `hianyzottNapok`-at 0-ra

## Tanár

Készíts egy `Tanar` osztályt, aminek mindene van, ami az `Ember`-nek, valamint még az alábbiak is:

- osztályváltozók:
  - `tantargy`: a tanár tantárgya, amit tanít
- metódusok:
  - `getCel()`: kiírja, hogy "Csillogó szemű nebulók edukálása!"
  - `bemutatkozik()`: "Szia, `nev` vagyok, `kor` éves `nem` `tantargy` tanár."

A `Tanar` ilyen konstruktorokkal rendelkezik:

- `Mentor(name, age, gender, level)`
- `Mentor()`: beállítja a `nev`-et Anonim Jancsira, a `kor`-t 30-ra, `nem`-et férfira, a `tantargy`-at "mindenes"-re

## Igazgató

Készíts egy `Igazgato` osztályt, aminek mindene van, ami az `Ember`-nek, valamint még az alábbiak is:

- osztályváltozók:
  - `iskola`: az iskola neve
  - `felvettTanulok`: az általa felvételiztetett tanulók száma
- metódusok:
  - `bemutatkozik()`: "Szia, `nev` vagyok, `kor` éves `nem` a(z) 
    `iskola` képviselője és már `felvettTanulok` tanulót felvételiztettem."
  - `felvesz()`: megnöveli a `felvettTanulok` számát eggyel
  - `getCel()`: kiírja, hogy "Csillogó szemű nebulók felvétele az iskolába!"

Az `Igazgato` ilyen konstruktorokkal rendelkezik:

- `Igazgato(nev, kor, nem, iskola)`: a paramétereken kívül beállítja a
  `felvettTanulok`-at 0-ra
- `Igazgato()`: sets beállítja a `nev`-et Anonim Jancsira, a `kor`-t 30-ra, `nem`-et férfira, az `iskola`-t az Utcára és a `felvettTanulok`-at 0-ra.

## Évfolyam

Készíts `Evfolyam` osztályt.

- osztályváltozók:
  - `kezdesEve`: az évfolyam kezdésének éve
  - `tanulok`: a `Tanulo`k listája
  - `tanarok`: a `Tanar`ok listája
- metódusok:
  - `hozzaAd(Tanulo)`: hozzá adja a kapott `Tanulo`t a `tanulok` listához
  - `hozzaAd(Tanar)`: hozzá adja a kapott `Tanar`t a `tanarok` listához
  - `info()`: kiírja, hogy "Az évfolyam `kezdesEve`-ben kezdett, van `tanulok.size()` tanulója és `tanarok.size()` tanár tanítja őket."

Az `Evfolyam` ilyen konstruktorral rendelkezik:

- `Evfolyam(kezdesEve)`: a kapott paraméteren kívül létrehozza a `tanulok` és `tanarok` üres listáit.

## Test input

```java
ArrayList<Ember> emberek = new ArrayList<>();

Ember mari = new Ember("Mari", 46, "nő");
emberek.add(mari);
Ember jancsi = new Ember();
emberek.add(jancsi);
Tanulo janka = new Tanulo("Janka", 12, "nő", "Bartók");
emberek.add(janka);
Tanulo tanulo = new Tanulo();
emberek.add(tanulo);
Tanar sandor = new Tanar("Sándor", 35, "férfi", "testnevelés");
emberek.add(sandor);
Tanar tanar = new Tanar();
emberek.add(tanar);
Igazgato igazgato = new Igazgato();
emberek.add(igazgato);
Igazgato zoli = new Igazgato("Kovács Zoltán", 46, "male", "Dobó István Gimnázium");
emberek.add(zoli);

tanulo.skipDays(3);

for (int i = 0; i < 5; i++) {
  zoli.felvesz();
}

for (int i = 0; i < 3; i++) {
  igazgato.felvesz();
}

for(Ember ember : emberek) {
  ember.bemutatkozik();
  ember.getCel();
}

Evfolyam szuper = new Evfolyam("2019");
szuper.hozzaAd(tanulo);
szuper.hozzaAd(janka);
szuper.hozzaAd(tanar);
szuper.hozzaAd(sandor);
szuper.info();
```

## Test output

```text
Szia, Mari vagyok, 46 éves nő.
A célom: Élj a mának!
Szia, Anonim Jancsi vagyok, 30 éves férfi.
A célom: Élj a mának!
Szia, Janka vagyok, 12 éves nő, a(z) Bartók intézményéből jöttem, 0 napot hiányoztam eddig.
A célom: Túljutni az érettségin!
Szia, Anonim Jancsi vagyok, 30 éves férfi, a(z) Élet Iskolája intézményéből jöttem, 0 napot hiányoztam eddig.
A célom: Túljutni az érettségin!
Szia, Sándor vagyok, 35 éves férfi testnevelés tanár.
A célom: Csillogó szemű nebulók edukálása!
Szia, Anonim Jancsi vagyok, 30 éves férfi mindenes tanár.
A célom: Csillogó szemű nebulók edukálása!
Szia, Kovács Zoltán vagyok, 46 éves férfi a(z) Dobó István Gimnázium képviselője és már 3 tanulót felvételiztettem.
A célom: Csillogó szemű nebulók felvétele az iskolába!
Szia, Anonim Jancsi vagyok, 30 éves férfi a(z) Utca képviselője és már 3 tanulót felvételiztettem.
A célom: Csillogó szemű nebulók felvétele az iskolába!
Az évfolyam 2019-ben kezdett, van 2 tanulója és 2 tanár tanítja őket.
```
