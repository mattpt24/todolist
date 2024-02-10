"use strict";

var inputOpenButton = document.querySelector(".add-todo__container");
var inputCloseButton = document.querySelector(".close-input");
var inputContainer = document.querySelector(".input__container");
inputOpenButton.addEventListener("click", function () {
  inputContainer.classList.add("input--activated");
});
inputCloseButton.addEventListener("click", function () {
  inputContainer.classList.remove("input--activated");
});
var addToDo = function addToDo() {
  var inputValue = document.querySelector(".input-text");
  if (inputValue.value === "") {
    alert("Field is empty! Please write something.");
  } else {
    var inputValueContainer = document.querySelector(".input__container");
    var listContainer = document.querySelector(".todo__list");

    // CREATE NEW LI ASSIGN A CLAS & VALUE
    var newToDo = document.createElement("li");
    newToDo.classList.add("todo__item");
    newToDo.innerHTML = inputValue.value;
    // 

    // ADD COMPLETE & REMOVE BUTTONS
    var completeButton = document.createElement("span");
    completeButton.classList.add("done");
    completeButton.innerHTML = "<i class='fa-solid fa-check'></i>";
    var removeButton = document.createElement("span");
    removeButton.classList.add("delete");
    removeButton.innerHTML = "<i class='fa-solid fa-trash'></i>";
    // 

    // HAVE TODO APPEND BUTTONS & CONTAINER APPEND NEW TO DO
    newToDo.appendChild(completeButton);
    newToDo.appendChild(removeButton);
    listContainer.appendChild(newToDo);
    // 

    // COMPLETE / DELETE FUNCTION
    completeButton.addEventListener("click", function () {
      newToDo.classList.toggle("item--completed");
    });
    removeButton.addEventListener("click", function () {
      newToDo.style.display = "none";
    });

    // RESET INPUT VALUE & REMOVE CLASS
    inputValueContainer.classList.remove("input--activated");
    inputValue.value = "";
  }
};