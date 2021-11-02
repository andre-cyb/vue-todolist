Vue.config.devtools = true;

new Vue({
    el: "#app",
    data: {
        toDoList: [],
        task: ""
    },
    methods: {
        addTaskToDo() {
            let newTask = this.task;
            this.toDoList.push(newTask);
            this.task = "";
        }
    }
});