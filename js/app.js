let itens = document.querySelectorAll("li a");

function alterarStatus(i) {
  if (itens[i].textContent === "Alugar") {
    itens[i].textContent = "Devolver";
    itens[i].classList.add("dashboard__item__button--return");
  } else {
    itens[i].textContent = "Alugar";
    itens[i].classList.remove("dashboard__item__button--return");
  }
}
