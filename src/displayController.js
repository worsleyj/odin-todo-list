import { createProject, projects } from ".";
const projectList = document.querySelector(".project-list");
const selection = document.querySelector(".selected-item");

function displayProjects(projects) {
    projects.forEach(project => {
        displayProject(project.title, project.items);
    })
    const newProjectBtn = document.createElement("button");
    newProjectBtn.className = "new-project-button";
    newProjectBtn.textContent = "New Project";
    newProjectBtn.addEventListener("click", () => {
        const newProject = createProject("New Project"); // hard coded, needs modal input, need rename functionality
        projects.push(newProject);
        projectList.textContent = "";
        displayProjects(projects);
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
        projectArray.forEach((toDoItem, index) => {
            console.log(index);
            
            const itemLine = document.createElement("li");
            itemLine.addEventListener("click", () => {
                displaySelectedItem(toDoItem);
            })
            itemLine.className = "to-do-item";
            itemLine.setAttribute("data-index", index);
            const itemTitle = document.createElement("h2");
            const itemDueDate = document.createElement("div");
            const deleteBtn = document.createElement("button");
            itemTitle.textContent = toDoItem.title;
            itemDueDate.textContent = toDoItem.dueDate;
            deleteBtn.textContent = "X";
            deleteBtn.className = "delete-btn";
            index++;
            deleteBtn.addEventListener("click", () => {
                const deleteIndex = deleteBtn.parentElement.getAttribute("data-index");
                projectList.textContent = "";
                projectArray.splice(deleteIndex, 1);
                displayProjects(projects);
            });
    
            itemLine.append(itemTitle, itemDueDate, deleteBtn);
            project.append(itemLine);
        });
    // displayProjectItems(project, projectArray);
}

// function displayProjectItems(project, projectArray) {
//     
// }

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