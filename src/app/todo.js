const Todo = (text) => {
    let _text = text;
    let complete = false;

    const edit_text = (newtext) => {
        _text = newtext;
    }

    const toggle_complete = () => {
        complete = !complete;
    }
    const show_values = () => {
        Object.assign(_text, complete);
    }
    
    
    
    return {
        show_values,
        edit_text,
        toggle_complete
    }
}

module.exports = Todo;