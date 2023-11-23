/*
Piškvorky

Naprogramuj piškvorky. Na stránce máš vytvořenou tabulku
o velikosti 5x5 buňek, která má id="deska"<div className="">

Úkoly:

1) Reaguj na kliknutí na buňku v tabulce. Abychom nemuseli
událost click přidávat na každou buňku, přidáme ji pouze
na celou tabulku. Musíme potom rozpoznat, na kterou buňku
se ve skutečnosti kliklo.
Pomůže ti opět objekt event, který můžeš předat jako parametr
do funkce, která kliknutí obsluhuje. Objekt event má vlastnost
target, ve které je uložený odkaz na buňku.

2) Do prvku s id="natahu" zapiš, který hráč má aktuálně hrát.
Jestli X nebo O.

3) Po kliknutí do buňky zapiš znak hráče. X nebo O. Musíš zařídit,
aby se hráči střídali - tj. při prvním kliknutí se bude zapisovat X,
potom O, pak znovu X, atd.

4) Zařiď, aby se nezapisoval znak do buňky, pokud už v ní něco je.
Doposud šlo kliknout na buňku, kde už bylo X a zapsat do ní O.

5) Testování, zda jeden z hráčů vyhrál je poměrně složité a vysoko
nad znalosti získané z toho workshopu. Testování výhry máš ale od nás
připravené. Stačí na konci HTML odkomentovat připojení skriptu vyhra.js.

Pak můžeš ve svém programu použít funkci vyhral(hrac), která vrací hodnotu
true nebo false, zda daný hráč vyhrál.

Pokuid tedy budu chtít otestovat, zda vyhrál hráč X, můžu v kódu napsat:
if ( vyhral("X") ) {
	...
}

Na řádku 6 v souboru vyhra.js si můžeš nastavit, kolik stejných symbolů
vedle sebe stačí pro výhru. Standardně je nastaveno 3.
*/

// tady je místo pro tvůj program

const tabulka = document.getElementById("deska");
const natahuElement = document.getElementById("natahu");
let aktualniHrac = "X"; 

const zmenHrace = () => {
    if (aktualniHrac === "X") {
        aktualniHrac = "O";
    } else {
        aktualniHrac = "X";
    }
    natahuElement.innerText = aktualniHrac;
};

const hracVyhral = () => {
    return vyhral(aktualniHrac, tabulka);
};

tabulka.addEventListener("click", (event) => {
    const cilovaBunka = event.target;
    if (cilovaBunka.tagName.toLowerCase() === 'td' && !cilovaBunka.innerText) {
        cilovaBunka.innerText = aktualniHrac;

        if (hracVyhral()) {
            const vyhraHlaska = document.createElement("p");
            vyhraHlaska.innerText = `Hráč ${aktualniHrac} vyhrál!`;
            document.body.appendChild(vyhraHlaska);
            // Zde můžete přidat další akce, pokud hráč vyhrál
        } else {
            zmenHrace();
        }
    }
});


