# Objektum Orientált Programozás
## Szintfelmérő JAVA

### Instrukciők

* A következő feladatok azt kívánják felmérni, hogy milyen fogalmakat, szintaxisokat, funkciókat ismersz, illetve mennyire sajátítottad el a 'programozói gondolkodást'.
* Az egyes feladatoknál nem az az elvárás, hogy azonnal képes legyél megoldani. Az már elég, ha hozzá tudnál kezdeni. 
* Ha bizonytalan vagy, lőjj fölé inkább egy feladattal, mint alá. Ott lesznek a mentoraid es a csoporttársaid, hogy segítsenek.


####    1. Feladat 	
*   Hozz létre egy statikus tömbszerkezetet(_Array_)
*   Töltsd fel 10-10 fiú és lány névvel szöveg típusként(_String Object_). Nevezd el tizbe-nek.

####    2. Feladat 	
*   Írasd ki a konzolban minden második diák a nevét.
*   Hozz erre es az eddigi(és ezután következő) feladatra is létre egy-egy külön függvényt(_method vagy function__)


####    3. Feladat 
*   Írj egy függvényt és nézd meg, hogy kinek a neve tartalmazza a 'p' betűt.
*   Gratulálj a konzolon kiírva azoknak, akiknek van 'p' betű a nevükben
*   Cseréld le a többiek nevének első karakterét 'p'-re.
*   Gratulálj nekik is a konzolon kiírva, hogy van 'p' betű a nevükben
 

####    4. Feladat 
*   Nézd meg, nincs-e véletlenül [palindróma](https://hu.wikipedia.org/wiki/Palindrom) a neveik között. 
*   Ha van közöttük olyan, akinek a neve nem palindróma, akkor fejezd ki enyhe rosszallásodat es töröld minden második diák nevét a listáról
*   Töltsd fel két olyan névvel, amelyek palindrómák
*   Nevezd el a függvényt egy ‘meaningful’ névvel


####    5. Feladat 
*   Dolgozatírás. A dolgozat pontjait a nevük betűiből összeálló karakterek karakter értékei (_Character_value_) adják. 
*   Az így kapott értéket rendeld hozzá egy asszociatív tömbben (_Map_) a statikus tömbszerkezet elemeihez, azaz a diákokhoz rendeld hozzá a pontokat.


####    6. Feladat  
*   Írasd bele a neveiket egy osztálynaplöba: hozz létre egy fájlt, amelyben a diákok es a jegyeik szerepelnek egymás mellett egy sorban: 1. Olivia, Pontszám 92


####    7. Feladat  
*   Hozz létre egy Student osztályt(_ ha létrehozunk egyet, akkor Object, egyébként Class_)  egy külön fájlban
*   Ez rendelkezzen a következő értékmezókkel, jellemzőkkel(_field variable_): name, points, isItPalindrome, fightPoints

####    8. Feladat 
*   Hozzál létre két új classt, SportsWoMan és ScienceWoMan
*   Hozzál létre egy függvényt a Student classban, amely a nevuk charakter értékét számolja ki (5. feladat) és ezt hozzárendeli a az adott diák fightPoints mezőjéhez , illetve egy másikat, amely módosítja a diákok name mezőjét(renameStudent()).
*   Kapcsold össze a SportsWoMan és ScienceWoMan osztályokat a Student osztállyal úgy, hogy ezek örököljék a metódusokat belőle
*   A SportsWoMan osztályban adjon hozzá a renameStudent() függvény egy sportot a névhez, míg a ScienceWoMan osztályban egy tudományterület nevét

####    9. Feladat 
*   Hozzál létre két listát (_List_), amely Student elemeket tud tárolni
*   Töltsd fel a file-ból a két listát, az ottani adatokkal hozzál létre diákokat és oszd így ketté őket
*   Nevezd el az így kapott listát Bengalensisnek. 
*   Hasonlítsd össze a két lista tagjainak fightPointsait egymással. Írasd ki az öt legsikeresebb diákot ezen összehasonlítás eredményeként
*   Gratulálj magadnak.

