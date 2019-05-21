const Todo = require("./todo.js");

const Project = (name, total = 0, recurring = false) => {
    let _name = name;
    let complete = false;
    let _recurring = recurring;
    let start_date = "";
    let due_date = "";
    let paid = 0;
    let _total = total;
    let notes = "";

    const show_values = () => {
        const values = {
            name: _name,
            complete: complete,
            recurring: _recurring,
            startDate: start_date,
            dueDate: due_date,
            paid: paid,
            total: _total,
            notes: notes
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
        set_notes

    }
}

module.exports = Project;