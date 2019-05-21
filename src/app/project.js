const Todo = require("./todo.js");
const Moment = require("moment");

const Project = (name, total = 0, recurring = false, _start_date = Moment().format("MMM Do YY"), _due_date = Moment().add(1, 'days').format("MMM Do YY")) => {
    let _name = name;
    let complete = false;
    let _recurring = recurring;
    let start_date = _start_date;
    let due_date = _due_date;
    let paid = 0;
    let _total = total;
    let notes = "";
    let todos = new Set();

    const add_todo = (message) => {
        const newTodo = Todo(message);
        todos.add(newTodo);
    }

    const delete_todo = (todo) => {
        todos.delete(todo);
    }

    const calculate_progress = () => {
        const completed = [...todos].filter(todo => todo.show_values().complete === true);
        let progress = 0;
        if (todos.size > 0) {
        progress = (parseFloat(completed.length) / parseFloat(todos.size)) * 100;
        }
        return progress;
    }

    const show_values = () => {
        const values = {
            name: _name,
            complete: complete,
            recurring: _recurring,
            startDate: start_date,
            dueDate: due_date,
            paid: paid,
            total: _total,
            notes: notes,
            todos: todos
        }
        return values;
    };

    const edit_name = (newname) => {
        _name = newname
    }

    const toggle_complete = () => {
        complete = !complete
    }

    const set_total = (val) => {
        _total = val;
    }

    const set_paid = (val) => {
        paid = val;
    }

    const set_notes = (val) => {
        notes = val;
    }

    return {
        show_values,
        edit_name,
        toggle_complete,
        set_total,
        set_paid,
        set_notes,
        add_todo,
        delete_todo,
        calculate_progress

    }
}

module.exports = Project;