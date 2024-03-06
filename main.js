let form = document.querySelector("#option-from");
let result = document.querySelector("#result");
let selectBtn = document.querySelector("#select-all");
let clearBtn = document.querySelector("#clear");

htmlHeight();

form.onsubmit = (event) => {
  event.preventDefault();
  if (document.getElementById("input-text").value.trim().length > 0) {
    let text = form.elements.inputText.value;
    form.elements.inputText.value = "";

    let newItem = document.createElement("li");
    newItem.setAttribute("class", "unchecked");

    let newContainer = document.createElement("div");

    let newBox = document.createElement("input");
    newBox.setAttribute("type", "checkbox");
    newBox.setAttribute("class", "box");

    let newLabel = document.createElement("label");
    newLabel.setAttribute("class", "task");

    let deleteBtn = document.createElement("button");

    deleteBtn.textContent = "❌";

    newLabel.textContent = text;

    result.appendChild(newItem);
    newItem.append(newContainer);
    newContainer.append(newBox);
    newContainer.append(newLabel);
    newContainer.append(deleteBtn);

    deleteBtn.onclick = (event) => {
      newItem.remove();
      numberOfLi();
    };

    newLabel.onclick = (event) => {
      event.preventDefault();
      if (newItem.getAttribute("class") === "unchecked") {
        newItem.setAttribute("class", "checked");
        newBox.checked = true;
        numberOfUnchecked();
        numberOfChecked();
      } else {
        newItem.setAttribute("class", "unchecked");
        newBox.checked = false;
        numberOfUnchecked();
        numberOfChecked();
      }
    };

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
    };
    htmlHeight();
    numberOfLi();
  }
};

selectBtn.onclick = (event) => {
  checkAll();
};

let allBtn = document.querySelector("#all");
let activeBtn = document.querySelector("#active");
let completedBtn = document.querySelector("#completed");

allBtn.onclick = (event) => {
  event.preventDefault();

  let checked = document.querySelectorAll(".checked");
  let unchecked = document.querySelectorAll(".unchecked");
  checked.forEach((item) => {
    item.style.display = "block";
  });
  unchecked.forEach((item) => {
    item.style.display = "block";
  });
};

activeBtn.onclick = (event) => {
  let checked = document.querySelectorAll(".checked");
  let unchecked = document.querySelectorAll(".unchecked");
  checked.forEach((item) => {
    item.style.display = "none";
  });
  unchecked.forEach((item) => {
    item.style.display = "block";
  });
};

completedBtn.onclick = (event) => {
  let checked = document.querySelectorAll(".checked");
  let unchecked = document.querySelectorAll(".unchecked");
  unchecked.forEach((item) => {
    item.style.display = "none";
  });
  checked.forEach((item) => {
    item.style.display = "block";
  });
};

clearBtn.onclick = (event) => {
  let checked = document.querySelectorAll(".checked");
  checked.forEach((item) => {
    item.remove();
  });
  clearBtn.style.display = "none";
  numberOfLi();
  let html = document.querySelector("html");
  html.setAttribute("style", `height: 100%;`);
};

function checkAll() {
  let allLi = document.querySelectorAll(".unchecked");
  let allBoxes = document.querySelectorAll(".box");

  allLi.forEach((li) => {
    li.setAttribute("class", "checked");
  });

  allBoxes.forEach((box) => {
    box.checked = true;
  });
  numberOfUnchecked();
  numberOfChecked();
  uncheckAll();
}

function uncheckAll() {
  selectBtn.onclick = (event) => {
    let allLi = document.querySelectorAll(".checked");
    let allBoxes = document.querySelectorAll(".box");

    allLi.forEach((li) => {
      li.setAttribute("class", "unchecked");
    });

    allBoxes.forEach((box) => {
      box.checked = false;
    });
    numberOfUnchecked();
    numberOfChecked();
    selectBtn.onclick = (event) => {
      checkAll();
    };
  };
}

function numberOfLi() {
  let count =
    document.querySelectorAll(".checked").length +
    document.querySelectorAll(".unchecked").length;
  let footer = document.querySelector("footer");

  if (count > 0) {
    selectBtn.style.display = "flex";
    footer.style.display = "flex";
    form.style.paddingLeft = "20px";
    form.style.borderBottom = "1px solid rgb(150, 93, 255)";
    document.querySelector("#input-text").style.paddingLeft = "10px";
    numberOfUnchecked();
  } else {
    selectBtn.style.display = "none";
    footer.style.display = "none";
    form.style.paddingLeft = "60px";
    form.style.borderBottom = "none";
    document.querySelector("#input-text").style.paddingLeft = "0px";
  }
}

function numberOfUnchecked() {
  let count = document.querySelectorAll(".unchecked").length;
  if (count === 1) {
    document.querySelector("#items-left").textContent = `${count} item left`;
  } else {
    document.querySelector("#items-left").textContent = `${count} items left`;
  }
}

function numberOfChecked() {
  let count = document.querySelectorAll(".checked").length;
  if (count > 0) {
    clearBtn.style.display = "block";
  } else {
    clearBtn.style.display = "none";
  }
}

function htmlHeight() {
  let html = document.querySelector("html");
  let height = html.scrollHeight;
  html.setAttribute("style", `height: ${height}px;`);
} 
  // För att förtydliga vad htmlHeight gör:
  // Den anpassar höjden på html så att bakgrunden inte spårar ur
  // om listan med Todos blir längre än vad sidan är, sedan
  // återställs höjden på html till ursprungshöjden om listan töms. :)



