import * as React from "react";
import * as SimpleMde from 'simplemde';
import './editor.scss';

import { SimpleMdeConfig } from "./simple_mde.config";

export class Editor extends React.Component {

    editorRef: React.RefObject<HTMLTextAreaElement>;

    constructor(props: any) {
        super(props);
        this.editorRef = React.createRef();
    }

    public render() {
        return (
            <div className="editor">
                <div className="editor-content">
                    <textarea className="editor-editor" ref={this.editorRef} />
                </div>
            </div>
        );
    }

    componentDidMount() {
        const domNode = this.editorRef.current;

        const simpleMde = new SimpleMde({
            element: domNode as HTMLElement,
            ...SimpleMdeConfig
        });
        console.log(simpleMde.value());
        
    }
}
