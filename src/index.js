import "./reset.css";
import "./styles.css";

console.log("Test");

function createTodoItem(title, desc, dueDate, priority, notes, checked) {
    return {title, desc, dueDate, priority, notes, checked}
}

const testItem = createTodoItem("Title", "Description", "8/15/24", "Low", "", false);
console.log(testItem.title);


// dom stuff here, move to dif module on completion

const projectList = document.querySelector(".project-list");


// does this need to be an object?
const defaultProject = document.createElement("ul");
defaultProject.className = "default-project";
projectList.append(defaultProject);
const projectTitle = document.createElement("h1");
projectTitle.textContent = "Default Project"
defaultProject.append(projectTitle);

const itemOne = document.createElement("li"); 
itemOne.textContent = testItem.title;
defaultProject.append(itemOne);