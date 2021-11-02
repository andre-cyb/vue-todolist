Vue.config.devtools = true;

new Vue({
    el: "#app",
    data: {
        toDoList: ["ciao"],
        task: ""
    },
    methods: {
        addTaskToDo() {
            /* if (this.toDoList.trim() === "") {
                return;
            }
 */
            let newTask = this.task;
            this.toDoList.push(newTask);
            this.task = "";
        }
    }
});