import React, {Component} from 'react';
import Editor from './Editor'
import marked from 'marked'

class Previewer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <div id="content"></div>
            <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
            <div dangerouslySetInnerHTML={{__html: marked("# Welcome to Markdown Previewer\n\n## Here you can write beautiful markdown and preview the results\n\n Brief examples:\n\n1. `H1: # H1`\n\n2. `H2: ## H2`\n\n3. `<code>code</code>`\n\n4. Inline code `<addr>`\n\n**Need help with syntaxe ? access:** [Markdown Guide!](https://www.markdownguide.org/)")}} />
        </div>);
    }
}
export default Previewer
