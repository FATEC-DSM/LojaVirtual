// "use strict";
// const openModal = () =>
//   document.getElementById("modal").classList.add("active");

// const closeModal = () =>
//   document.getElementById("modal").classList.remove("active");

// document
//   .getElementById("cadastrarCliente")
//   .addEventListener("click", openModal);

// document.getElementById("modalClose").addEventListener("click", closeModal);

var modal = $("#modal");
var cadastrarCliente = $("#cadastrarCliente");
var modalClose = $("#modalClose");

const openModal = () => {
  modal.addClass(".active");
}

const closeModal = () => {
  modal.removeClass(".active");
}

cadastrarCliente.click(openModal);
modalClose.click(closeModal);
