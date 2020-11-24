import React, {Component} from 'react';
import Editor from './Editor'
let marked = require("marked");

class Previewer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <div id="content"></div>
            <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
            <div dangerouslySetInnerHTML={{
                    __html: marked('#Camila \n\nRendered by **marked**.')
                }}/>
        </div>);
    }

} {/*User Story #5: When my markdown previewer first loads, the default text in the #editor field should contain valid markdown that represents at least one of each of the following elements: a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.*/
}

export default Previewer
