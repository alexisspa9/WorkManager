const Project = require('./project');
const Moment = require("moment");



const myproject = Project('newproject', 250);


it('show_values() returns project values', () => {
    expect(myproject.show_values()).toEqual({
        name: 'newproject',
        complete: false,
        recurring: false,
        startDate: Moment().format("MMM Do YY"),
        dueDate: Moment().add(1, 'days').format("MMM Do YY"),
        paid: 0,
        total: 250,
        notes: "",
        todos: new Set()
    });
});

it('edit_name(newname) edits the name of the project to the new name', () => {
    myproject.edit_name('newname');
    expect(myproject.show_values().name).toEqual('newname');
});

it('toggle_complete() toggles complete value', () => {
    myproject.toggle_complete();
    expect(myproject.show_values().complete).toBe(true);
});

it('set_total(val) set the total amount to the input value', () => {
    myproject.set_total(500);
    expect(myproject.show_values().total).toBe(500);
});

it('set_paid(val) set the paid amount to the input value', () => {
    myproject.set_paid(200);
    expect(myproject.show_values().paid).toBe(200);
});


it('set_notes(val) set the notes value to the input value', () => {
    myproject.set_notes("this is a test");
    expect(myproject.show_values().notes).toEqual("this is a test");
});


it('add_todo(message) adds todo object to todos set', () => {
    myproject.add_todo("this is a todo");
    let thetodo = [...myproject.show_values().todos].filter(todo => todo.show_values().text === "this is a todo" )
    expect(thetodo.length).toEqual(1);
});

it('add_todo(message) adds a second todo object to todos set', () => {
    myproject.add_todo("this is another todo");
    let theotherdo = [...myproject.show_values().todos].filter(todo => todo.show_values().text === "this is another todo")
    expect(theotherdo.length).toEqual(1);
    expect(myproject.show_values().todos.size).toEqual(2)
});

it('delete_todo(todo) deletes a todo from the set of todos', () => {
    [...myproject.show_values().todos].forEach(todo => {
        if (todo.show_values().text == "this is another todo") {
            myproject.delete_todo(todo)
        }
    });
    expect(myproject.show_values().todos.size).toEqual(1)
});

it('calculate_progress() returns project progress', () => {
    myproject.add_todo("this is another todo");
    myproject.add_todo("this is another todo");
    myproject.add_todo("this is another todo");
    [...myproject.show_values().todos].forEach(todo => {
        if (todo.show_values().text == "this is another todo") {
            todo.toggle_complete();
        }
    });
    expect(myproject.calculate_progress()).toEqual(75);
});


//has value recurring or one time