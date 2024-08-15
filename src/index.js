import "./reset.css";
import "./styles.css";

function createTodoItem(title, desc, dueDate, priority, tags, checked) {
    return {title, desc, dueDate, priority, tags, checked};
}

const testItem = createTodoItem("Title", "Description", "8/15/24", "Low", "", false);
const testItemTwo = createTodoItem("Title2", "Description2", "9/5/24", "High", "", false);
console.log(testItem.title);

function createProject(title) {
    const createdDate = "8/15/24";
    const items = [];
    return {title, createdDate, items};
}

const defaultProject = createProject("Default Project");
defaultProject.items.push(testItem);
defaultProject.items.push(testItemTwo);

// ~~~ dom stuff here, move to dif module on completion ~~~
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

displayProject(defaultProject.title, defaultProject.items);