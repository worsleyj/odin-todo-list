import "./reset.css";
import "./styles.css";

console.log("Test");

function createTodoItem() {
    let title = "Title";
    let desc = "Description";
    let dueDate = "8/15/24";
    let priority = "Medium";
    let notes = "";
    let checked = false;

    return {title, desc, dueDate, priority, notes, checked}
}

const testItem = createTodoItem();
console.log(testItem.title);
