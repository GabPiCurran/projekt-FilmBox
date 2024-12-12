/* V souboru spolecne.js najděte pomocí document.querySelector prvek s id menu-tlacitko.

Přidejte mu posluchač události kliknutí.

Přidejte prvku s id menu-polozky třídu show ve chvíli, kdy událost nastane.

Rozšiřte kód tak, aby se třída show naopak odebrala, pokud ji prvek již měl.
*/

const menuTlacitko = document.querySelector("#menu-tlacitko")
menuTlacitko.addEventListener("click", () => {
const menuPolozky = document.querySelector("#menu-polozky")
menuPolozky.classList.toggle('show')

if (menuPolozky.classList.contains('show')) {
    menuTlacitko.innerHTML = '<i class="fas fa-xmark"></i>';
  } else {
    menuTlacitko.innerHTML = '<i class="fas fa-bars"></i>';
  }
})