let form = document.querySelector('#option-from');
let result = document.querySelector('#result');
let selectBtn = document.querySelector('#select-all');

form.onsubmit = (event) => {
    event.preventDefault();

    let text = form.elements.inputText.value;
    form.elements.inputText.value = '';

    let newItem = document.createElement('li');
    newItem.setAttribute("class", "unchecked");

    let newContainer = document.createElement('div');

    let newBox = document.createElement('input');
    newBox.setAttribute("type", "checkbox");
    newBox.setAttribute("class", "box");

    let newLabel = document.createElement('label');

    let deleteBtn = document.createElement('button');

    deleteBtn.textContent = "❌";

    newLabel.textContent = text;

    result.appendChild(newItem);
    newItem.append(newContainer);
    newContainer.append(newBox)
    newContainer.append(newLabel)
    newContainer.append(deleteBtn)

    deleteBtn.onclick = (event) => {
        newItem.remove();
        numberOfLi();
    }

    newBox.onchange = (event) => {

        if (event.currentTarget.checked) {
            newItem.changeAttribute("class", "checked");
        } else {
            newItem.removeAttribute("class");
        }
    }
    numberOfLi();

};

selectBtn.onclick = (event) => {checkAll()}

function checkAll() {
        let allLi = document.querySelectorAll("li");
        let allBoxes = document.querySelectorAll(".box")
    
        allLi.forEach((li) => {
            li.setAttribute("class", "checked");
        })
    
        allBoxes.forEach((box) => {
            box.checked = true;
        })
    uncheckAll();
}

function uncheckAll() {
    selectBtn.onclick = (event) => {
        let allLi = document.querySelectorAll("li");
        let allBoxes = document.querySelectorAll(".box")
    
        allLi.forEach((li) => {
            li.removeAttribute("class");
        })
    
        allBoxes.forEach((box) => {
            box.checked = false;
        })
        selectBtn.onclick = (event) => {checkAll()}
    }
}

function numberOfLi() {
    let numOfLi = document.querySelectorAll("li").length;

    if (numOfLi > 0) {
        selectBtn.style.display = 'block';
    } else {
        selectBtn.style.display = 'none';
    }
}









