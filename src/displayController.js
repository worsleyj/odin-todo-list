import { createProject, projects } from ".";
const projectList = document.querySelector(".project-list");
const selection = document.querySelector(".selected-item");
const projectModal = document.querySelector(".new-project");
// const noteItemModal = document.querySelector(".new-note-item");

const submitNewProjectBtn = document.querySelector(".submit-new-project");
    submitNewProjectBtn.addEventListener("click", () => {
        const newProjectTitle = document.getElementById("new-title");
        const newProject = createProject(newProjectTitle.value);
        projects.push(newProject);
        projectList.textContent = "";
        displayProjects(projects);
    })

function displayProjects(projects) {
    projects.forEach(project => {
        displayProject(project.title, project.items);
    })
    const newProjectBtn = document.createElement("button");
    newProjectBtn.className = "new-project-button";
    newProjectBtn.textContent = "New Project";

    newProjectBtn.addEventListener("click", () => {
        projectModal.showModal();
    })
    console.log(projects);
    
    projectList.append(newProjectBtn);
}

function displayProject(title, projectArray) {
    const project = document.createElement("ul");
    project.className = "project";
    projectList.append(project);

    const projectTitle = document.createElement("h1");
    projectTitle.textContent = title;
    project.append(projectTitle);
        projectArray.forEach((noteItem, index) => {
            const itemLine = document.createElement("li");
            itemLine.addEventListener("click", () => {
                displaySelectedItem(noteItem);
            })
            itemLine.className = "note-item";
            itemLine.setAttribute("data-index", index);
            index++;
            const itemTitle = document.createElement("h2");
            const itemDueDate = document.createElement("div");
            const deleteBtn = document.createElement("button");
            itemTitle.textContent = noteItem.title;
            itemDueDate.textContent = noteItem.dueDate;
            deleteBtn.textContent = "X";
            deleteBtn.className = "delete-btn";
            deleteBtn.addEventListener("click", () => {
                const deleteIndex = deleteBtn.parentElement.getAttribute("data-index");
                projectList.textContent = "";
                projectArray.splice(deleteIndex, 1);
                displayProjects(projects);
            });
    
            itemLine.append(itemTitle, itemDueDate, deleteBtn);
            project.append(itemLine);
        });
        const newTodoBtn = document.createElement("button");
        newTodoBtn.style.visibility = "hidden";
        newTodoBtn.className = "new-note-button";
        newTodoBtn.textContent = "New Note";
        project.append(newTodoBtn);
        project.addEventListener("mouseover", () => {
            newTodoBtn.style.visibility = "visible";
        })
        project.addEventListener("mouseout", () => {
            newTodoBtn.style.visibility = "hidden";
        })
}

function displaySelectedItem(selectedItem) {
    selection.textContent = "";
    const itemContainer = document.createElement("div");
    const itemTitle = document.createElement("h1");
    const itemDesc = document.createElement("p");
    const itemDueDate = document.createElement("div");
    const itemPriority = document.createElement("div");

    itemTitle.textContent = selectedItem.title;
    itemDesc.textContent = selectedItem.desc;
    itemDueDate.textContent = selectedItem.dueDate;
    itemPriority.textContent = selectedItem.priority;

    selection.append(itemContainer);
    itemContainer.append(itemTitle, itemDesc, itemDueDate, itemPriority);
}

export {displayProjects, displaySelectedItem};