const inputOpenButton = document.querySelector(".add-todo__container");
const inputCloseButton = document.querySelector(".close-input");
const inputContainer = document.querySelector(".input__container");

inputOpenButton.addEventListener("click", () => {
 inputContainer.classList.add("input--activated");
});
inputCloseButton.addEventListener("click", () => {
    inputContainer.classList.remove("input--activated");
});






const addToDo = () => {
    const inputValue = document.querySelector(".input-text");


    if(inputValue.value === "") {
        alert("Field is empty! Please write something.");
    }


    else {
        const inputValueContainer = document.querySelector(".input__container");
        const listContainer = document.querySelector(".todo__list");
    
        // CREATE NEW LI ASSIGN A CLAS & VALUE
        const newToDo = document.createElement("li");
        newToDo.classList.add("todo__item");
        newToDo.innerHTML = inputValue.value;
        // 
    
    
        // ADD COMPLETE & REMOVE BUTTONS
        const completeButton = document.createElement("span");
        completeButton.classList.add("done");
        completeButton.innerHTML = "<i class='fa-solid fa-check'></i>"
        
        const removeButton = document.createElement("span");
        removeButton.classList.add("delete");
        removeButton.innerHTML = "<i class='fa-solid fa-trash'></i>"
        // 
    
    
        // HAVE TODO APPEND BUTTONS & CONTAINER APPEND NEW TO DO
        newToDo.appendChild(completeButton);
        newToDo.appendChild(removeButton);
        listContainer.appendChild(newToDo);
        // 




        // COMPLETE / DELETE FUNCTION
        completeButton.addEventListener("click", () => {
                newToDo.classList.toggle("item--completed");
        });



        removeButton.addEventListener("click", () => {
                    newToDo.style.display = "none";
        });

    

    
        // RESET INPUT VALUE & REMOVE CLASS
        inputValueContainer.classList.remove("input--activated");
        inputValue.value = "";


    }

}




