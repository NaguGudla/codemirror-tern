import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';

import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    CodemirrorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
