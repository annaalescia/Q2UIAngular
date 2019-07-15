import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SideNavComponent } from './shared/components/side-nav/side-nav.component';
import { DocumentTableComponent } from './components/document-table/document-table.component';
import { UploadPdfComponent } from './components/upload-pdf/upload-pdf.component';

import { FileDropModule } from 'ngx-file-drop';
import { ProtocolDetailsComponent } from './components/protocol-details/protocol-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    DocumentTableComponent,
    UploadPdfComponent,
    ProtocolDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FileDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
