import { Component } from '@angular/core';
import * as codeMirror from 'codemirror';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent {

  private CodeMirror: any = codeMirror;

  private server = new this.CodeMirror.TernServer();
  codemirrorConfig = {
    lineNumbers: true,
    autoCloseTags: true,
    autoCloseBrackets: true,
    matchBrackets: true,
    enableSearchTools: true,
    enableCodeFolding: true,
    enableCodeFormatting: true,
    autoFormatOnStart: true,
    autoFormatOnModeChange: true,
    autoFormatOnUncomment: true,
    highlightActiveLine: true,
    theme: 'material',
    extraKeys: {
      'Ctrl-Space': 'auto-complete',
      'Ctrl-O': (cm: any) => { this.server.showDocs(cm); },
      'Ctrl-I': (cm) => { this.server.showType(cm); },
      'Alt-.': (cm) => { this.server.jumpToDef(cm); },
      'Alt-,': (cm) => { this.server.jumpBack(cm); },
      'Ctrl-Q': (cm) => { this.server.rename(cm); },
      'Ctrl-.': (cm) => { this.server.selectName(cm); },
      'Ctrl-Y': (cm: any) => { this.server.showTooltip(cm) }
    },
    lint: { getAnnotations: this.CodeMirror.ternLint, async: true, server: this.server },
    mode: { name: 'javascript', globalVars: true },
    gutters: ["CodeMirror-lint-markers"],
  };

  constructor() { }

}
