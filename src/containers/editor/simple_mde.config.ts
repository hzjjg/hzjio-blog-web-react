/**
 * simplemde 插件的配置
 * https://github.com/sparksuite/simplemde-markdown-editor
 */

import * as SimpleMde from 'simplemde';

export const SimpleMdeConfig:SimpleMde.Options = {
	autofocus: true,
	autosave: {
		enabled: true,
		uniqueId: "main editor",
		delay: 1000,
	},
	renderingConfig: {
        singleLineBreaks: false,
        codeSyntaxHighlighting:true
	},
	styleSelectedText: false,
    tabSize: 4,
    spellChecker:false,
	toolbarTips: false,
}