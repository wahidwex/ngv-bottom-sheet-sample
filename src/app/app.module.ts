import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TargetComponent } from './target/target.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BOTTOM_SHEET_ROUTES } from './bottom-sheet.routes/bottom-sheet.routes';
import { NgvBottomSheetModule } from 'ngv-bottom-sheet';
@NgModule({
  declarations: [
    AppComponent,
    TargetComponent
  ],
  imports: [
    BrowserModule,
    RouterTestingModule,
    NgvBottomSheetModule.setRoutes(BOTTOM_SHEET_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
