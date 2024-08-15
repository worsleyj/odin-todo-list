const projectList = document.querySelector(".project-list");

function displayProject(title, projectArray) {
    const project = document.createElement("ul");
    project.className = "project";
    projectList.append(project);

    const projectTitle = document.createElement("h1");
    projectTitle.textContent = title;
    project.append(projectTitle);

    projectArray.forEach(toDoItem => {
        const itemLine = document.createElement("li");
        const itemTitle = document.createElement("h2");
        const itemDueDate = document.createElement("div");
        itemTitle.textContent = toDoItem.title;
        itemDueDate.textContent = toDoItem.dueDate;
        itemLine.append(itemTitle, itemDueDate);
        project.append(itemLine);
    });
}

export {displayProject};