import React, {Component} from 'react'

class Editor extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <h1>Welcome to Markdown Previewer</h1>
            <textarea id="editor" name="editor" rows="10" cols="60">
            </textarea>
        </div>);
    }
}

export default Editor;
