const Todo = require('./todo');
const mytodo = Todo("do that");

test('show_text() returns the text value of the todo', () => {
    expect(mytodo.show_values()).toEqual({
        text: "do that",
        complete: false
    });
});

test('toggle_complete() toggles the complete state', () => {
    mytodo.toggle_complete();
    expect(mytodo.show_values()).toEqual({
        text: "do that",
        complete: true
    });
    mytodo.toggle_complete();
});

test('edit_text() changes the text value of the Todo', () => {
    mytodo.edit_text("new text");
    expect(mytodo.show_values()).toEqual({
        text: "new text",
        complete: false
    });
});
