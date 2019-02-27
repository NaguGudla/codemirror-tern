import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'codemirror/lib/codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/dialog/dialog';
import 'codemirror/addon/hint/show-hint';
// import 'acorn/dist/acorn';
// import 'acorn-loose/dist/acorn-loose';
import 'acorn-walk/dist/walk';
// import 'tern/doc/demo/polyfill';
// import 'tern/lib/signal';
// import 'tern/lib/tern';
// import 'tern/lib/def';
// import 'tern/lib/comment';
// import 'tern/lib/infer';
import 'codemirror/addon/tern/tern';
import 'tern/plugin/doc_comment';
import 'codemirror/addon/hint/javascript-hint';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/runmode/runmode';
import 'codemirror/addon/lint/lint';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
