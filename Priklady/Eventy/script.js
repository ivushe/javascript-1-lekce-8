/*
Úkoly v tomto cvičení:
1) Při kliknutí myší na čtvereček ho otoč o 45 stupňů.
	 Budeš potřebovat událost click, vybrat čtvereček
	 na stránce a změnit mu příslušné vlastnosti.

2) Zkus čtvereček při druhém kliknutí zase vrátit zpátky.
	 Buď si musíš někde poznačit, je-li čtvereček otočený nebo ne
	 a podle toho mu správně měnit vlastnosti.
	 Nebo můžeš otočení čtverečku nastavit v CSS třídě, kterou budeš
	 na element přidávat nebo z něho odebírat. Když použijet pro
	 přepínání třídy metodu toggle, máš vše skoro bez práce.
	 Vyber si postup, který tobě připadá nejlépe pochopitelný.

3) Při stisknutí klávesy změň čtverečku barvu.
	 Budeš potřebovat událost keydown. Mysli na to, že tyto události
	 nelze nastavovat konkrétním elementům, ale musíš je nastavit pro
	 celou stránku na elementu <body>. (Je to logické. Jak bys stiskla
	 klávesu jen nad konkrétním elementem?)

	 Pokud chceš reagovat na konkrétní klávesu (a ne na stisk libovolné),
	 budeš si muset do obslužné funkce pro událost předat i objekt event,
	 který má vlastnost key, ve které je kód stisknuté klávesy.
*/

// tady je místo pro tvůj program

const ctverecek = document.querySelector(".ctverecek")
const body = document.querySelector("body")
const rotuj = () => {
	//ctverecek.classList.add("otoc");
	ctverecek.classList.toggle("otoc");
}

ctverecek.addEventListener("click",rotuj)

body.addEventListener("keydown", (e) => {
    console.log(e.key);

    if (e.key === "Enter") {
        // Přepněte třídu pro změnu barvy na červenou
        ctverecek.classList.toggle("pozadi");
    }
});