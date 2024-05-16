const TaskList = document.querySelector("#task-list ul");

TaskList.addEventListener("click", (e) => {
    const className = e.target.className;

    if (className === "delete") {
        const li = e.target.parentNode;
        TaskList.removeChild(li);
        localStorage.setItem("tasks", TaskList.innerHTML);
    }

    if (className === "mark-as-complete") {
        const li = e.target.parentNode;
        li.classList.toggle("completed");
        localStorage.setItem("tasks", TaskList.innerHTML);
    }
});

const DisplayTasks = document.forms["Display-Tasks"];
const listOfTasks = document.querySelectorAll("#task-list li .task");

DisplayTasks.addEventListener("keyup", function (e) {
    const inputText = e.target.value.toLowerCase();

    listOfTasks.forEach((tasks) => {
        const task = tasks.textContent.toLowerCase();
        const isInclude = task.includes(inputText);
        const parentNode = tasks.parentNode;

        if (isInclude) {
            parentNode.style.display = "block";
        } else {
            parentNode.style.display = "none";
        }
    });
});

const  tasks = []
const addTask = document.forms["add-task"];

addTask.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputValue = addTask.querySelector("input").value.trim();

    if (inputValue) {
        const liTag = document.createElement("li");
        const firstSpan = document.createElement("span");
        const secondSpan = document.createElement("span");
        const inputTag = document.createElement("input");

        inputTag.type = "checkbox";
        firstSpan.classList = inputValue;
        secondSpan.className = "delete";

        liTag.append(inputTag);
        liTag.append(firstSpan);
        liTag.append(secondSpan);

        firstSpan.textContent = inputValue;
        secondSpan.textContent = "delete";

        TaskList.appendChild(liTag);
         tasks.push(liTag);
         tasks.save();

        addTask.reset();
    }
});
