**Dokumentáció**

**Fejlesztői dokumentáció**

Ez a weboldal egy íjcsata játékra ad esélyt ahol a felhasználók le foglalhatnak pályákat gyakorolni vagy játszani.

1. Az “app” mappa

Az app mappa tartalmazza az alkalmazás fő modulját és annak komponenseit, szolgáltatásait, és minden egyéb Angular-hoz kapcsolódó fájlt.

- app.module.ts: Ez a fájl tartalmazza az alkalmazás fő modulját. Itt találhatók az alkalmazásban használt komponensek, szolgáltatások, direktívák és pipe-ok regisztrálása. Az AppModule a gyökér modul, amely az alkalmazás indítását és működését irányítja.

- app.component.ts: Ez a fájl tartalmazza az alkalmazás gyökér komponensét. Az alkalmazás kezdőképernyője innen indul.

**Komponensek**: Az app mappában található komponensek az alkalmazás felhasználói felületének részei. Minden komponens tartalmazza a HTML-t, CSS-t és a TypeScript fájlt, amelyek együtt dolgoznak az adott felhasználói felület funkcióinak megvalósításában.

**Szolgáltatások**: A szolgáltatások (services) az alkalmazás üzleti logikáját, adat kezelését végzik. Az alkalmazás minden egyes adatkezelési művelete, például API hívások, adatátvitel, autentikáció itt történik.

2. Az “assets” mappa

Az assets mappa tartalmazza azokat az erőforrásokat (pl. képek, stíluslapok, fontok), amelyeket az alkalmazás használ. Az itt található fájlok nem kódok, hanem a felhasználói felülethez szükséges statikus eszközök.

3. Az “environments” mappa

Az environments mappa tartalmazza az alkalmazás különböző környezetekhez (például fejlesztési, tesztelési, éles) szükséges konfigurációs fájlokat.

- environment.ts: Fejlesztési környezethez tartozó beállítások.

- environment.prod.ts: Az éles környezethez tartozó konfiguráció.

Ezek a fájlok tartalmazzák az alkalmazás különböző környezetekhez szükséges API URL-eket, kulcsokat vagy egyéb környezeti változókat, amelyeket az alkalmazás futás közben használhat.

4. A “styles.css / styles.scss” (vagy egyéb globális stílusok)

Ez a fájl tartalmazza az alkalmazás globális stílusait. Az itt meghatározott stílusok minden egyes komponensre vonatkoznak, ha nem specifikálnak más stílust a komponensek szintjén.

5. Az “index.html”

Az index.html fájl az alkalmazás belépési pontja. Itt található az alkalmazás struktúrája, amely tartalmazza a szükséges Angular bootstrapping kódot. Az Angular alkalmazás az index.html fájlban kerül betöltésre, ahol az Angular a \<app-root\>\</app-root\> tag segítségével kezdi el renderelni a felhasználói felületet.

6. main.ts

A main.ts fájl az alkalmazás belépési pontja, ahol az Angular-t inicializálódik és a gyökér module (AppModule) betöltik. Itt történik az Angular alkalmazás összeállítása és indítása.

7. angular.json

Bár nem közvetlenül a src mappában található, az angular.json fájl az Angular projekt konfigurációját tartalmazza. Itt állíthatók be a különböző build beállítások, mint például a különböző környezetekhez tartozó fájlok, valamint az alkalmazás buildelési és tesztelési beállításai.

8. Login mappa

Ez tartalmazza a login.component-et, ami arra szolgál, hogy beléptessük a felhasználót.

9. Register mappa

Ez a mappa tartalmazza a register komponenseket, amivel regisztrálhatunk egy új felhasználót Google segítségével.

10. Playgrounds mappa

Ebben találhatóak a bevésett játszó területek amiket lehetőségünk lesz majd lefoglalni a booking komponensek segítségével.

       11\. Home mappa

Itt található meg a Főoldal, ahol a legfrissebb híreket és közeledő eseményeket lehet olvasni majd a weblapon.

12\. New-booking mappa

Az ebben található fájlok biztosítják azt, hogy egy felhasználó tud magának foglalásokat végezni, módosítani és törölni is.

13\. Navbar mappa

Itt található a navigációs tábla, amelyben linkek vannak a különböző oldalakhoz, ezzel egyszerűbben elérve azokat.

A Navbarban találhatók a gombok, amikkel navigálhatunk az oldalak között. Itt található:

- A **Főoldal** gomb, ami a weblap főoldalára visz minket.  
- A **Játékterület** gomb, amin megnézhetjük a le foglalható pályákat részletes leírásokkal.  
- A **Foglalás** gomb, ahol lehetősége van a felhasználónak egy adott napra és órára pályát foglalni egy kiválasztott játékmóddal  
- A **Belépés** gomb, ahol a felhasználó beléphet a Google fiókjával, hogy használhassa a foglalás funkciót  
- A **Regisztráció** gomb, ahol fiókot csinálhat a felhasználó, hogy a foglalhasson pályákat  
- És a **Kijelentkezés** gomb, ami kilépteti a felhasználót a fiókjából.

**Felhasználói dokumentáció**

Amikor megnyitjuk a weblapot, a “Bejelentkezés” oldalon találjuk magunkat. A Google segítségével be tudunk jelentkezni. Ha nincsen profilunk, akkor át tudunk lépni a regisztrációs oldalra, ahol regisztrálunk majd bejelentkezünk. Ha bejelentkeztünk, akkor a weblap árírányít minket a főoldalra.

Innen a navigációs tábla segítségével tovább tudunk lépni először is a pályákra a “Játékterület” gombra nyomva. Itt fel vannak sorolva, hogy milyen pályák vannak, képekkel. Ezután ha a “Foglalás” menüpontra kattintunk, akkor megjelenik egy tábla, ahol ki tudjuk választani, hogy melyik pályát szeretnénk és melyik játékmódot, melyik napon és órában. A “Mentés” gombra nyomva, a kiválasztott pályát, játékmódot, napot és órát elmenti, amit kiír a lap alján. itt van esélye a felhasználónak módosítani és törölni a mentett foglalást.

A “Kilépés” gombra nyomva, az eddig bejelentkezett felhasználót kijelentkeztetjük.