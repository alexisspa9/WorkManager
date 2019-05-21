const Todo = require("./todo.js");

const Project = (name) => {
    _name = name;

    const show_name = () => {
        return _name;
    }

    const edit_name = (newname) => {
        _name = newname
    }

    return {

        show_name,
        edit_name

    }
}

module.exports = Project;