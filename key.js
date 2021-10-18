// select ul dom
const ulSelector = document.querySelector('ul.list');
// select li, creat dom element
const liSelector = ulSelector.querySelectorAll("li.email");
//select input
const inputSelector = ulSelector.querySelector("input[type='text']");
//select input parent
const prentInput = inputSelector.parentElement;

// event listener for asign  arrows event 
inputSelector.addEventListener('keydown', keyFunction);
// functions 
function keyFunction(e) {
    // cumma key movement
    if (e.keyCode == '188') {
        if (input.value == '') {
            e.preventDefault();
        } else {
            e.preventDefault();
            // creat li
            const createLi = document.createElement('li');
            // get input value
            createLi.innerText = inputSelector.value;
            //give class name
            createLi.classList.add('email');
            //insert before
            ulSelector.insertBefore(createLi, prentInput);
            //ulSelector.insertBefore(createLi, inputLi.nextElementSibling);
            input.value = null;
            // remove btn
            const removeButton = document.createElement("button");
            removeButton.innerHTML = '<i class="fas fa-times"></i>';
            removeButton.classList.add("delete");
            createLi.appendChild(removeButton);
            // event listener
            ulSelector.addEventListener('click', removeItem);
            //function
            function removeItem(e) {
                const item = e.target.parentElement;
                //console.log(item);
                if (item.classList.contains('delete')) {
                    const parentItem = item.parentElement;
                    parentItem.remove();
                }
            } inputSelector.focus();
        }
    }
    //Tab key function
    else if (e.keyCode == '9') {
        const getLi = inputSelector.parentElement;
        console.log(getLi);
        //get li tag that located before the input tag
        const getLiSibil = getLi.previousElementSibling;
        if (getLi.previousElementSibling) {
            e.preventDefault();
            const getLiVal = getLiSibil.innerText;
            // reveal li value in input box
            inputSelector.value = getLiVal;

        } else {
            e.preventDefault();
        }
    }
}