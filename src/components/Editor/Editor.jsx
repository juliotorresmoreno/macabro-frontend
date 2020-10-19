
import React from 'react';
import * as draft from 'draft-js';
import EditorWithPlugin from 'draft-js-plugins-editor';
// import createToolbarPlugin from 'draft-js-static-toolbar-plugin';
import createEmojiPlugin from 'draft-js-emoji-plugin';
import createSideToolbarPlugin from 'draft-js-side-toolbar-plugin';
import 'draft-js-emoji-plugin/lib/plugin.css';
import 'draft-js-static-toolbar-plugin/lib/plugin.css';
import 'draft-js/dist/Draft.css';

const emojiPlugin = createEmojiPlugin();

// const toolbarPlugin = createToolbarPlugin();
const toolbarPlugin = createSideToolbarPlugin();

class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: draft.EditorState.createEmpty()
        };
        this.onChange = editorState => this.setState({ editorState });
    }

    render() {
        return (
            <EditorWithPlugin
                autoComplete={true}
                plugins={[toolbarPlugin, emojiPlugin]}
                editorState={this.state.editorState}
                onChange={this.onChange} />
        );
    }
}

export default Editor;
