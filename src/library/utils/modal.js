"use strict";

let modalWindow = document.getElementById("openModal");
let showModal = document.getElementById("modalOpenButton");
let closeModal = document.getElementById("close");

showModal.onclick = function() {
  modalWindow.style.display = "block";
};

closeModal.onclick = function() {
  modalWindow.style.display = "none";
};
