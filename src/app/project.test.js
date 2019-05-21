const Project = require('./project');


const myproject = Project('newproject', 250);


it('show_values() returns project values', () => {
    expect(myproject.show_values()).toEqual({
        name: 'newproject',
        complete: false,
        recurring: false,
        startDate: "",
        dueDate: "",
        paid: 0,
        total: 250,
        notes: ""
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


//has value recurring or one time
//has start date
//has due date
//has todos
//can add a todo
//can delete a todo
//can edit a todo
//can calculate progress