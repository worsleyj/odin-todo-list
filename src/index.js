import "./reset.css";
import "./styles.css";
import { displayProject, displaySelectedItem } from "./displayController";

function createTodoItem(title, desc, dueDate, priority, tags, complete) {
    return {title, desc, dueDate, priority, tags, complete};
}

const testItem = createTodoItem("Note One", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste accusantium " +
    "inventore aspernatur. Voluptas, quibusdam cum! Repellendus corrupti tempora reiciendis vel minima temporibus maiores "+ 
    "dolorum doloribus ducimus quia? Est, cumque illum.", "8/15/24", "Low", "", false);
const testItemTwo = createTodoItem("Note about Bread", "I freaking love bread man", "9/5/24", "High", "", false);

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

displaySelectedItem(defaultProject.items[1]);
