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
        const values = {
            text: _text,
            complete: complete
        }
        return values;
    }
    
    
    
    return {
        show_values,
        edit_text,
        toggle_complete
    }
}

module.exports = Todo;