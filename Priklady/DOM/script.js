/*
Úkoly v tomto cvičení:

1) JavaScriptem změň text nadpisu.
	
2) JavaScriptem změnit barvu nadpisu.
	 (CSS vlastnost: color)

3) Zvětšit velikost písma odstavce a/nebo ho udělat tučně nebo kurzívou.
	 (CSS vlastnosti: font-size, font-weight, font-style)

4) Vyměnit obrázek kočky za psa. Koček je všude dost, nepotřebujeme tu další.
	 (HTML atribut: src)

5) Přesunout čtvereček na jiné místo nebo ho otočit.
	 (nastav CSS vlastnost position na hodnotu 'absolute' a pak můžeš měnit
	 pozici prvku pomocí CSS vlastností top a left)

6) Vytvoř v CSS třídu s nějakými CSS vlastnostmi a zkuš ji přidat na libovolný
	 prvek na stránce.
	 (v CSS nastav třídě třeba barvu pozadí.)


Nápověda:
- V HTML přidej k elementu atribut id="neco" a nějak si prvek pojmenuj, aby se ti lépe vybíral
- V JavaScriptu najdi daný HTML element pomocí document.querySelector("#neco") a ulož si ho
	do proměnné, se kterou budeš nadále pracovat
- Text prvku změníš pomocí prvek.textContent = "hodnota";
- HTML atributy nalezeného prvku změníš pomocí prvek.attribut = "hodnota";
- CSS vlastnosti nalezeného prvku změníš pomocí prvek.style.cssVlastnost = "hodnota";
- Vzpomeň si, jak se jmenují CSS vlastnosti pro barvu, písmo, atd.
	Víceslovné názvy vlastností (ty s pomlčkou) přepíšu v JavaScriptu do tzv. camelCase.
	Např. z background-color v CSS se v JavaScriptu stane backgroundColor.
- CSS třídy můžeš na elementy přidávat pomocí prvek.classList.add = "csstrida";
  Třídy můžeš z elementu i odebrat pomocí metody remove nebo přepínat třídu metodou toggle.
*/

// // tady je místo pro tvůj program
// //1
// const nadpis = document.querySelector("#nadpis");
// const zmenenyNadpis = "Zmena nadpisu";
// nadpis.textContent = zmenenyNadpis;
// document.body.innerHTML = zmenenyNadpis;
// //2
// nadpis.style.color = "blue"
// //3
// nadpis.style.fontsize = "200px"
