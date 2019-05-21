const Project = require('./project');


const myproject = Project('newproject');


it('show_name() returns the name of the project', () => {
    expect(myproject.show_name()).toEqual('newproject');
});

it('edit_name(newname) edits the name of the project to the new name', () => {
    myproject.edit_name('newname');
    expect(myproject.show_name()).toEqual('newname');
});


//has value complete
//has value recurring or one time
//has start date
//has due date
//has paid property
//has total property
//has notes property
//has todos
//can add a todo
//can delete a todo
//can edit a todo
//can calculate progress