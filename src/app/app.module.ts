import { TypographyComponent } from './typography/typography.component'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ButtonsComponent } from './buttons/buttons.component';


@NgModule({
  declarations: [
    AppComponent,
    TypographyComponent,
    ButtonsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
