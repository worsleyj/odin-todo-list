import { createNoteItem, createProject, projects } from ".";
const projectList = document.querySelector(".project-list");
const selection = document.querySelector(".selected-item");
const projectModal = document.querySelector(".new-project");
const noteModal = document.querySelector(".new-note");
const editModal = document.querySelector(".edit-note");

function resetDisplay() {
    projectList.textContent = "";
    displayProjects(projects);
}

const submitNewProjectBtn = document.querySelector(".submit-new-project");
    submitNewProjectBtn.addEventListener("click", () => {
        const newProjectTitle = document.getElementById("new-project-title");
        const newProject = createProject(newProjectTitle.value);
        projects.push(newProject);
        resetDisplay();
    })

const submitNewNoteBtn = document.querySelector(".submit-new-note");
    submitNewNoteBtn.addEventListener("click", () => {
        const newNoteTitle = document.getElementById("new-note-title");
        const newNoteDesc = document.getElementById("new-desc");
        const newNoteDate = document.getElementById("new-date");
        const newNotePrio = document.getElementById("new-priority");
        const projectIndex = document.querySelector("#project-index");
        const newNote = createNoteItem(newNoteTitle.value, newNoteDesc.value, newNoteDate.value, newNotePrio.value, false);
        projects[projectIndex.value-1].items.push(newNote);
        resetDisplay();
    })

function displayProjects(projects) {
    const projectIndex = document.querySelector("#project-index");
    projectIndex.setAttribute("max", projects.length)
    let index = -1;
    projects.forEach(project => {
        index++;
        displayProject(project, project.items, index);
    });
    const newNoteBtn = document.createElement("button");
    newNoteBtn.className = "new-note-button";
    newNoteBtn.textContent = "New Note";

    newNoteBtn.addEventListener("click", () => {
        noteModal.showModal();
    })
    const newProjectBtn = document.createElement("button");
    newProjectBtn.className = "new-project-button";
    newProjectBtn.textContent = "New Project";

    newProjectBtn.addEventListener("click", () => {
        projectModal.showModal();
    })
    projectList.append(newNoteBtn, newProjectBtn);
}

function displayProject(projectObj, projectArray, index) {
    const project = document.createElement("ul");
    project.className = "project";
    project.setAttribute("data-index", index);
    projectList.append(project);

    const projectTitle = document.createElement("h1");
    const deleteProjectBtn = document.createElement("button");
    deleteProjectBtn.textContent = "Delete Project";
    deleteProjectBtn.addEventListener("click", () => {
        projects.splice(index, 1);
        resetDisplay();
    })
    projectTitle.textContent = projectObj.title;
    project.append(projectTitle, deleteProjectBtn);

    displayNotes(project, projectArray);
}

function displayNotes(project, projectArray) {
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
        const isComplete = document.createElement("div");
        const deleteNoteBtn = document.createElement("button");
        itemTitle.textContent = noteItem.title;
        itemDueDate.textContent = noteItem.dueDate;
        deleteNoteBtn.textContent = "X";
        deleteNoteBtn.className = "delete-btn";
        deleteNoteBtn.addEventListener("click", () => {
            const deleteIndex = deleteNoteBtn.parentElement.getAttribute("data-index");
            projectArray.splice(deleteIndex, 1);
            resetDisplay();
        });
        if(noteItem.complete) {
            isComplete.textContent = "✅";
        }


        itemLine.append(itemTitle, itemDueDate, isComplete, deleteNoteBtn);
        project.append(itemLine);
    });
}

function checkComplete(selectedItem, completeStatus) {
    if(selectedItem.isComplete) {
        completeStatus.textContent = "✅";
    } else completeStatus.textContent = "❌";
}

function editButton(selectedItem) {
    const editTitle = document.querySelector("#edit-title");
    const editDesc = document.querySelector("#edit-desc");
    const editDate = document.querySelector("#edit-date");
    const editPriority = document.querySelector("#edit-priority");

    editTitle.value = selectedItem.title;
    editDesc.value = selectedItem.desc;
    editDate.value = selectedItem.dueDate;
    editPriority.value = selectedItem.priority;

    const submitEditBtn = document.querySelector(".submit-edit");
    submitEditBtn.addEventListener("click", () => {
        selectedItem.title = editTitle.value;
        selectedItem.desc = editDesc.value;
        selectedItem.dueDate = editDate.value;
        selectedItem.priority = editPriority.value;
        resetDisplay();
        displaySelectedItem(selectedItem);
    })
    editModal.showModal();
}

function displaySelectedItem(selectedItem) {
    selection.textContent = "";
    const itemContainer = document.createElement("div");
    const itemTitle = document.createElement("h1");
    const itemDesc = document.createElement("p");
    const itemDueDate = document.createElement("div");
    const itemPriority = document.createElement("div");
    const completeStatus = document.createElement("div");
    const toggleComplete = document.createElement("button");
    const editBtn = document.createElement("button");

    itemTitle.textContent = selectedItem.title;
    itemDesc.textContent = selectedItem.desc;
    itemDueDate.textContent = selectedItem.dueDate;
    itemPriority.textContent = selectedItem.priority;

    editBtn.textContent = "Edit Note";
    editBtn.addEventListener("click", () => editButton(selectedItem));

    checkComplete(selectedItem, completeStatus);
    toggleComplete.textContent = "Mark as Completed";
    toggleComplete.addEventListener("click", () => {
        if (selectedItem.isComplete) {
            selectedItem.isComplete = false;
        } else {
            selectedItem.isComplete = true;
        }
        checkComplete(selectedItem, completeStatus);
    })


    selection.append(itemContainer);
    itemContainer.append(itemTitle, itemDesc, itemDueDate, itemPriority, editBtn, completeStatus, toggleComplete);
}

export {displayProjects, displaySelectedItem};