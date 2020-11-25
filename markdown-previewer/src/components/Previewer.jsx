import React, {Component} from 'react';
import Editor from './Editor'
import marked from 'marked'

class Previewer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div id="previewer">
            <div id="content"></div>
            <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
            <div dangerouslySetInnerHTML={{
                    __html: marked("# Hello, here is your HTML Previewer\n\n<hr></hr>\n\n## Here you can write beautiful markdown and preview the results\n\nUseful ways of showing information using markdown:\n\n+ Show code examples in instructions with tags code <code></code> `<code></code>` or inside ``.\n\n+ Use blockquotes with content inside `<blockquote></bloquote>` tags.\n\n+ If you like creating images or use emoticons you also can use cute emoticons ʕ•́ᴥ•̀ʔっ\n\n+ ... and images <img src='https://fsymbols.com/thumbs/54.png'  width='45' height='35' />\n\n**Need help with syntaxe ? access:** [Markdown Guide!](https://www.markdownguide.org/)")
                }}/>
        </div>);
    }
}
export default Previewer
