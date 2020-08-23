import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InnerContentComponent } from './inner-content/inner-content.component';
import { ModalSampleComponent } from './modal-sample/modal-sample.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, InnerContentComponent, ModalSampleComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
