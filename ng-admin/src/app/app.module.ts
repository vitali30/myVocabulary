import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderNavigationComponent } from './header-navigation/header-navigation.component';
import { SearcherComponent } from './searcher/searcher.component';
import { WordSectionComponent } from './word-section/word-section.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderNavigationComponent,
    SearcherComponent,
    WordSectionComponent,
    ModalComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
