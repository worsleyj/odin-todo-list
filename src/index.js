import "./reset.css";
import "./styles.css";
import { displayProjects, displaySelectedItem } from "./displayController";

function createNoteItem(title, desc, dueDate, priority, complete) {
    return {title, desc, dueDate, priority, complete};
}

function createProject(title) {
    const createdDate = "8/15/24";
    const items = [];
    return {title, createdDate, items};
}

const testItem = createNoteItem("Note One", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste accusantium " +
    "inventore aspernatur. Voluptas, quibusdam cum! Repellendus corrupti tempora reiciendis vel minima temporibus maiores "+ 
    "dolorum doloribus ducimus quia? Est, cumque illum.", "8/15/24", "3", false);
const testItemTwo = createNoteItem("Note about Bread", "I freaking love bread man", "9/5/24", "1", false);
const testItemThree = createNoteItem("Top 10 Animals", "Number 9: Cow", "1/1/24", "2", false)

const projects = [];
const defaultProject = createProject("Default Project");
projects.push(defaultProject);
defaultProject.items.push(testItem);
defaultProject.items.push(testItemTwo);
defaultProject.items.push(testItemThree);

const defaultProject2 = createProject("Default Project2");
projects.push(defaultProject2);
defaultProject2.items.push(testItem);
defaultProject2.items.push(testItemTwo);
defaultProject2.items.push(testItemThree);


// ~~~ dom stuff here, move to dif module on completion ~~~
displayProjects(projects);

displaySelectedItem(defaultProject.items[0]); // default displayed note

export {createProject, projects};