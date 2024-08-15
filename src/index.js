import "./reset.css";
import "./styles.css";
import { displayProject } from "./displayController";

function createTodoItem(title, desc, dueDate, priority, tags, complete) {
    return {title, desc, dueDate, priority, tags, complete};
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
displayProject(defaultProject.title, defaultProject.items);