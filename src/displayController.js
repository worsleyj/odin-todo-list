const projectList = document.querySelector(".project-list");
const selection = document.querySelector(".selected-item");

function displayProject(title, projectArray) {
    const project = document.createElement("ul");
    project.className = "project";
    projectList.append(project);

    const projectTitle = document.createElement("h1");
    projectTitle.textContent = title;
    project.append(projectTitle);

    projectArray.forEach(toDoItem => {
        const itemLine = document.createElement("li");
        let index = 0;
        itemLine.addEventListener("click", () => {
            displaySelectedItem(toDoItem);
        })
        const itemTitle = document.createElement("h2");
        const itemDueDate = document.createElement("div");
        itemTitle.textContent = toDoItem.title;
        itemDueDate.textContent = toDoItem.dueDate;
        itemLine.append(itemTitle, itemDueDate);
        project.append(itemLine);
    });
}

function displaySelectedItem(selectedItem) {
    selection.textContent = "";
    const itemContainer = document.createElement("div");
    const itemTitle = document.createElement("h1");
    const itemDesc = document.createElement("p");
    const itemDueDate = document.createElement("p");

    itemTitle.textContent = selectedItem.title;
    itemDesc.textContent = selectedItem.desc;
    itemDueDate.textContent = selectedItem.dueDate;

    selection.append(itemContainer);
    itemContainer.append(itemTitle, itemDesc, itemDueDate);
}

export {displayProject, displaySelectedItem};