let form = document.querySelector('#option-from');
let result = document.querySelector('#result');
let selectBtn = document.querySelector('#select-all');
let clearBtn = document.querySelector("#clear");

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
            newItem.setAttribute("class", "checked");
            numberOfUnchecked();
            numberOfChecked();
        } else {
            newItem.setAttribute("class", "unchecked");
            numberOfUnchecked();
            numberOfChecked();
        }
    }
    numberOfLi();

};

selectBtn.onclick = (event) => {checkAll()}

let allBtn = document.querySelector("#all");
let activeBtn = document.querySelector("#active");
let completedBtn = document.querySelector("#completed");

allBtn.onclick = (event) => {
    let checked = document.querySelectorAll(".checked");
    let unchecked = document.querySelectorAll(".unchecked");
    checked.forEach((item) => {
        item.style.display = 'block';
    })
    unchecked.forEach((item) => {
        item.style.display = 'block';
    })
}


activeBtn.onclick = (event) => {
    let checked = document.querySelectorAll(".checked");
    let unchecked = document.querySelectorAll(".unchecked");
    checked.forEach((item) => {
        item.style.display = 'none';
    })
    unchecked.forEach((item) => {
        item.style.display = 'block';
    })
}

completedBtn.onclick = (event) => {
    let checked = document.querySelectorAll(".checked");
    let unchecked = document.querySelectorAll(".unchecked");
    unchecked.forEach((item) => {
        item.style.display = 'none';
    })
    checked.forEach((item) => {
        item.style.display = 'block';
    })
}

clearBtn.onclick = (event) => {
    let checked = document.querySelectorAll(".checked");
    checked.forEach((item) => {
        item.remove();
    })
    clearBtn.style.display = 'none';
    numberOfLi();
}

function checkAll() {
        let allLi = document.querySelectorAll(".unchecked");
        let allBoxes = document.querySelectorAll(".box")
    
        allLi.forEach((li) => {
            li.setAttribute("class", "checked");
        })
    
        allBoxes.forEach((box) => {
            box.checked = true;
        })
    numberOfUnchecked();
    numberOfChecked();
    uncheckAll();
}

function uncheckAll() {
    selectBtn.onclick = (event) => {
        let allLi = document.querySelectorAll(".checked");
        let allBoxes = document.querySelectorAll(".box")
    
        allLi.forEach((li) => {
            li.setAttribute("class", "unchecked");
        })
    
        allBoxes.forEach((box) => {
            box.checked = false;
        })
        numberOfUnchecked();
        numberOfChecked();
        selectBtn.onclick = (event) => {checkAll()}
    }
}

function numberOfLi() {
    let count = document.querySelectorAll(".checked").length + document.querySelectorAll(".unchecked").length;
    let footer = document.querySelector("footer");

    if (count > 0) {
        selectBtn.style.display = 'flex';
        footer.style.display = 'block';
        numberOfUnchecked();
    } else {
        selectBtn.style.display = 'none';
        footer.style.display = 'none';
    }
}

function numberOfUnchecked() {
    let count = document.querySelectorAll(".unchecked").length;
    document.querySelector('#items-left').textContent = `${count} items left`;
}

function numberOfChecked() {
    let count = document.querySelectorAll(".checked").length;
    if (count > 0) {
        clearBtn.style.display = 'block';
    } else {
        clearBtn.style.display = 'none';
    }
}














