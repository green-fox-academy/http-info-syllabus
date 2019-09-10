# A növénykert

A feladat egy növénykert nyilvántartásához szükséges osztályok létrehozása, valamint egy alkalmazás, ahol a main metódusban létrehozol egy kertet néhany virággal és fával. A program példaként 2 virágot kell, hogy létrehozzon (egy sárgát és egy kéket) valamint két fát (egy lilát és egy pirosat). Létrehozás után a programnak ki kell írnia a konzolra, hogy mi található jelenleg a kertben. Ezután a program kétszer megöntözi a növényeket, először 40 majd 70 liter vízzel. Minden öntözés után is ki írja, hogy mi a helyzet a kertben. 

Végeredményben ezt a kimenetet kell kapni:
```text
A sárga Virág öntözésre szorul
A kék Virág öntözésre szorul
A lila Fa öntözésre szorul
A piros Fa öntözésre szorul

Öntözés 40 liter vízzel
A sárga Virág nem szorul öntözésre
A kék Virág nem szorul öntözésre
A lila Fa öntözésre szorul
A piros Fa öntözésre szorul

Öntözés 70 liter vízzel
A sárga Virág nem szorul öntözésre
A kék Virág nem szorul öntözésre
A lila Fa nem szorul öntözésre
A piros Fa nem szorul öntözésre
```

## Információ az egyes részekről

- A kert
  - bármennyi virágot és fát képes befogadni
  - öntözésnél csak azokat öntözi, amely növények öntözésre szorulnak, a víz mennyiséget egyenlően elosztva köztük
  - pl. 40 literrel öntözve a kertet, ahol 4 növény szorul öntözésre, mindegyik növény 10 literrel lesz öntözve
- A Virág
  - öntözésre szorul, ha vízszintje kisebb, mint 5
  - öntözésnél csak a víz 75%-át tudja felszívni
  - pl. megöntözve 10 literrel, a vízszint csak 7.5-el emelkedik
- A fa
  - öntözésre szorul, ha vízszintje kisebb, mint 10
  - öntözésnél csak a víz 40%-át tudja felszívni
  - pl. megöntözve 10 literrel, a vízszint csak 4-el emelkedik
