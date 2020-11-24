import React from 'react'

function Editor() {
        return (<div>
            <h1>Welcome to Markdown Previewer</h1>
            <textarea id="editor" name="editor" rows="10" cols="60">
                #The best way to learn is to start
                **Don't let bad thoughts intimidate you.**
                *Be free to create*
                ##This previewer helps you write beautiful and useful Markdown
                1. Write clean information
                2. Highlight according to your needs
                3. Use the previewer to see the results
            </textarea>
        </div>);
    }

export default Editor;
