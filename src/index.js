import "./reset.css";
import "./styles.css";

console.log("Test");

function createTodoItem(title, desc, dueDate, priority, notes, checked) {
    return {title, desc, dueDate, priority, notes, checked}
}

const testItem = createTodoItem("Title", "Description", "8/15/24", "Low", "", false);
console.log(testItem.title);


// ~~~ dom stuff here, move to dif module on completion ~~~

const projectList = document.querySelector(".project-list");


// does this need to be an object?

function createProject(title) {
    const project = document.createElement("ul");
    project.className = "project";
    projectList.append(project);

    const projectTitle = document.createElement("h1");
    projectTitle.textContent = title;

    const toDoItem = document.createElement("li");
    const itemTitle = document.createElement("h2");
    const itemDueDate = document.createElement("div");
    itemTitle.textContent = testItem.title;
    itemDueDate.textContent = testItem.dueDate;
    toDoItem.append(itemTitle, itemDueDate)

    project.append(projectTitle, toDoItem);
}

const defaultProject = createProject("Default Project");