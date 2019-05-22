var countElement = document.querySelector("#countElement");
var addButton = document.querySelector("#add");
var addingParent = document.querySelector("#addingParent");

addButton.addEventListener("click", function() {
    addingParent.innerHTML = "";
    for (var i = 0; i < countElement.value; i++) {
        var li = document.createElement("li");
        li.classList.add("list-group-item");
        li.innerText = i + 1;
        addingParent.appendChild(li);
    }
})